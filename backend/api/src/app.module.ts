import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { RawMaterialsModule } from './modules/raw-materials/raw-materials.module';
import { ProductionModule } from './modules/production/production.module';

@Module({
  imports: [ProductsModule, RawMaterialsModule, ProductionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
