import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './product.entity';

@Controller('/api/products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  //get all products
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() createProductDto: Product) {
    return this.productsService.createProduct(createProductDto);
  }
}
