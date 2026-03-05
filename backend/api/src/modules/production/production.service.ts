import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Production } from '../../entities/production.entity';
import { ProductRawMaterial } from '../../entities/product-raw-material.entity';
import { RawMaterial } from '../../entities/raw-material.entity';

@Injectable()
export class ProductionService {

  constructor(
    @InjectRepository(Production)
    private productionRepository: Repository<Production>,

    @InjectRepository(ProductRawMaterial)
    private recipeRepository: Repository<ProductRawMaterial>,

    @InjectRepository(RawMaterial)
    private rawMaterialRepository: Repository<RawMaterial>,
  ) {}

  async create(data: Partial<Production>) {

    const { product_id, quantity = 0 } = data;

    // buscar receita do produto
    const recipe = await this.recipeRepository.find({
      where: { product_id }
    });

    // calcular consumo de cada matéria-prima
    for (const item of recipe) {

      const rawMaterial = await this.rawMaterialRepository.findOne({
        where: { id: item.raw_material_id }
      });

      if (!rawMaterial) {
        continue;
      }

      const consumption = item.quantity * quantity;

      await this.rawMaterialRepository.update(
        rawMaterial.id,
        {
          stock_quantity: rawMaterial.stock_quantity - consumption
        }
      );
    }

    // registrar produção
    const production = this.productionRepository.create(data);

    return this.productionRepository.save(production);
  }

  findAll() {
    return this.productionRepository.find();
  }

}