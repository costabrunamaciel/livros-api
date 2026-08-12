# 04 · Plano de testes da API

_PT-LIVROS-API-001_

| | |
|---|---|
| **Identificador** | PT-LIVROS-API-001 |
| **Versão** | 1.0 |
| **Status** | Concluído |
| **Data** | 12/08/2026 |
| **Projeto** | Livros API |
| **Organização responsável** | Projeto de estudos — QA |
| **Responsável pelo plano** | QA |
| **Metodologia de referência** | ISO/IEC/IEEE 29119 |
| **Modelo de qualidade de referência** | ISO/IEC 25010 |

---

## 1. Visão geral

### 1.1 Objetivo

Este documento tem como objetivo definir o planejamento, a estratégia, o escopo, os recursos, as atividades e os critérios para execução dos testes da Livros API.

A Livros API é uma API REST desenvolvida para fins de estudo e prática de testes manuais e automatizados, disponibilizando operações de gerenciamento de livros.

O objetivo dos testes é verificar se a API atende aos requisitos funcionais e regras de negócio definidos para o recurso Book, bem como avaliar o comportamento da aplicação em cenários positivos, negativos e exploratórios.

### 1.5 Aprovadores

| Papel | Responsável | Status |
|---|---|---|
| QA | Bruna Costa | Pendente |
| Desenvolvimento | A definir | Pendente |
| Responsável pelo projeto | Bruna Costa | Pendente |

### 1.6 Histórico de mudanças

| Versão | Data | Responsável | Descrição |
|---|---|---|---|
| 1.0 | 12/08/2026 | QA | Criação do Plano de Testes |

---

## 2. Escopo geral

### 2.1 Escopo do produto

A Livros API possui como único recurso de negócio o **Livro (Book)**.

A API permite:

- cadastrar livros;
- listar livros;
- consultar livro por ID;
- atualizar livros;
- remover livros.

Não existem, nesta versão:

- usuários;
- autores como entidade independente;
- categorias;
- editoras;
- autenticação;
- autorização;
- banco de dados.

### 2.2 Objetivos dos testes

Os testes têm como objetivos:

1. Validar as funcionalidades CRUD.
2. Validar os requisitos funcionais RF01 a RF05.
3. Validar os códigos HTTP esperados.
4. Validar os dados retornados pela API.
5. Validar campos obrigatórios e opcionais.
6. Validar tratamento de recursos inexistentes.
7. Validar comportamento em cenários inválidos.
8. Identificar comportamentos não documentados por meio de testes exploratórios.

---

## 3. Referências

Serão utilizadas como referências:

### 3.1 Normas

- ISO/IEC/IEEE 29119 — Software Testing.
- ISO/IEC 25010 — Software Product Quality.

### 3.2 Documentação do projeto

- README.md.
- Especificação Funcional.
- Documentação Swagger/OpenAPI.
- Código-fonte da aplicação.

### 3.3 Repositório

Repositório Livros API no GitHub.

A especificação funcional do projeto define o recurso Book, os requisitos RF01 a RF05, as regras gerais e os itens fora do escopo.

---

## 4. Glossário de termos

| Termo | Definição |
|---|---|
| API | Application Programming Interface |
| REST | Arquitetura utilizada para comunicação entre sistemas via HTTP |
| CRUD | Create, Read, Update e Delete |
| Endpoint | URL disponibilizada pela API para determinada operação |
| HTTP | Protocolo utilizado para comunicação entre cliente e servidor |
| GET | Método HTTP utilizado para consulta |
| POST | Método HTTP utilizado para criação |
| PUT | Método HTTP utilizado para atualização |
| DELETE | Método HTTP utilizado para exclusão |
| Payload | Dados enviados no corpo da requisição |
| Status Code | Código HTTP retornado pela API |
| JSON | Formato utilizado para troca de dados |
| ID | Identificador único do livro |
| Swagger | Interface de documentação e interação com a API |
| Gherkin | Linguagem utilizada para descrição de cenários BDD |
| BDD | Behavior Driven Development |
| Teste exploratório | Abordagem em que aprendizado, projeto e execução dos testes ocorrem simultaneamente |
| Regressão | Teste realizado para verificar se alterações não causaram impactos em funcionalidades existentes |

---

## 5. Projetos ou subprocessos de teste

O projeto será dividido nos seguintes subprocessos:

**ST01 — Análise e planejamento**
- análise da especificação;
- identificação de riscos;
- definição da estratégia;
- elaboração do Plano de Testes.

