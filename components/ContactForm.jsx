"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const inputStyles =
    "p-4 bg-[#ded5d0] text-black font-montserrat border border-[#000000] rounded-none focus:outline-none focus:ring-0";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className={inputStyles}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className={inputStyles}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefonnummer"
        value={formData.phone}
        onChange={handleChange}
        required
        className={inputStyles}
      />
      <textarea
        name="message"
        placeholder="Nachricht"
        value={formData.message}
        onChange={handleChange}
        rows="6"
        required
        className={inputStyles}
      />
      <button
        type="submit"
        className="bg-[#ded5d0] text-[#000000] p-4 transition-all duration-200 hover:bg-[#889cab] hover:text-[#ded5d0] font-montserrat border border-[#000000]"
      >
        Nachricht senden
      </button>

      <Link
        href="tel:+4917632345137"
        className="bg-[#ded5d0] text-[#000000] p-4 transition-all duration-200 hover:bg-[#889cab] hover:text-[#ded5d0] text-center font-montserrat border border-[#000000]"
      >
        Anrufen
      </Link>

      <div className="text-center mt-2 font-montserrat">
        {status === "sending" && <p className="text-[#000000]">Senden...</p>}
        {status === "success" && (
          <p className="text-green-600">E-Mail erfolgreich gesendet!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Fehler beim Senden!</p>
        )}
      </div>
    </form>
  );
}