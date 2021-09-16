import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  findAll() {
    const books = this.booksRepository.find();

    return books;
  }

  findOne(id: number) {
    const book = this.booksRepository.findOne(id);

    return book;
  }
}