**ST02 — Testes funcionais**
Validação dos requisitos RF01 a RF05.

**ST03 — Testes negativos**
Validação de entradas inválidas, IDs inexistentes e comportamentos inesperados.

**ST04 — Testes exploratórios**
Exploração dos endpoints utilizando charters de teste.

**ST05 — Testes de integração**
Validação dos endpoints através de chamadas HTTP reais.

**ST06 — Testes de regressão**
Reexecução dos cenários afetados após correções.

---

## 6. Itens de teste

### 6.1 Endpoints

| ID | Método | Endpoint | Descrição |
|---|---|---|---|
| IT01 | GET | `/api/books` | Lista todos os livros |
| IT02 | GET | `/api/books/{id}` | Consulta livro por ID |
| IT03 | POST | `/api/books` | Cadastra livro |
| IT04 | PUT | `/api/books/{id}` | Atualiza livro |
| IT05 | DELETE | `/api/books/{id}` | Remove livro |

### 6.2 Entidade Book

| Campo | Tipo | Obrigatório | Origem |
|---|---|---|---|
| id | Integer | Sim | API |
| title | String | Sim | Cliente |
| author | String | Sim | Cliente |
| pageCount | Integer | Não | Cliente |
| description | String | Não | Cliente |
| publishDate | Date/String | Não | Cliente |

O `id` é gerado automaticamente pela API e é sequencial.

---

## 7. Escopo do teste

### 7.1 Dentro do escopo

Serão testados:

**RF01 — Listar livros**

Esperado:
- HTTP 200;
- retorno em formato JSON;
- retorno de array;
- retorno de todos os livros cadastrados;
- retorno `[]` quando não houver livros.

**RF02 — Buscar livro**

Serão testados:
- ID existente;
- ID inexistente;
- estrutura do livro retornado;
- status 200;
- status 404.

**RF03 — Cadastrar livro**

Serão testados:
- cadastro válido;
- ausência de `title`;
- ausência de `author`;
- ausência dos campos opcionais;
- geração automática do ID;
- sequência do ID;
- retorno 201;
- retorno 400.

**RF04 — Atualizar livro**

Serão testados:
- atualização completa;
- atualização parcial;
- manutenção de campos omitidos;
- tentativa de alteração do ID;
- ID inexistente;
- retorno 200;
- retorno 404.

**RF05 — Remover livro**

Serão testados:
- exclusão de livro existente;
- tentativa de exclusão inexistente;
- status 204;
- status 404;
- consulta posterior à exclusão.

### 7.2 Fora do escopo

Não serão testados nesta versão:

- autenticação;
- autorização;
- banco de dados;
- paginação;
- filtros;
- ordenação;
- autores como entidade;
- categorias;
- editoras;
- performance;
- testes de carga;
- penetration testing.

Esses itens estão explicitamente definidos como fora do escopo na especificação funcional.

---

## 8. Premissas e restrições

### 8.1 Premissas

Considera-se que:

- Node.js esteja instalado;
- a aplicação possa ser executada localmente;
- as dependências estejam instaladas;
- a API esteja disponível na porta 3000;
- a documentação Swagger esteja disponível em `/docs`;
- os requisitos descritos na especificação funcional sejam considerados a fonte principal para o comportamento esperado.

### 8.2 Restrições

A aplicação possui dados armazenados somente em memória.

Consequentemente:

- os dados são perdidos ao reiniciar a API;
- os dados iniciais são restaurados;
- não existe persistência em banco.

Essa característica está prevista na especificação funcional e também está implementada no código da aplicação.

Outra restrição é que a versão atual não possui autenticação ou autorização.

---

## 9. Stakeholders

| Stakeholder | Interesse | Responsabilidade |
|---|---|---|
| QA | Qualidade do produto | Planejar e executar testes |
| Desenvolvimento | Funcionamento técnico | Corrigir defeitos |
| Responsável pelo projeto | Resultado do projeto | Acompanhar evolução |
| Usuário/consumidor da API | Utilização do recurso | Consumir os endpoints |

---

## 10. Registro de risco de comunicação de teste

