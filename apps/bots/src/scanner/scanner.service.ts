import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Polygon } from './constants';
import { QuickSwapService } from './quickswap/quickswap.service';

@Injectable()
export class ScannerService {
  private readonly logger = new Logger(ScannerService.name);

  constructor(private readonly quickSwapService: QuickSwapService) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  async scanForArbitrage(): Promise<void> {
    this.logger.log(
      `Scanning for arbitrage opportunities ${new Date().toISOString()}`
    );

    const wMaticPrice = await this.quickSwapService.getPrice(
      Polygon.Tokens.USDC,
      Polygon.Tokens.USDT
    );

    console.log(wMaticPrice);
  }
}
