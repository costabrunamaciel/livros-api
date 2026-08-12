# Cenários Funcionais em Gherkin — Livros API

Cenários em Gherkin (formato BDD), um bloco por requisito funcional (RF01 a RF05), escritos em português (`# language: pt`) e compatíveis com [Cucumber](https://cucumber.io/) / [Behave](https://behave.readthedocs.io/) / [Cucumber.js](https://github.com/cucumber/cucumber-js).

Cada cenário é identificado com a tag `@TC-LIVROS-API-0XX` e rastreável ao requisito funcional (`@RF0X`) e ao endpoint (`@IT0X`) definidos na [Especificação Funcional](./Especificação-Funcional) e no [Plano de Testes](./Plano-de-Testes).

Os arquivos-fonte `.feature` ficam versionados em [`tests/features/`](https://github.com/costabrunamaciel/livros-api/tree/master/tests/features) no repositório.

---

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

**Total:** 16 cenários funcionais, cobrindo os requisitos RF01 a RF05, conforme item 7.1 do Plano de Testes PT-LIVROS-API-001.

---

## RF01 - Listar livros (IT01 · GET /api/books)

```gherkin
# language: pt
# Requisito: RF01 — Listar livros
# Endpoint: IT01 — GET /api/books
# Característica ISO/IEC 25010: Adequação Funcional

Funcionalidade: RF01 - Listar livros
  Como cliente da API
  Quero listar todos os livros cadastrados
  Para consultar o acervo disponível

  @TC-LIVROS-API-001 @RF01 @IT01 @funcional-adequacao @positivo
  Cenário: Listar todos os livros cadastrados
    Dado que existem livros cadastrados na API
    Quando eu envio uma requisição GET para "/api/books"
    Então o status da resposta deve ser 200
    E o corpo da resposta deve ser um array em formato JSON
    E o array deve conter todos os livros cadastrados

  @TC-LIVROS-API-002 @RF01 @IT01 @funcional-adequacao @positivo @borda
  Cenário: Listar quando não há livros cadastrados
    Dado que não existem livros cadastrados na API
    Quando eu envio uma requisição GET para "/api/books"
    Então o status da resposta deve ser 200
    E o corpo da resposta deve ser um array vazio "[]"
```

---

## RF02 - Buscar livro específico (IT02 · GET /api/books/{id})

```gherkin
# language: pt
# Requisito: RF02 — Buscar livro específico
# Endpoint: IT02 — GET /api/books/{id}
# Característica ISO/IEC 25010: Adequação Funcional / Confiabilidade

Funcionalidade: RF02 - Buscar livro específico
  Como cliente da API
  Quero consultar um livro pelo seu id
  Para obter os dados de um item específico do acervo

  @TC-LIVROS-API-003 @RF02 @IT02 @funcional-adequacao @positivo
  Cenário: Buscar um livro com id existente
    Dado que existe um livro cadastrado com id "1"
    Quando eu envio uma requisição GET para "/api/books/1"
    Então o status da resposta deve ser 200
    E o corpo da resposta deve conter o livro com id "1"

  @TC-LIVROS-API-004 @RF02 @IT02 @confiabilidade @negativo
  Cenário: Buscar um livro com id inexistente
    Dado que não existe livro cadastrado com id "9999"
    Quando eu envio uma requisição GET para "/api/books/9999"
    Então o status da resposta deve ser 404
    E o corpo da resposta deve conter uma mensagem de erro
```

---

## RF03 - Cadastrar livro (IT03 · POST /api/books)

```gherkin
# language: pt
# Requisito: RF03 — Cadastrar livro
# Endpoint: IT03 — POST /api/books
# Característica ISO/IEC 25010: Adequação Funcional

Funcionalidade: RF03 - Cadastrar livro
  Como cliente da API
  Quero cadastrar um novo livro
  Para adicioná-lo ao acervo

  @TC-LIVROS-API-005 @RF03 @IT03 @funcional-adequacao @positivo
  Cenário: Cadastrar livro com todos os dados válidos
    Dado que informo os dados de um livro válido com todos os campos preenchidos
    Quando eu envio uma requisição POST para "/api/books" com esses dados
    Então o status da resposta deve ser 201
    E o corpo da resposta deve conter o livro criado com um "id" gerado pela API
    E os demais campos devem ser iguais aos enviados

  @TC-LIVROS-API-006 @RF03 @IT03 @funcional-adequacao @positivo
  Cenário: Cadastrar livro somente com os campos obrigatórios
    Dado que informo apenas "title" e "author" de um livro válido
    Quando eu envio uma requisição POST para "/api/books" com esses dados
    Então o status da resposta deve ser 201
    E os campos opcionais não enviados devem retornar vazios ou nulos

  @TC-LIVROS-API-007 @RF03 @IT03 @funcional-adequacao @negativo
  Cenário: Tentar cadastrar livro sem o campo obrigatório title
    Dado que informo os dados de um livro sem o campo "title"
    Quando eu envio uma requisição POST para "/api/books" com esses dados
    Então o status da resposta deve ser 400
    E o corpo da resposta deve conter uma mensagem de erro

  @TC-LIVROS-API-008 @RF03 @IT03 @funcional-adequacao @negativo
  Cenário: Tentar cadastrar livro sem o campo obrigatório author
    Dado que informo os dados de um livro sem o campo "author"
    Quando eu envio uma requisição POST para "/api/books" com esses dados
    Então o status da resposta deve ser 400
    E o corpo da resposta deve conter uma mensagem de erro

  @TC-LIVROS-API-009 @RF03 @IT03 @funcional-adequacao @positivo
  Cenário: Verificar geração automática e sequencial do id
    Dado que já existe pelo menos um livro cadastrado
    Quando eu cadastro um novo livro válido via POST em "/api/books"
    Então o id do livro criado deve ser gerado automaticamente pela API
    E o id não deve coincidir com nenhum id já existente
```

---

## RF04 - Atualizar livro (IT04 · PUT /api/books/{id})

```gherkin
# language: pt
# Requisito: RF04 — Atualizar livro
# Endpoint: IT04 — PUT /api/books/{id}
# Característica ISO/IEC 25010: Adequação Funcional / Confiabilidade

Funcionalidade: RF04 - Atualizar livro
  Como cliente da API
  Quero atualizar os dados de um livro existente
  Para manter o acervo corrigido/atualizado

  @TC-LIVROS-API-010 @RF04 @IT04 @funcional-adequacao @positivo
  Cenário: Atualização completa de um livro existente
    Dado que existe um livro cadastrado com id "1"
    Quando eu envio uma requisição PUT para "/api/books/1" com todos os campos preenchidos
    Então o status da resposta deve ser 200
    E o livro deve refletir todos os novos valores enviados

  @TC-LIVROS-API-011 @RF04 @IT04 @funcional-adequacao @positivo
  Cenário: Atualização parcial mantém os campos não enviados
    Dado que existe um livro cadastrado com id "1"
    Quando eu envio uma requisição PUT para "/api/books/1" contendo apenas o campo "description"
    Então o status da resposta deve ser 200
    E o campo "description" deve ser atualizado
    E os demais campos devem permanecer com os valores anteriores

  @TC-LIVROS-API-012 @RF04 @IT04 @confiabilidade @negativo
  Cenário: Tentar atualizar um livro com id inexistente
    Dado que não existe livro cadastrado com id "9999"
    Quando eu envio uma requisição PUT para "/api/books/9999" com dados válidos
    Então o status da resposta deve ser 404
    E o corpo da resposta deve conter uma mensagem de erro

  @TC-LIVROS-API-013 @RF04 @IT04 @funcional-adequacao @negativo @borda
  Cenário: Tentar alterar o id do livro através do payload
    Dado que existe um livro cadastrado com id "1"
    Quando eu envio uma requisição PUT para "/api/books/1" informando um "id" diferente no corpo
    Então o status da resposta deve ser 200
    E o id do livro deve permanecer "1", sem ser alterado pelo payload
```

---

## RF05 - Remover livro (IT05 · DELETE /api/books/{id})

```gherkin
# language: pt
# Requisito: RF05 — Remover livro
# Endpoint: IT05 — DELETE /api/books/{id}
# Característica ISO/IEC 25010: Adequação Funcional / Confiabilidade

Funcionalidade: RF05 - Remover livro
  Como cliente da API
  Quero remover um livro do acervo
  Para excluir itens que não devem mais constar na base

  @TC-LIVROS-API-014 @RF05 @IT05 @funcional-adequacao @positivo
  Cenário: Remover um livro existente
    Dado que existe um livro cadastrado com id "1"
    Quando eu envio uma requisição DELETE para "/api/books/1"
    Então o status da resposta deve ser 204
    E a resposta não deve conter corpo

  @TC-LIVROS-API-015 @RF05 @IT05 @confiabilidade @negativo
  Cenário: Tentar remover um livro com id inexistente
    Dado que não existe livro cadastrado com id "9999"
    Quando eu envio uma requisição DELETE para "/api/books/9999"
    Então o status da resposta deve ser 404
    E o corpo da resposta deve conter uma mensagem de erro

  @TC-LIVROS-API-016 @RF05 @IT05 @funcional-adequacao @positivo @regressao
  Cenário: Confirmar que o livro removido não é mais encontrado
    Dado que existe um livro cadastrado com id "1"
    E eu removo o livro com id "1" via DELETE em "/api/books/1"
    Quando eu envio uma requisição GET para "/api/books/1"
    Então o status da resposta deve ser 404
```

---

Para os testes exploratórios complementares (não roteirizados), ver a página **Cartas de Teste Exploratório**.
