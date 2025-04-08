"use client";

import { Title } from "../../components/Title";
import { Content } from "../../components/Content";
import { RegularText } from "../../components/RegularText";
import { ContactForm } from "../../components/ContactForm";

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