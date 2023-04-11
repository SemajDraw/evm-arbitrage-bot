import { Module } from '@nestjs/common';
import { QuickSwapService } from './quickswap.service';

@Module({
  providers: [QuickSwapService],
  exports: [QuickSwapService],
})
export class QuickswapModule {}
