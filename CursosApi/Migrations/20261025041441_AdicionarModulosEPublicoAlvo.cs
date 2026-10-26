using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CursosApi.Migrations
{
    /// <inheritdoc />
    public partial class AdicionarModulosEPublicoAlvo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Modulos",
                table: "Cursos",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PublicoAlvo",
                table: "Cursos",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Modulos",
                table: "Cursos");

            migrationBuilder.DropColumn(
                name: "PublicoAlvo",
                table: "Cursos");
        }
    }
}
