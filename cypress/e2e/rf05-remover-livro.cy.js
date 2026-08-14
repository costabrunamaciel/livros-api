// RF05 - Remover livro (DELETE /api/books/{id})
// Rastreabilidade: TC-LIVROS-API-014 a TC-LIVROS-API-016
// Referência: Wiki > 06 Casos de testes em Gherkin

describe("RF05 - Remover livro", () => {
  it("LIVROS-API-014: deve remover um livro existente e retornar 204", () => {
    cy.request("POST", "/api/books", { title: "Livro a remover", author: "Autor" }).then((criado) => {
      cy.request("DELETE", `/api/books/${criado.body.id}`).then((resposta) => {
        expect(resposta.status).to.eq(204);
        expect(resposta.body).to.be.empty;
      });
    });
  });

  it("LIVROS-API-015: deve retornar 404 ao remover um id inexistente", () => {
    cy.request({
      method: "DELETE",
      url: "/api/books/999999",
      failOnStatusCode: false,
    }).then((resposta) => {
      expect(resposta.status).to.eq(404);
      expect(resposta.body).to.have.property("message");
    });
  });

  it("LIVROS-API-016: livro removido não deve mais ser encontrado", () => {
    cy.request("POST", "/api/books", { title: "Livro a confirmar remoção", author: "Autor" }).then((criado) => {
      const id = criado.body.id;

      cy.request("DELETE", `/api/books/${id}`).then((delecao) => {
        expect(delecao.status).to.eq(204);

        cy.request({ method: "GET", url: `/api/books/${id}`, failOnStatusCode: false }).then((resposta) => {
          expect(resposta.status).to.eq(404);
        });
      });
    });
  });
});
