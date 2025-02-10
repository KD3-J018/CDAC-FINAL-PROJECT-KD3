using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskBuddyApi.Data;
using TaskBuddyApi.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BCrypt.Net;
using TaskBuddyApi.Model;
using TaskStatus = TaskBuddyApi.Model.TaskStatus;


namespace TaskBuddyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskerController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        private readonly IConfiguration _configuration; 

        public TaskerController(ApplicationDBContext context , IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration; 
        }



        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            // Validate request
            if (string.IsNullOrEmpty(loginRequest.Email) || string.IsNullOrEmpty(loginRequest.Password))
            {
                return BadRequest(new { message = "Email and Password are required." });
            }

            // Check if tasker exists
            var tasker = await _context.Taskers.FirstOrDefaultAsync(t => t.Email == loginRequest.Email);

            if (tasker == null)
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }

            // Verify password (assuming you store hashed passwords)
            if (!BCrypt.Net.BCrypt.Verify(loginRequest.Password, tasker.PasswordHash))
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }

            // Generate JWT Token
            var token = GenerateJwtToken(tasker);

            return Ok(new
            {
                token = token,
                taskerId = tasker.TaskerId,
                fullName = tasker.FullName,
                email = tasker.Email
            });
        }

        private string GenerateJwtToken(Tasker tasker)
        {
            // Read JWT settings from appsettings.json
            var jwtKey = _configuration["Jwt:Key"];
            var jwtIssuer = _configuration["Jwt:Issuer"];
            var jwtAudience = _configuration["Jwt:Audience"];

            // Generate token
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
        new Claim(JwtRegisteredClaimNames.Sub, tasker.Email),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        new Claim("TaskerId", tasker.TaskerId.ToString())
    };

            var token = new JwtSecurityToken(
                issuer: jwtIssuer,
                audience: jwtAudience,
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }







        //[HttpPost]
        //public async Task<IActionResult> CreateTasker([FromBody] Tasker tasker)
        //{
        //    if (!ModelState.IsValid)
        //        return BadRequest(ModelState);

        //    // Attach TaskCategoryId without requiring TaskCategory object
        //    var category = await _context.TaskCategories.FindAsync(tasker.TaskCategoryId);
        //    if (category == null)
        //    {
        //        return BadRequest(new { message = "Invalid TaskCategoryId." });
        //    }

        //    tasker.TaskCategory = category;

        //    _context.Taskers.Add(tasker);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction(nameof(GetTaskerById), new { id = tasker.TaskerId }, tasker);
        //}

        [HttpPost]
        public async Task<IActionResult> CreateTasker([FromBody] Tasker tasker)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Check if the email is already registered
            var existingTasker = await _context.Taskers.FirstOrDefaultAsync(t => t.Email == tasker.Email);
            if (existingTasker != null)
            {
                return Conflict(new { message = "Tasker with this email already exists." });
            }

            // Validate TaskCategoryId
            var category = await _context.TaskCategories.FindAsync(tasker.TaskCategoryId);
            if (category == null)
            {
                return BadRequest(new { message = "Invalid TaskCategoryId." });
            }

            // Hash the password using BCrypt.Net
            tasker.PasswordHash = BCrypt.Net.BCrypt.HashPassword(tasker.PasswordHash);

            // Attach TaskCategory and set other properties
            tasker.TaskCategory = category;

            // Add Tasker to the database
            _context.Taskers.Add(tasker);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTaskerById), new { id = tasker.TaskerId }, tasker);
        }

        // READ All Taskers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tasker>>> GetAllTaskers()
        {
            return await _context.Taskers
                .Where(t => !t.IsDeleted) // Exclude deleted records
                .Include(t => t.TaskCategory) // Include category details
                .ToListAsync();
        }

        // READ Tasker by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Tasker>> GetTaskerById(int id)
        {
            var tasker = await _context.Taskers
                .Include(t => t.TaskCategory)
                .FirstOrDefaultAsync(t => t.TaskerId == id && !t.IsDeleted);

            if (tasker == null)
                return NotFound("Tasker not found.");

            return Ok(tasker);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTasker(int id, Tasker updatedTasker)
        {
            if (id != updatedTasker.TaskerId)
            {
                return BadRequest("Tasker ID mismatch.");
            }

            // Check if TaskCategory exists
            var categoryExists = await _context.TaskCategories
                .AnyAsync(tc => tc.TaskCategoryId == updatedTasker.TaskCategoryId);

            if (!categoryExists)
            {
                return BadRequest("TaskCategoryId does not exist.");
            }

            _context.Entry(updatedTasker).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                return BadRequest($"Error updating tasker: {ex.Message}");
            }

            return NoContent();
        }


        // SOFT DELETE Tasker
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTasker(int id)
        {
            var tasker = await _context.Taskers.FindAsync(id);
            if (tasker == null || tasker.IsDeleted)
                return NotFound("Tasker not found.");

            tasker.IsDeleted = true;
            tasker.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return Ok("Tasker deleted successfully.");
        }



        [HttpGet("stats/{taskerId}")]
        public async Task<IActionResult> GetTaskerStats(int taskerId)
        {
            try
            {
                // Check if the Tasker exists
                var taskerExists = await _context.Taskers
                    .AnyAsync(tasker => tasker.TaskerId == taskerId && !tasker.IsDeleted);

                if (!taskerExists)
                {
                    return NotFound(new { Message = $"Tasker with ID {taskerId} does not exist or has been deleted." });
                }

                // Fetch task statistics from the database
                var totalTasksCompleted = await _context.ServiceTasks
                    .Where(task => task.TaskerId == taskerId && task.Status == TaskStatus.Completed && !task.IsDeleted)
                    .CountAsync();

                var pendingRequests = await _context.ServiceTasks
                    .Where(task => task.TaskerId == taskerId && task.Status == TaskStatus.Pending && !task.IsDeleted)
                    .CountAsync();

                var pendingTasks = await _context.ServiceTasks
                    .Where(task => task.TaskerId == taskerId && task.Status == TaskStatus.InProgress && !task.IsDeleted)
                    .CountAsync();

                var earningsPerMonth = await _context.ServiceTasks
                    .Where(task => task.TaskerId == taskerId && task.Status == TaskStatus.Completed && !task.IsDeleted)
                    .SumAsync(task => task.Tasker.HourlyRate); // Assuming one task equals one hour

                // Return the statistics as a JSON response
                return Ok(new
                {
                    TotalTasksCompleted = totalTasksCompleted,
                    PendingRequests = pendingRequests,
                    PendingTasks = pendingTasks,
                    EarningsPerMonth = earningsPerMonth
                });
            }
            catch (Exception ex)
            {
                // Handle exceptions
                return StatusCode(500, new { Message = "An error occurred while fetching statistics.", Error = ex.Message });
            }
        }




        ////////////////////////////////////////////////////////////////////
        [HttpGet("{taskerId}/active-tasks")]
        public async Task<IActionResult> GetActiveTasks(int taskerId)
        {
            try
            {
                var activeTasks = await _context.ServiceTasks
                    .Where(task => task.TaskerId == taskerId && task.Status == TaskStatus.InProgress && !task.IsDeleted)
                    .Include(task => task.Customer) // Include Customer details if needed
                    .ToListAsync();

                return Ok(activeTasks.Select(task => new
                {
                    task.TaskId,
                    TaskTitle = task.TaskTitle,
                    TaskDescription = task.TaskDescription,
                    CustomerName = task.Customer.Name, // Assuming Customer has a FullName property
                    Address = task.Customer.Address, // Assuming Customer has an Address property
                    Status = task.Status.ToString(),
                    StartDate = task.CreatedAt.ToString("yyyy-MM-dd")
                }));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "An error occurred.", Error = ex.Message });
            }
        }

        ///////////////////////////////completed tasks////////////////////////////////
        ///


        [HttpGet("{taskerId}/completed-tasks")]
        public async Task<IActionResult> GetCompletedTasks(int taskerId)
        {
            try
            {
                // Fetch completed tasks for the given TaskerId
                var completedTasks = await _context.ServiceTasks
                    .Where(task => task.TaskerId == taskerId && task.Status == TaskStatus.Completed && !task.IsDeleted)
                    .Include(task => task.Customer) // Include Customer details
                    .ToListAsync();

                // Return data in a specific format
                return Ok(completedTasks.Select(task => new
                {
                    task.TaskId,
                    TaskTitle = task.TaskTitle,
                    TaskDescription = task.TaskDescription,
                    CustomerName = task.Customer.Name, // Assuming Customer has a Name property
                    Address = task.Customer.Address, // Assuming Customer has an Address property
                    Status = task.Status.ToString(),
                    CompletionDate = task.CreatedAt.ToString("yyyy-MM-dd") // Assuming UpdatedAt represents completion date
                }));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "An error occurred.", Error = ex.Message });
            }
        }









    }
}
