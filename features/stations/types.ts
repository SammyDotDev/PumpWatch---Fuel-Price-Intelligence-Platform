export type FuelGrade = 'regular' | 'midgrade' | 'premium' | 'diesel' | 'e85';

export interface FuelPrice {
  grade: FuelGrade;
  price: number;
  reportedAt: string;
}

export interface Station {
  id: string;
  name: string;
  brand: string;
  address: string;
  latitude: number;
  longitude: number;
  prices: FuelPrice[];
  distance?: number;
}

export interface StationListItem extends Station {
  bestPrice: number;
  hasPriceDrop: boolean;
}

export interface NearbyStationsQuery {
  latitude: number;
  longitude: number;
  radius: number;
}

export interface PriceReportPayload {
  stationId: string;
  grade: FuelGrade;
  price: number;
}
