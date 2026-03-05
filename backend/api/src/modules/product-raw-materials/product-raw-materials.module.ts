import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductRawMaterialsController } from './product-raw-materials.controller';
import { ProductRawMaterialsService } from './product-raw-materials.service';

import { ProductRawMaterial } from '../../entities/product-raw-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRawMaterial])],
  controllers: [ProductRawMaterialsController],
  providers: [ProductRawMaterialsService],
})
export class ProductRawMaterialsModule {}