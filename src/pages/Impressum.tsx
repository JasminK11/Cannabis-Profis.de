import { Card, CardContent } from '@/components/ui/card';

export default function Impressum() {
  return (
    <div className="animate-fade-in section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Impressum</h1>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-neutral-600">
                <p className="font-medium text-neutral-900">Cannabis-Profis.de</p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin</p>
                <p>Deutschland</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Kontakt</h2>
              <div className="space-y-2 text-neutral-600">
                <p><strong>Telefon:</strong> +49 (0) 30 12345678</p>
                <p><strong>E-Mail:</strong> kontakt@cannabis-profis.de</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Vertreten durch</h2>
              <p className="text-neutral-600">Max Mustermann (Geschäftsführer)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Umsatzsteuer-ID</h2>
              <p className="text-neutral-600">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <p className="text-neutral-600 mt-2">DE123456789</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="space-y-2 text-neutral-600">
                <p>Max Mustermann</p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Streitschlichtung</h2>
              <p className="text-neutral-600 mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-neutral-600">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="text-neutral-600 mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Haftung für Inhalte</h2>
              <p className="text-neutral-600">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
