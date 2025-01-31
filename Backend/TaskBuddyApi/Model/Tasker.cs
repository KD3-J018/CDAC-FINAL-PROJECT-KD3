using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace TaskBuddyApi.Model
{
    public class Tasker
    {

       


            [Key]
            public int TaskerId { get; set; }

            [Required]
            public string Name { get; set; }

            [Required]
            [EmailAddress]
            public string Email { get; set; }

            [Required]
            public string Password { get; set; }

            public string Phone { get; set; }
            public string Address { get; set; }

            // Foreign key for TaskCategory
            public int TaskCategoryId { get; set; }
            [ForeignKey("TaskCategoryId")]
            public TaskCategory TaskCategory { get; set; }

            public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
            public DateTime? UpdatedAt { get; set; } = DateTime.UtcNow;
            public bool IsDeleted { get; set; } = false;

            public ICollection<ServiceTask> Tasks { get; set; }
        }
    }


    



