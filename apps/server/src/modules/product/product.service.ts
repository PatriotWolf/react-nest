import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductQuery } from './product.type';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(query: ProductQuery): Promise<Product[]> {
    return this.productsRepository.find({
      where: {
        brand: {
          id: query.brand,
        },
        colors: {
          id: query.color,
        },
      },
      relations: { colors: true, brand: true },
    });
  }

  findOne(id: number): Promise<Product | null> {
    return this.productsRepository.findOneBy({ id });
  }

  createProduct(createProductDto: Product): Promise<Product> {
    const product: Product = new Product();
    product.name = createProductDto.name;
    product.price = createProductDto.price;
    product.image = createProductDto.image;
    product.colors = createProductDto.colors;
    return this.productsRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
