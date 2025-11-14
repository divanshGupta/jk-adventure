import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import withAdminAuth from "@/lib/withAdminAuth";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*, users(full_name, email), packages(title)");
    if (error) console.error("Error fetching bookings:", error);
    else setBookings(data);
  };

  const deleteBooking = async (id) => {
    const { error } = await supabase.from("bookings").delete().eq("id", id);
    if (error) console.error("Error deleting booking:", error);
    else fetchBookings();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Bookings</h2>
      <ul className="space-y-2">
        {bookings.map((booking) => (
          <li
            key={booking.id}
            className="flex justify-between items-center border p-3 rounded-md"
          >
            <div>
              <p>
                <span className="font-semibold">User:</span>{" "}
                {booking.users?.full_name} ({booking.users?.email})
              </p>
              <p>
                <span className="font-semibold">Package:</span>{" "}
                {booking.packages?.title}
              </p>
              <p className="text-sm text-gray-500">
                Travellers: {booking.travellers} | Date: {booking.date}
              </p>
            </div>
            <button
              onClick={() => deleteBooking(booking.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default withAdminAuth(AdminBookings);
