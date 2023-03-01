import { Request, Response } from "express";
import { getAllBooks, getBookByTitle } from "../services/Book.service";

async function getBooksController(_req: Request, res: Response) {
  const books = await getAllBooks();
  res.json(books);
};

async function getBookByTitleController(req: Request, res: Response) {
  const book = await getBookByTitle(req.params.title);
  res.json(book);
}

export {
  getBooksController,
  getBookByTitleController,
}
