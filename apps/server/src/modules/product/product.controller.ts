import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './product.entity';
import { ProductQuery } from './product.type';

@Controller('/api/products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  //get all products
  @Get()
  async findAll(@Query() filter: ProductQuery): Promise<Product[]> {
    return this.productsService.findAll(filter);
  }

  @Post()
  create(@Body() createProductDto: Product) {
    return this.productsService.createProduct(createProductDto);
  }
}
