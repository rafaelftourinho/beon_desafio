import { Request, Response } from "express";
import { validate } from "uuid";
import { getAllBooks, getBookByTitle, getBooksByYearInterval, getOneBook } from "../services/Book.service";

async function getBooksController(req: Request, res: Response) {
  const { page } = req.query;
  const books = await getAllBooks(Number(page));
  
  
  res.status(200).json(books);
};

async function getBookByTitleController(req: Request, res: Response) {
  const { page } = req.query;
  const book = await getBookByTitle(req.params.title, Number(page));

  if (book.type) return res.status(book.type).json(book.message);

  res.status(200).json(book);
}


async function getOneBookController(req: Request, res: Response) {
  const { id } = req.params;

  if (!validate(id)) return res.status(400).json({ message: "Id inválido" });

  const book = await getOneBook(id);
  console.log(book);
  

  if (book.type) return res.status(book.type).json(book.message);
  res.status(200).json(book);
}

async function getBooksByYearIntervalController(req: Request, res: Response) {
  const { page } = req.query;
  const book = await getBooksByYearInterval(req.params.year1, req.params.year2, Number(page));

  if (book.type) return res.status(book.type).json(book.message);

  res.status(200).json(book);
}

export {
  getBooksController,
  getBookByTitleController,
  getOneBookController,
  getBooksByYearIntervalController,
}
