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
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4 border rounded-md">
      <input
        type="text"
        placeholder="Package Name"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
        className="border p-2"
      />
      <input
        type="number"
        placeholder="Travellers"
        value={travellers}
        onChange={(e) => setTravellers(e.target.value)}
        className="border p-2"
      />
      <input
        type="text"
        placeholder="Special Requests"
        value={specialReq}
        onChange={(e) => setSpecialReq(e.target.value)}
        className="border p-2"
      />
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2"
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
