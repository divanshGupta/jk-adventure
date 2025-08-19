import React, { useState } from "react";
import { set } from "zod";

const ContactForm = () => {
  const [packageName, setPackageName] = useState("");
  const [travellers, setTravellers] = useState("");
  const [specialReq, setSpecialReq] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const GAS_URL = "https://script.google.com/macros/s/AKfycbzMQ7gbSWsxsBwh1sRxCC0cexxJNGrDO0zEEgaVChWmaSccl2V0Q-wWJJeD2ILLA3YEBw/exec"; // Replace with Apps Script web app URL

const onSubmit = async (e) => {
  e.preventDefault();
  const payload = {
    name,
    email,
    phone,
    specialReq,
    travellers,
    packageName,
  };

  try {
    const res = await fetch(GAS_URL, {
      method: "POST",
      mode: "no-cors", // required for Apps Script
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Form submitted successfully!");
    setName("");
    setEmail("");
    setPhone("");
    setSpecialReq("");
    setTravellers(""); 
    setPackageName("");
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
};

  return (
    <div className="w-full flex justify-center bg-gray-50 py-10 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Connect With Us
        </h2>
        <p className="text-gray-500 text-center">
          Fill out the form and our team will get back to you shortly.
        </p>

        {/* Grid for responsive fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Package Name</label>
            <input
              type="text"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Package Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Travellers</label>
            <input
              type="number"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Number of Travellers"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Special Requests</label>
          <input
            type="text"
            value={specialReq}
            onChange={(e) => setSpecialReq(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Any special requirements"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Full Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your Phone Number"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
