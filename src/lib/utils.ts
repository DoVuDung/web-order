/**
 * Utility functions for the web order application
 */

/**
 * Format price in Vietnamese Dong with proper thousand separators
 * @param price - The price in VND
 * @returns Formatted price string with ₫ symbol
 */
export function formatVND(price: number): string {
  return `${price.toLocaleString('vi-VN')} ₫`;
}

/**
 * Format price without currency symbol
 * @param price - The price in VND
 * @returns Formatted price string without ₫ symbol
 */
export function formatPrice(price: number): string {
  return price.toLocaleString('vi-VN');
}

/**
 * Parse Vietnamese formatted price string back to number
 * @param priceString - Formatted price string (e.g., "25.000 ₫")
 * @returns Numeric price value
 */
export function parseVND(priceString: string): number {
  // Remove currency symbol and dots, then parse
  const cleanPrice = priceString.replace(/[₫\s]/g, '').replace(/\./g, '');
  return parseInt(cleanPrice, 10) || 0;
}

/**
 * Validate if a string contains a valid Vietnamese price
 * @param priceString - String to validate
 * @returns True if valid price format
 */
export function isValidVNDPrice(priceString: string): boolean {
  const vndPattern = /^\d{1,3}(?:\.\d{3})*(?:\s*₫)?$/;
  return vndPattern.test(priceString.trim());
}
