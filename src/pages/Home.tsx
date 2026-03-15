import { Link } from 'react-router-dom';
import { 
  Scale, 
  Sprout, 
  Users, 
  Stethoscope, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Mail,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  quickLinksData, 
  popularArticlesData,
  faqData 
} from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Sprout,
  Users,
  Stethoscope,
};

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-dark/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
              <span className="text-primary-light text-sm font-medium">Aktuell: MedCanG-Reform 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Cannabis in{' '}
              <span className="text-gradient">Deutschland</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Deine vertrauenswürdige Quelle für aktuelle Gesetze, Anbau-Tipps, 
              Cannabis-Clubs und medizinische Informationen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="btn-primary text-base" asChild>
                <Link to="/recht/medcang-reform-2026">
                  Jetzt informieren
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" className="btn-secondary text-base" asChild>
                <Link to="/anbau/anleitung-anfaenger">
                  Anbau-Guide
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '50K+', label: 'monatliche Leser' },
                { value: '200+', label: 'Artikel & Guides' },
                { value: '16', label: 'Bundesländer' },
                { value: '100%', label: 'aktuell' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="stat-value mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="badge-glow mb-4">Entdecke</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unsere Themenbereiche
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Finde alle wichtigen Informationen zu Cannabis in Deutschland – 
              von Gesetzen über Anbau bis hin zu medizinischer Anwendung.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinksData.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <Link key={link.id} to={link.href} className="group">
                  <div className="feature-card h-full">
                    <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary-light" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {link.description}
                    </p>
                    <div className="flex items-center text-primary-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latest News */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Badge className="badge-glow mb-2">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Aktuell
                  </Badge>
                  <h2 className="text-2xl font-bold text-white">Neueste Meldungen</h2>
                </div>
                <Link 
                  to="/blog" 
                  className="text-primary-light hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  Alle anzeigen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'MedCanG-Reform: Was Patienten wissen müssen',
                    category: 'Gesetze',
                    date: '15.03.2026',
                    href: '/recht/medcang-reform-2026',
                  },
                  {
                    title: 'Cannabis-Gesetz 2026: Alle Änderungen im Überblick',
                    category: 'Gesetze',
                    date: '12.03.2026',
                    href: '/recht/cannabis-gesetz-2026',
                  },
                  {
                    title: 'Neue CSC in Deutschland: März 2026',
                    category: 'CSC',
                    date: '10.03.2026',
                    href: '/cannabis-clubs/verzeichnis',
                  },
                ].map((news, index) => (
                  <Link key={index} to={news.href} className="group block">
                    <div className="card-dark p-5 hover:border-primary/40">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-xs">{news.category}</Badge>
                        <span className="text-white/40 text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {news.date}
                        </span>
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-primary-light transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Articles */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Badge className="badge-glow mb-2">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Beliebt
                  </Badge>
                  <h2 className="text-2xl font-bold text-white">Meistgelesen</h2>
                </div>
                <Link 
                  to="/blog" 
                  className="text-primary-light hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  Alle anzeigen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {popularArticlesData.map((article) => (
                  <Link key={article.id} to={article.href} className="group block">
                    <div className="card-dark p-5 hover:border-primary/40">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs border-white/20">{article.category}</Badge>
                        <span className="text-white/40 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-primary-light transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-white/50 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MedCanG Alert Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="gradient-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    MedCanG-Reform 2026
                  </h3>
                  <p className="text-white/60 max-w-xl">
                    Die geplante Reform verbietet Telemedizin und Versand. 
                    Erfahre, was das für dich bedeutet und welche Alternativen es gibt.
                  </p>
                </div>
              </div>
              <Button className="btn-primary flex-shrink-0" asChild>
                <Link to="/medizinisch/medcang-reform">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="badge-glow mb-4">
                <Shield className="w-3 h-3 mr-1" />
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-white/50">
                Die wichtigsten Fragen und Antworten auf einen Blick
              </p>
            </div>

            <div className="space-y-4">
              {faqData.slice(0, 3).map((faq, index) => (
                <div key={index} className="card-dark p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="btn-secondary" asChild>
                <Link to="/faq">Alle FAQ anzeigen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-dark/10 to-background" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-dark/20 rounded-full blur-[80px]" />
            
            <div className="relative p-10 md:p-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary-light" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bleib auf dem Laufenden
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Erhalte aktuelle Updates zu Gesetzen, Anbau-Tipps und Neuigkeiten 
                direkt in dein Postfach.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="input-dark flex-1 h-12"
                />
                <Button className="btn-primary h-12 px-8">
                  Anmelden
                </Button>
              </form>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="text-white/40 text-sm">✓ Kostenlos</span>
                <span className="text-white/40 text-sm">✓ Jederzeit abmeldbar</span>
                <span className="text-white/40 text-sm">✓ Kein Spam</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
