import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductRawMaterialsService } from './product-raw-materials.service';

@Controller('product-raw-materials')
export class ProductRawMaterialsController {

  constructor(private readonly service: ProductRawMaterialsService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

}