import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Zod Schema for booking form
const bookingSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  service: z.enum(["tour", "taxi", "adventure"], {
    errorMap: () => ({ message: "Please select a service" }),
  }),
  packageName: z.string().nonempty("Package is required"),
  date: z.string().refine(
    (date) => new Date(date) >= new Date(),
    "Date must be today or later"
  ),
  travelers: z.coerce.number().min(1, "At least 1 traveler"),
  specialRequests: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data) => {
  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyLgxNXw7NPS3HQ2FiqjE5x8Ki37fTuiTcbNp81khJBpVPHrJJAhBoDXSxQGt7n6emn/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("Google Sheets result:", result);

    if (result.result === "success") {
      alert("✅ Booking successful!");
    } else {
      alert("❌ Google Sheets failed: " + result.message);
    }
  } catch (err) {
    console.error("Network/Script Error:", err);
    alert("Something went wrong. Try again.");
  }
};


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-lg mx-auto bg-white shadow rounded">
      
      {/* Name */}
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input {...register("fullName")} className="w-full border p-2 rounded" placeholder="John Doe" />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input {...register("email")} className="w-full border p-2 rounded" placeholder="you@example.com" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input {...register("phone")} className="w-full border p-2 rounded" placeholder="9876543210" />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium">Service</label>
        <select {...register("service")} className="w-full border p-2 rounded">
          <option value="">Select a service</option>
          <option value="tour">Tour</option>
          <option value="taxi">Taxi</option>
          <option value="adventure">Adventure</option>
        </select>
        {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
      </div>

      {/* Package */}
      <div>
        <label className="block text-sm font-medium">Package</label>
        <input {...register("packageName")} className="w-full border p-2 rounded" placeholder="Package name" />
        {errors.packageName && <p className="text-red-500 text-sm">{errors.packageName.message}</p>}
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input type="date" {...register("date")} className="w-full border p-2 rounded" />
        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
      </div>

      {/* Travelers */}
      <div>
        <label className="block text-sm font-medium">Number of Travelers</label>
        <input type="number" {...register("travelers")} className="w-full border p-2 rounded" min="1" />
        {errors.travelers && <p className="text-red-500 text-sm">{errors.travelers.message}</p>}
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-medium">Special Requests (optional)</label>
        <textarea {...register("specialRequests")} className="w-full border p-2 rounded" placeholder="Any special notes..." />
      </div>

      {/* Terms */}
      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("agree")} />
        <label>I agree to the terms & conditions</label>
      </div>
      {errors.agree && <p className="text-red-500 text-sm">{errors.agree.message}</p>}

      {/* Submit */}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Book Now
      </button>
    </form>
  );
}
