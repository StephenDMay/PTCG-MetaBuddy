using Microsoft.EntityFrameworkCore;
using PTCGMetaBuddy.Api.Models;

namespace PTCGMetaBuddy.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Card> Cards { get; set; }
    public DbSet<Set> Sets { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Card entity
        modelBuilder.Entity<Card>(entity =>
        {
            entity.HasKey(c => c.Id);
            entity.Property(c => c.Id).ValueGeneratedNever(); // Assuming Id is provided, not auto-generated
            entity.Property(c => c.Name).IsRequired();
            entity.Property(c => c.Supertype).IsRequired();
            entity.Property(c => c.SetId).IsRequired();
            entity.Property(c => c.SetNumber).IsRequired();
            entity.Property(c => c.ImageSmallUrl).IsRequired();
            entity.Property(c => c.ImageLargeUrl).IsRequired();
            entity.Property(c => c.CreatedAt).HasDefaultValueSql("NOW()"); // For PostgreSQL
            entity.Property(c => c.UpdatedAt).HasDefaultValueSql("NOW()"); // For PostgreSQL

            // Configure relationship with Set
            entity.HasOne<Set>()
                  .WithMany()
                  .HasForeignKey(c => c.SetId)
                  .IsRequired();
        });

        // Configure Set entity
        modelBuilder.Entity<Set>(entity =>
        {
            entity.HasKey(s => s.Id);
            entity.Property(s => s.Id).ValueGeneratedNever(); // Assuming Id is provided, not auto-generated
            entity.Property(s => s.Name).IsRequired();
            entity.Property(s => s.Series).IsRequired();
            entity.Property(s => s.PrintedTotal).IsRequired();
            entity.Property(s => s.Total).IsRequired();
            entity.Property(s => s.Code).IsRequired();
            entity.Property(s => s.ReleaseDate).IsRequired();
            entity.Property(s => s.LogoUrl).IsRequired();
            entity.Property(s => s.SymbolUrl).IsRequired();
            entity.Property(s => s.IsLegal).IsRequired();
        });
    }
}
