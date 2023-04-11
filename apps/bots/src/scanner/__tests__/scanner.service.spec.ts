import { Test, TestingModule } from '@nestjs/testing';
import { ScannerService } from '../scanner.service';
import { QuickSwapService } from '../quickswap.service';
import { StubbedInstance, stubInterface } from 'ts-sinon';

describe('ScannerService', () => {
  let service: ScannerService;

  const mockQuickSwapService: StubbedInstance<QuickSwapService> =
    stubInterface<QuickSwapService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: QuickSwapService,
          useValue: mockQuickSwapService,
        },
        ScannerService,
      ],
    }).compile();

    service = module.get<ScannerService>(ScannerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
