import React from "react";
import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";

export default function Datenschutz() {
  return (
    <Content>
      <div className="flex flex-col space-y-12">
        <div className="space-y-6">
          <Title withStroke>Datenschutz</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Vertrauen ist die Basis.
          </RegularText>
        </div>

        <div className="space-y-8">
          <Title withStroke>Datenschutzerklärung</Title>
          <RegularText>
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
            In dieser Datenschutzerklärung informieren wir Sie über die
            Verarbeitung personenbezogener Daten bei der Nutzung unserer
            Website.
          </RegularText>

          <div className="space-y-8">
            <Title withStroke>Verantwortliche Stelle</Title>
            <RegularText>
              Malerbetrieb Pascal Gerdes
              <br />
              Hüttenstr. 50
              <br />
              35708 Haiger
              <br />
              info@malerbetrieb-gerdes.de
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>Kontaktformular</Title>
            <RegularText>
              Wenn Sie das Kontaktformular auf unserer Website nutzen, werden
              die von Ihnen eingegebenen Daten an uns übermittelt und
              gespeichert. Dies umfasst die von Ihnen im Formular angegebenen
              Daten.
            </RegularText>
            <RegularText>
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b
              DSGVO, da die Verarbeitung für die Bearbeitung Ihrer Anfrage
              erforderlich ist.
            </RegularText>
            <RegularText>
              Die Daten werden gelöscht, sobald sie für die Erreichung des
              Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist der
              Fall, wenn die jeweilige Konversation beendet ist und keine
              gesetzlichen Aufbewahrungsfristen entgegenstehen.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>Google Fonts</Title>
            <RegularText>
              Wir nutzen Google Fonts auf unserer Website. Dies ist ein Dienst
              der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Die Einbindung dieser Schriftarten erfolgt durch einen
              Serveraufruf, in der Regel bei einem Server von Google in den USA.
              Dabei werden Informationen wie Ihre IP-Adresse an Google
              übermittelt. Die Nutzung von Google Fonts erfolgt im Interesse
              einer einheitlichen und ansprechenden Darstellung unserer Website.
              Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
              lit. f DSGVO dar.
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>Ihre Rechte</Title>
            <RegularText>
              Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen
              Daten:
            </RegularText>
            <RegularText>
              • Recht auf Auskunft
              <br />
              • Recht auf Berichtigung oder Löschung
              <br />
              • Recht auf Einschränkung der Verarbeitung
              <br />
              • Recht auf Widerspruch gegen die Verarbeitung
              <br />• Recht auf Datenübertragbarkeit
            </RegularText>
          </div>

          <div className="space-y-8">
            <Title withStroke>Beschwerderecht</Title>
            <RegularText>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
              beschweren.
            </RegularText>
          </div>
        </div>
      </div>
    </Content>
  );
}
