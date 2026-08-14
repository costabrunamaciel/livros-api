# language: pt
# Requisito: RF03 — Cadastrar livro
# Endpoint: IT03 — POST /api/books
# Característica ISO/IEC 25010: Adequação Funcional
# Referência: docs/especificacao-funcional.md, docs/plano-de-testes.md

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
