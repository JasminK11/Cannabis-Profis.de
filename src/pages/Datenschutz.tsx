import { Card, CardContent } from '@/components/ui/card';

export default function Datenschutz() {
  return (
    <div className="animate-fade-in section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Allgemeine Hinweise</h3>
              <p className="text-neutral-600">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Datenschutz</h3>
              <p className="text-neutral-600 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-medium text-neutral-900 mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-neutral-600 mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="text-neutral-600 mb-4">
                <p>Cannabis-Profis.de</p>
                <p>Max Mustermann</p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin</p>
                <p>Telefon: +49 (0) 30 12345678</p>
                <p>E-Mail: kontakt@cannabis-profis.de</p>
              </div>

              <h3 className="text-lg font-medium text-neutral-900 mb-2">Speicherdauer</h3>
              <p className="text-neutral-600">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung 
                entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung 
                zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Cookies</h3>
              <p className="text-neutral-600 mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete 
                und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend 
                für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) 
                auf Ihrem Endgerät gespeichert.
              </p>

              <h3 className="text-lg font-medium text-neutral-900 mb-2">Server-Log-Dateien</h3>
              <p className="text-neutral-600 mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-neutral-600 mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>

              <h3 className="text-lg font-medium text-neutral-900 mb-2">Kontaktformular</h3>
              <p className="text-neutral-600">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">4. Newsletter</h2>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Newsletterdaten</h3>
              <p className="text-neutral-600">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir 
                von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, 
                dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des 
                Newsletters einverstanden sind.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">5. Ihre Rechte</h2>
              <p className="text-neutral-600 mb-4">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-1">
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
                <li>Berichtigung unrichtiger Daten zu verlangen</li>
                <li>Löschung Ihrer Daten zu verlangen</li>
                <li>Einschränkung der Verarbeitung zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung einzulegen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">6. Änderungen dieser Datenschutzerklärung</h2>
              <p className="text-neutral-600">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                in der Datenschutzerklärung umzusetzen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
