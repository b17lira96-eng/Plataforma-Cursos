
import { useState } from "react";

import Cursos from "./components/Cursos";
import AreaAluno from "./components/AreaAluno";

import "./App.css";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Alterna o menu mobile
  function alternarMenu() {
    setMenuAberto((estadoAnterior) => !estadoAnterior);
  }

  // Fecha o menu ao selecionar uma opção
  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <>
      {/* Cabeçalho */}
      <header className="header">
        <div className="container header-content">
          {/* Logo */}
          <a
            href="#inicio"
            className="logo"
            onClick={fecharMenu}
          >
            SESI + INDÚSTRIA
          </a>

          {/* Botão do menu mobile */}
          <button
            type="button"
            className={`menu-toggle ${
              menuAberto ? "ativo" : ""
            }`}
            onClick={alternarMenu}
            aria-label={
              menuAberto
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
            }
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navegação principal */}
          <nav
            id="menu-principal"
            className={`nav-principal ${
              menuAberto ? "nav-aberta" : ""
            }`}
            aria-label="Navegação principal"
          >
            <a href="#inicio" onClick={fecharMenu}>
              Início
            </a>

            <a href="#cursos" onClick={fecharMenu}>
              Cursos
            </a>

            <a href="#sobre" onClick={fecharMenu}>
              Sobre
            </a>

            <a
              href="#aluno"
              className="area-aluno"
              onClick={fecharMenu}
            >
              Área do aluno
            </a>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main>
        {/* Banner principal */}
        <section id="inicio" className="hero">
          <div className="container hero-content">
            <h1>
              Impulsione sua carreira na indústria
            </h1>

            <p>
              Amplie seus conhecimentos com excelência
              na melhor plataforma de estudos da
              indústria brasileira.
            </p>

            <a href="#cursos" className="btn">
              Conhecer cursos →
            </a>
          </div>
        </section>

        {/* Cursos carregados da API */}
        <Cursos />

        {/* Seção sobre */}
        <section
          id="sobre"
          className="container sobre"
        >
          <h2>Impacto transformador</h2>

          <p>
            Capacitação e conhecimento para
            profissionais da indústria.
          </p>
        </section>

        {/* Área do aluno */}
        <AreaAluno />
      </main>
    </>
  );
}

export default App;
