
using CursosApi.Data;
using CursosApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CursosApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CursosController : ControllerBase
{
    private readonly AppDbContext _context;

    public CursosController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/Cursos
    // Listar cursos com filtros opcionais
    [HttpGet]
    public async Task<IActionResult> Get(
        string? nome,
        string? categoria,
        string? modalidade,
        string? status)
    {
        var query = _context.Cursos
            .AsNoTracking()
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(nome))
        {
            query = query.Where(c =>
                c.Nome.Contains(nome));
        }

        if (!string.IsNullOrWhiteSpace(categoria))
        {
            query = query.Where(c =>
                c.Categoria == categoria);
        }

        if (!string.IsNullOrWhiteSpace(modalidade))
        {
            query = query.Where(c =>
                c.Modalidade == modalidade);
        }

        if (!string.IsNullOrWhiteSpace(status))
        {
            query = query.Where(c =>
                c.Status == status);
        }

        var cursos = await query.ToListAsync();

        return Ok(cursos);
    }

    // GET: api/Cursos/9
    // Buscar curso pelo ID
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var curso = await _context.Cursos
            .AsNoTracking()
            .FirstOrDefaultAsync(c => c.Id == id);

        if (curso == null)
        {
            return NotFound(
                new { mensagem = "Curso não encontrado." }
            );
        }

        return Ok(curso);
    }

    // POST: api/Cursos
    // Cadastrar um novo curso
    [HttpPost]
    public async Task<IActionResult> Post(
        [FromBody] Curso curso)
    {
        if (curso == null)
        {
            return BadRequest(
                new { mensagem = "Dados inválidos." }
            );
        }

        _context.Cursos.Add(curso);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetById),
            new { id = curso.Id },
            curso
        );
    }

    // PUT: api/Cursos/9
    // Atualizar informações de um curso
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(
        int id,
        [FromBody] Curso cursoAtualizado)
    {
        if (cursoAtualizado == null)
        {
            return BadRequest(
                new { mensagem = "Dados inválidos." }
            );
        }

        var curso = await _context.Cursos
            .FirstOrDefaultAsync(c => c.Id == id);

        if (curso == null)
        {
            return NotFound(
                new { mensagem = "Curso não encontrado." }
            );
        }

        // Identificação
        curso.Nome = cursoAtualizado.Nome;
        curso.NomeBreve = cursoAtualizado.NomeBreve;

        // Descrição geral
        curso.Descricao = cursoAtualizado.Descricao;

        // Classificação
        curso.Categoria = cursoAtualizado.Categoria;
        curso.Modalidade = cursoAtualizado.Modalidade;
        curso.Status = cursoAtualizado.Status;

        // Carga horária
        curso.CargaHoraria = cursoAtualizado.CargaHoraria;

        // Conteúdo educacional
        curso.Modulos = cursoAtualizado.Modulos;
        curso.DescricaoAulas = cursoAtualizado.DescricaoAulas;

        // Público-alvo
        curso.PublicoAlvo = cursoAtualizado.PublicoAlvo;

        // Imagem e disponibilização
        curso.ImagemUrl = cursoAtualizado.ImagemUrl;
        curso.DataDisponibilizacao =
            cursoAtualizado.DataDisponibilizacao;

        await _context.SaveChangesAsync();

        return Ok(curso);
    }

    // DELETE: api/Cursos/9
    // Excluir curso pelo ID
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var curso = await _context.Cursos
            .FirstOrDefaultAsync(c => c.Id == id);

        if (curso == null)
        {
            return NotFound(
                new { mensagem = "Curso não encontrado." }
            );
        }

        _context.Cursos.Remove(curso);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}
