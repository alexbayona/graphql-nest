import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';

import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) {}

  findAll(options?: FindManyOptions<Author>) {
    const books = this.authorsRepository.find({ ...options });

    return books;
  }

  async getAuthorsWithBooks() {
    return this.findAll({
      relations: ['books'],
    });
  }

  findOne(id: number) {
    const employee = this.authorsRepository.findOne(id);

    return employee;
  }
}
