import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowRight, 
  Home, 
  Sun, 
  Leaf, 
  Scissors, 
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Wind
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Badge } from '@/components/ui/badge';
import { anbauCategoriesData, equipmentListData } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Home,
  Sun,
  Leaf,
  Scissors,
};

export default function Anbau() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero/hero-anbau.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge className="badge-glow mb-6">
              <Sprout className="w-3 h-3 mr-1" />
              Anbau-Guides
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cannabis-Anbau in <span className="text-gradient">Deutschland</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Der komplette Guide für legalen Cannabis-Anbau in Deutschland. 
              Von der Keimung bis zur Ernte – Schritt für Schritt erklärt.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="gradient-card rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Legal in Deutschland: Bis zu 3 Pflanzen pro Person (ab 18 Jahren)
              </p>
              <p className="text-white/50 text-sm">
                Der Eigenanbau für den persönlichen Bedarf ist seit dem Cannabis-Gesetz 2026 legal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Anbau Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {anbauCategoriesData.map((category) => {
                  const Icon = iconMap[category.icon] || Sprout;
                  return (
                    <div key={category.id} className="card-dark p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-light" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {category.items.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.href}
                              className="text-white/50 hover:text-primary-light flex items-center gap-2 group transition-colors text-sm"
                            >
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary-light" />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Beginner Guide Preview */}
              <div className="gradient-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-primary-light" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Cannabis-Anbau für Anfänger
                  </h2>
                </div>
                
                <p className="text-white/50 mb-6">
                  Der legale Eigenanbau von Cannabis ist seit 2026 in Deutschland möglich. 
                  Mit der richtigen Ausrüstung und unserer Schritt-für-Schritt-Anleitung 
                  gelingt dein erster Anbau garantiert.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { step: '1', title: 'Samen keimen', desc: 'Papierhandtuch-Methode' },
                    { step: '2', title: 'Wachstum', desc: 'Vegetative Phase' },
                    { step: '3', title: 'Ernte', desc: 'Trocknen & Curen' },
                  ].map((item) => (
                    <div key={item.step} className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-primary/30 text-primary-light flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <Button className="btn-primary" asChild>
                  <Link to="/anbau/anleitung-anfaenger">
                    Zur kompletten Anleitung
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Equipment List */}
              <div className="card-elevated rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary-light" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Equipment-Liste für Einsteiger
                  </h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 font-semibold text-white">Equipment</th>
                        <th className="text-right py-3 font-semibold text-white">Preis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {equipmentListData.map((item, index) => (
                        <tr key={index} className="border-b border-white/5 last:border-0">
                          <td className="py-3 text-white/50 text-sm">{item.item}</td>
                          <td className="py-3 text-right font-medium text-white text-sm">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Gesamtkosten erster Anbau:</span>
                    <span className="text-xl font-bold text-primary-light">430€ - 1.130€</span>
                  </div>
                  <p className="text-sm text-white/40 mt-1">
                    Folgeanbauten: ca. 130€ - 330€
                  </p>
                </div>
              </div>

              {/* Indoor vs Outdoor */}
              <div className="card-elevated rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Indoor vs. Outdoor Anbau</h2>
                <Tabs defaultValue="indoor" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-white/5">
                    <TabsTrigger value="indoor" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary-light">Indoor</TabsTrigger>
                    <TabsTrigger value="outdoor" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary-light">Outdoor</TabsTrigger>
                  </TabsList>
                  <TabsContent value="indoor" className="mt-4 space-y-4">
                    {[
                      { icon: CheckCircle2, color: 'green', title: 'Jahreszeitunabhängig', desc: 'Ganzjähriger Anbau möglich' },
                      { icon: CheckCircle2, color: 'green', title: 'Kontrollierte Umgebung', desc: 'Optimale Bedingungen für maximale Erträge' },
                      { icon: CheckCircle2, color: 'green', title: 'Diskret', desc: 'Keine Sichtbarkeit von außen' },
                      { icon: AlertTriangle, color: 'amber', title: 'Höhere Kosten', desc: 'Investition in Equipment nötig' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <item.icon className={`w-5 h-5 ${item.color === 'green' ? 'text-green-400' : 'text-amber-400'} mt-0.5`} />
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="text-sm text-white/40">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="outdoor" className="mt-4 space-y-4">
                    {[
                      { icon: CheckCircle2, color: 'green', title: 'Niedrigere Kosten', desc: 'Sonnenlicht ist kostenlos' },
                      { icon: CheckCircle2, color: 'green', title: 'Natürliches Wachstum', desc: 'Pflanzen entwickeln natürliches Aroma' },
                      { icon: AlertTriangle, color: 'amber', title: 'Wetterabhängig', desc: 'Nur in der richtigen Jahreszeit' },
                      { icon: AlertTriangle, color: 'amber', title: 'Schädlinge & Krankheiten', desc: 'Höheres Risiko durch Natur' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <item.icon className={`w-5 h-5 ${item.color === 'green' ? 'text-green-400' : 'text-amber-400'} mt-0.5`} />
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="text-sm text-white/40">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tools */}
              <div className="gradient-card rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Tools</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start btn-secondary" asChild>
                    <Link to="/tools/anbau-kalkulator">
                      <Calculator className="w-4 h-4 mr-2" />
                      Anbau-Kalkulator
                    </Link>
                  </Button>
                  <Button className="w-full justify-start btn-secondary" asChild>
                    <Link to="/anbau/anleitung-anfaenger">
                      <Sprout className="w-4 h-4 mr-2" />
                      Anfänger-Guide
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Product Recommendations */}
              <div className="card-dark rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Empfohlene Produkte</h3>
                <div className="space-y-3">
                  <Link to="/produkte/grow-equipment/led-lampen" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-primary-light transition-colors">LED-Lampen</p>
                      <p className="text-sm text-white/40">Beste Modelle 2026</p>
                    </div>
                  </Link>
                  <Link to="/produkte/grow-equipment/belueftung" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Wind className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-primary-light transition-colors">Belüftung</p>
                      <p className="text-sm text-white/40">Lüfter & Filter</p>
                    </div>
                  </Link>
                  <Link to="/produkte/samen" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Leaf className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-primary-light transition-colors">Samen</p>
                      <p className="text-sm text-white/40">Beste Samenbanken</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Cost Calculator Preview */}
              <div className="relative rounded-2xl overflow-hidden p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-dark/20" />
                <div className="relative">
                  <Calculator className="w-8 h-8 text-primary-light mb-4" />
                  <h4 className="font-semibold text-white text-lg mb-2">Anbau-Kalkulator</h4>
                  <p className="text-white/50 text-sm mb-4">
                    Berechne die Kosten für deinen Anbau in unter 2 Minuten.
                  </p>
                  <Button className="w-full btn-primary" asChild>
                    <Link to="/tools/anbau-kalkulator">Jetzt berechnen</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bereit für deinen ersten Anbau?
            </h2>
            <p className="text-white/50 mb-8">
              Nutze unseren Anbau-Kalkulator, um die Kosten für dein Setup zu planen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary" asChild>
                <Link to="/tools/anbau-kalkulator">
                  <Calculator className="w-4 h-4 mr-2" />
                  Kalkulator starten
                </Link>
              </Button>
              <Button className="btn-secondary" asChild>
                <Link to="/anbau/anleitung-anfaenger">
                  Anleitung lesen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
