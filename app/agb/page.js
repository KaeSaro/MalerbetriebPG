import React from "react";
import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";

export default function AGB() {
  return (
    <Content>
      <div className="flex flex-col space-y-12">
        <div className="space-y-6">
          <Title withStroke>Allgemeine Geschäftsbedingungen</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Grundlage unserer Zusammenarbeit.
          </RegularText>
        </div>

        <div className="space-y-8">
          <div className="space-y-8">
            <Title withStroke>§1 Geltungsbereich</Title>
            <RegularText>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge
              zwischen dem Malerbetrieb Pascal Gerdes (nachfolgend
              &quot;Auftragnehmer&quot;) und seinen Kunden (nachfolgend
              &quot;Auftraggeber&quot;) über Malerarbeiten, Innenausbau sowie
              damit zusammenhängende Dienstleistungen.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>§2 Angebot und Vertragsschluss</Title>
            <RegularText>
              Angebote des Auftragnehmers sind freibleibend. Der Vertrag kommt
              durch schriftliche Auftragsbestätigung des Auftragnehmers oder
              durch Beginn der Ausführung der beauftragten Leistungen zustande.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>§3 Widerrufsbelehrung für Verbraucher</Title>
            <RegularText>
              Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu:
            </RegularText>
            <RegularText>
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
              Tage ab dem Tag des Vertragsabschlusses.
            </RegularText>
            <RegularText>
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Malerbetrieb
              Pascal Gerdes, Untere Pfarrstr. 2, 35708 Haiger) mittels einer
              eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder
              E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen,
              informieren.
            </RegularText>
            <RegularText>
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
              Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
              Widerrufsfrist absenden.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>Folgen des Widerrufs</Title>
            <RegularText>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
              Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und
              spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem
              die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
              eingegangen ist.
            </RegularText>
            <RegularText>
              Haben Sie verlangt, dass die Dienstleistungen während der
              Widerrufsfrist beginnen sollen, so haben Sie uns einen
              angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem
              Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts
              hinsichtlich dieses Vertrags unterrichten, bereits erbrachten
              Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag
              vorgesehenen Dienstleistungen entspricht.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>§4 Preise und Zahlung</Title>
            <RegularText>
              Die vereinbarten Preise verstehen sich zuzüglich der gesetzlichen
              Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach
              Rechnungsstellung ohne Abzug zur Zahlung fällig.
            </RegularText>
            <RegularText>
              Bei größeren Aufträgen ist der Auftragnehmer berechtigt,
              angemessene Abschlagszahlungen zu verlangen.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>§5 Ausführung und Abnahme</Title>
            <RegularText>
              Der Auftragnehmer führt die Arbeiten nach den allgemein
              anerkannten Regeln der Technik und den anerkannten handwerklichen
              Grundsätzen aus. Nach Fertigstellung der Arbeiten ist der
              Auftraggeber zur Abnahme verpflichtet.
            </RegularText>
            <RegularText>
              Die Abnahme erfolgt durch Unterzeichnung eines Abnahmeprotokolls
              oder durch schlüssiges Verhalten (z.B. Ingebrauchnahme).
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>§6 Gewährleistung</Title>
            <RegularText>
              Die Gewährleistungsfrist für die erbrachten Leistungen beträgt 5
              Jahre, beginnend mit der Abnahme der Leistungen. Für Arbeiten an
              beweglichen Sachen, wie zum Beispiel Türen oder Fenster, sowie für
              Reparaturarbeiten beträgt die Gewährleistungsfrist 1 Jahr.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>§7 Haftung</Title>
            <RegularText>
              Der Auftragnehmer haftet für Schäden, die durch vorsätzliches oder
              grob fahrlässiges Verhalten verursacht wurden. Bei leichter
              Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung
              wesentlicher Vertragspflichten.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>§8 Schlussbestimmungen</Title>
            <RegularText>
              Erfüllungsort und Gerichtsstand ist, soweit gesetzlich zulässig,
              der Sitz des Auftragnehmers. Es gilt deutsches Recht.
            </RegularText>
            <RegularText>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt
              dies die Wirksamkeit der übrigen Bestimmungen nicht.
            </RegularText>
          </div>
        </div>
      </div>
    </Content>
  );
}
