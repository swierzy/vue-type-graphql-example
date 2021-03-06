import * as Bluebird from 'bluebird';
import { Book } from '../types';
import { BookRepository } from './repository';
import { Order } from './repository/AbstractRepository';

const book_repository = new BookRepository(['id']);
class BookService {
  createdBook({ name, author, description }: Book): Bluebird<Book>  {
    const book = book_repository.create({ name, author, description });
    return book;
  }

  findOne({ id }: Book): Bluebird<Book | null> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }
    return book_repository.findOne({ id });
  }

  findAll(order: Order): Bluebird<Book[]> {
    return book_repository.findAll(order);
  }

  updatedBook({ id, name, author, status, description }: Book): Bluebird<boolean> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }
    const dbBook = book_repository.findOne({ id });
    if (!dbBook) {
      return Bluebird.reject(new Error('The book is not found'));
    }
    return book_repository.update({ name, author, status, description });
  }

  deletedBook({ id }: Book): Bluebird<boolean> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }
    const dbBook = book_repository.findOne({ id });
    if (!dbBook) {
      return Bluebird.reject(new Error('The division is not found'));
    }
    return book_repository.delete({ id });
  }
}

export { BookService };
