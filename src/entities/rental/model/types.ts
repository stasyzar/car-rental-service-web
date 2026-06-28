export interface Rental {
  id: number;
  rentalDate: string;
  returnDate: string;
  actualReturnDate: string | null;
  carId: number;
  carBrand: string;
  carModel: string;
  userId: number;
  customerName?: string;
  status?: 'Active' | 'Completed' | 'Overdue';
}

export interface RentalRequest {
  carId: number;
  rentalDate: string;
  returnDate: string;
}
