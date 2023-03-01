import { Router } from 'express';
import { getBooksController, getBookByTitleController } from '../controllers/Books.controller';
import booksRepository from '../models/om/BooksSchema';

const router = Router();

router.get('/', getBooksController);
router.get('/:title', getBookByTitleController);
router.get('/all', async (_req, res) => {
  const books = await booksRepository.search().return.all();
  res.send(books);
});

export default router;
