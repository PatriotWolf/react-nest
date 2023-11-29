import { Injectable, Logger } from '@nestjs/common';
import ColorSeeder from './seeders/color.seed';
import { SeederInterface } from './types';

@Injectable()
export class SeedService {
  private readonly seeders: SeederInterface[] = [];
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly colorSeeder: ColorSeeder) {}

  async seed() {
    await this.colorSeeder.run();
  }
}
