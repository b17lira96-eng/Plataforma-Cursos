
# Plataforma de Cursos | SESI + INDÚSTRIA

Aplicação web desenvolvida como parte de um desafio técnico CTED, com o objetivo de apresentar um catálogo de cursos, permitindo consultar informações, pesquisar e filtrar formações disponíveis.

## Sobre o projeto

A plataforma disponibiliza uma interface responsiva para navegação em um catálogo de cursos.

O Front-End foi desenvolvido com React e TypeScript, enquanto o Back-End utiliza ASP.NET Core Web API, com persistência de dados em SQLite.

A comunicação entre as aplicações é realizada por meio de uma API REST.

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

## Funcionalidades

- Listagem de cursos disponíveis.
- Catálogo inicial com seis cursos fictícios.
- Pesquisa de cursos.
- Filtros por categoria, modalidade e status.
- Combinação de filtros.
- Visualização detalhada dos cursos.
- Interface adaptada para computadores, tablets e celulares.
- Indicadores de carregamento.
- Mensagens para pesquisas sem resultados.
- Tratamento de erros de comunicação com a API.
- Opção de tentar novamente em caso de falha.
- Navegação por teclado no modal de detalhes.
- Fechamento do modal utilizando a tecla Escape.

## Estrutura da solução

A aplicação é dividida em duas partes:

**Front-End:** responsável pela interface, apresentação dos cursos, pesquisa, filtros e interação com o usuário.

**Back-End:** responsável pela disponibilização dos dados por meio de endpoints HTTP e pela integração com o banco SQLite.

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

## Como executar

### 1. Iniciar o Back-End

Abra um terminal na pasta `CursosApi` e execute:

```bash
dotnet restore
dotnet run
```

Na configuração local utilizada durante o desenvolvimento, a API é acessada em:

```text
http://localhost:5035
```

Endpoint de listagem:

```text
GET /api/Cursos
```

Endereço completo:

```text
http://localhost:5035/api/Cursos
```

### 2. Iniciar o Front-End

Abra outro terminal na pasta do Front-End, onde está localizado o arquivo `package.json`.

Execute:

```bash
npm install
npm run dev
```

Acesse o endereço informado pelo Vite no terminal.

Na configuração padrão utilizada durante o desenvolvimento:

```text
http://localhost:5173
```

**Importante:** o Back-End deve estar em execução para que o catálogo seja carregado a partir da API.

## API REST

A API disponibiliza endpoints para consulta de cursos, incluindo:

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | `/api/Cursos` | Lista os cursos |
| GET | `/api/Cursos/{id}` | Consulta um curso pelo identificador |

A implementação do Back-End também contempla operações de gerenciamento de cursos.

## Responsividade e acessibilidade

A interface foi desenvolvida considerando diferentes tamanhos de tela, incluindo desktop, tablet e dispositivos móveis.

O modal de detalhes possui recursos de navegação por teclado, como fechamento pela tecla Escape e controle de foco durante sua utilização.

## Testes realizados

Durante o desenvolvimento, foram verificados:

- Carregamento dos cursos a partir da API.
- Pesquisa e combinação de filtros.
- Exibição de detalhes.
- Comportamento da interface em diferentes resoluções.
- Navegação por teclado no modal.
- Tratamento de indisponibilidade da API.
- Acesso ao Front-End e ao Back-End por outro computador na rede local.

## Uso de inteligência artificial

Ferramentas de inteligência artificial foram utilizadas como apoio durante o desenvolvimento, auxiliando na organização da solução, implementação, análise de problemas e documentação.

Os detalhes estão registrados no arquivo:

`USO_DE_IA.md`

## Observações

Os cursos utilizados no catálogo são fictícios e destinados à demonstração das funcionalidades da aplicação.

O projeto foi desenvolvido para fins de avaliação técnica e demonstração de conhecimentos em desenvolvimento web Full Stack.
