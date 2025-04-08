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

export default function Kontakt() {
  return (
    <Content>
      <div className="flex flex-col space-y-[86px]">
        {/* Header Section */}
        <div className="flex flex-col space-y-6 mb-12">
          <Title withStroke>Ihr direkter Draht zu uns</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Farbe bekennen, Qualität erleben.
          </RegularText>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
          {/* Left Column - Contact Information */}
          <div className="w-full md:w-1/2 flex flex-col space-y-8 mb-12">
            <div className="space-y-4">
              <Title fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Ihre Anfrage
              </Title>
              <RegularText>
                Gerne beraten wir Sie zu Ihrem Projekt. Nutzen Sie unser
                Kontaktformular oder kontaktieren Sie uns direkt.
              </RegularText>
              <RegularText>
                Wir melden uns zeitnah bei Ihnen zurück und besprechen Ihre
                individuellen Wünsche.
              </RegularText>
            </div>

            <div className="space-y-4">
              <Title fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Geschäftszeiten
              </Title>

              <div className="space-y-2 font-montserrat">
                <div className="flex justify-between">
                  <RegularText>Montag - Donnerstag:</RegularText>
                  <RegularText>8:00 - 17:00 Uhr</RegularText>
                </div>
                <div className="flex justify-between">
                  <RegularText>Freitag:</RegularText>
                  <RegularText>8:00 - 12:00 Uhr</RegularText>
                </div>
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