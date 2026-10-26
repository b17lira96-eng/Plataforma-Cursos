
using CursosApi.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

// Banco de dados SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite(
        builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS - acesso do Front-End
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy
            .SetIsOriginAllowed(origin =>
            {
                if (!Uri.TryCreate(
                    origin,
                    UriKind.Absolute,
                    out var uri))
                {
                    return false;
                }

                // Permite o Vite local e na rede de desenvolvimento.
                bool ambienteLocal =
                    uri.Scheme == "http"
                    && uri.Port == 5173
                    && (
                        uri.Host == "localhost"
                        || uri.Host == "127.0.0.1"
                        || uri.Host == "192.168.40.61"
                    );

                // Permite o Front-End publicado no Cloudflare Pages.
                bool ambienteProducao =
                    uri.Scheme == "https"
                    && uri.Host == "plataforma-cursos-4xd.pages.dev";

                return ambienteLocal || ambienteProducao;
            })
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Permitir conexões pela rede local
builder.WebHost.UseUrls("http://0.0.0.0:5035");

var app = builder.Build();

// Inicialização do banco de dados
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider
        .GetRequiredService<AppDbContext>();

    await DbInitializer.InitializeAsync(context);
}

// Swagger disponível somente em desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// CORS
app.UseCors("Frontend");

// Controllers
app.MapControllers();

app.Run();
