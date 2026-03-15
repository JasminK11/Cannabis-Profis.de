import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Beaker,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { blogCategoriesData } from '@/data/content';

const blogPosts = [
  {
    id: 1,
    title: 'MedCanG-Reform: Bundestag stimmt über Cannabis-Gesetz ab',
    excerpt: 'Die geplante Reform der medizinischen Cannabis-Versorgung steht zur Abstimmung. Was bedeutet das für Patienten?',
    category: 'news',
    date: '15.03.2026',
    readTime: '5 Min.',
    featured: true,
    href: '/blog/news/medcang-reform-bundestag',
  },
  {
    id: 2,
    title: 'Neue Studie: Cannabis bei chronischen Schmerzen',
    excerpt: 'Forschungsergebnisse zeigen signifikante Schmerzlinderung bei Patienten mit neuropathischen Schmerzen.',
    category: 'studien',
    date: '12.03.2026',
    readTime: '8 Min.',
    featured: false,
    href: '/blog/studien/cannabis-chronische-schmerzen',
  },
  {
    id: 3,
    title: 'CSC Berlin Mitte: Erfahrungsbericht eines Mitglieds',
    excerpt: 'Ein Mitglied berichtet über seine Erfahrungen im ersten Jahr im Cannabis Social Club.',
    category: 'community',
    date: '10.03.2026',
    readTime: '6 Min.',
    featured: false,
    href: '/blog/community/csc-berlin-erfahrung',
  },
  {
    id: 4,
    title: 'Cannabis-Gesetz 2026: Alle Änderungen im Detail',
    excerpt: 'Das neue Cannabis-Gesetz bringt weitreichende Änderungen. Wir erklären alle Neuerungen verständlich.',
    category: 'gesetzesaenderungen',
    date: '08.03.2026',
    readTime: '12 Min.',
    featured: true,
    href: '/blog/gesetzesaenderungen/kcang-2026',
  },
  {
    id: 5,
    title: 'Neue CSC in Deutschland: März 2026',
    excerpt: 'Über 50 neue Cannabis Social Clubs wurden diesen Monat gegründet. Hier ist die Übersicht.',
    category: 'news',
    date: '05.03.2026',
    readTime: '4 Min.',
    featured: false,
    href: '/blog/news/neue-csc-maerz',
  },
  {
    id: 6,
    title: 'THC-Grenzwerte beim Autofahren: Was gilt 2026?',
    excerpt: 'Die aktuellen THC-Grenzwerte und ihre Konsequenzen für Cannabis-Konsumenten.',
    category: 'gesetzesaenderungen',
    date: '01.03.2026',
    readTime: '7 Min.',
    featured: false,
    href: '/blog/gesetzesaenderungen/thc-grenzwerte',
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  news: TrendingUp,
  gesetzesaenderungen: AlertTriangle,
  studien: Beaker,
  community: Users,
};

const categoryLabels: Record<string, string> = {
  news: 'News',
  gesetzesaenderungen: 'Gesetzesänderungen',
  studien: 'Studien',
  community: 'Community',
};

export default function Blog() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500 text-white mb-4">
              <Newspaper className="w-4 h-4 mr-1" />
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News & Aktuelles
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Bleib auf dem Laufenden mit den neuesten Entwicklungen zu Cannabis in Deutschland. 
              Gesetze, Studien, Community-Beiträge und mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <TabsList>
                <TabsTrigger value="all">Alle</TabsTrigger>
                {blogCategoriesData.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id}>
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <Button variant="outline" size="sm" asChild>
                <Link to="/newsletter">
                  Newsletter abonnieren
                </Link>
              </Button>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured Post */}
                {blogPosts.filter(p => p.featured).slice(0, 1).map((post) => (
                  <div key={post.id} className="lg:col-span-2">
                    <Link to={post.href}>
                      <Card className="card-hover overflow-hidden h-full">
                        <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                          <Newspaper className="w-24 h-24 text-primary/40" />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Badge className="bg-primary/10 text-primary">
                              {categoryLabels[post.category]}
                            </Badge>
                            <span className="text-neutral-500 text-sm flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </span>
                            <span className="text-neutral-500 text-sm flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                            {post.title}
                          </h2>
                          <p className="text-neutral-600 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-primary font-medium">
                            Weiterlesen
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Categories */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-neutral-900 mb-4">Kategorien</h3>
                      <div className="space-y-2">
                        {blogCategoriesData.map((cat) => {
                          const Icon = categoryIcons[cat.id] || Tag;
                          return (
                            <Link
                              key={cat.id}
                              to={cat.href}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <Icon className="w-4 h-4 text-neutral-500" />
                                <span className="text-neutral-700">{cat.name}</span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-neutral-400" />
                            </Link>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Newsletter */}
                  <Card className="gradient-primary text-white">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Newsletter</h3>
                      <p className="text-white/80 text-sm mb-4">
                        Erhalte die neuesten Artikel direkt in dein Postfach.
                      </p>
                      <Button className="w-full bg-white text-primary hover:bg-neutral-100">
                        Abonnieren
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* All Posts Grid */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Weitere Artikel</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.filter(p => !p.featured).map((post) => (
                    <Link key={post.id} to={post.href}>
                      <Card className="card-hover h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary" className="text-xs">
                              {categoryLabels[post.category]}
                            </Badge>
                            <span className="text-neutral-500 text-xs">
                              {post.date}
                            </span>
                          </div>
                          <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-neutral-600 text-sm line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="mt-4 flex items-center text-primary text-sm font-medium">
                            Weiterlesen
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </TabsContent>

            {blogCategoriesData.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter((post) => post.category === cat.id)
                    .map((post) => (
                      <Link key={post.id} to={post.href}>
                        <Card className="card-hover h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <Badge variant="secondary" className="text-xs">
                                {categoryLabels[post.category]}
                              </Badge>
                              <span className="text-neutral-500 text-xs">
                                {post.date}
                              </span>
                            </div>
                            <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-neutral-600 text-sm line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="mt-4 flex items-center text-primary text-sm font-medium">
                              Weiterlesen
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Keine News mehr verpassen?
            </h2>
            <p className="text-neutral-600 mb-8">
              Abonniere unseren Newsletter und erhalte wöchentlich die wichtigsten 
              Updates zu Cannabis in Deutschland.
            </p>
            <Button className="btn-primary" asChild>
              <Link to="/newsletter">Jetzt abonnieren</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
