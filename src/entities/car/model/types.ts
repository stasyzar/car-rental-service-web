export type CarClass = 'ECONOMY' | 'COMPACT' | 'STANDARD' | 'PREMIUM' | 'LUXURY' | 'MINIVAN' | 'SUV';
export type CarType = 'SEDAN' | 'SUV' | 'WAGON' | 'HATCHBACK';
export type CarStatus = 'AVAILABLE' | 'RENTED' | 'UNAVAILABLE';
export type TransmissionType = 'MANUAL' | 'AUTOMATIC';
export type FuelType = 'PETROL' | 'DIESEL' | 'ELECTRIC' | 'HYBRID';

export interface CarSpecification {
  transmission: TransmissionType;
  fuelType: FuelType;
  seatingCapacity: number;
  doorsQuantity: number;
  bagQuantity: number;
  hasAirConditioning: boolean;
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  type: CarType;
  color: string;
  licensePlate: string;
  status: CarStatus;
  dailyFee: number;
  mainImageUrl: string | null;
  locationId: number | null;
  carClass: CarClass;
  specification?: CarSpecification;
  imagePaths?: string[];
}

export interface CarRequest {
  brand: string;
  model: string;
  type: CarType;
  color: string;
  licensePlate: string;
  status: CarStatus;
  dailyFee: number;
  locationId: number;
  carClass: CarClass;
  specification: CarSpecification;
}
