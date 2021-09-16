import { Seeder, Factory } from 'typeorm-seeding';
import { Author } from '../../authors/entities/author.entity';

export default class CreateAuthors implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Author)().createMany(50);
  }
}
