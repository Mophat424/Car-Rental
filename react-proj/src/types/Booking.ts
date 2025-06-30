export interface Booking {
  bookingID: number;
  carID: number;
  rentalStartDate: string;
  rentalEndDate: string;
  totalAmount: string;
  userId?: string; // optional for Admin view
}
