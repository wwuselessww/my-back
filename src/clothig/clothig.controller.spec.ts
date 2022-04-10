import { Test, TestingModule } from '@nestjs/testing';
import { ClothigController } from './clothig.controller';

describe('ClothigController', () => {
  let controller: ClothigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClothigController],
    }).compile();

    controller = module.get<ClothigController>(ClothigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
