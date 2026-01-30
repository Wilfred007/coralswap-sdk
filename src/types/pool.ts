/**
 * On-chain pair pool state, read directly from Soroban storage.
 */
export interface PoolState {
  address: string;
  token0: string;
  token1: string;
  reserve0: bigint;
  reserve1: bigint;
  kLast: bigint;
  factory: string;
  lpToken: string;
  paused: boolean;
  protocolVersion: number;
}

/**
 * Dynamic fee state attached to each pair.
 */
export interface FeeState {
  priceLast: bigint;
  volAccumulator: bigint;
  lastUpdated: number;
  feeCurrent: number;
  feeMin: number;
  feeMax: number;
  emaAlpha: number;
  feeLastChanged: number;
  emaDecayRate: number;
  baselineFee: number;
}

/**
 * Flash loan configuration for a pair.
 */
export interface FlashLoanConfig {
  flashFeeBps: number;
  locked: boolean;
  flashFeeFloor: number;
}

/**
 * Combined pool info including reserves, fees, and flash config.
 */
export interface PoolInfo extends PoolState {
  feeState: FeeState;
  flashConfig: FlashLoanConfig;
}

/**
 * LP token position for a specific address.
 */
export interface LPPosition {
  pairAddress: string;
  lpTokenAddress: string;
  balance: bigint;
  totalSupply: bigint;
  share: number;
  token0Amount: bigint;
  token1Amount: bigint;
}
