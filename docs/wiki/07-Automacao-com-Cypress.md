# 07 · Automação com Cypress

A automação de API está implementada com **[Cypress](https://www.cypress.io/)**, usando `cy.request()` — sem interface gráfica, direto nas chamadas HTTP, já que a Livros API não tem UI.

Os testes ficam em [`cypress/e2e/`](https://github.com/costabrunamaciel/livros-api/tree/master/cypress/e2e) no repositório, um arquivo por requisito funcional (RF01–RF05), com os mesmos identificadores usados nos [[Cenários Funcionais em Gherkin]].

## Specs

| Spec | Requisito | Casos de teste |
|---|---|---|
| `rf01-listar-livros.cy.js` | RF01 | 001, 002 |
| `rf02-buscar-livro.cy.js` | RF02 | 003, 004 |
| `rf03-cadastrar-livro.cy.js` | RF03 | 005 a 009 |
| `rf04-atualizar-livro.cy.js` | RF04 | 010 a 013 |
| `rf05-remover-livro.cy.js` | RF05 | 014 a 016 |

**Total: 16 cenários automatizados**, cobrindo os casos definidos no [[04 Plano de testes da API]].

## Como rodar

> ⚠️ A API precisa estar rodando (`npm start`) antes de executar os testes, pois o Cypress faz chamadas HTTP reais em `http://localhost:3000`.

```bash
# Terminal 1 — sobe a API
npm start
```

```bash
# Terminal 2 — modo headless (linha de comando)
npm run cy:run

# ...ou modo interativo (interface gráfica do Cypress)
npm run cy:open
```

## Estratégia de dados de teste

Cada teste cria os próprios dados via `POST` antes de agir, em vez de depender de livros pré-cadastrados (ex.: os de exemplo com id `1` e `2`). Isso garante que os testes sejam independentes entre si e possam rodar em qualquer ordem, mesmo com os dados em memória sendo voláteis.

## Próximos passos (ainda não implementados)

- Integração contínua (CI) via GitHub Actions, para rodar os testes automaticamente a cada push.
- Testes unitários e de integração complementares em outra ferramenta.

---
Veja também: [[04 Plano de testes da API]] · [[Cenários Funcionais em Gherkin]]
