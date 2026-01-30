/**
 * Flash loan request parameters.
 */
export interface FlashLoanRequest {
  pairAddress: string;
  token: string;
  amount: bigint;
  receiverAddress: string;
  callbackData: Buffer;
}

/**
 * Flash loan execution result.
 */
export interface FlashLoanResult {
  txHash: string;
  token: string;
  amount: bigint;
  fee: bigint;
  ledger: number;
}

/**
 * Flash loan fee estimate.
 */
export interface FlashLoanFeeEstimate {
  token: string;
  amount: bigint;
  feeBps: number;
  feeAmount: bigint;
  feeFloor: number;
}

/**
 * Interface that flash loan receivers must implement.
 */
export interface FlashLoanReceiverParams {
  sender: string;
  token: string;
  amount: bigint;
  fee: bigint;
  data: Buffer;
}
