import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './color.entity';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private colorsRepository: Repository<Color>,
  ) {}

  findAll(): Promise<Color[]> {
    console.log(this.colorsRepository);
    return this.colorsRepository.find();
  }

  findOne(id: number): Promise<Color | null> {
    return this.colorsRepository.findOneBy({ id });
  }

  createColor(createColorDto: Color): Promise<Color> {
    const color: Color = new Color();
    color.name = createColorDto.name;
    color.code = createColorDto.code;
    return this.colorsRepository.save(color);
  }

  async remove(id: number): Promise<void> {
    await this.colorsRepository.delete(id);
  }
}
