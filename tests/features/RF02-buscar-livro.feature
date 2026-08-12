# language: pt
# Requisito: RF02 — Buscar livro específico
# Endpoint: IT02 — GET /api/books/{id}
# Característica ISO/IEC 25010: Adequação Funcional / Confiabilidade
# Referência: docs/especificacao-funcional.md, docs/plano-de-testes.md

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
