import { TradeType } from './common';

/**
 * Swap request parameters.
 */
export interface SwapRequest {
  tokenIn: string;
  tokenOut: string;
  amount: bigint;
  tradeType: TradeType;
  slippageBps?: number;
  deadline?: number;
  to?: string;
}

/**
 * Swap quote returned before execution.
 */
export interface SwapQuote {
  tokenIn: string;
  tokenOut: string;
  amountIn: bigint;
  amountOut: bigint;
  amountOutMin: bigint;
  priceImpactBps: number;
  feeBps: number;
  feeAmount: bigint;
  path: string[];
  deadline: number;
}

/**
 * Swap execution result.
 */
export interface SwapResult {
  txHash: string;
  amountIn: bigint;
  amountOut: bigint;
  feePaid: bigint;
  ledger: number;
  timestamp: number;
}
