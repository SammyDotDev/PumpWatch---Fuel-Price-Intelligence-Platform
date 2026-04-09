export const GRADE_LABELS: Record<string, string> = {
  regular: 'Regular',
  midgrade: 'Mid-Grade',
  premium: 'Premium',
  diesel: 'Diesel',
  e85: 'E85',
};

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function formatReportTime(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString();
}

export function isPriceDrop(currentValue: number, previousValue: number): boolean {
  return currentValue < previousValue;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
