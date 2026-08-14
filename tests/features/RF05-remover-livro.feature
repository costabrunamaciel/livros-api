# language: pt
# Requisito: RF05 — Remover livro
# Endpoint: IT05 — DELETE /api/books/{id}
# Característica ISO/IEC 25010: Adequação Funcional / Confiabilidade
# Referência: docs/especificacao-funcional.md, docs/plano-de-testes.md

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
