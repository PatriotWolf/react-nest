import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandsService } from './brand.service';
import { Brand } from './brand.entity';

@Controller('/api/brands')
export class BrandController {
  constructor(private readonly brandsService: BrandsService) {}

  //get all brands
  @Get()
  async findAll(): Promise<Brand[]> {
    return this.brandsService.findAll();
  }

  @Post()
  create(@Body() createBrandDto: Brand) {
    return this.brandsService.createBrand(createBrandDto);
  }
}
