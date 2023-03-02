import { Request, Response } from "express";
import { getAllBooks, getBookByTitle, getBooksByYearInterval, getOneBook } from "../services/Book.service";

async function getBooksController(_req: Request, res: Response) {
  const books = await getAllBooks();
  res.json(books);
};

async function getBookByTitleController(req: Request, res: Response) {
  const book = await getBookByTitle(req.params.title);
  res.json(book);
}

async function getOneBookController(req: Request, res: Response) {
  const book = await getOneBook(req.params.id);
  res.json(book);
}

async function getBooksByYearIntervalController(req: Request, res: Response) {
  const book = await getBooksByYearInterval(req.params.year1, req.params.year2);
  res.json(book);
}

export {
  getBooksController,
  getBookByTitleController,
  getOneBookController,
  getBooksByYearIntervalController,
}
