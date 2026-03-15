import { useState } from 'react';
import { Mail, CheckCircle2, Bell, BookOpen, Scale, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in section-padding">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Newsletter abonnieren
          </h1>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Bleib auf dem Laufenden mit den neuesten Entwicklungen zu Cannabis in Deutschland. 
            Wähle deine bevorzugten Themen und erhalte relevante Updates.
          </p>
        </div>

        {submitted ? (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Vielen Dank für deine Anmeldung!
              </h2>
              <p className="text-neutral-600 mb-4">
                Wir haben dir eine Bestätigungs-E-Mail an <strong>{email}</strong> gesendet.
                Bitte klicke auf den Link in der E-Mail, um deine Anmeldung abzuschließen.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">✓ Kostenlos</Badge>
                <Badge variant="secondary">✓ Jederzeit abmeldbar</Badge>
                <Badge variant="secondary">✓ Kein Spam</Badge>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">E-Mail-Adresse *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="deine@email.de" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    className="h-12"
                  />
                </div>

                {/* Topic Selection */}
                <div className="space-y-3">
                  <Label className="text-base">Welche Themen interessieren dich?</Label>
                  <RadioGroup 
                    value={topic} 
                    onValueChange={setTopic}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    <div>
                      <RadioGroupItem 
                        value="all" 
                        id="all" 
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="all"
                        className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                      >
                        <Bell className="w-5 h-5" />
                        <div>
                          <p className="font-medium">Alle Themen</p>
                          <p className="text-sm text-neutral-500">Gesetze, Anbau, CSC & mehr</p>
                        </div>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem 
                        value="recht" 
                        id="recht" 
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="recht"
                        className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                      >
                        <Scale className="w-5 h-5" />
                        <div>
                          <p className="font-medium">Recht & Gesetze</p>
                          <p className="text-sm text-neutral-500">Gesetzes-Updates</p>
                        </div>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem 
                        value="anbau" 
                        id="anbau" 
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="anbau"
                        className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                      >
                        <Sprout className="w-5 h-5" />
                        <div>
                          <p className="font-medium">Anbau</p>
                          <p className="text-sm text-neutral-500">Tipps & Tricks</p>
                        </div>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem 
                        value="csc" 
                        id="csc" 
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="csc"
                        className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                      >
                        <BookOpen className="w-5 h-5" />
                        <div>
                          <p className="font-medium">CSC & Medizinisch</p>
                          <p className="text-sm text-neutral-500">Clubs & Patienten-News</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1"
                    required 
                  />
                  <Label htmlFor="privacy" className="text-sm font-normal">
                    Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen 
                    und stimme der Verarbeitung meiner Daten zum Zweck des Newsletter-Versands zu. *
                  </Label>
                </div>

                <Button type="submit" className="w-full btn-primary h-12 text-base">
                  <Mail className="w-5 h-5 mr-2" />
                  Jetzt anmelden
                </Button>

                <div className="flex flex-wrap justify-center gap-2 pt-4 border-t">
                  <Badge variant="secondary" className="text-xs">✓ Kostenlos</Badge>
                  <Badge variant="secondary" className="text-xs">✓ Jederzeit abmeldbar</Badge>
                  <Badge variant="secondary" className="text-xs">✓ Kein Spam</Badge>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
              <Scale className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-1">Gesetzes-Updates</h3>
            <p className="text-sm text-neutral-600">
              Sofort informiert bei neuen Gesetzen und Reformen
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <Sprout className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-1">Anbau-Tipps</h3>
            <p className="text-sm text-neutral-600">
              Exklusive Tipps für erfolgreichen Cannabis-Anbau
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-1">CSC-News</h3>
            <p className="text-sm text-neutral-600">
              Aktuelle Entwicklungen bei Cannabis Social Clubs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
