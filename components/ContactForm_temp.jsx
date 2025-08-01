import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    travellerCount: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead captured:', form);

    // TODO: Send to Supabase or Google Sheet
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md max-w-xl w-full"
      aria-label="Contact Form"
    >
      {/* <div className="text-center">
        <h2 className="text-xl font-semibold">Kashmir Retreat | Romantic Escape To Doodhpathri</h2>
        <p className="text-lg font-bold text-green-600 mt-1">INR 20,000 <span className="line-through text-gray-500 text-sm ml-2">INR 28,986</span> <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm ml-2">SAVE INR 8,986</span></p>
      </div> */}

      <input
        type="text"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        aria-label="Full Name"
        required
        className="p-4 w-full border border-gray-400 rounded-md"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        aria-label="Email"
        required
        className="p-4 w-full border border-gray-400 rounded-md"
      />

      <div className="flex w-full">
        <span className="flex items-center px-4 border border-gray-400 rounded-l-md bg-gray-100">+91</span>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          aria-label="Phone Number"
          required
          className="p-4 w-full border-t border-b border-r border-gray-400 rounded-r-md"
        />
      </div>

      <div className="flex gap-4 w-full">
        <input
          type="date"
          name="travelDate"
          value={form.travelDate}
          onChange={handleChange}
          placeholder="Travel Date"
          aria-label="Travel Date"
          required
          className="p-4 w-full border border-gray-400 rounded-md"
        />
        <input
          type="number"
          name="travellerCount"
          value={form.travellerCount}
          onChange={handleChange}
          placeholder="Traveller Count"
          aria-label="Traveller Count"
          required
          className="p-4 w-full border border-gray-400 rounded-md"
        />
      </div>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message..."
        aria-label="Your Message"
        rows="4"
        className="p-4 w-full border border-gray-400 rounded-md"
      ></textarea>

      <button
        type="submit"
        className="p-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
      >
        Connect With An Expert
      </button>
    </form>
  );
};

export default ContactForm;
