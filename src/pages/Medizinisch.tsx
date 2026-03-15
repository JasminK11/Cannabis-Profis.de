import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  ArrowRight, 
  FileText, 
  MapPin, 
  Pill, 
  Euro,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Search,
  Phone,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

import { medizinischData, bundeslaenderData, medcangTimelineData } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  MapPin,
  Pill,
  Euro,
};

export default function Medizinisch() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="bg-amber-500 text-white mb-4">
              <Stethoscope className="w-4 h-4 mr-1" />
              Medizinisches Cannabis
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medizinisches Cannabis in Deutschland
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Alles über Rezept, Ärzte, Apotheken und Kosten. 
              Finde Cannabis-Ärzte in deiner Nähe und erfahre, was die Krankenkasse übernimmt.
            </p>
          </div>
        </div>
      </section>

      {/* MedCanG Alert */}
      <section className="py-6 bg-red-50 border-b border-red-200">
        <div className="container-custom">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-red-800 font-medium">
                ⚠️ MedCanG-Reform 2026: Telemedizin-Verbot & Versandverbot
              </p>
              <p className="text-red-700 text-sm">
                Die geplante Reform verbietet Online-Rezepte und Versand aus Apotheken. 
                <Link to="/medizinisch/medcang-reform" className="underline ml-1">
                  Was Patienten wissen müssen →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Medizinisch Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {medizinischData.map((category) => {
                  const Icon = iconMap[category.icon] || Stethoscope;
                  return (
                    <Card key={category.id} className="card-hover">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-amber-600" />
                          </div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={item.href}
                                className="text-neutral-600 hover:text-amber-600 flex items-center gap-2 group text-sm"
                              >
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* MedCanG Reform Info */}
              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    MedCanG-Reform: Was ändert sich?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-neutral-600">
                    Die geplante MedCanG-Reform bringt weitreichende Änderungen für 
                    Patienten. Besonders betroffen sind die Telemedizin-Anbieter.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-500" />
                        Was wird verboten?
                      </h4>
                      <ul className="space-y-2 text-neutral-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          Online-Rezepte (Telemedizin)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          Versand aus Apotheken
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          Plattformen wie Bloomwell, CannaZen
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Was bleibt erlaubt?
                      </h4>
                      <ul className="space-y-2 text-neutral-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          Persönliche Arztkonsultation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          Abholung in der Apotheke
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          Botendienste (in manchen Fällen)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button className="btn-primary bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/medizinisch/medcang-reform">
                      Alle Details zur Reform
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Doctor Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    Cannabis-Arzt in deiner Nähe finden
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 mb-6">
                    <Input 
                      placeholder="PLZ oder Stadt eingeben" 
                      className="flex-1"
                    />
                    <Button className="btn-primary bg-amber-600 hover:bg-amber-700">
                      <Search className="w-4 h-4 mr-2" />
                      Suchen
                    </Button>
                  </div>

                  <h4 className="font-semibold text-neutral-900 mb-4">Nach Bundesland</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {bundeslaenderData.slice(0, 8).map((bundesland) => (
                      <Link
                        key={bundesland.id}
                        to={`/medizinisch/aerzte-verzeichnis${bundesland.href}`}
                        className="p-2 text-sm text-neutral-600 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors"
                      >
                        {bundesland.name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cost Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Euro className="w-6 h-6 text-amber-600" />
                    Was zahlt die Krankenkasse?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-neutral-600">
                      Die Kosten für medizinisches Cannabis werden von den gesetzlichen 
                      Krankenkassen übernommen, wenn die Voraussetzungen erfüllt sind.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                        <p className="text-sm text-neutral-600">Kostenübernahme bei Genehmigung</p>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-amber-600 mb-1">10€</div>
                        <p className="text-sm text-neutral-600">Zuzahlung pro Rezept (optional)</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">~150€</div>
                        <p className="text-sm text-neutral-600">Durchschnittliche Monatskosten</p>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/medizinisch/kosten-krankenkasse">
                        Mehr zu Kosten & Kasse
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg">Schnellzugriff</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/medizinisch/aerzte-verzeichnis">
                      <Stethoscope className="w-4 h-4 mr-2" />
                      Ärzte finden
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/medizinisch/apotheken-verzeichnis">
                      <MapPin className="w-4 h-4 mr-2" />
                      Apotheken finden
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/medizinisch/kosten-krankenkasse">
                      <Euro className="w-4 h-4 mr-2" />
                      Kostenrechner
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Reform Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reform-Zeitplan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medcangTimelineData.slice(0, 4).map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          item.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'
                        }`} />
                        <div>
                          <p className="text-sm font-medium text-neutral-900">{item.title}</p>
                          <p className="text-xs text-neutral-500">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Patient Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patienten-Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-neutral-900">Telefonische Beratung</p>
                        <p className="text-sm text-neutral-500">Mo-Fr 9-18 Uhr</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-neutral-900">Schnelle Terminvermittlung</p>
                        <p className="text-sm text-neutral-500">In 24-48 Stunden</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-neutral-900">Kostenlose Beratung</p>
                        <p className="text-sm text-neutral-500">Unverbindlich & vertraulich</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="gradient-primary text-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Patienten-Newsletter</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Updates zur Reform & Versorgung.
                  </p>
                  <Button className="w-full bg-white text-primary hover:bg-neutral-100">
                    Abonnieren
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Brauchst du ein Cannabis-Rezept?
            </h2>
            <p className="text-neutral-600 mb-8">
              Finde autorisierte Cannabis-Ärzte in deiner Nähe und starte deine Therapie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary bg-amber-600 hover:bg-amber-700" asChild>
                <Link to="/medizinisch/aerzte-verzeichnis">
                  <Search className="w-4 h-4 mr-2" />
                  Arzt finden
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/medizinisch/rezept-anleitung">
                  Rezept-Anleitung lesen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
