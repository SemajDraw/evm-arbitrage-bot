import { JsonRpcProvider } from '@ethersproject/providers';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { computePoolAddress } from '@uniswap/v3-sdk';
import { POOL_FACTORY_CONTRACT_ADDRESS } from './constants';
import { Token } from '@uniswap/sdk-core';

@Injectable()
export class UniSwapService {
  private readonly logger = new Logger(UniSwapService.name);

  private readonly provider: JsonRpcProvider;

  constructor(private readonly config: ConfigService) {
    const alchemyUrl = this.config.get('ALCHEMY.URL');
    const alchemyApikey = this.config.get('ALCHEMY.API_KEY');

    this.provider = new JsonRpcProvider(`${alchemyUrl}${alchemyApikey}`);
  }

  async getQuote(tokenA: Token, tokenB: Token, amount: number): Promise<any> {
    const currentPoolAddress = computePoolAddress({
      factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
      tokenA,
      tokenB,
      fee: CurrentConfig.tokens.poolFee,
    });
  }
}
