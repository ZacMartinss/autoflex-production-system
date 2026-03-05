import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Production } from '../../entities/production.entity';
import { ProductRawMaterial } from '../../entities/product-raw-material.entity';
import { RawMaterial } from '../../entities/raw-material.entity';
import { ProductionService } from './production.service';
import { ProductionController } from './production.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Production,
      ProductRawMaterial,
      RawMaterial
    ])
  ],
  controllers: [ProductionController],
  providers: [ProductionService],
})
export class ProductionModule {}