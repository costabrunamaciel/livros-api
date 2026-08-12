# 01 · Visão da API

## Objetivo

A **Livros API** é uma API REST desenvolvida para fins de estudo e prática de testes manuais e automatizados, disponibilizando operações de gerenciamento de livros — inspirada na [FakeRESTApi](https://fakerestapi.azurewebsites.net/index.html), mas restrita ao recurso **Livro (Book)**.

## Escopo do produto

A API permite:
- cadastrar livros;
- listar livros;
- consultar livro por ID;
- atualizar livros;
- remover livros.

Não existem, nesta versão: usuários, autores como entidade independente, categorias, editoras, autenticação, autorização e banco de dados.

## Tecnologias

- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- [Swagger UI](https://github.com/scottie1984/swagger-ui-express) para documentação interativa
- [Cypress](https://www.cypress.io/) para automação de testes de API

## Entidade: Livro (Book)

| Campo | Tipo | Obrigatório | Gerado pela API |
|---|---|---|---|
| `id` | integer | — | ✅ |
| `title` | string | ✅ | — |
| `author` | string | ✅ | — |
| `pageCount` | integer | ❌ | — |
| `description` | string | ❌ | — |
| `publishDate` | string (`YYYY-MM-DD`) | ❌ | — |

## Restrições importantes

- Os dados são mantidos **em memória**: reiniciar a API restaura os dados iniciais de exemplo.
- Não há autenticação/autorização — todo cliente tem acesso total.

## Como rodar localmente

```bash
git clone https://github.com/costabrunamaciel/livros-api.git
cd livros-api
npm install
npm start
```

A API sobe em `http://localhost:3000`, com documentação Swagger em `http://localhost:3000/docs`.

---
Veja também: [[02 Endpoints e Swagger]] · [[03 Regras de negócio]]
