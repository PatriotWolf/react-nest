import { Seeder } from 'typeorm-seeding';
import { Product } from '../../product/product.entity';
import { Color } from '../../color/color.entity';
import { faker } from '@faker-js/faker';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from '../../brand/brand.entity';

export default class ProductSeeder implements Seeder {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Color)
    private colorsRepository: Repository<Color>,
    @InjectRepository(Brand)
    private brandsRepository: Repository<Brand>,
  ) {}

  public async run(): Promise<any> {
    const colors = await this.colorsRepository.find();
    const brands = await this.brandsRepository.find();
    for (let i = 0; i < 15; i++) {
      const product: Omit<Product, 'id'> = {
        name: faker.person.firstName(),
        price: faker.number.float({ min: 800, max: 5000, precision: 0.01 }),
        image: faker.image.urlLoremFlickr({ category: 'phone' }),
        brand: faker.helpers.arrayElement(brands),
        colors: faker.helpers.arrayElements(colors, {
          min: 1,
          max: colors.length,
        }),
      };
      await this.productsRepository.save(product);
    }
  }
}
