import React from "react";
import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";
import Link from "next/link";

export default function Impressum() {
  return (
    <Content>
      <div className="flex flex-col space-y-16">
        {/* Header Section */}
        <div className="flex flex-col space-y-6">
          <Title withStroke>Impressum</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Transparenz ist uns wichtig.
          </RegularText>
        </div>

        <div className="flex flex-col space-y-8">
          {/* Angaben gemäß § 5 TMG */}
          <div className="space-y-4">
            <Title withStroke>Angaben gemäß § 5 TMG</Title>
            <RegularText>
              Malerbetrieb Pascal Gerdes
              <br />
              Hüttenstr. 50
              <br />
              35708 Haiger
            </RegularText>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <Title withStroke>Kontakt</Title>
            <RegularText>Telefon: +49 (0) 176 3234 5137</RegularText>
            <RegularText>E-Mail: info@malerbetrieb-gerdes.de</RegularText>
          </div>

          {/* Inhaber */}
          <div className="space-y-4">
            <Title withStroke>Inhaber</Title>
            <RegularText>Pascal Gerdes</RegularText>
          </div>

          {/* Berufsrechtliche Angaben */}
          <div className="space-y-4">
            <Title withStroke>Berufsrechtliche Angaben</Title>
            <RegularText>
              Berufskammer: Handwerkskammer [Ihre zuständige Handwerkskammer]
              <br />
              Berufsbezeichnung: Malerbetrieb
              <br />
              Berufsrechtliche Regelungen: Handwerksordnung
            </RegularText>
          </div>

          {/* Steuernummer */}
          <div className="space-y-4">
            <Title withStroke>Steuernummer</Title>
            <RegularText>Steuernummer: XXXXXXXXXXX</RegularText>
          </div>

          {/* EU-Streitschlichtung */}
          <div className="space-y-4">
            <Title withStroke>EU-Streitschlichtung</Title>
            <RegularText>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </RegularText>
            <Link
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#889cab] hover:underline"
            >
              <RegularText>https://ec.europa.eu/consumers/odr/</RegularText>
            </Link>
          </div>

          {/* Streitbeilegung */}
          <div className="space-y-4">
            <Title withStroke>Streitbeilegung</Title>
            <RegularText>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </RegularText>
          </div>

          {/* Haftung für Inhalte */}
          <div className="space-y-4">
            <Title withStroke>Haftung für Inhalte</Title>
            <RegularText>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </RegularText>
            <RegularText>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </RegularText>
          </div>

         

  
        </div>
      </div>
    </Content>
  );
}