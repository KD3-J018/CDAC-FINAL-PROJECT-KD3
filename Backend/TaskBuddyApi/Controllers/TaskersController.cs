using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskBuddyApi.Data;
using TaskBuddyApi.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskBuddyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskerController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public TaskerController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTasker([FromBody] Tasker tasker)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Attach TaskCategoryId without requiring TaskCategory object
            var category = await _context.TaskCategories.FindAsync(tasker.TaskCategoryId);
            if (category == null)
            {
                return BadRequest(new { message = "Invalid TaskCategoryId." });
            }

            tasker.TaskCategory = category;

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
    }
}
