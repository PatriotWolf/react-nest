import { Body, Controller, Get, Post } from '@nestjs/common';
import { ColorsService } from './color.service';
import { Color } from './color.entity';

@Controller('/api/colors')
export class ColorController {
  constructor(private readonly colorsService: ColorsService) {}

  //get all colors
  @Get()
  async findAll(): Promise<Color[]> {
    return this.colorsService.findAll();
  }

  @Post()
  create(@Body() createColorDto: Color) {
    return this.colorsService.createColor(createColorDto);
  }
}
