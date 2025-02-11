"use client";

import { Title } from "../../components/Title";
import { Content } from "../../components/Content";
import { RegularText } from "../../components/RegularText";
import { useState, useEffect } from "react";
import Link from "next/link";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const inputStyles =
    "p-4 bg-[#ded5d0] text-black font-montserrat border border-[#000000]";

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
        className="bg-[#ded5d0] text-[#000000] p-4 transition-all duration-200 hover:bg-[#000000] hover:text-[#ded5d0] font-montserrat border border-[#000000]"
      >
        Nachricht senden
      </button>

      <Link
        href="tel:+4917632345137"
        className="bg-[#ded5d0] text-[#000000] p-4 transition-all duration-200 hover:bg-[#000000] hover:text-[#ded5d0] text-center font-montserrat border border-[#000000]"
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

export default function Kontakt() {
  return (
    <Content>
      <div className="flex flex-col space-y-16">
        {/* Header Section */}
        <div className="flex flex-col space-y-6 mb-12">
          <Title withStroke>Ihr direkter Draht zu uns</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Wir sind für Sie da
          </RegularText>
          <RegularText textColor="text-[#000000]">
            Kontaktieren Sie uns für Ihre individuellen Wünsche und Projekte
          </RegularText>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
          {/* Left Column - Contact Information */}
          <div className="w-full md:w-1/2 flex flex-col space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-fira font-medium text-[#000000]">
                Ihre Anfrage
              </h2>
              <p className="text-base font-montserrat text-black">
                Gerne beraten wir Sie zu Ihrem Projekt. Nutzen Sie unser
                Kontaktformular oder kontaktieren Sie uns direkt.
              </p>
              <p className="text-base font-montserrat text-black">
                Wir melden uns zeitnah bei Ihnen zurück und besprechen Ihre
                individuellen Wünsche.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-fira font-medium text-[#000000]">
                Geschäftszeiten
              </h2>
              <div className="space-y-2 font-montserrat">
                <p className="flex justify-between">
                  <span>Montag - Donnerstag:</span>
                  <span>8:00 - 17:00 Uhr</span>
                </p>
                <p className="flex justify-between">
                  <span>Freitag:</span>
                  <span>8:00 - 12:00 Uhr</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </Content>
  );
}
