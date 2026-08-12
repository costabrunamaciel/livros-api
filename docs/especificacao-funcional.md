# Especificação Funcional — Livros API

## 1. Objetivo

Disponibilizar uma API REST simples para gerenciamento de um acervo de livros (cadastrar, consultar, atualizar e remover), a ser usada como alvo de estudo e prática de testes manuais e automatizados.

## 2. Escopo

Inclui apenas o recurso **Livro (Book)**, com as operações de CRUD (Create, Read, Update, Delete). Não há outros recursos (ex.: autores, categorias, usuários) nesta versão.

## 3. Atores

| Ator          | Descrição                                                        |
|---------------|--------------------------------------------------------------------|
| Cliente da API | Qualquer sistema/pessoa que consome a API via HTTP (ex.: Postman, Swagger UI, scripts de teste). Não há autenticação/autorização nesta versão — todo cliente tem acesso total. |

## 4. Entidade: Livro (Book)

| Campo         | Tipo    | Obrigatório | Gerado pela API | Descrição                          |
|---------------|---------|:-----------:|:----------------:|--------------------------------------|
| `id`          | integer |      —      |        ✅        | Identificador único, sequencial.     |
| `title`       | string  |     ✅      |        —         | Título do livro.                     |
| `author`      | string  |     ✅      |        —         | Autor do livro.                      |
| `pageCount`   | integer |     ❌      |        —         | Número de páginas.                   |
| `description` | string  |     ❌      |        —         | Sinopse/descrição livre.             |
| `publishDate` | string (data `YYYY-MM-DD`) | ❌ | —          | Data de publicação.                  |

## 5. Requisitos funcionais

### RF01 — Listar livros
- **Endpoint:** `GET /api/books`
- **Descrição:** Retorna todos os livros cadastrados.
- **Regras:**
  - Se não houver livros cadastrados, retorna uma lista vazia `[]`.
- **Resposta:** `200 OK` + array de livros.

### RF02 — Buscar livro específico
- **Endpoint:** `GET /api/books/{id}`
- **Descrição:** Retorna os dados de um único livro pelo `id`.
- **Regras:**
  - Se o `id` não existir, retorna erro.
- **Respostas:**
  - `200 OK` + objeto do livro, quando encontrado.
  - `404 Not Found`, quando o `id` não existe.

### RF03 — Cadastrar livro
- **Endpoint:** `POST /api/books`
- **Descrição:** Cria um novo livro a partir dos dados enviados no corpo da requisição.
- **Regras:**
  - `title` e `author` são obrigatórios.
  - O `id` é gerado automaticamente pela API (sequencial, não pode ser informado pelo cliente).
  - Campos opcionais não enviados assumem valor vazio/nulo.
- **Respostas:**
  - `201 Created` + objeto do livro criado (com `id` preenchido), quando os dados são válidos.
  - `400 Bad Request`, quando `title` e/ou `author` não são informados.

### RF04 — Atualizar livro
- **Endpoint:** `PUT /api/books/{id}`
- **Descrição:** Atualiza os dados de um livro existente.
- **Regras:**
  - Apenas os campos enviados no corpo da requisição são atualizados; campos omitidos mantêm o valor atual.
  - O `id` do livro não pode ser alterado.
- **Respostas:**
  - `200 OK` + objeto do livro atualizado, quando o `id` existe.
  - `404 Not Found`, quando o `id` não existe.

### RF05 — Remover livro
- **Endpoint:** `DELETE /api/books/{id}`
- **Descrição:** Remove um livro do acervo.
- **Respostas:**
  - `204 No Content`, quando o livro é removido com sucesso.
  - `404 Not Found`, quando o `id` não existe.

## 6. Regras de negócio gerais

- `id` é sempre numérico, único e atribuído pela API — nunca pelo cliente.
- Não há duplicidade impedida por título/autor (é permitido cadastrar dois livros com o mesmo título).
- Os dados são mantidos **em memória**: qualquer reinício da API apaga todos os livros cadastrados e restaura os dados iniciais de exemplo.
- Todas as respostas de erro trazem um corpo `{ "message": "..." }` explicando o motivo.

## 7. Requisitos não funcionais (breve)

- API deve responder em formato **JSON**.
- Documentação interativa disponível via **Swagger UI** em `/docs`.
- Não há requisito de performance, autenticação ou persistência em banco — fora do escopo desta versão de estudo.

## 8. Fora de escopo

- Autenticação/autorização de usuários.
- Persistência em banco de dados (arquivo, SQL, NoSQL).
- Paginação, ordenação ou filtros na listagem (`GET /api/books` sempre retorna todos os livros).
- Relacionamento com outras entidades (autores, editoras, categorias).

## 9. Referência para testes

Esta especificação serve de base para os casos de teste sugeridos em [`README.md`](../README.md#-testes-automatizados) e para os testes a serem implementados em [`tests/`](../tests).
