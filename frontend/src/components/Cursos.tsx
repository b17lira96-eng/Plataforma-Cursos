
import { useEffect, useState } from "react";
import api from "../services/api";
import type { Curso } from "../types/Curso";
import DetalhesCurso from "./DetalhesCurso";

type Ordenacao =
  | "nome-asc"
  | "nome-desc"
  | "carga-asc"
  | "carga-desc"
  | "data-desc"
  | "data-asc";

export default function Cursos() {
  // Dados recebidos da API
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [tentativa, setTentativa] = useState(0);

  // Pesquisa e filtros
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [status, setStatus] = useState("");

  // Ordenação
  const [ordenacao, setOrdenacao] =
    useState<Ordenacao>("nome-asc");

  // Modal de detalhes
  const [cursoSelecionado, setCursoSelecionado] =
    useState<Curso | null>(null);

  // Carregamento dos cursos
  useEffect(() => {
    const controller = new AbortController();

    async function buscarCursos() {
      try {
        setCarregando(true);
        setErro("");

        const resposta = await api.get<Curso[]>(
          "/Cursos",
          {
            signal: controller.signal,
          }
        );

        if (controller.signal.aborted) return;

        if (!Array.isArray(resposta.data)) {
          throw new Error(
            "Formato de resposta inválido."
          );
        }

        setCursos(resposta.data);
      } catch (error) {
        if (controller.signal.aborted) return;

        console.error(
          "Erro ao buscar cursos:",
          error
        );

        setCursos([]);
        setErro(
          "Não foi possível carregar os cursos. Tente novamente."
        );
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    buscarCursos();

    return () => controller.abort();
  }, [tentativa]);

  // Categorias disponíveis
  const categorias = [
    ...new Set(
      cursos
        .map((curso) => curso.categoria)
        .filter(Boolean)
    ),
  ].sort((a, b) => a.localeCompare(b, "pt-BR"));

  // Modalidades disponíveis
  const modalidades = [
    ...new Set(
      cursos
        .map((curso) => curso.modalidade)
        .filter(Boolean)
    ),
  ].sort((a, b) => a.localeCompare(b, "pt-BR"));

  // Status disponíveis
  const statusDisponiveis = [
    ...new Set(
      cursos
        .map((curso) => curso.status)
        .filter(Boolean)
    ),
  ].sort((a, b) => a.localeCompare(b, "pt-BR"));

  // Pesquisa combinada com todos os filtros
  const cursosFiltrados = cursos.filter((curso) => {
    const correspondePesquisa = curso.nome
      .toLocaleLowerCase("pt-BR")
      .includes(
        pesquisa
          .trim()
          .toLocaleLowerCase("pt-BR")
      );

    const correspondeCategoria =
      !categoria || curso.categoria === categoria;

    const correspondeModalidade =
      !modalidade || curso.modalidade === modalidade;

    const correspondeStatus =
      !status || curso.status === status;

    return (
      correspondePesquisa &&
      correspondeCategoria &&
      correspondeModalidade &&
      correspondeStatus
    );
  });

  // Ordenação
  const cursosOrdenados = [
    ...cursosFiltrados,
  ].sort((a, b) => {
    switch (ordenacao) {
      case "nome-asc":
        return a.nome.localeCompare(
          b.nome,
          "pt-BR"
        );

      case "nome-desc":
        return b.nome.localeCompare(
          a.nome,
          "pt-BR"
        );

      case "carga-asc":
        return a.cargaHoraria - b.cargaHoraria;

      case "carga-desc":
        return b.cargaHoraria - a.cargaHoraria;

      case "data-desc":
      case "data-asc": {
        const dataA = a.dataDisponibilizacao
          ? new Date(
              a.dataDisponibilizacao
            ).getTime()
          : 0;

        const dataB = b.dataDisponibilizacao
          ? new Date(
              b.dataDisponibilizacao
            ).getTime()
          : 0;

        const valorA = Number.isNaN(dataA)
          ? 0
          : dataA;

        const valorB = Number.isNaN(dataB)
          ? 0
          : dataB;

        return ordenacao === "data-desc"
          ? valorB - valorA
          : valorA - valorB;
      }

      default:
        return 0;
    }
  });

  // Identifica filtros ativos
  const filtrosAtivos = Boolean(
    pesquisa ||
    categoria ||
    modalidade ||
    status ||
    ordenacao !== "nome-asc"
  );

  // Limpa todos os filtros e a ordenação
  function limparFiltros() {
    setPesquisa("");
    setCategoria("");
    setModalidade("");
    setStatus("");
    setOrdenacao("nome-asc");
  }

  // Nova tentativa de carregar os cursos
  function tentarNovamente() {
    setTentativa((anterior) => anterior + 1);
  }

  // Caminho das imagens
  function obterImagem(curso: Curso): string {
    if (!curso.imagemUrl) {
      return "/images/hero-image.png";
    }

    if (
      curso.imagemUrl.startsWith("http://") ||
      curso.imagemUrl.startsWith("https://")
    ) {
      return curso.imagemUrl;
    }

    const caminho = curso.imagemUrl
      .replace(/^\/+/, "")
      .replace(/^images\//, "");

    return `/images/${caminho}`;
  }

  return (
    <section className="cursos" id="cursos">
      <div className="container">
        <h2>Principais cursos</h2>

        <p>
          Explore nossos cursos e desenvolva
          novas habilidades profissionais.
        </p>

        {/* Pesquisa e filtros */}
        <div className="filtros-cursos">
          <div className="campo-pesquisa">
            <label htmlFor="pesquisa">
              Pesquisar cursos
            </label>

            <input
              id="pesquisa"
              type="search"
              placeholder="Digite o nome do curso..."
              value={pesquisa}
              onChange={(event) =>
                setPesquisa(event.target.value)
              }
            />
          </div>

          <div className="campo-filtro">
            <label htmlFor="categoria">
              Categoria
            </label>

            <select
              id="categoria"
              value={categoria}
              onChange={(event) =>
                setCategoria(event.target.value)
              }
            >
              <option value="">
                Todas as categorias
              </option>

              {categorias.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="campo-filtro">
            <label htmlFor="modalidade">
              Modalidade
            </label>

            <select
              id="modalidade"
              value={modalidade}
              onChange={(event) =>
                setModalidade(event.target.value)
              }
            >
              <option value="">
                Todas as modalidades
              </option>

              {modalidades.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Novo filtro obrigatório */}
          <div className="campo-filtro">
            <label htmlFor="status">
              Status
            </label>

            <select
              id="status"
              value={status}
              onChange={(event) =>
                setStatus(event.target.value)
              }
            >
              <option value="">
                Todos os status
              </option>

              {statusDisponiveis.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quantidade, ordenação e limpeza */}
        <div className="ordenacao-cursos">
          <p aria-live="polite">
            {!carregando && !erro
              ? `${cursosOrdenados.length} curso(s) encontrado(s).`
              : ""}
          </p>

          <div className="campo-ordenacao">
            <label htmlFor="ordenacao">
              Ordenar por
            </label>

            <select
              id="ordenacao"
              value={ordenacao}
              onChange={(event) =>
                setOrdenacao(
                  event.target.value as Ordenacao
                )
              }
            >
              <option value="nome-asc">
                Nome (A–Z)
              </option>

              <option value="nome-desc">
                Nome (Z–A)
              </option>

              <option value="carga-asc">
                Menor carga horária
              </option>

              <option value="carga-desc">
                Maior carga horária
              </option>

              <option value="data-desc">
                Mais recentes
              </option>

              <option value="data-asc">
                Mais antigos
              </option>
            </select>
          </div>

          <button
            type="button"
            className="limpar-filtros"
            onClick={limparFiltros}
            disabled={!filtrosAtivos}
            aria-label="Limpar todos os filtros"
          >
            Limpar filtros
          </button>
        </div>

        {/* Estado de carregamento */}
        {carregando && (
          <p role="status" aria-live="polite">
            Carregando cursos...
          </p>
        )}

        {/* Estado de erro */}
        {!carregando && erro && (
          <div role="alert">
            <p>{erro}</p>

            <button
              type="button"
              onClick={tentarNovamente}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Resultados */}
        {!carregando && !erro && (
          <>
            {cursosOrdenados.length === 0 && (
              <p role="status">
                Nenhum curso encontrado.
                Tente alterar ou limpar os filtros.
              </p>
            )}

            <div className="cursos-grid">
              {cursosOrdenados.map((curso) => (
                <button
                  type="button"
                  className="curso-card"
                  key={curso.id}
                  onClick={() =>
                    setCursoSelecionado(curso)
                  }
                  aria-label={`Ver detalhes do curso ${curso.nome}`}
                >
                  {/* Imagem */}
                  <div className="curso-imagem">
                    <img
                      src={obterImagem(curso)}
                      alt={`Imagem ilustrativa do curso ${curso.nome}`}
                      loading="lazy"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="curso-card-conteudo">
                    <span className="curso-categoria">
                      {curso.categoria}
                    </span>

                    <h3>{curso.nome}</h3>

                    <p>{curso.descricao}</p>

                    {/* Metadados */}
                    <div className="curso-metadados">
                      <span className="curso-modalidade">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                          />
                          <path d="M8 21h8" />
                          <path d="M12 17v4" />
                        </svg>

                        {curso.modalidade}
                      </span>

                      <span className="curso-carga">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                          />
                          <path d="M12 6v6l4 2" />
                        </svg>

                        {curso.cargaHoraria} horas
                      </span>
                    </div>

                    {/* Indicação visual */}
                    <span className="curso-ver-detalhes">
                      Ver detalhes
                      <span aria-hidden="true">
                        →
                      </span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modal preservado */}
      {cursoSelecionado && (
        <DetalhesCurso
          curso={cursoSelecionado}
          onFechar={() =>
            setCursoSelecionado(null)
          }
        />
      )}
    </section>
  );
}