| ID | Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|---|
| RC01 | Alteração dos endpoints sem comunicação | Média | Alto | Controlar versão do código e revisar mudanças antes dos testes |
| RC02 | Divergência entre Swagger e implementação | Média | Alto | Executar teste de contrato |
| RC03 | Requisito alterado sem atualização da especificação | Média | Alto | Comparar documentação, código e comportamento |
| RC04 | Defeito corrigido sem identificação da versão | Média | Médio | Registrar commit/versão durante a execução |
| RC05 | Falta de informação sobre regra de negócio | Baixa | Médio | Registrar dúvida e validar antes da execução |
| RC06 | Reinicialização da API durante os testes | Média | Médio | Preparar dados de teste antes das sessões |

---

## 11. Estratégia de teste

### 11.1 Abordagem

Será utilizada uma estratégia combinando:

- testes baseados em requisitos;
- testes baseados em risco;
- testes exploratórios;
- testes positivos;
- testes negativos;
- testes de integração;
- testes de regressão.

### 11.2 Técnicas

Serão utilizadas:

**Particionamento de equivalência**

Exemplo — `id`:
- ID existente;
- ID inexistente;
- ID negativo;
- ID zero;
- ID decimal;
- ID textual;
- ID vazio.

**Análise de valores limite**

Aplicável principalmente a:
- `pageCount`;
- tamanho de `title`;
- tamanho de `author`;
- tamanho de `description`.

**Error Guessing**

Serão explorados comportamentos como:
- body vazio;
- JSON inválido;
- campos nulos;
- tipos incorretos;
- campos desconhecidos;
- valores negativos;
- datas inválidas;
- IDs inválidos.

### 11.3 Critérios de entrada

Os testes poderão iniciar quando:

- API estiver disponível;
- ambiente estiver configurado;
- documentação estiver acessível;
- versão a ser testada estiver identificada;
- requisitos estiverem disponíveis.

### 11.4 Critérios de saída

A etapa de testes será considerada concluída quando:

- todos os requisitos prioritários forem testados;
- todos os endpoints forem exercitados;
- cenários positivos e negativos forem executados;
- testes exploratórios forem realizados;
- defeitos críticos/altos forem tratados ou formalmente aceitos;
- métricas forem consolidadas;
- relatório final for elaborado ou aprovação do QA responsável.

### 11.5 Gestão de defeitos

Cada defeito deverá conter:

- título;
- descrição;
- ambiente;
- endpoint;
- pré-condições;
- passos para reprodução;
- resultado atual;
- resultado esperado;
- evidências;
- severidade;
- prioridade;
- status.

---

## 12. Atividades e estimativas

| ID | Atividade | Estimativa |
|---|---|---|
| AT01 | Análise da documentação | 1h |
| AT02 | Elaboração do Plano de Testes | 2h |
| AT03 | Análise e classificação de riscos | 1h |
| AT04 | Preparação do ambiente | 30min |
| AT05 | Testes exploratórios | 4h |
| AT06 | Elaboração dos casos de teste | 2h |
| AT07 | Execução dos casos de teste | 2h |
| AT08 | Registro de defeitos | 1h |
| AT09 | Elaboração dos cenários Gherkin | 2h |
| AT10 | Regressão | 1h |
| AT11 | Consolidação das métricas | 1h |
| AT12 | Relatório final | 1h |

**Estimativa inicial total:** 18,5 horas.

As estimativas são planejadas e deverão ser ajustadas conforme os resultados da exploração.

---

## 13. Equipe

Como o projeto possui finalidade de estudo, inicialmente a equipe será composta por:

| Papel | Responsabilidade |
|---|---|
| QA Analyst | Planejamento, análise, execução e reporte |
| Developer | Implementação e correção dos defeitos |
| Stakeholder | Avaliação e aprovação dos resultados |

---

## 14. Cronograma

| Etapa | Atividade | Responsável | Status |
|---|---|---|---|
| 01 | Análise da API | QA | Planejado |
| 02 | Plano de Testes | QA | Em andamento |
| 03 | Matriz de riscos | QA | Planejado |
| 04 | Preparação do ambiente | QA | Planejado |
| 05 | Testes exploratórios | QA | Planejado |
| 06 | Registro de defeitos | QA | Planejado |
| 07 | Casos de teste | QA | Planejado |
| 08 | Execução dos casos | QA | Planejado |
| 09 | Gherkin | QA | Planejado |
| 10 | Regressão | QA | Planejado |
| 11 | Métricas e charts | QA | Planejado |
| 12 | Relatório final | QA | Planejado |

---
Veja também: [[03 Regras de negócio]] · [[05 Cartas de teste exploratório]] · [[06 Casos de teste em Gherkin]]
