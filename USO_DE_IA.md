# Uso de Inteligência Artificial no Desenvolvimento

## 1. Objetivo

Este documento apresenta como ferramentas de inteligência artificial foram utilizadas como apoio no desenvolvimento da Plataforma de Cursos SESI + INDÚSTRIA, realizada como parte do desafio técnico CTED.

O objetivo do uso da IA foi auxiliar na organização do projeto, na implementação de funcionalidades, na resolução de problemas técnicos, na publicação da aplicação e na documentação da solução.

## 2. Ferramenta utilizada

- ChatGPT (OpenAI)

A ferramenta foi utilizada como assistente de desenvolvimento, fornecendo orientações, exemplos de código, sugestões de implementação e apoio na identificação e resolução de problemas.

## 3. Etapas apoiadas pela IA

### 3.1 Planejamento e arquitetura

A IA auxiliou na definição da organização da aplicação, considerando a separação entre:

- Front-End em React e TypeScript.
- Back-End em C# com ASP.NET Core Web API (.NET 10).
- Banco de dados SQLite.
- Comunicação por API REST.
- Organização do código em pastas e componentes.

### 3.2 Desenvolvimento do Front-End

A IA apoiou a implementação e o aperfeiçoamento de funcionalidades como:

- Exibição de cursos em cartões.
- Pesquisa por cursos.
- Filtros por categoria, modalidade e status.
- Combinação e limpeza de filtros.
- Ordenação dos cursos.
- Modal de detalhes dos cursos.
- Layout responsivo.
- Estados de carregamento, ausência de resultados e erro.
- Recursos de navegação por teclado.
- Integração com a API utilizando Axios.

### 3.3 Desenvolvimento do Back-End

A IA auxiliou com orientações relacionadas a:

- Estruturação da API em ASP.NET Core.
- Criação do modelo de dados de cursos.
- Integração com Entity Framework Core.
- Persistência em SQLite.
- Criação e aplicação de migrations.
- Inicialização do banco de dados com cursos demonstrativos.
- Configuração de endpoints.
- Comunicação entre Front-End e Back-End.
- Configuração de CORS.

### 3.4 Identificação e resolução de problemas

Durante o desenvolvimento, a IA foi utilizada para auxiliar na análise de erros e no diagnóstico de problemas.

Entre as situações trabalhadas estão:

- Falhas de comunicação entre o Front-End e a API.
- Tratamento de indisponibilidade do Back-End.
- Configuração de acesso à aplicação pela rede local.
- Verificação de portas e endereços IP.
- Ajustes relacionados à experiência do usuário.
- Configuração de endereços da API para ambientes locais e de produção.

### 3.5 Versionamento e publicação

A IA também auxiliou no processo de organização e publicação da solução, incluindo:

- Preparação do repositório Git.
- Utilização do GitHub para versionamento.
- Configuração de arquivos `.gitignore` e `.dockerignore`.
- Preparação do Dockerfile para execução da API.
- Publicação do Back-End no Render.
- Publicação do Front-End no Cloudflare Pages.
- Configuração da variável de ambiente `VITE_API_URL`.
- Integração entre a interface publicada e a API hospedada.
- Análise de logs de implantação.
- Verificação do funcionamento da aplicação em produção.

### 3.6 Documentação

A IA também auxiliou na estruturação e revisão dos arquivos:

- `README.md`
- `USO_DE_IA.md`

Esses documentos descrevem a solução, as tecnologias utilizadas, as instruções de execução, o processo de publicação e o papel da inteligência artificial no desenvolvimento.

## 4. Forma de utilização

O desenvolvimento foi conduzido de maneira incremental, trabalhando em etapas e analisando os arquivos individualmente.

As sugestões da IA foram utilizadas como apoio para implementação, revisão e resolução de problemas.

Os códigos e configurações foram incorporados ao projeto conforme as necessidades identificadas.

As funcionalidades foram executadas e verificadas no ambiente de desenvolvimento e, posteriormente, na aplicação publicada.

O processo incluiu análise dos resultados, identificação de ajustes necessários e novas verificações.

## 5. Exemplos de solicitações feitas à IA

Alguns exemplos representativos de solicitações realizadas durante o desenvolvimento:

- Como estruturar uma aplicação React integrada a uma API ASP.NET Core?
- Como implementar filtros combinados para um catálogo de cursos?
- Como criar um modal de detalhes com navegação por teclado?
- Como tratar erros quando a API está indisponível?
- Como permitir o acesso à aplicação por outro computador na rede local?
- Como configurar o Docker para publicar uma API ASP.NET Core?
- Como publicar o Back-End no Render?
- Como publicar o Front-End React no Cloudflare Pages?
- Como configurar a variável de ambiente para conectar o Front-End à API publicada?
- Como documentar corretamente um projeto Full Stack?

Esses exemplos representam os tipos de solicitações realizadas, não necessariamente transcrições literais das mensagens.

## 6. Validação das soluções

As orientações e os códigos sugeridos pela IA foram utilizados no contexto do projeto e submetidos a verificações práticas.

Entre os testes realizados estão:

- Compilação do Back-End com `dotnet build`.
- Compilação do Front-End com `npm run build`.
- Carregamento dos seis cursos pela API.
- Pesquisa e aplicação de filtros.
- Combinação e limpeza dos filtros.
- Ordenação dos cursos.
- Exibição de detalhes.
- Rolagem e fechamento do modal.
- Responsividade em diferentes resoluções.
- Comportamento do modal com teclado.
- Tratamento de erros.
- Acesso à aplicação por computadores na mesma rede.
- Consulta aos endpoints da API publicada no Render.
- Verificação do funcionamento do Front-End publicado no Cloudflare Pages.
- Confirmação da comunicação entre Front-End e Back-End em produção.

## 7. Limitações e cuidados

A utilização de inteligência artificial não elimina a necessidade de verificar o funcionamento do código.

As sugestões podem exigir adaptações conforme a estrutura do projeto, as versões das dependências e as configurações do ambiente.

Também é necessário avaliar possíveis impactos das alterações para preservar funcionalidades já implementadas.

Por esse motivo, o desenvolvimento incluiu testes, revisões e ajustes progressivos.

As respostas da IA foram tratadas como orientações técnicas, e não como garantia automática de funcionamento.

## 8. Considerações finais

A inteligência artificial foi utilizada como ferramenta de apoio técnico e educacional durante o desenvolvimento da Plataforma de Cursos SESI + INDÚSTRIA.

Seu uso contribuiu para organizar o trabalho, explorar soluções, compreender problemas, aprimorar a implementação e orientar a publicação da aplicação.

O resultado foi verificado por meio da execução local, de testes funcionais e da validação da aplicação publicada.

A experiência também contribuiu para o aprendizado prático sobre integração entre Front-End e Back-End, consumo de APIs REST, versionamento de código e implantação de aplicações web.