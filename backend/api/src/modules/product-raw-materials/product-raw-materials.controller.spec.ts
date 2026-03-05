import { Test, TestingModule } from '@nestjs/testing';
import { ProductRawMaterialsController } from './product-raw-materials.controller';

describe('ProductRawMaterialsController', () => {
  let controller: ProductRawMaterialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductRawMaterialsController],
    }).compile();

    controller = module.get<ProductRawMaterialsController>(ProductRawMaterialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
