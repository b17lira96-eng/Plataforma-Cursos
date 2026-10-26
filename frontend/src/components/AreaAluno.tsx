
import { useState } from "react";
import type { FormEvent } from "react";

export default function AreaAluno() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function entrar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMensagem("");

    if (!email.trim() || !senha) {
      setMensagem("Preencha o e-mail e a senha.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMensagem("Informe um e-mail válido.");
      return;
    }

    setMensagem(
      "Formulário validado. A autenticação será disponibilizada após a integração com o Back-End."
    );
  }

  return (
    <section
      id="aluno"
      className="area-aluno-secao"
      aria-labelledby="area-aluno-titulo"
    >
      <div className="container area-aluno-container">
        <div className="area-aluno-apresentacao">
          <span className="area-aluno-etiqueta">
            AMBIENTE DO ESTUDANTE
          </span>

          <h2 id="area-aluno-titulo">
            Seu aprendizado continua aqui.
          </h2>

          <p>
            Acesse seu ambiente de estudos e acompanhe
            sua jornada de desenvolvimento profissional.
          </p>
        </div>

        <div className="area-aluno-card">
          <h3>Área do aluno</h3>

          <p className="area-aluno-subtitulo">
            Informe seus dados para acessar a plataforma.
          </p>

          <form onSubmit={entrar}>
            <div className="area-aluno-campo">
              <label htmlFor="aluno-email">
                E-mail
              </label>

              <input
                id="aluno-email"
                type="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                autoComplete="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />
            </div>

            <div className="area-aluno-campo">
              <label htmlFor="aluno-senha">
                Senha
              </label>

              <div className="area-aluno-senha">
                <input
                  id="aluno-senha"
                  type={mostrarSenha ? "text" : "password"}
                  name="senha"
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                  value={senha}
                  onChange={(event) =>
                    setSenha(event.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="area-aluno-mostrar-senha"
                  onClick={() =>
                    setMostrarSenha((anterior) => !anterior)
                  }
                  aria-label={
                    mostrarSenha
                      ? "Ocultar senha"
                      : "Mostrar senha"
                  }
                  aria-pressed={mostrarSenha}
                >
                  {mostrarSenha ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="area-aluno-entrar"
            >
              Entrar
              <span aria-hidden="true">→</span>
            </button>

            {mensagem && (
              <p
                className="area-aluno-mensagem"
                role="status"
              >
                {mensagem}
              </p>
            )}
          </form>

          <p className="area-aluno-aviso">
            A autenticação estará disponível após
            a integração com o sistema de acesso.
          </p>
        </div>
      </div>
    </section>
  );
}
