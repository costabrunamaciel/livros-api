// RF03 - Cadastrar livro (POST /api/books)
// Rastreabilidade: TC-LIVROS-API-005 a TC-LIVROS-API-009
// Referência: tests/features/RF03-cadastrar-livro.feature

describe("RF03 - Cadastrar livro", () => {
  it("LIVROS-API-005: deve cadastrar um livro com todos os campos preenchidos", () => {
    const livro = {
      title: "O Hobbit",
      author: "J.R.R. Tolkien",
      pageCount: 310,
      description: "A aventura de Bilbo Bolseiro.",
      publishDate: "1937-09-21",
    };

    cy.request("POST", "/api/books", livro).then((resposta) => {
      expect(resposta.status).to.eq(201);
      expect(resposta.body).to.include(livro);
      expect(resposta.body.id).to.be.a("number");
    });
  });

  it("LIVROS-API-006: deve cadastrar um livro somente com os campos obrigatórios", () => {
    const livro = { title: "Duna", author: "Frank Herbert" };

    cy.request("POST", "/api/books", livro).then((resposta) => {
      expect(resposta.status).to.eq(201);
      expect(resposta.body.title).to.eq(livro.title);
      expect(resposta.body.author).to.eq(livro.author);
    });
  });

  it("LIVROS-API-007: deve retornar 400 ao cadastrar sem o campo title", () => {
    cy.request({
      method: "POST",
      url: "/api/books",
      body: { author: "Autor sem título" },
      failOnStatusCode: false,
    }).then((resposta) => {
      expect(resposta.status).to.eq(400);
      expect(resposta.body).to.have.property("message");
    });
  });

  it("LIVROS-API-008: deve retornar 400 ao cadastrar sem o campo author", () => {
    cy.request({
      method: "POST",
      url: "/api/books",
      body: { title: "Livro sem autor" },
      failOnStatusCode: false,
    }).then((resposta) => {
      expect(resposta.status).to.eq(400);
      expect(resposta.body).to.have.property("message");
    });
  });

  it("LIVROS-API-009: deve gerar um id automático diferente de ids já existentes", () => {
    cy.request("POST", "/api/books", { title: "Livro A", author: "Autor A" }).then((primeiro) => {
      cy.request("POST", "/api/books", { title: "Livro B", author: "Autor B" }).then((segundo) => {
        expect(segundo.body.id).to.not.eq(primeiro.body.id);
        expect(segundo.body.id).to.be.greaterThan(primeiro.body.id);
      });
    });
  });
});
