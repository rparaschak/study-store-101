import express from 'express';

import { BookController } from './controllers/books-controller.js';

const router = express.Router()

/** Books routes */
router.get('/books', BookController.getAllBooks);
router.get('/books/:bookId', BookController.getBook);

/** Authors routes */
// router.get('/authors/:authorId', BookController.getAllBooks);

/** Orders routes */
// router.put('/orders', BookController.getAllBooks);

export default router;
