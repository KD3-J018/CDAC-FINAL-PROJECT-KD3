using Microsoft.EntityFrameworkCore;
using TaskBuddyApi.Model;

namespace TaskBuddyApi.Data
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options):base(options) { 
        }

        public DbSet<Tasker> Taskers { get; set; }
    }
}
