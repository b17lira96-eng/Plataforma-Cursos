
using CursosApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CursosApi.Data;

public static class DbInitializer
{
    public static async Task InitializeAsync(
        AppDbContext context)
    {
        // Aplica as migrações pendentes.
        await context.Database.MigrateAsync();

        // Não altera bancos que já possuem cursos.
        if (await context.Cursos.AnyAsync())
        {
            return;
        }

        var data = new DateTime(2026, 10, 24);

        var cursos = new List<Curso>
        {
            new()
            {
                Id = 9,
                Nome = "Fundamentos de .NET",
                NomeBreve = "Fundamentos .NET",
                Descricao = "Desenvolvimento de APIs e aplicações web com .NET.",
                Categoria = "Tecnologia",
                Modalidade = "Online",
                Status = "Disponível",
                CargaHoraria = 40,
                Modulos = "Introdução ao .NET e ao C#; Programação orientada a objetos; Desenvolvimento de APIs REST com ASP.NET Core; Entity Framework Core e bancos de dados; Autenticação, testes e publicação de aplicações.",
                DescricaoAulas = "Introdução ao .NET e ao C#; Programação orientada a objetos; Desenvolvimento de APIs REST com ASP.NET Core; Integração com bancos de dados; Autenticação e testes; Publicação de aplicações.",
                PublicoAlvo = "Estudantes de tecnologia, desenvolvedores iniciantes e profissionais interessados em desenvolvimento Back-End com .NET.",
                ImagemUrl = "dotnet.jpg",
                DataDisponibilizacao = data
            },
            new()
            {
                Id = 10,
                Nome = "React Avançado",
                NomeBreve = "React Avançado",
                Descricao = "Construção de interfaces modernas utilizando React.",
                Categoria = "Tecnologia",
                Modalidade = "Online",
                Status = "Disponível",
                CargaHoraria = 30,
                Modulos = "Revisão de componentes e Hooks; TypeScript com React; Gerenciamento de estado; Consumo de APIs REST; Roteamento e formulários; Otimização de desempenho, testes e publicação.",
                DescricaoAulas = "Revisão de componentes e Hooks; Desenvolvimento com TypeScript; Gerenciamento de estado; Consumo de APIs REST; Roteamento e formulários; Otimização de desempenho e testes.",
                PublicoAlvo = "Desenvolvedores Front-End e estudantes com conhecimentos básicos de JavaScript e React que desejam aprofundar suas habilidades.",
                ImagemUrl = "react.jpg",
                DataDisponibilizacao = data
            },
            new()
            {
                Id = 11,
                Nome = "Power BI para Negócios",
                NomeBreve = "Power BI",
                Descricao = "Criação de dashboards e análise de indicadores.",
                Categoria = "Gestao",
                Modalidade = "Online",
                Status = "Disponível",
                CargaHoraria = 20,
                Modulos = "Introdução ao Business Intelligence; Importação e tratamento de dados com Power Query; Modelagem de dados e relacionamentos; Criação de medidas com DAX; Desenvolvimento de dashboards interativos; Análise de indicadores de desempenho e publicação de relatórios.",
                DescricaoAulas = "Fundamentos de Business Intelligence; Importação e transformação de dados com Power Query; Modelagem de dados; Criação de medidas com DAX; Construção de dashboards; Análise e apresentação de indicadores.",
                PublicoAlvo = "Profissionais de gestão, administração, finanças, analistas de dados, estudantes e pessoas interessadas em análise de informações e tomada de decisões estratégicas.",
                ImagemUrl = "powerbi.jpg",
                DataDisponibilizacao = data
            },
            new()
            {
                Id = 12,
                Nome = "Gestão Ágil de Projetos",
                NomeBreve = "Gestão Ágil",
                Descricao = "Scrum, Kanban e gestão colaborativa.",
                Categoria = "Gestao",
                Modalidade = "Online",
                Status = "Em breve",
                CargaHoraria = 24,
                Modulos = "Fundamentos da gestão ágil de projetos; Introdução ao Manifesto Ágil; Metodologia Scrum e seus papéis; Planejamento de Sprints e Product Backlog; Utilização do Kanban para gestão de tarefas; Ferramentas de colaboração e acompanhamento de projetos; Indicadores de desempenho e melhoria contínua.",
                DescricaoAulas = "Fundamentos das metodologias ágeis; Introdução ao Scrum; Planejamento de Sprints; Gestão de tarefas com Kanban; Colaboração entre equipes; Indicadores de desempenho e melhoria contínua.",
                PublicoAlvo = "Estudantes, gestores de projetos, líderes de equipes, profissionais de tecnologia, administradores e pessoas interessadas em metodologias ágeis e gestão colaborativa.",
                ImagemUrl = "gestao-agil.jpg",
                DataDisponibilizacao = data
            },
            new()
            {
                Id = 13,
                Nome = "Metrologia Industrial",
                NomeBreve = "Metrologia",
                Descricao = "Controle dimensional e qualidade de processos.",
                Categoria = "Industria",
                Modalidade = "Presencial",
                Status = "Em breve",
                CargaHoraria = 40,
                Modulos = "Introdução à metrologia industrial; Sistema Internacional de Unidades; Instrumentos de medição e suas aplicações; Utilização de paquímetros e micrômetros; Tolerâncias dimensionais e geométricas; Calibração e rastreabilidade de instrumentos; Controle de qualidade e análise de medições; Boas práticas de medição em ambientes industriais.",
                DescricaoAulas = "Fundamentos da metrologia industrial; Sistema Internacional de Unidades; Instrumentos de medição; Utilização de paquímetros e micrômetros; Tolerâncias dimensionais; Calibração e controle de qualidade.",
                PublicoAlvo = "Profissionais da indústria, técnicos em mecânica, operadores de máquinas, inspetores de qualidade, estudantes de cursos técnicos e profissionais interessados em controle dimensional e processos industriais.",
                ImagemUrl = "metrologia.jpg",
                DataDisponibilizacao = data
            },
            new()
            {
                Id = 14,
                Nome = "Segurança de Redes Industriais",
                NomeBreve = "Segurança de Redes",
                Descricao = "Proteção de infraestrutura e redes corporativas.",
                Categoria = "Tecnologia",
                Modalidade = "Online",
                Status = "Encerrado",
                CargaHoraria = 50,
                Modulos = "Fundamentos de redes industriais e segurança da informação; Arquiteturas de redes e protocolos industriais; Identificação de ameaças e vulnerabilidades; Segurança em sistemas SCADA e ambientes de automação; Configuração de firewalls e segmentação de redes; Monitoramento e detecção de incidentes; Políticas de segurança e controle de acesso; Boas práticas de proteção de infraestrutura industrial; Introdução à norma IEC 62443.",
                DescricaoAulas = "Fundamentos de redes industriais; Identificação de ameaças e vulnerabilidades; Segurança em sistemas SCADA; Configuração de firewalls; Monitoramento de incidentes; Políticas de segurança e boas práticas.",
                PublicoAlvo = "Profissionais de tecnologia da informação, analistas de redes, técnicos em automação industrial, engenheiros, estudantes de tecnologia e profissionais interessados em segurança cibernética aplicada a ambientes industriais.",
                ImagemUrl = "seguranca-redes.jpg",
                DataDisponibilizacao = data
            }
        };

        await context.Cursos.AddRangeAsync(cursos);
        await context.SaveChangesAsync();
    }
}
