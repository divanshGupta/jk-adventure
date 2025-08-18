import { z } from "zod";

const bookingSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  service: z.enum(["tour", "taxi", "adventure"]),
  packageName: z.string().nonempty("Package is required"),
  date: z.string().refine(
    (date) => new Date(date) >= new Date(),
    "Date must be today or later"
  ),
  travelers: z.number().min(1, "At least 1 traveler"),
  specialRequests: z.string().optional(),
});

export default bookingSchema;
