import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './modules/products/products.module';
import { RawMaterialsModule } from './modules/raw-materials/raw-materials.module';
import { ProductRawMaterialsModule } from './modules/product-raw-materials/product-raw-materials.module';
import { ProductionModule } from './modules/production/production.module';

@Module({
  imports: [
    DatabaseModule,
    ProductsModule,
    RawMaterialsModule,
    ProductRawMaterialsModule,
    ProductionModule
  ],
})
export class AppModule {}