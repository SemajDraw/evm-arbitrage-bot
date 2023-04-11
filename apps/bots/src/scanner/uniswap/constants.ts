import { SupportedChainId, Token } from '@uniswap/sdk-core';
import { Polygon } from '../constants';

export const POOL_FACTORY_CONTRACT_ADDRESS =
  '0x1F98431c8aD98523631AE4a59f267346ea31F984';
export const QUOTER_CONTRACT_ADDRESS =
  '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6';

export const USDC_TOKEN = new Token(
  SupportedChainId.POLYGON,
  Polygon.Tokens.USDC,
  6,
  'USDC',
  'USD//C'
);
