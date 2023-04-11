import { JsonRpcProvider } from '@ethersproject/providers';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChainId, Fetcher, Route, Token } from 'quickswap-sdk';

@Injectable()
export class QuickSwapService {
  private readonly logger = new Logger(QuickSwapService.name);

  private readonly provider: JsonRpcProvider;

  constructor(private readonly config: ConfigService) {
    const alchemyUrl = this.config.get('ALCHEMY.URL');
    const alchemyApikey = this.config.get('ALCHEMY.API_KEY');

    this.provider = new JsonRpcProvider(`${alchemyUrl}${alchemyApikey}`);
  }

  async getPrice(token0: string, token1: string): Promise<any> {
    this.logger.log(`Getting QuickSwap price for `);

    const t0 = new Token(ChainId.MATIC, token0, 18);
    const t1 = new Token(ChainId.MATIC, token1, 18);

    console.log(t0);

    const pair = await Fetcher.fetchPairData(t0, t1, this.provider);

    const route = new Route([pair], t0);

    return route.midPrice.toSignificant(6);
  }
}
