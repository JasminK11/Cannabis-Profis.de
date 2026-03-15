import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  recht: [
    { name: 'Cannabis-Gesetz 2026', href: '/recht/cannabis-gesetz-2026' },
    { name: 'MedCanG-Reform', href: '/recht/medcang-reform-2026' },
    { name: 'Besitzlimits', href: '/recht/besitzlimits' },
    { name: 'Autofahren & THC', href: '/recht/autofahren-thc' },
  ],
  anbau: [
    { name: 'Anleitung für Anfänger', href: '/anbau/anleitung-anfaenger' },
    { name: 'Sorten-Vergleich', href: '/anbau/sorten-vergleich' },
    { name: 'Indoor vs. Outdoor', href: '/anbau/indoor-vs-outdoor' },
    { name: 'Anbau-Kalkulator', href: '/tools/anbau-kalkulator' },
  ],
  clubs: [
    { name: 'Gründungs-Guide', href: '/cannabis-clubs/gruendungs-guide' },
    { name: 'Satzung Muster', href: '/cannabis-clubs/satzung-muster' },
    { name: 'Club-Verzeichnis', href: '/cannabis-clubs/verzeichnis' },
    { name: 'Mitglied werden', href: '/cannabis-clubs/mitgliedschaft' },
  ],
  medizinisch: [
    { name: 'Rezept-Anleitung', href: '/medizinisch/rezept-anleitung' },
    { name: 'Ärzte-Verzeichnis', href: '/medizinisch/aerzte-verzeichnis' },
    { name: 'Apotheken-Verzeichnis', href: '/medizinisch/apotheken-verzeichnis' },
    { name: 'Kosten & Kasse', href: '/medizinisch/kosten-krankenkasse' },
  ],
  service: [
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Haftungsausschluss', href: '/haftungsausschluss' },
    { name: 'Affiliate-Hinweis', href: '/affiliate-hinweis' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-darker/20 to-background" />
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative">
        {/* Main Footer */}
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 group mb-6">
                <div className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/logo-white.png" 
                    alt="Cannabis-Profis.de Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">Cannabis-Profis</span>
                  <span className="text-primary-light font-bold">.de</span>
                </div>
              </Link>
              <p className="text-white/60 mb-6 text-sm leading-relaxed max-w-sm">
                Deine vertrauenswürdige Quelle für Cannabis-Informationen in Deutschland. 
                Aktuelle Gesetze, Anbau-Tipps, CSC-Infos und medizinische Beratung.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/50 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary-light" />
                  </div>
                  <span className="group-hover:text-white/70 transition-colors">kontakt@cannabis-profis.de</span>
                </div>
                <div className="flex items-center gap-3 text-white/50 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary-light" />
                  </div>
                  <span className="group-hover:text-white/70 transition-colors">+49 (0) 30 12345678</span>
                </div>
                <div className="flex items-center gap-3 text-white/50 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-4 h-4 text-primary-light" />
                  </div>
                  <span className="group-hover:text-white/70 transition-colors">Berlin, Deutschland</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/80">
                Recht & Gesetze
              </h4>
              <ul className="space-y-3">
                {footerLinks.recht.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/50 hover:text-primary-light transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/80">
                Anbau
              </h4>
              <ul className="space-y-3">
                {footerLinks.anbau.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/50 hover:text-primary-light transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/80">
                Cannabis-Clubs
              </h4>
              <ul className="space-y-3">
                {footerLinks.clubs.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/50 hover:text-primary-light transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/80">
                Service
              </h4>
              <ul className="space-y-3">
                {footerLinks.service.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/50 hover:text-primary-light transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gradient" />

        {/* Bottom Bar */}
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Cannabis-Profis.de. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary/20 hover:text-primary-light transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="bg-black/30 py-4">
          <div className="container-custom">
            <p className="text-white/30 text-xs text-center">
              Hinweis: Diese Website dient ausschließlich Informationszwecken. 
              Der Konsum und Anbau von Cannabis unterliegt den gesetzlichen Bestimmungen in Deutschland.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
