# 02 · Endpoints e Swagger

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/books` | Lista todos os livros |
| GET | `/api/books/{id}` | Busca um livro específico pelo id |
| POST | `/api/books` | Cadastra um novo livro |
| PUT | `/api/books/{id}` | Atualiza um livro existente |
| DELETE | `/api/books/{id}` | Deleta um livro |

## Documentação interativa (Swagger)

Com a API rodando localmente, acesse:

```
http://localhost:3000/docs
```

Lá é possível expandir cada endpoint, ver o schema de request/response e usar o botão **"Try it out"** para testar diretamente pelo navegador — sem precisar de Postman ou Cypress.

## Exemplo de corpo de requisição (POST/PUT)

```json
{
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "pageCount": 576,
  "description": "Uma jornada épica pela Terra-média.",
  "publishDate": "1954-07-29"
}
```

`title` e `author` são obrigatórios; os demais campos são opcionais.

## Exemplo de resposta (livro criado)

```json
{
  "id": 3,
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "pageCount": 576,
  "description": "Uma jornada épica pela Terra-média.",
  "publishDate": "1954-07-29"
}
```

---
Veja também: [[03 Regras de negócio]] · [[Cenários Funcionais em Gherkin]]
