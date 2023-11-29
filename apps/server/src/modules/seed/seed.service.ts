import { Injectable } from '@nestjs/common';
import ColorSeeder from './seeders/color.seed';
import ProductSeeder from './seeders/product.seed';
@Injectable()
export class SeedService {
  constructor(
    private readonly colorSeeder: ColorSeeder,
    private readonly productsSeeder: ProductSeeder,
  ) {}

  async seed() {
    await this.colorSeeder.run();
    await this.productsSeeder.run();
  }
}
