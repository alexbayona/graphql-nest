import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) {}

  findAll() {
    const employees = this.authorsRepository.find();

    return employees;
  }

  findOne(id: number) {
    const employee = this.authorsRepository.findOne(id);

    return employee;
  }
}
