import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('product_raw_materials')
export class ProductRawMaterial {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;

  @Column()
  raw_material_id: number;

  @Column()
  quantity: number;

}