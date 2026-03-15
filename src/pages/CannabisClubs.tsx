import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowRight, 
  Building, 
  MapPin, 
  UserPlus, 
  FileText,
  Euro,
  CheckCircle2,
  Download,
  Search,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cscData, cscCostData, bundeslaenderData } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Building,
  MapPin,
  UserPlus,
};

export default function CannabisClubs() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge className="badge-glow mb-6">
              <Users className="w-3 h-3 mr-1" />
              Cannabis Social Clubs
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cannabis Social Clubs in <span className="text-gradient">Deutschland</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Alles über CSC-Gründung, Mitgliedschaft und Club-Verzeichnis. 
              Finde Cannabis-Clubs in deiner Nähe oder gründe deinen eigenen Verein.
            </p>
          </div>
        </div>
      </section>

      {/* CSC Info Banner */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '500', label: 'Max. Mitglieder' },
              { value: '25g', label: 'Pro Tag' },
              { value: '50g', label: 'Pro Monat' },
              { value: '0€', label: 'Gewinnzweck' },
            ].map((stat, index) => (
              <div key={index} className="card-dark p-4 text-center">
                <div className="text-2xl font-bold text-primary-light mb-1">{stat.value}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            ))}
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
              {/* CSC Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cscData.map((category) => {
                  const Icon = iconMap[category.icon] || Building;
                  return (
                    <div key={category.id} className="card-dark p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.items.slice(0, 3).map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.href}
                              className="text-white/50 hover:text-purple-400 flex items-center gap-2 group text-sm transition-colors"
                            >
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Gründungs-Guide Preview */}
              <div className="gradient-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Building className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    CSC gründen: Die komplette Anleitung
                  </h2>
                </div>
                
                <p className="text-white/50 mb-6">
                  Die Gründung eines Cannabis Social Clubs erfordert sorgfältige Planung 
                  und Einhaltung rechtlicher Vorgaben. Mit unserem Guide gelingt die 
                  Gründung Schritt für Schritt.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { step: '1', title: 'Mitglieder finden', desc: 'Min. 7 Gründungsmitglieder' },
                    { step: '2', title: 'Satzung erstellen', desc: 'Rechtssicher aufsetzen' },
                    { step: '3', title: 'Verein registrieren', desc: 'Im Vereinsregister' },
                    { step: '4', title: 'BfArM-Zulassung', desc: 'Lizenz beantragen' },
                  ].map((item) => (
                    <div key={item.step} className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                      <div className="w-8 h-8 rounded-full bg-purple-500/30 text-purple-400 flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="btn-primary" asChild>
                    <Link to="/cannabis-clubs/gruendungs-guide">
                      Zum Gründungs-Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button className="btn-secondary" asChild>
                    <Link to="/cannabis-clubs/satzung-muster">
                      <Download className="w-4 h-4 mr-2" />
                      Satzung Muster
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Cost Overview */}
              <div className="card-elevated rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Euro className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Kosten CSC-Gründung
                  </h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 font-semibold text-white">Posten</th>
                        <th className="text-right py-3 font-semibold text-white">Kosten</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cscCostData.map((item, index) => (
                        <tr key={index} className="border-b border-white/5 last:border-0">
                          <td className="py-3 text-white/50 text-sm">{item.item}</td>
                          <td className="py-3 text-right font-medium text-white text-sm">{item.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Minimum:</span>
                    <span className="text-xl font-bold text-purple-400">~7.000€</span>
                  </div>
                </div>
              </div>

              {/* Club Search */}
              <div className="card-elevated rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    CSC in deiner Nähe finden
                  </h2>
                </div>
                
                <div className="flex gap-3 mb-6">
                  <Input 
                    placeholder="PLZ oder Stadt eingeben" 
                    className="input-dark flex-1"
                  />
                  <Button className="btn-primary">
                    <Search className="w-4 h-4 mr-2" />
                    Suchen
                  </Button>
                </div>

                <h4 className="font-semibold text-white mb-4">Nach Bundesland</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {bundeslaenderData.slice(0, 8).map((bundesland) => (
                    <Link
                      key={bundesland.id}
                      to={`/cannabis-clubs/verzeichnis${bundesland.href}`}
                      className="p-2 text-sm text-white/50 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
                    >
                      {bundesland.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link 
                    to="/cannabis-clubs/verzeichnis" 
                    className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                  >
                    Alle Bundesländer anzeigen →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="gradient-card rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Schnellzugriff</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start btn-secondary" asChild>
                    <Link to="/cannabis-clubs/gruendungs-guide">
                      <Building className="w-4 h-4 mr-2" />
                      Gründungs-Guide
                    </Link>
                  </Button>
                  <Button className="w-full justify-start btn-secondary" asChild>
                    <Link to="/cannabis-clubs/satzung-muster">
                      <FileText className="w-4 h-4 mr-2" />
                      Satzung Muster
                    </Link>
                  </Button>
                  <Button className="w-full justify-start btn-secondary" asChild>
                    <Link to="/cannabis-clubs/verzeichnis">
                      <MapPin className="w-4 h-4 mr-2" />
                      Club-Verzeichnis
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Featured Club */}
              <div className="card-dark rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Featured Club</h3>
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">CSC Berlin Mitte</h4>
                    <Badge className="bg-green-500/20 text-green-400">
                      <Star className="w-3 h-3 mr-1" />
                      4.8
                    </Badge>
                  </div>
                  <p className="text-sm text-white/40 mb-3">
                    📍 Berlin-Mitte • 👥 320/500 Mitglieder
                  </p>
                  <p className="text-sm text-white/50 mb-4">
                    Mitgliedsbeitrag: 25€/Monat
                  </p>
                  <Button size="sm" className="w-full btn-secondary">
                    Mehr erfahren
                  </Button>
                </div>
              </div>

              {/* CSC Services */}
              <div className="card-dark rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">CSC-Dienstleistungen</h3>
                <div className="space-y-3">
                  {[
                    { title: 'Satzungserstellung', desc: 'Rechtssicher & individuell' },
                    { title: 'BfArM-Antragsstellung', desc: 'Professionelle Begleitung' },
                    { title: 'Versicherungen', desc: 'Passende CSC-Versicherung' },
                  ].map((service, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">{service.title}</p>
                        <p className="text-sm text-white/40">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 btn-secondary">
                  Beratung anfragen
                </Button>
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
              Willst du einen CSC gründen?
            </h2>
            <p className="text-white/50 mb-8">
              Lade unsere kostenlose Muster-Satzung herunter und starte dein CSC-Projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary" asChild>
                <Link to="/cannabis-clubs/satzung-muster">
                  <Download className="w-4 h-4 mr-2" />
                  Satzung downloaden
                </Link>
              </Button>
              <Button className="btn-secondary" asChild>
                <Link to="/cannabis-clubs/gruendungs-guide">
                  Gründungs-Guide lesen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
