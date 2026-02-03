/**
 * Interface definition for CoralSwap flash loan receivers.
 *
 * Contracts that wish to receive flash loans must implement the
 * on_flash_loan callback. This module provides TypeScript types
 * and helper utilities for building flash loan receiver contracts.
 */

/**
 * Parameters passed to the on_flash_loan callback.
 */
export interface OnFlashLoanParams {
  sender: string;
  token: string;
  amount: bigint;
  fee: bigint;
  data: Buffer;
}

/**
 * Expected return value from the flash loan callback.
 * The receiver must return true if the operation succeeded.
 */
export type FlashLoanCallbackResult = boolean;

/**
 * Helper to encode flash loan callback data for cross-contract calls.
 */
export function encodeFlashLoanData(params: Record<string, unknown>): Buffer {
  return Buffer.from(JSON.stringify(params));
}

/**
 * Helper to decode flash loan callback data.
 */
export function decodeFlashLoanData<T = Record<string, unknown>>(data: Buffer): T {
  return JSON.parse(data.toString()) as T;
}

/**
 * Calculate the minimum repayment amount (principal + fee).
 */
export function calculateRepayment(amount: bigint, feeBps: number): bigint {
  const fee = (amount * BigInt(feeBps)) / BigInt(10000);
  return amount + fee;
}

/**
 * Validate that a fee meets the protocol floor (5 bps minimum).
 */
export function validateFeeFloor(feeBps: number, floor: number = 5): boolean {
  return feeBps >= floor;
}
