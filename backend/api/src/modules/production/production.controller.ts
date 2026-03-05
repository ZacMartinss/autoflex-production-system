import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductionService } from './production.service';

@Controller('productions')
export class ProductionController {

  constructor(private readonly service: ProductionService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

}