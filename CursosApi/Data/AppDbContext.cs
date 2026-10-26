using Microsoft.EntityFrameworkCore;
using CursosApi.Models;

namespace CursosApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Curso> Cursos => Set<Curso>();
}