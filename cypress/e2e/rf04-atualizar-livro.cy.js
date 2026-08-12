// RF04 - Atualizar livro (PUT /api/books/{id})
// Rastreabilidade: TC-LIVROS-API-010 a TC-LIVROS-API-013
// Referência: tests/features/RF04-atualizar-livro.feature

describe("RF04 - Atualizar livro", () => {
  let idExistente;
  let livroOriginal;

  beforeEach(() => {
    livroOriginal = {
      title: "Livro original",
      author: "Autor original",
      pageCount: 100,
      description: "Descrição original",
      publishDate: "2000-01-01",
    };

    cy.request("POST", "/api/books", livroOriginal).then((resposta) => {
      idExistente = resposta.body.id;
    });
  });

  it("LIVROS-API-010: deve atualizar todos os campos de um livro existente", () => {
    const dadosAtualizados = {
      title: "Livro atualizado",
      author: "Autor atualizado",
      pageCount: 200,
      description: "Descrição atualizada",
      publishDate: "2020-05-05",
    };

    cy.request("PUT", `/api/books/${idExistente}`, dadosAtualizados).then((resposta) => {
      expect(resposta.status).to.eq(200);
      expect(resposta.body).to.include(dadosAtualizados);
    });
  });

  it("LIVROS-API-011: deve atualizar parcialmente mantendo os campos não enviados", () => {
    cy.request("PUT", `/api/books/${idExistente}`, {
      description: "Somente a descrição mudou",
    }).then((resposta) => {
      expect(resposta.status).to.eq(200);
      expect(resposta.body.description).to.eq("Somente a descrição mudou");
      expect(resposta.body.title).to.eq(livroOriginal.title);
      expect(resposta.body.author).to.eq(livroOriginal.author);
    });
  });

  it("LIVROS-API-012: deve retornar 404 ao atualizar um id inexistente", () => {
    cy.request({
      method: "PUT",
      url: "/api/books/999999",
      body: { title: "Não importa" },
      failOnStatusCode: false,
    }).then((resposta) => {
      expect(resposta.status).to.eq(404);
      expect(resposta.body).to.have.property("message");
    });
  });

  it("LIVROS-API-013: não deve permitir alterar o id através do payload", () => {
    cy.request("PUT", `/api/books/${idExistente}`, {
      id: 999999,
      title: "Tentando trocar o id",
    }).then((resposta) => {
      expect(resposta.status).to.eq(200);
      expect(resposta.body.id).to.eq(idExistente);
    });
  });
});
