import React from "react";
import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";
import Link from "next/link";

export default function Impressum() {
  return (
    <Content>
      <div className="flex flex-col space-y-12">
        <div className="space-y-6">
          <Title withStroke>Impressum</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Transparenz ist uns wichtig.
          </RegularText>
        </div>

        <div className="space-y-8">
          <div className="space-y-8">
            <Title withStroke>Angaben gemäß § 5 TMG</Title>
            <RegularText>
              Malerbetrieb Pascal Gerdes
              <br />
              Hüttenstr. 50
              <br />
              35708 Haiger
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>Kontakt</Title>
          </div>
          <div className="space-y-2">
            <RegularText>Telefon: +49 (0) 176 3234 5137</RegularText>
            <RegularText>E-Mail: info@malerbetrieb-gerdes.de</RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>Inhaber</Title>
            <RegularText>Pascal Gerdes</RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>Berufsrechtliche Angaben</Title>
            <RegularText>
              Berufskammer: Handwerkskammer [Ihre zuständige Handwerkskammer]
              <br />
              Berufsbezeichnung: Malerbetrieb
              <br />
              Berufsrechtliche Regelungen: Handwerksordnung
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>EU-Streitschlichtung</Title>
            <Link
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg ml-[-8px] px-2 py-0 transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#889cab] hover:text-white [&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px]"
            >
              <RegularText>https://ec.europa.eu/consumers/odr/</RegularText>
            </Link>
          </div>

          <div className="space-y-8">
            <Title withStroke>Streitbeilegung</Title>
            <RegularText>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </RegularText>
          </div>
        </div>
      </div>
    </Content>
  );
}
