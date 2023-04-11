import { Test, TestingModule } from '@nestjs/testing';
import { QuickSwapService } from '../quickswap.service';

describe('QuickswapService', () => {
  let service: QuickSwapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuickSwapService],
    }).compile();

    service = module.get<QuickSwapService>(QuickSwapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
