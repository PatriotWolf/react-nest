import { Seeder } from 'typeorm-seeding';
import { Color } from '../../color/color.entity';
import { faker } from '@faker-js/faker';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export default class ColorSeeder implements Seeder {
  constructor(
    @InjectRepository(Color)
    private colorsRepository: Repository<Color>,
  ) {}
  public async run(): Promise<any> {
    for (let i = 0; i < 5; i++) {
      const color = {
        name: faker.color.human(),
        code: faker.color.rgb({ casing: 'lower' }),
      };
      await this.colorsRepository.save(color);
    }
  }
}
