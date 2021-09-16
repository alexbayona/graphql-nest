import { Resolver, Query, Args, Int, Info } from '@nestjs/graphql';
import {
  parseResolveInfo,
  ResolveTree,
  simplifyParsedResolveInfoFragmentWithType,
} from 'graphql-parse-resolve-info';
import { GraphQLResolveInfo } from 'graphql';

import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => [Author], { name: 'authors' })
  findAll(@Info() info: GraphQLResolveInfo) {
    const parsedInfo = parseResolveInfo(info) as ResolveTree;
    const simplifiedInfo = simplifyParsedResolveInfoFragmentWithType(
      parsedInfo,
      info.returnType,
    );

    const posts =
      'books' in simplifiedInfo.fields
        ? this.authorsService.getAuthorsWithBooks()
        : this.authorsService.findAll();

    return posts;
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOne(id);
  }
}
