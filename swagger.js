// Especificação OpenAPI (usada para gerar a telinha de documentação Swagger,
// igual à do fakerestapi.azurewebsites.net)
const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Livros API",
    version: "1.0.0",
    description:
      "API de estudo para praticar testes: cadastrar, listar, buscar, atualizar e deletar livros.",
  },
  servers: [{ url: "/" }],
  tags: [{ name: "Books", description: "Operações sobre livros" }],
  paths: {
    "/api/books": {
      get: {
        tags: ["Books"],
        summary: "Lista todos os livros",
        responses: {
          200: {
            description: "Lista de livros",
            content: {
              "application/json": {
                schema: { type: "array", items: { $ref: "#/components/schemas/Book" } },
              },
            },
          },
        },
      },
      post: {
        tags: ["Books"],
        summary: "Cadastra um novo livro",
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/BookInput" } },
          },
        },
        responses: {
          201: {
            description: "Livro criado",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Book" } },
            },
          },
          400: { description: "Dados inválidos" },
        },
      },
    },
    "/api/books/{id}": {
      get: {
        tags: ["Books"],
        summary: "Busca um livro específico pelo id",
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
        ],
        responses: {
          200: {
            description: "Livro encontrado",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Book" } },
            },
          },
          404: { description: "Livro não encontrado" },
        },
      },
      put: {
        tags: ["Books"],
        summary: "Atualiza um livro existente",
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/BookInput" } },
          },
        },
        responses: {
          200: {
            description: "Livro atualizado",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Book" } },
            },
          },
          404: { description: "Livro não encontrado" },
        },
      },
      delete: {
        tags: ["Books"],
        summary: "Deleta um livro",
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } },
        ],
        responses: {
          204: { description: "Livro deletado com sucesso" },
          404: { description: "Livro não encontrado" },
        },
      },
    },
  },
  components: {
    schemas: {
      BookInput: {
        type: "object",
        required: ["title", "author"],
        properties: {
          title: { type: "string", example: "O Senhor dos Anéis" },
          author: { type: "string", example: "J.R.R. Tolkien" },
          pageCount: { type: "integer", example: 576 },
          description: { type: "string", example: "Uma jornada épica pela Terra-média." },
          publishDate: { type: "string", format: "date", example: "1954-07-29" },
        },
      },
      Book: {
        allOf: [
          { type: "object", properties: { id: { type: "integer", example: 1 } } },
          { $ref: "#/components/schemas/BookInput" },
        ],
      },
    },
  },
};

module.exports = swaggerSpec;
