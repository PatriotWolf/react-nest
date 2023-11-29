import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductPaginate, ProductQuery } from './product.type';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  paginateResponse(
    data: [Product[], number],
    page: number,
    limit: number,
  ): ProductPaginate {
    const [result, total] = data;
    const lastPage = Math.ceil(total / limit);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;
    return {
      data: [...result],
      count: total,
      currentPage: page,
      nextPage: nextPage,
      prevPage: prevPage,
      lastPage: lastPage,
    };
  }
  async findAll(query: ProductQuery): Promise<ProductPaginate> {
    const take = 6;
    const page = query.page || 1;
    const skip = (page - 1) * take;
    const data = await this.productsRepository.findAndCount({
      where: {
        name: query.name ? ILike(`%${query.name}%`) : undefined,
        brand: {
          id: query.brand,
        },
        colors: {
          id: query.color,
        },
      },
      take,
      skip,
      relations: { colors: true, brand: true },
    });
    return this.paginateResponse(data, page, take);
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
