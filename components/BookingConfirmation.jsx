import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/router';

const BookingConfirmation = ({ bookingDetails }) => {
    const router = useRouter();
    router.push('/my-bookings');

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Booking Confirmed!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for booking with us. We're excited to have you on board!
      </p>

      <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-xl text-left">
        <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li><strong>Name:</strong> {bookingDetails.name}</li>
          <li><strong>Service:</strong> {bookingDetails.service}</li>
          <li><strong>Date:</strong> {bookingDetails.date}</li>
          <li><strong>Location:</strong> {bookingDetails.location}</li>
          <li><strong>Booking ID:</strong> {bookingDetails.bookingId}</li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate('/my-bookings')}
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          View My Bookings
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
