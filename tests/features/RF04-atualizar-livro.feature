# language: pt
# Requisito: RF04 — Atualizar livro
# Endpoint: IT04 — PUT /api/books/{id}
# Característica ISO/IEC 25010: Adequação Funcional / Confiabilidade
# Referência: docs/especificacao-funcional.md, docs/plano-de-testes.md

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
