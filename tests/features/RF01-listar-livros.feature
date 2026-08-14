# language: pt
# Requisito: RF01 — Listar livros
# Endpoint: IT01 — GET /api/books
# Característica ISO/IEC 25010: Adequação Funcional
# Referência: docs/especificacao-funcional.md, docs/plano-de-testes.md

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
