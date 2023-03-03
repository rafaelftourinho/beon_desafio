import { Router } from 'express';
import { getBooksController, getBookByTitleController, getOneBookController, getBooksByYearIntervalController } from '../controllers/Books.controller';

const router = Router();

router.get('/', getBooksController);
router.get('/id/:id', getOneBookController);
router.get('/title/:title', getBookByTitleController);
router.get('/year/:year1/:year2', getBooksByYearIntervalController);

export default router;
