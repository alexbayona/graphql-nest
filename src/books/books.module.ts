import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';

import { Book } from './entities/book.entity';
import { AuthorsModule } from 'src/authors/authors.module';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), AuthorsModule],
  providers: [BooksResolver, BooksService],
  exports: [BooksService],
})
export class BooksModule {}
