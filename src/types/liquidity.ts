/**
 * Add liquidity request.
 */
export interface AddLiquidityRequest {
  tokenA: string;
  tokenB: string;
  amountADesired: bigint;
  amountBDesired: bigint;
  amountAMin: bigint;
  amountBMin: bigint;
  to: string;
  deadline?: number;
}

/**
 * Remove liquidity request.
 */
export interface RemoveLiquidityRequest {
  tokenA: string;
  tokenB: string;
  liquidity: bigint;
  amountAMin: bigint;
  amountBMin: bigint;
  to: string;
  deadline?: number;
}

/**
 * Liquidity operation result.
 */
export interface LiquidityResult {
  txHash: string;
  amountA: bigint;
  amountB: bigint;
  liquidity: bigint;
  ledger: number;
}

/**
 * Quote for adding liquidity (optimal amounts).
 */
export interface AddLiquidityQuote {
  amountA: bigint;
  amountB: bigint;
  estimatedLPTokens: bigint;
  shareOfPool: number;
  priceAPerB: bigint;
  priceBPerA: bigint;
}
