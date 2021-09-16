import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Book } from '../../books/entities/book.entity';

export default class CreateBooks implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Book)().createMany(100);
  }
}
