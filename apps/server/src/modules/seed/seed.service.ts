import { Injectable } from '@nestjs/common';
import ColorSeeder from './seeders/color.seed';
import ProductSeeder from './seeders/product.seed';
import BrandSeeder from './seeders/brand.seed';
@Injectable()
export class SeedService {
  constructor(
    private readonly colorSeeder: ColorSeeder,
    private readonly productsSeeder: ProductSeeder,
    private readonly brandsSeeder: BrandSeeder,
  ) {}

  async seed() {
    await this.colorSeeder.run();
    await this.brandsSeeder.run();
    await this.productsSeeder.run();
  }
}
