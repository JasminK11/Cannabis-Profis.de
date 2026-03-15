import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ArrowRight, 
  Sprout, 
  Lightbulb, 
  Wind, 
  Droplet,
  Star,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { productsData } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Lightbulb,
  Wind,
  Droplet,
};

export default function Produkte() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500 text-white mb-4">
              <ShoppingBag className="w-4 h-4 mr-1" />
              Produkte
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cannabis-Produkte: Tests & Vergleiche
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Unabhängige Tests und Vergleiche der besten Samen, Grow-Equipment, 
              Vaporizer und CBD-Öle. Mit Affiliate-Links zu vertrauenswürdigen Shops.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate Notice */}
      <section className="py-4 bg-blue-50 border-b border-blue-200">
        <div className="container-custom">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-blue-700 text-sm">
              <strong>Transparenz:</strong> Diese Seite enthält Affiliate-Links. 
              Wenn du über diese Links kaufst, erhalten wir eine Provision – 
              ohne zusätzliche Kosten für dich.
              <Link to="/affiliate-hinweis" className="underline ml-1">
                Mehr erfahren
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {productsData.map((category) => {
              const Icon = iconMap[category.icon] || ShoppingBag;
              return (
                <Card key={category.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                          >
                            <span className="text-neutral-700 group-hover:text-blue-600">
                              {item.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Products */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">Empfohlene Produkte</h2>
              <Link to="/produkte" className="text-blue-600 hover:underline text-sm">
                Alle anzeigen →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* LED Lamp */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="w-full h-40 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                    <Lightbulb className="w-16 h-16 text-neutral-300" />
                  </div>
                  <Badge className="mb-2 bg-green-100 text-green-800">
                    <Star className="w-3 h-3 mr-1" />
                    Testsieger
                  </Badge>
                  <h3 className="font-semibold text-neutral-900 mb-1">Mars Hydro TS 1000</h3>
                  <p className="text-sm text-neutral-500 mb-3">LED Grow Lampe 150W</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-neutral-900">149€</span>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Zum Shop
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Growbox */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="w-full h-40 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-neutral-300 rounded" />
                  </div>
                  <Badge className="mb-2 bg-blue-100 text-blue-800">Bestseller</Badge>
                  <h3 className="font-semibold text-neutral-900 mb-1">Gorilla Growbox</h3>
                  <p className="text-sm text-neutral-500 mb-3">60x60x160cm Komplettset</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-neutral-900">449€</span>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Zum Shop
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Seeds */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="w-full h-40 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                    <Sprout className="w-16 h-16 text-neutral-300" />
                  </div>
                  <Badge className="mb-2 bg-purple-100 text-purple-800">Top Bewertet</Badge>
                  <h3 className="font-semibold text-neutral-900 mb-1">Dutch Passion</h3>
                  <p className="text-sm text-neutral-500 mb-3">Feminisierte Samen Mix</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-neutral-900">39€</span>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Zum Shop
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Vaporizer */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="w-full h-40 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                    <Wind className="w-16 h-16 text-neutral-300" />
                  </div>
                  <Badge className="mb-2 bg-amber-100 text-amber-800">Beliebt</Badge>
                  <h3 className="font-semibold text-neutral-900 mb-1">Storz & Bickel Mighty</h3>
                  <p className="text-sm text-neutral-500 mb-3">Tragbarer Vaporizer</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-neutral-900">299€</span>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Zum Shop
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Seed Banks Comparison */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Sprout className="w-6 h-6 text-green-600" />
                Beste Cannabis-Samenbanken 2026
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-semibold text-neutral-900">Anbieter</th>
                      <th className="text-left py-3 font-semibold text-neutral-900">Sorten</th>
                      <th className="text-left py-3 font-semibold text-neutral-900">Versand</th>
                      <th className="text-left py-3 font-semibold text-neutral-900">Bewertung</th>
                      <th className="text-right py-3 font-semibold text-neutral-900"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Dutch Passion', sorten: '50+', versand: '✓', bewertung: '4.9/5' },
                      { name: 'Cannoptikum', sorten: '100+', versand: '✓', bewertung: '4.7/5' },
                      { name: 'Hanf-Laden', sorten: '80+', versand: '✓', bewertung: '4.5/5' },
                      { name: 'Seedsman', sorten: '200+', versand: '✓', bewertung: '4.6/5' },
                    ].map((bank, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-4 font-medium text-neutral-900">{bank.name}</td>
                        <td className="py-4 text-neutral-600">{bank.sorten}</td>
                        <td className="py-4 text-green-600">{bank.versand}</td>
                        <td className="py-4">
                          <Badge className="bg-yellow-100 text-yellow-800">
                            <Star className="w-3 h-3 mr-1" />
                            {bank.bewertung}
                          </Badge>
                        </td>
                        <td className="py-4 text-right">
                          <Button size="sm" variant="outline">
                            Zum Shop
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* LED Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                LED-Lampen Test 2026
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    name: 'Mars Hydro TS 1000', 
                    leistung: '150W',
                    flaeche: '60x60cm',
                    preis: '149€',
                    badge: 'Testsieger'
                  },
                  { 
                    name: 'Spider Farmer SF-1000', 
                    leistung: '100W',
                    flaeche: '60x60cm',
                    preis: '129€',
                    badge: 'Preis-Tipp'
                  },
                  { 
                    name: 'Philizon 600W', 
                    leistung: '600W',
                    flaeche: '90x90cm',
                    preis: '89€',
                    badge: 'Budget'
                  },
                ].map((lampe, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <Badge className="mb-2">{lampe.badge}</Badge>
                    <h4 className="font-semibold text-neutral-900 mb-2">{lampe.name}</h4>
                    <div className="space-y-1 text-sm text-neutral-600 mb-4">
                      <p>Leistung: {lampe.leistung}</p>
                      <p>Fläche: {lampe.flaeche}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-neutral-900">{lampe.preis}</span>
                      <Button size="sm" variant="outline">
                        Zum Shop
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Finde die besten Produkte für deinen Anbau
            </h2>
            <p className="text-neutral-600 mb-8">
              Unsere Tests und Vergleiche helfen dir, die richtige Entscheidung zu treffen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary" asChild>
                <Link to="/produkte/samen">
                  <Sprout className="w-4 h-4 mr-2" />
                  Samen entdecken
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/produkte/grow-equipment">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Equipment ansehen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
