import { Test, TestingModule } from '@nestjs/testing';
import { ClothigService } from './clothig.service';

describe('ClothigService', () => {
  let service: ClothigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClothigService],
    }).compile();

    service = module.get<ClothigService>(ClothigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
