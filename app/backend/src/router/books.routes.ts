import { Router } from 'express';
import { getBooksController, getBookByTitleController, getOneBookController, getBooksByYearIntervalController } from '../controllers/Books.controller';

const router = Router();

router.get('/', getBooksController);
router.get('/:title', getBookByTitleController);
router.get('/:id', getOneBookController);
router.get('/:year1/:year2', getBooksByYearIntervalController);

export default router;
