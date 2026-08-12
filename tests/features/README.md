# Cenários Funcionais (Gherkin) — Livros API

Cenários em Gherkin (formato BDD), um arquivo `.feature` por requisito funcional, escritos em português (`# language: pt`) e compatíveis com [Cucumber](https://cucumber.io/) / [Behave](https://behave.readthedocs.io/) / [Cucumber.js](https://github.com/cucumber/cucumber-js).

Cada cenário é identificado com a tag `@TC-LIVROS-API-0XX` e rastreável ao requisito funcional (`@RF0X`) e ao endpoint (`@IT0X`) definidos na [Especificação Funcional](../../docs/especificacao-funcional.md) e no [Plano de Testes](../../docs/plano-de-testes.md).

## Matriz de rastreabilidade

| Caso de teste | Requisito | Endpoint | Cenário | Tipo |
|---|---|---|---|---|
| TC-LIVROS-API-001 | RF01 | IT01 GET `/api/books` | Listar todos os livros cadastrados | Positivo |
| TC-LIVROS-API-002 | RF01 | IT01 GET `/api/books` | Listar quando não há livros (`[]`) | Positivo / Borda |
| TC-LIVROS-API-003 | RF02 | IT02 GET `/api/books/{id}` | Buscar livro com id existente | Positivo |
| TC-LIVROS-API-004 | RF02 | IT02 GET `/api/books/{id}` | Buscar livro com id inexistente (404) | Negativo |
| TC-LIVROS-API-005 | RF03 | IT03 POST `/api/books` | Cadastrar livro com todos os dados válidos | Positivo |
| TC-LIVROS-API-006 | RF03 | IT03 POST `/api/books` | Cadastrar apenas com campos obrigatórios | Positivo |
| TC-LIVROS-API-007 | RF03 | IT03 POST `/api/books` | Cadastrar sem `title` (400) | Negativo |
| TC-LIVROS-API-008 | RF03 | IT03 POST `/api/books` | Cadastrar sem `author` (400) | Negativo |
| TC-LIVROS-API-009 | RF03 | IT03 POST `/api/books` | Geração automática/sequencial do id | Positivo |
| TC-LIVROS-API-010 | RF04 | IT04 PUT `/api/books/{id}` | Atualização completa | Positivo |
| TC-LIVROS-API-011 | RF04 | IT04 PUT `/api/books/{id}` | Atualização parcial mantém campos omitidos | Positivo |
| TC-LIVROS-API-012 | RF04 | IT04 PUT `/api/books/{id}` | Atualizar id inexistente (404) | Negativo |
| TC-LIVROS-API-013 | RF04 | IT04 PUT `/api/books/{id}` | Tentativa de alterar o id via payload | Negativo / Borda |
| TC-LIVROS-API-014 | RF05 | IT05 DELETE `/api/books/{id}` | Remover livro existente | Positivo |
| TC-LIVROS-API-015 | RF05 | IT05 DELETE `/api/books/{id}` | Remover id inexistente (404) | Negativo |
| TC-LIVROS-API-016 | RF05 | IT05 DELETE `/api/books/{id}` | Confirmar remoção (GET após DELETE) | Positivo / Regressão |

**Total:** 16 cenários funcionais, cobrindo os requisitos RF01 a RF05, conforme item 7.1 do [Plano de Testes PT-LIVROS-API-001](../../docs/plano-de-testes.md).

Para os testes exploratórios complementares (não roteirizados), ver [Cartas de Teste Exploratório](../../docs/cartas-teste-exploratorio.md).
