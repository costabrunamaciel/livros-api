// RF01 - Listar livros (GET /api/books)
// Rastreabilidade: TC-LIVROS-API-001, TC-LIVROS-API-002
// Referência: tests/features/RF01-listar-livros.feature

describe("RF01 - Listar livros", () => {
  it("TC-LIVROS-API-001: deve listar todos os livros cadastrados", () => {
    const novoLivro = {
      title: "Livro de teste - listagem",
      author: "Autor de Teste",
    };

    cy.request("POST", "/api/books", novoLivro).then((criacao) => {
      expect(criacao.status).to.eq(201);
      const idCriado = criacao.body.id;

      cy.request("GET", "/api/books").then((resposta) => {
        expect(resposta.status).to.eq(200);
        expect(resposta.body).to.be.an("array");

        const livroEncontrado = resposta.body.find((livro) => livro.id === idCriado);
        expect(livroEncontrado, "livro criado deve estar na lista").to.exist;
        expect(livroEncontrado.title).to.eq(novoLivro.title);
      });
    });
  });

  it("TC-LIVROS-API-002: deve retornar um array vazio quando não há livros cadastrados", () => {
    // Esvazia o acervo removendo todos os livros existentes, para validar o caso de lista vazia.
    // Executado por último neste arquivo: os demais specs (RF02-RF05) criam seus próprios dados
    // e não dependem de livros pré-existentes, então esvaziar aqui não os afeta.
    cy.request("GET", "/api/books").then((resposta) => {
      const idsExistentes = resposta.body.map((livro) => livro.id);

      idsExistentes.forEach((id) => {
        cy.request("DELETE", `/api/books/${id}`);
      });

      cy.request("GET", "/api/books").then((respostaFinal) => {
        expect(respostaFinal.status).to.eq(200);
        expect(respostaFinal.body).to.deep.equal([]);
      });
    });
  });
});
