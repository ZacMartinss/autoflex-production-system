import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';

@Controller('raw-materials')
export class RawMaterialsController {

  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @Post()
  create(@Body() body) {
    return this.rawMaterialsService.create(body);
  }

  @Get()
  findAll() {
    return this.rawMaterialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rawMaterialsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.rawMaterialsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rawMaterialsService.remove(id);
  }

}