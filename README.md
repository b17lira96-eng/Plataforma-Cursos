# Plataforma de Cursos | SESI + INDÚSTRIA

Aplicação web Full Stack desenvolvida como parte do desafio técnico CTED — SESI + INDÚSTRIA.

O projeto apresenta um catálogo de cursos com recursos de pesquisa, filtros, ordenação e visualização detalhada das formações.

## Acesse a aplicação

**Front-End — Cloudflare Pages**

https://plataforma-cursos-4xd.pages.dev

**Back-End — Render**

https://plataforma-cursos-l7u4.onrender.com/api/Cursos

**Repositório GitHub**

https://github.com/b17lira96-eng/Plataforma-Cursos

> A API utiliza uma instância gratuita do Render, que pode entrar em modo de suspensão após períodos de inatividade. Por isso, a primeira consulta pode demorar alguns instantes.

## Sobre o projeto

A plataforma disponibiliza uma interface responsiva para navegação em um catálogo de cursos.

O Front-End foi desenvolvido com React e TypeScript, enquanto o Back-End utiliza ASP.NET Core Web API, com persistência de dados em SQLite.

A comunicação entre as aplicações é realizada por meio de uma API REST.

O catálogo inicial contém seis cursos fictícios, utilizados para demonstrar as funcionalidades da aplicação.

## Tecnologias utilizadas

### Front-End

- React
- TypeScript
- Vite
- HTML5
- CSS3
- Axios

### Back-End

- C#
- ASP.NET Core Web API (.NET 10)
- Entity Framework Core
- SQLite
- Swagger / OpenAPI

### Versionamento e publicação

- Git
- GitHub
- Docker
- Render — hospedagem da API
- Cloudflare Pages — hospedagem do Front-End

## Funcionalidades

- Listagem de cursos obtidos da API REST.
- Catálogo inicial com seis cursos fictícios.
- Pesquisa de cursos.
- Filtros por categoria, modalidade e status.
- Combinação de filtros.
- Ordenação dos cursos.
- Limpeza dos filtros aplicados.
- Visualização detalhada dos cursos em janela modal.
- Exibição de carga horária, conteúdo programático e público-alvo.
- Interface responsiva para computadores, tablets e celulares.
- Indicadores de carregamento.
- Mensagens para pesquisas sem resultados.
- Tratamento de erros de comunicação com a API.
- Opção de tentar novamente em caso de falha.
- Navegação por teclado no modal de detalhes.
- Fechamento do modal utilizando a tecla Escape.

## Estrutura da solução

O repositório contém duas aplicações principais:

**Front-End:** responsável pela interface, apresentação dos cursos, pesquisa, filtros, ordenação e interação com o usuário.

**Back-End:** responsável pela disponibilização dos dados por meio de endpoints HTTP e pela integração com o banco SQLite.

Estrutura simplificada:

```text
Plataforma-Cursos/
├── CursosApi/
│   ├── Controllers/
│   ├── Data/
│   ├── Migrations/
│   ├── Models/
│   ├── Dockerfile
│   ├── Program.cs
│   └── CursosApi.csproj
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── README.md
├── USO_DE_IA.md
└── .gitignore
```

O catálogo é carregado a partir da API, evitando a dependência de uma lista fixa de cursos no Front-End.

## Modelo de dados

Cada curso pode apresentar as seguintes informações:

- Identificador
- Nome
- Nome breve
- Descrição
- Categoria
- Modalidade
- Status
- Carga horária
- Módulos
- Descrição das aulas
- Público-alvo
- URL da imagem
- Data de disponibilização

## Pré-requisitos

Para executar o projeto localmente, é necessário instalar:

- Node.js e npm
- SDK do .NET 10
- Um editor de código, como o Visual Studio Code

## Como executar localmente

### 1. Iniciar o Back-End

Abra um terminal na pasta `CursosApi` e execute:

```bash
dotnet restore
dotnet run
```

Na configuração local utilizada durante o desenvolvimento, a API é acessada em:

http://localhost:5035

Endpoint de listagem:

```text
GET /api/Cursos
```

Endereço completo:

http://localhost:5035/api/Cursos

A aplicação utiliza Entity Framework Core com SQLite. Na inicialização, o banco de dados é preparado por meio das migrations e, quando a tabela de cursos está vazia, os seis cursos demonstrativos são cadastrados automaticamente.

### 2. Iniciar o Front-End

Abra outro terminal na pasta `frontend`, onde está localizado o arquivo `package.json`.

Execute:

```bash
npm install
npm run dev
```

Acesse o endereço informado pelo Vite no terminal.

Na configuração padrão utilizada durante o desenvolvimento:

http://localhost:5173

**Importante:** o Back-End deve estar em execução para que o catálogo seja carregado a partir da API.

## Configuração da integração com a API

O Front-End utiliza Axios para realizar requisições HTTP.

A URL base da API pode ser configurada por meio da variável de ambiente:

```text
VITE_API_URL
```

No ambiente de produção do Cloudflare Pages, foi configurado o valor:

```text
https://plataforma-cursos-l7u4.onrender.com/api
```

Essa configuração permite que a aplicação publicada consulte a API hospedada no Render.

Durante o desenvolvimento local, na ausência dessa variável, o Front-End utiliza o endereço local da API na porta `5035`.

## API REST

A API disponibiliza endpoints para consulta de cursos, incluindo:

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/Cursos` | Lista os cursos |
| GET | `/api/Cursos/{id}` | Consulta um curso pelo identificador |

A implementação do Back-End também contempla operações de gerenciamento de cursos.

## Publicação da aplicação

### Back-End — Render

A API ASP.NET Core foi publicada no Render utilizando Docker.

O arquivo `CursosApi/Dockerfile` define as etapas de compilação e execução da aplicação.

### Front-End — Cloudflare Pages

A interface React foi publicada no Cloudflare Pages, utilizando o repositório GitHub como origem.

Configurações utilizadas:

- Framework: React (Vite)
- Branch de produção: `main`
- Diretório raiz: `frontend`
- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Variável de ambiente: `VITE_API_URL`

O Cloudflare Pages realiza o processo de build e publicação a partir do código do repositório.

## Responsividade e acessibilidade

A interface foi desenvolvida considerando diferentes tamanhos de tela, incluindo desktop, tablet e dispositivos móveis.

O modal de detalhes possui recursos de navegação por teclado, como fechamento pela tecla Escape e controle de foco durante sua utilização.

## Testes realizados

Durante o desenvolvimento e a publicação, foram verificados:

- Compilação do Back-End com `dotnet build`.
- Compilação do Front-End com `npm run build`.
- Carregamento dos cursos a partir da API.
- Pesquisa e combinação de filtros.
- Limpeza dos filtros aplicados.
- Ordenação dos cursos.
- Exibição de detalhes.
- Rolagem e fechamento da janela modal.
- Comportamento da interface em diferentes resoluções.
- Navegação por teclado no modal.
- Tratamento de indisponibilidade da API.
- Acesso ao Front-End e ao Back-End por outro computador na rede local.
- Comunicação entre a aplicação publicada no Cloudflare Pages e a API hospedada no Render.

## Uso de inteligência artificial

Ferramentas de inteligência artificial foram utilizadas como apoio durante o desenvolvimento, auxiliando na organização da solução, implementação, análise de problemas e documentação.

Os detalhes estão registrados no arquivo:

`USO_DE_IA.md`

## Observações

Os cursos utilizados no catálogo são fictícios e destinados à demonstração das funcionalidades da aplicação.

O projeto foi desenvolvido para fins de avaliação técnica e demonstração de conhecimentos em desenvolvimento web Full Stack.