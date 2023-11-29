import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from '../../database/database.config';
import { SeedService } from './seed.service';
import { Color } from '../color/color.entity';
import ColorSeeder from './seeders/color.seed';
import ProductSeeder from './seeders/product.seed';
import { Product } from '../product/product.entity';
import { Brand } from '../brand/brand.entity';
import BrandSeeder from './seeders/brand.seed';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([Color, Product, Brand]),
  ],
  controllers: [],
  providers: [SeedService, ColorSeeder, ProductSeeder, BrandSeeder],
})
export class SeedModule {}
