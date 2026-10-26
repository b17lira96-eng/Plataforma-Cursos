
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

// Endereços permitidos para o Front-End em produção.
// Exemplo de configuração na hospedagem:
// Frontend__Url=https://seu-frontend.exemplo.com
var frontendUrl = builder.Configuration["Frontend:Url"]?
    .TrimEnd('/');

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

                // Front-End publicado
                if (!string.IsNullOrWhiteSpace(frontendUrl)
                    && string.Equals(
                        origin.TrimEnd('/'),
                        frontendUrl,
                        StringComparison.OrdinalIgnoreCase))
                {
                    return true;
                }

                // Front-End local e na rede de desenvolvimento
                return uri.Scheme == "http"
                    && uri.Port == 5173
                    && (
                        uri.Host == "localhost"
                        || uri.Host == "127.0.0.1"
                        || uri.Host == "192.168.40.61"
                    );
            })
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Porta configurável para hospedagem.
// Localmente, mantém a porta 5035.
var port = Environment.GetEnvironmentVariable("PORT");

if (!string.IsNullOrWhiteSpace(port)
    && int.TryParse(port, out var portNumber)
    && portNumber > 0
    && portNumber <= 65535)
{
    builder.WebHost.UseUrls($"http://0.0.0.0:{portNumber}");
}
else
{
    builder.WebHost.UseUrls("http://0.0.0.0:5035");
}

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
