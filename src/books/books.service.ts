import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';

import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  findAll(options?: FindManyOptions<Book>) {
    const books = this.booksRepository.find({ ...options });

    return books;
  }

  async getBooksWithAuthors() {
    return this.findAll({
      relations: ['author'],
    });
  }

  findOne(id: number) {
    const book = this.booksRepository.findOne(id);

    return book;
  }
}
