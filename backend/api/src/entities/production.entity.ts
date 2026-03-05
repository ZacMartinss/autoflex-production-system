import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('productions')
export class Production {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;

  @Column()
  quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  production_date: Date;

}