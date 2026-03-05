import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RawMaterial } from '../../entities/raw-material.entity';

@Injectable()
export class RawMaterialsService {

  constructor(
    @InjectRepository(RawMaterial)
    private rawMaterialRepository: Repository<RawMaterial>,
  ) {}

  create(data: Partial<RawMaterial>) {
    const material = this.rawMaterialRepository.create(data);
    return this.rawMaterialRepository.save(material);
  }

  findAll() {
    return this.rawMaterialRepository.find();
  }

  findOne(id: number) {
    return this.rawMaterialRepository.findOne({
      where: { id }
    });
  }

  update(id: number, data: Partial<RawMaterial>) {
    return this.rawMaterialRepository.update(id, data);
  }

  remove(id: number) {
    return this.rawMaterialRepository.delete(id);
  }

}