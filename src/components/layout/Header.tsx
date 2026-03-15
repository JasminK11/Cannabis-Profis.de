import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  {
    name: 'Recht',
    href: '/recht',
    items: [
      { name: 'Cannabis-Gesetz 2026', href: '/recht/cannabis-gesetz-2026' },
      { name: 'MedCanG-Reform', href: '/recht/medcang-reform-2026' },
      { name: 'Besitzlimits', href: '/recht/besitzlimits' },
      { name: 'Autofahren & THC', href: '/recht/autofahren-thc' },
      { name: 'Mietrecht', href: '/recht/mietrecht' },
    ],
  },
  {
    name: 'Anbau',
    href: '/anbau',
    items: [
      { name: 'Anleitung für Anfänger', href: '/anbau/anleitung-anfaenger' },
      { name: 'Sorten-Vergleich', href: '/anbau/sorten-vergleich' },
      { name: 'Indoor vs. Outdoor', href: '/anbau/indoor-vs-outdoor' },
      { name: 'Ernte & Trocknen', href: '/anbau/ernte-trocknen' },
      { name: 'Anbau-Kalkulator', href: '/tools/anbau-kalkulator' },
    ],
  },
  {
    name: 'Cannabis-Clubs',
    href: '/cannabis-clubs',
    items: [
      { name: 'Gründungs-Guide', href: '/cannabis-clubs/gruendungs-guide' },
      { name: 'Satzung Muster', href: '/cannabis-clubs/satzung-muster' },
      { name: 'Club-Verzeichnis', href: '/cannabis-clubs/verzeichnis' },
      { name: 'Mitglied werden', href: '/cannabis-clubs/mitgliedschaft' },
    ],
  },
  {
    name: 'Medizinisch',
    href: '/medizinisch',
    items: [
      { name: 'Rezept-Anleitung', href: '/medizinisch/rezept-anleitung' },
      { name: 'MedCanG-Reform', href: '/medizinisch/medcang-reform' },
      { name: 'Ärzte-Verzeichnis', href: '/medizinisch/aerzte-verzeichnis' },
      { name: 'Apotheken-Verzeichnis', href: '/medizinisch/apotheken-verzeichnis' },
      { name: 'Kosten & Kasse', href: '/medizinisch/kosten-krankenkasse' },
    ],
  },
  {
    name: 'Produkte',
    href: '/produkte',
    items: [
      { name: 'Samen', href: '/produkte/samen' },
      { name: 'Grow-Equipment', href: '/produkte/grow-equipment' },
      { name: 'Vaporizer', href: '/produkte/vaporizer' },
      { name: 'CBD-Öl', href: '/produkte/cbd-oel' },
    ],
  },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
              <img 
                src="/logo-white.png" 
                alt="Cannabis-Profis.de Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">Cannabis-Profis</span>
              <span className="text-primary-light font-bold">.de</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.items ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`nav-link flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                        location.pathname.startsWith(item.href)
                          ? 'nav-link-active bg-primary/10'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-56 glass border-primary/20"
                    sideOffset={8}
                  >
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          to={subItem.href}
                          className="cursor-pointer w-full hover:bg-primary/10 focus:bg-primary/10"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'nav-link-active bg-primary/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white/70 hover:text-white hover:bg-white/10"
              asChild
            >
              <Link to="/suche">
                <Search className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button
              className="hidden sm:inline-flex btn-primary"
              asChild
            >
              <Link to="/newsletter">Newsletter</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass border-t border-white/10 animate-slide-down">
          <div className="container-custom py-6">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div className="space-y-1">
                      <span className="font-semibold text-white/90 px-3 py-2 block">
                        {item.name}
                      </span>
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="nav-link block px-3 py-2 rounded-lg hover:bg-white/5"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="font-semibold text-white/90 px-3 py-2 rounded-lg hover:bg-white/5 block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 mt-4">
                <Button className="w-full btn-primary" asChild>
                  <Link to="/newsletter">Newsletter abonnieren</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
