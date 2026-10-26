using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CursosApi.Migrations
{
    /// <inheritdoc />
    public partial class AdicionarNomeBreveEDescricaoAulas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DescricaoAulas",
                table: "Cursos",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NomeBreve",
                table: "Cursos",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DescricaoAulas",
                table: "Cursos");

            migrationBuilder.DropColumn(
                name: "NomeBreve",
                table: "Cursos");
        }
    }
}
