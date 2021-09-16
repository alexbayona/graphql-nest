import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  RelationId,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Author } from '../../authors/entities/author.entity';

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field()
  @Column({ nullable: true })
  cover: string;

  @Field(() => Boolean)
  @Column({ default: false })
  isPublished: boolean;

  @Field(() => Author)
  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
  @RelationId((book: Book) => book.author)
  authorId: number;
}
