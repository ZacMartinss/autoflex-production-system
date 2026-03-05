import { Test, TestingModule } from '@nestjs/testing';
import { ProductRawMaterialsService } from './product-raw-materials.service';

describe('ProductRawMaterialsService', () => {
  let service: ProductRawMaterialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRawMaterialsService],
    }).compile();

    service = module.get<ProductRawMaterialsService>(ProductRawMaterialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
