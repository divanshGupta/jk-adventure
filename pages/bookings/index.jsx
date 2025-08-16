import BookingCard from '@/components/BookingCard';
import { fakeBookings } from '@/lib/dummyBookings';

export default function BookingsPage() {
//   const bookings = [
//     {
//       id: 'tour-123',
//       type: 'Tour Package',
//       title: 'Manali Snow Escape',
//       slug: 'manali-snow-escape',
//       date: '2025-08-20',
//       status: 'Confirmed',
//     },
//     {
//       id: 'bike-456',
//       type: 'Bike Rental',
//       title: 'Royal Enfield Classic 350',
//       slug: 'classic-350-rental',
//       date: '2025-08-18',
//       status: 'Completed',
//     },
//   ];

  return (
    <div className="mt-14 md:mt-20 p-4 md:p-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Your Bookings</h1>
      <div className="space-y-4">
        {fakeBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}
