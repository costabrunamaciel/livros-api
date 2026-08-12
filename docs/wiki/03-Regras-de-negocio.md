# 03 · Regras de negócio

Baseado na Especificação Funcional do projeto (documento completo também disponível em [`docs/especificacao-funcional.md`](https://github.com/costabrunamaciel/livros-api/blob/master/docs/especificacao-funcional.md) no repositório).

## Requisitos funcionais

### RF01 — Listar livros
- `GET /api/books` retorna todos os livros cadastrados.
- Se não houver livros, retorna lista vazia `[]`.
- Resposta: `200 OK`.

### RF02 — Buscar livro específico
- `GET /api/books/{id}` retorna os dados de um único livro.
- Respostas: `200 OK` (encontrado) ou `404 Not Found` (id não existe).

### RF03 — Cadastrar livro
- `POST /api/books` cria um novo livro.
- `title` e `author` são obrigatórios.
- O `id` é gerado automaticamente pela API (sequencial), nunca informado pelo cliente.
- Campos opcionais não enviados assumem valor vazio/nulo.
- Respostas: `201 Created` (válido) ou `400 Bad Request` (faltam campos obrigatórios).

### RF04 — Atualizar livro
- `PUT /api/books/{id}` atualiza um livro existente.
- Apenas os campos enviados no corpo são atualizados; os omitidos mantêm o valor atual.
- O `id` não pode ser alterado via payload.
- Respostas: `200 OK` (id existe) ou `404 Not Found` (id não existe).

### RF05 — Remover livro
- `DELETE /api/books/{id}` remove um livro do acervo.
- Respostas: `204 No Content` (removido) ou `404 Not Found` (id não existe).

## Regras de negócio gerais

- `id` é sempre numérico, único e atribuído pela API — nunca pelo cliente.
- Não há verificação de duplicidade por título/autor.
- Os dados são mantidos **em memória**: qualquer reinício da API apaga todos os livros cadastrados e restaura os dados iniciais de exemplo.
- Todas as respostas de erro trazem um corpo `{ "message": "..." }` explicando o motivo.

## Fora de escopo

- Autenticação/autorização de usuários.
- Persistência em banco de dados.
- Paginação, ordenação ou filtros na listagem.
- Relacionamento com outras entidades (autores, editoras, categorias).

---
Veja também: [[01 Visão da API]] · [[04 Plano de testes da API]]
