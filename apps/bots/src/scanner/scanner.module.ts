import { Module } from '@nestjs/common';
import { ScannerService } from './scanner.service';
import { UniswapModule } from './uniswap/uniswap.module';
import { QuickswapModule } from './quickswap/quickswap.module';

@Module({
  providers: [ScannerService],
  imports: [UniswapModule, QuickswapModule],
})
export class ScannerModule {}
