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

## 9. Prompts relevantes e aproveitamento das sugestões

Durante o desenvolvimento, foram realizadas solicitações à ferramenta ChatGPT para apoiar a implementação e o aperfeiçoamento da aplicação.

Os exemplos abaixo representam as solicitações realizadas, podendo não corresponder à redação literal das mensagens originais.

| Solicitação à IA | Conteúdo aproveitado | Conteúdo descartado ou adaptado |
|---|---|---|
| Como integrar um Front-End React e TypeScript a uma API ASP.NET Core? | Orientações para organizar a comunicação HTTP utilizando Axios. | Endereços e configurações genéricas foram adaptados às portas e aos ambientes utilizados no projeto. |
| Como implementar pesquisa e filtros combinados no catálogo de cursos? | Sugestões para aplicar filtros por nome, categoria, modalidade e status. | A implementação foi ajustada ao modelo de dados e aos componentes existentes. |
| Como apresentar detalhes dos cursos em um modal acessível? | Orientações sobre exibição de informações, navegação por teclado e fechamento com Escape. | Os exemplos foram adaptados à estrutura e ao estilo visual da aplicação. |
| Como tratar falhas de comunicação com a API? | Estratégias para apresentar mensagens de erro, estados de carregamento e opção de tentar novamente. | As sugestões foram adequadas ao comportamento esperado da interface. |
| Como publicar uma API .NET e um Front-End React em serviços gratuitos? | Orientações para utilização do Render, Cloudflare Pages e variáveis de ambiente. | Configurações locais foram diferenciadas das configurações necessárias para produção. |
| Como documentar o desenvolvimento de uma aplicação Full Stack? | Organização dos arquivos README.md e USO_DE_IA.md. | As descrições foram revisadas para refletir as tecnologias, funcionalidades e testes efetivamente realizados. |

## 10. Exemplo de inadequação identificada e correção realizada

### 10.1 Problema identificado

Durante a preparação da aplicação para publicação, foi necessário revisar a configuração de comunicação entre o Front-End e o Back-End.

No ambiente local, a API utilizava um endereço HTTP associado à máquina de desenvolvimento e à porta 5035. Essa configuração não era adequada para o Front-End publicado na internet, pois os usuários externos não teriam acesso ao servidor local.

### 10.2 Análise com apoio da IA

A ferramenta ChatGPT foi utilizada para auxiliar na identificação da diferença entre os ambientes local e de produção.

Foi discutida a necessidade de utilizar o endereço público da API hospedada no Render e de configurar a comunicação do Front-End publicado no Cloudflare Pages.

### 10.3 Correção realizada

A configuração de comunicação foi adaptada para considerar a variável de ambiente `VITE_API_URL`, permitindo informar o endereço público da API durante a construção da aplicação.

Também foram revisadas as configurações necessárias para permitir a comunicação entre os serviços publicados.

### 10.4 Validação

Após os ajustes, foram realizadas verificações práticas:

- Compilação do Back-End com `dotnet build`.
- Compilação do Front-End com `npm run build`.
- Consulta aos cursos pela API publicada no Render.
- Acesso à aplicação publicada no Cloudflare Pages.
- Verificação da listagem dos seis cursos.
- Aplicação de filtros combinados.
- Abertura do modal com as informações detalhadas de um curso.

Os testes confirmaram o funcionamento da integração na versão publicada.

## 11. Critérios para aceitação das sugestões

As respostas fornecidas pela inteligência artificial não foram consideradas automaticamente corretas.

As sugestões foram avaliadas considerando:

- Compatibilidade com as tecnologias e versões utilizadas.
- Preservação das funcionalidades existentes.
- Adequação aos requisitos do desafio técnico.
- Resultado das compilações e dos testes.
- Funcionamento em ambiente local e publicado.

Quando necessário, as orientações foram adaptadas à estrutura real da aplicação.

## 12. Responsabilidade pelo desenvolvimento

A inteligência artificial foi utilizada como recurso de apoio durante o processo de desenvolvimento.

As implementações foram incorporadas progressivamente ao projeto e verificadas por meio de testes funcionais.

O uso da ferramenta está registrado neste documento para oferecer transparência sobre sua participação no desenvolvimento da solução.