
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CursosApi.Migrations
{
    public partial class PreencherInformacoesDosCursos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("""
                UPDATE "Cursos"
                SET
                    "NomeBreve" = 'Fundamentos .NET',
                    "DescricaoAulas" = 'Introdução ao .NET e ao C#; Programação orientada a objetos; Desenvolvimento de APIs REST com ASP.NET Core; Integração com bancos de dados; Autenticação e testes; Publicação de aplicações.'
                WHERE "Id" = 9;

                UPDATE "Cursos"
                SET
                    "NomeBreve" = 'React Avançado',
                    "DescricaoAulas" = 'Revisão de componentes e Hooks; Desenvolvimento com TypeScript; Gerenciamento de estado; Consumo de APIs REST; Roteamento e formulários; Otimização de desempenho e testes.'
                WHERE "Id" = 10;

                UPDATE "Cursos"
                SET
                    "NomeBreve" = 'Power BI',
                    "DescricaoAulas" = 'Fundamentos de Business Intelligence; Importação e transformação de dados com Power Query; Modelagem de dados; Criação de medidas com DAX; Construção de dashboards; Análise e apresentação de indicadores.'
                WHERE "Id" = 11;

                UPDATE "Cursos"
                SET
                    "NomeBreve" = 'Gestão Ágil',
                    "DescricaoAulas" = 'Fundamentos das metodologias ágeis; Introdução ao Scrum; Planejamento de Sprints; Gestão de tarefas com Kanban; Colaboração entre equipes; Indicadores de desempenho e melhoria contínua.'
                WHERE "Id" = 12;

                UPDATE "Cursos"
                SET
                    "NomeBreve" = 'Metrologia',
                    "DescricaoAulas" = 'Fundamentos da metrologia industrial; Sistema Internacional de Unidades; Instrumentos de medição; Utilização de paquímetros e micrômetros; Tolerâncias dimensionais; Calibração e controle de qualidade.'
                WHERE "Id" = 13;

                UPDATE "Cursos"
                SET
                    "NomeBreve" = 'Segurança de Redes',
                    "DescricaoAulas" = 'Fundamentos de redes industriais; Identificação de ameaças e vulnerabilidades; Segurança em sistemas SCADA; Configuração de firewalls; Monitoramento de incidentes; Políticas de segurança e boas práticas.'
                WHERE "Id" = 14;
                """);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("""
                UPDATE "Cursos"
                SET
                    "NomeBreve" = '',
                    "DescricaoAulas" = ''
                WHERE "Id" IN (9, 10, 11, 12, 13, 14);
                """);
        }
    }
}
