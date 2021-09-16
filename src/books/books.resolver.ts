import { Resolver, Query, Args, Int, Info } from '@nestjs/graphql';
import {
  parseResolveInfo,
  ResolveTree,
  simplifyParsedResolveInfoFragmentWithType,
} from 'graphql-parse-resolve-info';
import { GraphQLResolveInfo } from 'graphql';

import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book], { name: 'books' })
  findAll(@Info() info: GraphQLResolveInfo) {
    const parsedInfo = parseResolveInfo(info) as ResolveTree;
    const simplifiedInfo = simplifyParsedResolveInfoFragmentWithType(
      parsedInfo,
      info.returnType,
    );

    const posts =
      'author' in simplifiedInfo.fields
        ? this.booksService.getBooksWithAuthors()
        : this.booksService.findAll();

    return posts;
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.booksService.findOne(id);
  }
}
