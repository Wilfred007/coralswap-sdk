/**
 * Dynamic fee estimation for a pair.
 */
export interface FeeEstimate {
  pairAddress: string;
  currentFeeBps: number;
  baselineFeeBps: number;
  feeMin: number;
  feeMax: number;
  volatility: bigint;
  emaDecayRate: number;
  lastUpdated: number;
  isStale: boolean;
}

/**
 * Fee parameter change proposal (timelocked).
 */
export interface FeeProposal {
  actionHash: string;
  feeMin: number;
  feeMax: number;
  emaAlpha: number;
  createdAt: number;
  executeAfter: number;
  signatures: string[];
  executed: boolean;
}

/**
 * Fee history entry for analytics.
 */
export interface FeeHistoryEntry {
  ledger: number;
  timestamp: number;
  feeBps: number;
  volatility: bigint;
}
