// components/BookingCard.tsx
import Link from 'next/link';

export default function BookingCard({ booking }) {
  return (
    <Link href={`/bookings/${booking.slug}`}>
      <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4 cursor-pointer mb-2">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{booking.title}</h2>
            <p className="text-sm text-gray-500">{booking.type}</p>
          </div>
          <span className="text-xs text-gray-400">{booking.bookingDate}</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">Status: {booking.status}</div>
      </div>
    </Link>
  );
}
