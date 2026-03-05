import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductRawMaterial } from '../../entities/product-raw-material.entity';

@Injectable()
export class ProductRawMaterialsService {

  constructor(
    @InjectRepository(ProductRawMaterial)
    private repository: Repository<ProductRawMaterial>,
  ) {}

  create(data: Partial<ProductRawMaterial>) {
    const relation = this.repository.create(data);
    return this.repository.save(relation);
  }

  findAll() {
    return this.repository.find();
  }

}