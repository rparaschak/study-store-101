import _ from 'lodash';

import { Book } from '../schemas/Book.js';

export class BookController {

  static async getAllBooks(req, res) {
    const { genres, title, sort } = req.query;

    const booksFilter = _.pickBy({
      title,
      genres: { $in: genres?.split(',') },
    });

    const books = await Book
      .find(booksFilter)
      .sort(sort);

    res.status(200).json(books);
  }

  static async getBook(req, res) {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);

    res.status(200).json(book);
  }

}
