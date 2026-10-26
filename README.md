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

## Estrutura de pastas

O projeto está organizado em um único repositório, contendo o Front-End, o Back-End e a documentação técnica.

```text
Plataforma-Cursos/
├── CursosApi/
│   ├── Controllers/
│   ├── Data/
│   ├── Migrations/
│   ├── Models/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── Program.cs
│   ├── CursosApi.csproj
│   └── appsettings.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── main.tsx
│   ├── package.json
│   └── package-lock.json
├── .gitignore
├── README.md
└── USO_DE_IA.md
```

### Responsabilidades principais

- `CursosApi/Controllers`: endpoints HTTP da API.
- `CursosApi/Models`: modelo de dados dos cursos.
- `CursosApi/Data`: contexto do Entity Framework Core e inicialização dos dados.
- `CursosApi/Migrations`: histórico de alterações da estrutura do banco.
- `frontend/src/components`: componentes da interface.
- `frontend/src/services`: configuração da comunicação com a API.
- `frontend/src/types`: definições de tipos utilizadas no Front-End.
- `frontend/public` e `frontend/src/assets`: recursos visuais da aplicação.

## Configuração e inicialização do banco de dados

O Back-End utiliza SQLite, um banco de dados relacional de código aberto.

A configuração da conexão está definida no arquivo `CursosApi/appsettings.json`, utilizando a string:

```text
Data Source=cursos.db
```

O projeto utiliza Entity Framework Core e migrations para controlar a estrutura do banco.

Durante a inicialização da aplicação, o componente `DbInitializer` aplica as migrations pendentes e cadastra os seis cursos fictícios quando a tabela de cursos está vazia.

Assim, não é necessário incluir um arquivo SQLite preenchido no repositório para executar a aplicação localmente.

O banco é gerado e inicializado durante a execução do Back-End, desde que o ambiente tenha permissão para criar e gravar o arquivo.

## Estratégia de responsividade

A interface foi desenvolvida para permitir a navegação em diferentes tamanhos de tela.

A implementação utiliza estilos CSS responsivos para adaptar a organização dos elementos, incluindo:

- Distribuição dos cartões de cursos.
- Organização dos campos de pesquisa e filtros.
- Dimensionamento dos elementos da interface.
- Apresentação do modal de detalhes.
- Adequação dos espaçamentos e da navegação.

O comportamento foi verificado em resoluções representativas de computadores, tablets e dispositivos móveis.

## Decisões de acessibilidade

Durante o desenvolvimento, foram considerados recursos para melhorar a utilização da interface por diferentes usuários.

Entre as decisões implementadas estão:

- Identificação textual dos campos de pesquisa e filtros.
- Utilização de controles interativos apropriados.
- Navegação por teclado no modal de detalhes.
- Possibilidade de fechar o modal utilizando a tecla Escape.
- Controle de foco durante a utilização do modal.
- Apresentação de mensagens para carregamento, ausência de resultados e falhas de comunicação.

Esses recursos representam medidas de acessibilidade implementadas no projeto, não uma certificação de conformidade integral com as diretrizes WCAG.

## Processo de publicação

A aplicação foi publicada utilizando serviços com modalidades gratuitas, separando o Front-End e o Back-End.

### Back-End — Render

O Back-End ASP.NET Core foi publicado no Render utilizando um serviço web configurado para construção por Docker.

O repositório contém um `Dockerfile` na pasta `CursosApi`, responsável pela compilação e execução da API.

A aplicação utiliza SQLite e inicializa os dados necessários durante a execução.

Endpoint público de consulta:

https://plataforma-cursos-l7u4.onrender.com/api/Cursos

### Front-End — Cloudflare Pages

O Front-End foi publicado no Cloudflare Pages, com integração ao repositório GitHub.

Configurações utilizadas:

- Framework: React (Vite).
- Diretório raiz: `frontend`.
- Comando de construção: `npm run build`.
- Diretório de saída: `dist`.
- Branch de produção: `main`.

A variável de ambiente `VITE_API_URL` foi configurada para apontar para o endereço público da API no Render:

```text
https://plataforma-cursos-l7u4.onrender.com/api
```

Endereço público da aplicação:

https://plataforma-cursos-4xd.pages.dev

As atualizações enviadas à branch principal podem acionar novas publicações conforme a configuração de cada serviço.

## Limitações conhecidas e escopo

- Os cursos e suas informações são fictícios e utilizados exclusivamente para demonstração.
- Não existe integração com uma instalação real do Moodle, pois essa funcionalidade foi apresentada como diferencial opcional no desafio.
- A aplicação não possui autenticação nem área do aluno funcional.
- O gerenciamento de matrículas não faz parte do escopo implementado.
- O projeto prioriza a consulta e a apresentação do catálogo, conforme as funcionalidades obrigatórias.
- O SQLite utilizado no ambiente de hospedagem pode não oferecer persistência permanente quando o serviço é reconstruído ou reiniciado sem armazenamento persistente. Por esse motivo, o catálogo demonstrativo é inicializado automaticamente quando o banco está vazio.
- Serviços de hospedagem gratuitos podem apresentar períodos de inatividade, inicialização mais lenta ou indisponibilidade temporária.
- A aplicação utiliza o Figma como referência visual, mas pode apresentar diferenças de espaçamento, dimensões e comportamento responsivo em relação ao protótipo. Essas adaptações foram realizadas para viabilizar a implementação e o funcionamento em diferentes tamanhos de tela.

## Arquivos de publicação

Os principais arquivos e configurações relacionados à publicação são:

- `CursosApi/Dockerfile`: construção e execução do Back-End.
- `CursosApi/.dockerignore`: exclusão de arquivos desnecessários da imagem Docker.
- `CursosApi/appsettings.json`: configurações gerais da API.
- `CursosApi/Migrations/`: estrutura e evolução do banco de dados.
- `frontend/package.json`: scripts e dependências do Front-End.
- `frontend/package