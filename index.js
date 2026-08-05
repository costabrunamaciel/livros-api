const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// --- "Banco de dados" em memória (zera quando reinicia a API) ---
let books = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    pageCount: 576,
    description: "Uma jornada épica pela Terra-média.",
    publishDate: "1954-07-29",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    pageCount: 328,
    description: "Uma distopia sobre vigilância e totalitarismo.",
    publishDate: "1949-06-08",
  },
];
let nextId = 3;

// --- Documentação (Swagger), disponível em /docs ---
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req, res) => res.redirect("/docs"));

// --- Rotas de Livros ---

// Listar todos os livros
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Buscar um livro específico pelo id
app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ message: "Livro não encontrado." });
  res.json(book);
});

// Cadastrar um novo livro
app.post("/api/books", (req, res) => {
  const { title, author, pageCount, description, publishDate } = req.body;

  if (!title || !author) {
    return res
      .status(400)
      .json({ message: "Os campos 'title' e 'author' são obrigatórios." });
  }

  const newBook = {
    id: nextId++,
    title,
    author,
    pageCount: pageCount ?? null,
    description: description ?? "",
    publishDate: publishDate ?? null,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Atualizar um livro existente
app.put("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ message: "Livro não encontrado." });

  const { title, author, pageCount, description, publishDate } = req.body;
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  if (pageCount !== undefined) book.pageCount = pageCount;
  if (description !== undefined) book.description = description;
  if (publishDate !== undefined) book.publishDate = publishDate;

  res.json(book);
});

// Deletar um livro
app.delete("/api/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Livro não encontrado." });

  books.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Livros API rodando em http://localhost:${PORT}`);
  console.log(`Documentação (Swagger) em http://localhost:${PORT}/docs`);
});
