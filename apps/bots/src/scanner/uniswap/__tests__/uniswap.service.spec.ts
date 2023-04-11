import { Test, TestingModule } from '@nestjs/testing';
import { UniSwapService } from '../uniswap.service';

describe('UniswapService', () => {
  let service: UniSwapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniSwapService],
    }).compile();

    service = module.get<UniSwapService>(UniSwapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
