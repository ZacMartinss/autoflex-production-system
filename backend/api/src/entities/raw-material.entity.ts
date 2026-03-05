import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('raw_materials')
export class RawMaterial {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  stock_quantity: number;

}