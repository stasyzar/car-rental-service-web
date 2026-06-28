export interface Payment {
  id: number;
  status: 'PENDING' | 'PAID' | 'CANCELLED';
  type: 'PAYMENT' | 'FINE';
  amount: number;
  sessionUrl: string;
  sessionId: string;
  rentalId: number;
  date?: string;
  txId?: string;
}

export interface PaymentRequest {
  rentalId: number;
  type: 'PAYMENT' | 'FINE';
}
