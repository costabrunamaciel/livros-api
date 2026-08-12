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
├── index.js             # Ponto de entrada da API (rotas e lógica dos livros)
├── swagger.js            # Definição da documentação OpenAPI/Swagger
├── package.json
├── cypress.config.js      # Configuração do Cypress (baseUrl, specPattern)
├── cypress/
│   └── e2e/                # Testes automatizados de API com Cypress (cy.request)
├── tests/
│   ├── unit/                # Testes unitários (reservado)
│   ├── integration/         # Testes de integração (reservado)
│   └── features/            # Cenários funcionais em Gherkin (BDD), rastreáveis a RF01-RF05
└── README.md
```

## 📑 Documentação de QA

- [Especificação Funcional](./docs/especificacao-funcional.md) — requisitos RF01 a RF05 e regras de negócio.
- [Plano de Testes (PT-LIVROS-API-001)](./docs/plano-de-testes.md) — escopo, estratégia, riscos e cronograma, seguindo ISO/IEC/IEEE 29119 e ISO/IEC 25010.
- [Cartas de Teste Exploratório](./docs/cartas-teste-exploratorio.md) — charters para as sessões de teste exploratório (ST04).
- [Cenários Funcionais em Gherkin](./tests/features) — 16 cenários BDD com matriz de rastreabilidade aos RF01-RF05.

## 🧪 Testes automatizados

A automação de API está implementada com **[Cypress](https://www.cypress.io/)**, usando `cy.request()` (sem interface gráfica, direto nas chamadas HTTP). Os testes ficam em [`cypress/e2e/`](./cypress/e2e), um arquivo por requisito funcional.

| Spec | Requisito | Casos de teste |
|---|---|---|
| `cypress/e2e/rf01-listar-livros.cy.js` | RF01 | 001, 002 |
| `cypress/e2e/rf02-buscar-livro.cy.js` | RF02 | 003, 004 |
| `cypress/e2e/rf03-cadastrar-livro.cy.js` | RF03 | 005 a 009 |
| `cypress/e2e/rf04-atualizar-livro.cy.js` | RF04 | 010 a 013 |
| `cypress/e2e/rf05-remover-livro.cy.js` | RF05 | 014 a 016 |

**Total: 16/16 cenários automatizados**, cobrindo todos os casos definidos no [Plano de Testes](./docs/plano-de-testes.md).

A pasta [`tests/`](./tests) permanece reservada para testes unitários (`tests/unit/`) e de integração com outra ferramenta (`tests/integration/`), caso sejam adicionados depois. `tests/features/` guarda a documentação em Gherkin que serviu de base para os testes do Cypress.

### Como rodar os testes

> ⚠️ A API precisa estar rodando (`npm start`) antes de executar os testes, pois o Cypress faz chamadas HTTP reais em `http://localhost:3000`.

```bash
# 1. Em um terminal, suba a API
npm start

# 2. Em outro terminal, rode os testes em modo headless (linha de comando)
npm run cy:run

# ...ou abra o Cypress em modo interativo (interface gráfica, para ver os testes rodando)
npm run cy:open
```

## 📄 Licença

Projeto criado para fins de estudo.
