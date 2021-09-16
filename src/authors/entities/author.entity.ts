import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Book } from '../../books/entities/book.entity';

@ObjectType()
@Entity()
export class Author extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  nationality: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => [Book])
  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
