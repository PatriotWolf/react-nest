import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorsService } from './color.service';
import { ColorController } from './color.controller';
import { Color } from './color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Color])],
  providers: [ColorsService],
  controllers: [ColorController],
})
export class ColorModule {}
