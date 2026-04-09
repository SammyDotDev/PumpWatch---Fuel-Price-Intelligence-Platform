export type ReportStatus = 'verified' | 'pending' | 'rejected';

export interface PriceReport {
  id: string;
  stationName: string;
  grade: string;
  price: number;
  reportedAt: string;
  status: ReportStatus;
}

export interface ReportHistoryStats {
  verifiedReports: number;
  totalSavings: number;
}
