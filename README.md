# 📚 Livros API

API REST simples para estudos e prática de testes, inspirada na [FakeRESTApi](https://fakerestapi.azurewebsites.net/index.html), focada apenas no recurso **Livros (Books)**.

Permite: cadastrar, listar, buscar por id, atualizar e deletar livros. Os dados ficam em memória (zeram ao reiniciar a API) — ideal para testar sem depender de banco de dados.

📋 Veja a [especificação funcional completa](./docs/especificacao-funcional.md) para detalhes de regras de negócio e comportamento esperado de cada endpoint.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Swagger UI](https://github.com/scottie1984/swagger-ui-express) (documentação interativa)

## 📖 Endpoints

| Método | Rota              | Descrição                        |
|--------|-------------------|-----------------------------------|
| GET    | `/api/books`      | Lista todos os livros             |
| GET    | `/api/books/{id}` | Busca um livro específico pelo id |
| POST   | `/api/books`      | Cadastra um novo livro            |
| PUT    | `/api/books/{id}` | Atualiza um livro existente       |
| DELETE | `/api/books/{id}` | Deleta um livro                   |

### Modelo de livro (`Book`)

```json
{
  "id": 1,
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "pageCount": 576,
  "description": "Uma jornada épica pela Terra-média.",
  "publishDate": "1954-07-29"
}
```

`title` e `author` são obrigatórios ao cadastrar (`POST`).

## 💻 Como clonar e rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada)
- [Git](https://git-scm.com/) instalado

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/costabrunamaciel/livros-api.git

# 2. Entre na pasta do projeto
cd livros-api

# 3. Instale as dependências
npm install

# 4. Inicie a API
npm start
```

A API vai subir em **http://localhost:3000**.

Abra **http://localhost:3000/docs** no navegador para ver a documentação interativa (Swagger), onde é possível testar cada endpoint diretamente.

## 🗂️ Estrutura do projeto

```
livros-api/
├── index.js          # Ponto de entrada da API (rotas e lógica dos livros)
├── swagger.js         # Definição da documentação OpenAPI/Swagger
├── package.json
├── tests/              # Testes automatizados (ver seção abaixo)
│   ├── unit/           # Testes unitários
│   └── integration/    # Testes de integração / end-to-end (chamadas HTTP aos endpoints)
└── README.md
```

## 🧪 Testes automatizados

> Estrutura preparada para receber os testes — ainda não implementados.

A pasta [`tests/`](./tests) já está criada, dividida em:

- **`tests/unit/`** — testes unitários (funções isoladas, regras de negócio).
- **`tests/integration/`** — testes de integração, batendo diretamente nos endpoints HTTP (`GET`, `POST`, `PUT`, `DELETE` em `/api/books`) para validar o comportamento real da API.

Sugestão de ferramentas (a definir): [Jest](https://jestjs.io/) + [Supertest](https://github.com/ladjs/supertest) para testes de API em Node.js.

### Como rodar os testes

_(seção a preencher conforme os testes forem adicionados)_

```bash
npm test
```

### Casos sugeridos para cobrir

- [ ] `GET /api/books` retorna lista de livros com status `200`
- [ ] `GET /api/books/{id}` retorna o livro correto quando existe
- [ ] `GET /api/books/{id}` retorna `404` quando o id não existe
- [ ] `POST /api/books` cria um livro com dados válidos e retorna `201`
- [ ] `POST /api/books` retorna `400` quando faltam campos obrigatórios (`title`, `author`)
- [ ] `PUT /api/books/{id}` atualiza os campos informados e retorna `200`
- [ ] `PUT /api/books/{id}` retorna `404` quando o id não existe
- [ ] `DELETE /api/books/{id}` remove o livro e retorna `204`
- [ ] `DELETE /api/books/{id}` retorna `404` quando o id não existe

## 📄 Licença

Projeto criado para fins de estudo.
