import { useRouter } from 'next/router';
import { fakeBookings } from '@/lib/dummyBookings';

export default function BookingDetail() {
    const router = useRouter()
  const { slug } = useRouter().query;

  if (!router.isReady || !slug) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const booking = fakeBookings.find(p => p.slug === slug )

  if (!booking) {
    return <p className="text-center mt-20 text-red-500">Booking not found.</p>;
  }


  return (
    <div className="max-w-3xl mt-14 md:mt-20 p-4 md:p-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{booking.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{booking.type}</p>

      <div className="bg-white rounded-xl shadow p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
          <p><strong>Visiting Date:</strong> {booking.visitingDate}</p>
          <p><strong>Price:</strong> {booking.price}</p>
          <p><strong>Status:</strong> {booking.status}</p>
        </div>

        <div className="flex gap-4 mt-2">
          <a href={`tel:${booking.contact.phone}`} className="text-blue-600 hover:underline">Call</a>
          <a href={booking.contact.whatsapp} target="_blank" className="text-green-600 hover:underline">WhatsApp</a>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200">Cancel Booking</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">Edit Details</button>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Add Message</label>
          <textarea className="w-full border rounded p-2 text-sm" rows={3} placeholder="Write your message..." />
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
        </div>
      </div>
    </div>
  );
}
