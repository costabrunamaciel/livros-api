// RF02 - Buscar livro específico (GET /api/books/{id})
// Rastreabilidade: TC-LIVROS-API-003, TC-LIVROS-API-004
// Referência: tests/features/RF02-buscar-livro.feature

describe("RF02 - Buscar livro específico", () => {
  let idExistente;

  beforeEach(() => {
    cy.request("POST", "/api/books", {
      title: "Livro de teste - busca",
      author: "Autor de Teste",
    }).then((resposta) => {
      idExistente = resposta.body.id;
    });
  });

  it("LIVROS-API-003: deve retornar o livro quando o id existe", () => {
    cy.request("GET", `/api/books/${idExistente}`).then((resposta) => {
      expect(resposta.status).to.eq(200);
      expect(resposta.body.id).to.eq(idExistente);
    });
  });

  it("LIVROS-API-004: deve retornar 404 quando o id não existe", () => {
    cy.request({
      method: "GET",
      url: "/api/books/999999",
      failOnStatusCode: false,
    }).then((resposta) => {
      expect(resposta.status).to.eq(404);
      expect(resposta.body).to.have.property("message");
    });
  });
});
