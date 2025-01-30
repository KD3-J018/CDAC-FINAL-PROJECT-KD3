using System.ComponentModel.DataAnnotations;


namespace TaskBuddyApi.Model
{
    public class Tasker
    {


            [Key] // Indicates that 'Id' is the primary key
            public int Id { get; set; }

            [Required] // Marks 'Name' as a required field
            public string Name { get; set; }

            [Required]
            [EmailAddress] // Validates the email format
            public string Email { get; set; }

            [Required]
            public string Password { get; set; }

            public string Phone { get; set; }
            public string Address { get; set; }
            public string Category { get; set; }
            public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        }
    }



