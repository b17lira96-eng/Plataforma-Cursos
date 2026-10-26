
import { useEffect, useRef, useState } from "react";
import type { AnimationEvent } from "react";
import type { Curso } from "../types/Curso";

interface DetalhesCursoProps {
  curso: Curso;
  onFechar: () => void;
}

export default function DetalhesCurso({
  curso,
  onFechar,
}: DetalhesCursoProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const onFecharRef = useRef(onFechar);

  const [fechando, setFechando] = useState(false);

  // Conteúdo programático
  const modulos = (curso.modulos ?? "")
    .split(";")
    .map((modulo) => modulo.trim())
    .filter(Boolean);

  // Descrição das aulas
  const aulas = (curso.descricaoAulas ?? "")
    .split(";")
    .map((aula) => aula.trim())
    .filter(Boolean);

  // Nome breve do curso
  const nomeBreve = curso.nomeBreve?.trim() || "";

  useEffect(() => {
    onFecharRef.current = onFechar;
  }, [onFechar]);

  // Solicita o fechamento com animação
  function solicitarFechamento() {
    if (!fechando) {
      setFechando(true);
    }
  }

  // Finaliza o fechamento após a animação
  function aoFinalizarAnimacao(
    event: AnimationEvent<HTMLDivElement>
  ) {
    if (
      fechando &&
      event.target === event.currentTarget
    ) {
      onFecharRef.current();
    }
  }

  // Controle do teclado, foco e rolagem
  useEffect(() => {
    const elementoAnterior = document.activeElement;
    const overflowAnterior = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    modalRef.current?.focus();

    function aoPressionarTecla(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setFechando(true);
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const elementos = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (elemento) =>
          !elemento.hasAttribute("disabled") &&
          elemento.getClientRects().length > 0
      );

      if (elementos.length === 0) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const primeiro = elementos[0];
      const ultimo = elementos[elementos.length - 1];

      if (
        event.shiftKey &&
        (document.activeElement === primeiro ||
          document.activeElement === modalRef.current)
      ) {
        event.preventDefault();
        ultimo.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === ultimo
      ) {
        event.preventDefault();
        primeiro.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === modalRef.current
      ) {
        event.preventDefault();
        primeiro.focus();
      } else if (
        !modalRef.current.contains(document.activeElement)
      ) {
        event.preventDefault();
        primeiro.focus();
      }
    }

    document.addEventListener(
      "keydown",
      aoPressionarTecla
    );

    return () => {
      document.body.style.overflow = overflowAnterior;

      document.removeEventListener(
        "keydown",
        aoPressionarTecla
      );

      if (elementoAnterior instanceof HTMLElement) {
        elementoAnterior.focus();
      }
    };
  }, []);

  // Fecha mesmo quando a animação CSS não é executada
  useEffect(() => {
    if (!fechando) return;

    const prefereMovimentoReduzido =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (prefereMovimentoReduzido) {
      onFecharRef.current();
      return;
    }

    const temporizador = window.setTimeout(() => {
      onFecharRef.current();
    }, 350);

    return () => window.clearTimeout(temporizador);
  }, [fechando]);

  return (
    <div
      className={`modal-overlay ${
        fechando ? "modal-saindo" : "modal-entrando"
      }`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          solicitarFechamento();
        }
      }}
      onAnimationEnd={aoFinalizarAnimacao}
    >
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        aria-describedby="modal-descricao"
        tabIndex={-1}
      >
        {/* Botão superior */}
        <button
          type="button"
          className="modal-fechar"
          onClick={solicitarFechamento}
          aria-label="Fechar detalhes do curso"
          disabled={fechando}
        >
          ×
        </button>

        {/* Cabeçalho */}
        <div className="modal-cabecalho">
          <span className="modal-categoria">
            {curso.categoria}
          </span>

          <h2 id="modal-titulo">
            {curso.nome}
          </h2>

          {/* Nome breve */}
          {nomeBreve &&
            nomeBreve.toLocaleLowerCase("pt-BR") !==
              curso.nome.toLocaleLowerCase("pt-BR") && (
              <p className="modal-nome-breve">
                <strong>Nome breve:</strong> {nomeBreve}
              </p>
            )}

          <p id="modal-descricao">
            {curso.descricao}
          </p>
        </div>

        {/* Informações gerais */}
        <div className="modal-conteudo">
          <div className="modal-informacoes">
            <div className="modal-info-item">
              <strong>Modalidade</strong>
              <p>{curso.modalidade}</p>
            </div>

            <div className="modal-info-item">
              <strong>Carga horária</strong>
              <p>{curso.cargaHoraria} horas</p>
            </div>

            <div className="modal-info-item">
              <strong>Status</strong>
              <p className="modal-status">
                {curso.status}
              </p>
            </div>
          </div>

          {/* Conteúdo programático */}
          <div className="modal-secao">
            <h3>Conteúdo programático</h3>

            {modulos.length > 0 ? (
              <ol className="modal-lista-modulos">
                {modulos.map((modulo, index) => (
                  <li key={index}>
                    {modulo}
                  </li>
                ))}
              </ol>
            ) : (
              <p>
                Conteúdo programático ainda não informado.
              </p>
            )}
          </div>

          {/* Descrição das aulas */}
          <div className="modal-secao">
            <h3>Descrição das aulas</h3>

            {aulas.length > 0 ? (
              <ol className="modal-lista-modulos">
                {aulas.map((aula, index) => (
                  <li key={index}>
                    {aula}
                  </li>
                ))}
              </ol>
            ) : (
              <p>
                As descrições das aulas ainda não foram
                disponibilizadas.
              </p>
            )}
          </div>

          {/* Público-alvo */}
          <div className="modal-secao">
            <h3>Público-alvo</h3>

            <p>
              {curso.publicoAlvo?.trim() ||
                "Público-alvo ainda não informado."}
            </p>
          </div>

          {/* Botão inferior */}
          <button
            type="button"
            className="modal-botao"
            onClick={solicitarFechamento}
            disabled={fechando}
          >
            Fechar detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
