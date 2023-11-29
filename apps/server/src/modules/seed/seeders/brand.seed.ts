import { Seeder } from 'typeorm-seeding';
import { Brand } from '../../brand/brand.entity';
import { faker } from '@faker-js/faker';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export default class BrandSeeder implements Seeder {
  constructor(
    @InjectRepository(Brand)
    private brandsRepository: Repository<Brand>,
  ) {}
  public async run(): Promise<any> {
    for (let i = 0; i < 15; i++) {
      const brand: Omit<Brand, 'id'> = {
        name: faker.person.middleName(),
        image: faker.image.urlLoremFlickr({ category: 'logo' }),
      };
      await this.brandsRepository.save(brand);
    }
  }
}
