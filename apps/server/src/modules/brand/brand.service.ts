import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandsRepository: Repository<Brand>,
  ) {}

  findAll(): Promise<Brand[]> {
    console.log(this.brandsRepository);
    return this.brandsRepository.find();
  }

  findOne(id: number): Promise<Brand | null> {
    return this.brandsRepository.findOneBy({ id });
  }

  createBrand(createBrandDto: Brand): Promise<Brand> {
    const brand: Brand = new Brand();
    brand.name = createBrandDto.name;
    brand.image = createBrandDto.image;
    return this.brandsRepository.save(brand);
  }

  async remove(id: number): Promise<void> {
    await this.brandsRepository.delete(id);
  }
}
