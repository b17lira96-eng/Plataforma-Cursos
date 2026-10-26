
namespace CursosApi.Models;

public class Curso
{
    public int Id { get; set; }

    // Nome completo do curso
    public string Nome { get; set; } = string.Empty;

    // Nome resumido do curso
    public string NomeBreve { get; set; } = string.Empty;

    // Descrição geral
    public string Descricao { get; set; } = string.Empty;

    // Classificação
    public string Categoria { get; set; } = string.Empty;

    // Online ou Presencial
    public string Modalidade { get; set; } = string.Empty;

    // Disponível, Em breve ou Encerrado
    public string Status { get; set; } = string.Empty;

    // Duração em horas
    public int CargaHoraria { get; set; }

    // Conteúdo programático
    public string Modulos { get; set; } = string.Empty;

    // Descrições das aulas
    public string DescricaoAulas { get; set; } = string.Empty;

    // Público-alvo
    public string PublicoAlvo { get; set; } = string.Empty;

    // Imagem de apresentação
    public string ImagemUrl { get; set; } = string.Empty;

    // Data de disponibilização
    public DateTime DataDisponibilizacao { get; set; }
}
