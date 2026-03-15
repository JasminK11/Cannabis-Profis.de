import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in section-padding">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Kontakt</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Hast du Fragen oder Anregungen? Wir sind für dich da. 
            Schreib uns eine Nachricht oder nutze eine der folgenden Kontaktmöglichkeiten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">E-Mail</h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Schreib uns jederzeit
                    </p>
                    <a 
                      href="mailto:kontakt@cannabis-profis.de" 
                      className="text-primary hover:underline"
                    >
                      kontakt@cannabis-profis.de
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Telefon</h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Mo-Fr, 9-18 Uhr
                    </p>
                    <a 
                      href="tel:+493012345678" 
                      className="text-primary hover:underline"
                    >
                      +49 (0) 30 12345678
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Adresse</h3>
                    <p className="text-neutral-600 text-sm">
                      Cannabis-Profis.de<br />
                      Musterstraße 123<br />
                      10115 Berlin<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      Nachricht gesendet!
                    </h3>
                    <p className="text-neutral-600">
                      Vielen Dank für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Dein Name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="deine@email.de" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Betreff *</Label>
                      <Input 
                        id="subject" 
                        placeholder="Worum geht es?" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Deine Nachricht..." 
                        rows={6} 
                        required 
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="mt-1"
                        required 
                      />
                      <Label htmlFor="privacy" className="text-sm font-normal">
                        Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen 
                        und stimme der Verarbeitung meiner Daten zu. *
                      </Label>
                    </div>

                    <Button type="submit" className="w-full btn-primary">
                      <Send className="w-4 h-4 mr-2" />
                      Nachricht senden
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
