import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Production } from '../entities/production.entity';
import { Product } from '../entities/product.entity';
import { RawMaterial } from '../entities/raw-material.entity';
import { ProductRawMaterial } from '../entities/product-raw-material.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'autoflex_db',
      entities: [
        Product,
        RawMaterial,
        ProductRawMaterial,
        Production
      ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}