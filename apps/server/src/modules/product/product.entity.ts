import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Color } from '../color/color.entity';
import { Brand } from '../brand/brand.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column()
  image: string;

  @ManyToOne(() => Brand, (brand) => brand)
  brand: Brand;

  @ManyToMany(() => Color, { cascade: true })
  @JoinTable()
  colors: Color[];
}
