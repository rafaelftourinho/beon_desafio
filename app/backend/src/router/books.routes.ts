import { Router } from 'express';
import { getBooksController, getBookByTitleController } from '../controllers/Books.controller';

const router = Router();

router.get('/', getBooksController);
router.get('/:title', getBookByTitleController);

export default router;
