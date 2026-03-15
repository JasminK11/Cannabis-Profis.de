import { Link } from 'react-router-dom';
import { 
  Scale, 
  ArrowRight, 
  Gavel, 
  Briefcase, 
  Users,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sprout
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { legalCategoriesData, medcangTimelineData } from '@/data/content';

export default function Recht() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge className="badge-glow mb-6">
              <Scale className="w-3 h-3 mr-1" />
              Recht & Gesetze
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cannabis-Recht in <span className="text-gradient">Deutschland</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Alle aktuellen Gesetze, Regelungen und rechtlichen Grundlagen für 
              Cannabis in Deutschland – verständlich erklärt und immer up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="gradient-card rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Aktuell: MedCanG-Reform 2026
              </p>
              <p className="text-white/50 text-sm">
                Die Reform verbietet Telemedizin und Versand für medizinisches Cannabis. 
                <Link to="/recht/medcang-reform-2026" className="text-primary-light hover:text-primary ml-1 transition-colors">
                  Mehr erfahren →
                </Link>
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
              {/* Legal Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {legalCategoriesData.map((category) => (
                  <div key={category.id} className="card-dark p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.href}
                            className="text-white/50 hover:text-primary-light flex items-center gap-2 group transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary-light" />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Cannabis-Gesetz Overview */}
              <div className="card-elevated rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-primary-light" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Cannabis-Gesetz 2026
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      Was ist erlaubt?
                    </h4>
                    <ul className="space-y-3 text-white/50 text-sm">
                      {[
                        'Besitz von bis zu 25g Cannabis in der Öffentlichkeit',
                        'Besitz von bis zu 50g Cannabis zu Hause',
                        'Anbau von bis zu 3 Pflanzen pro Person (ab 18)',
                        'Konsum in der Öffentlichkeit (nicht in der Nähe von Schulen)',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      Was ist verboten?
                    </h4>
                    <ul className="space-y-3 text-white/50 text-sm">
                      {[
                        'Weitergabe an Minderjährige (unter 18)',
                        'Konsum in der Nähe von Schulen und Kitas (100m)',
                        'Anbau in der Nähe von Schulen und Kitas (200m)',
                        'Weiterverkauf (nur CSCs mit Lizenz)',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* MedCanG Reform Timeline */}
              <div className="card-elevated rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  MedCanG-Reform: Zeitplan
                </h2>
                <div className="space-y-6">
                  {medcangTimelineData.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${
                          item.status === 'completed' 
                            ? 'bg-green-400 shadow-lg shadow-green-400/30' 
                            : item.status === 'pending'
                            ? 'bg-amber-400 shadow-lg shadow-amber-400/30'
                            : 'bg-white/20'
                        }`} />
                        {index < medcangTimelineData.length - 1 && (
                          <div className="w-px h-full bg-white/10 mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-white">
                            {item.title}
                          </span>
                          {item.status === 'completed' && (
                            <Badge className="bg-green-500/20 text-green-400 text-xs">✓</Badge>
                          )}
                          {item.status === 'pending' && (
                            <Badge className="bg-amber-500/20 text-amber-400 text-xs">Erwartet</Badge>
                          )}
                        </div>
                        <p className="text-sm text-white/40 mb-1">{item.date}</p>
                        <p className="text-white/50 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="gradient-card rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Schnellzugriff</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start btn-secondary" asChild>
                    <Link to="/recht/cannabis-gesetz-2026">
                      <Gavel className="w-4 h-4 mr-2" />
                      Cannabis-Gesetz 2026
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start btn-secondary" asChild>
                    <Link to="/recht/medcang-reform-2026">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      MedCanG-Reform
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start btn-secondary" asChild>
                    <Link to="/recht/besitzlimits">
                      <Scale className="w-4 h-4 mr-2" />
                      Besitzlimits
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Related Topics */}
              <div className="card-dark rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Verwandte Themen</h3>
                <div className="space-y-3">
                  <Link to="/anbau/anleitung-anfaenger" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sprout className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-primary-light transition-colors">Anbau-Guide</p>
                      <p className="text-sm text-white/40">Legal anbauen</p>
                    </div>
                  </Link>
                  <Link to="/cannabis-clubs" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-primary-light transition-colors">Cannabis-Clubs</p>
                      <p className="text-sm text-white/40">CSC finden & gründen</p>
                    </div>
                  </Link>
                  <Link to="/medizinisch" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Briefcase className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-primary-light transition-colors">Medizinisch</p>
                      <p className="text-sm text-white/40">Rezept & Ärzte</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="relative rounded-2xl overflow-hidden p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-dark/20" />
                <div className="relative">
                  <h4 className="font-semibold text-white mb-2">Gesetzes-Updates</h4>
                  <p className="text-white/50 text-sm mb-4">
                    Bleib über alle Änderungen informiert.
                  </p>
                  <Button className="w-full btn-primary">
                    Newsletter abonnieren
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
              Noch Fragen zum Cannabis-Recht?
            </h2>
            <p className="text-white/50 mb-8">
              Wir aktualisieren unsere Inhalte laufend. Abonniere unseren Newsletter 
              für die neuesten Gesetzes-Updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary" asChild>
                <Link to="/newsletter">Newsletter abonnieren</Link>
              </Button>
              <Button className="btn-secondary" asChild>
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
