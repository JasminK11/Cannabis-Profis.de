import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ArrowRight, 
  Sprout, 
  Home, 
  Sun,
  Euro,
  CheckCircle2,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Tools() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500 text-white mb-4">
              <Calculator className="w-4 h-4 mr-1" />
              Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hilfsmittel & Rechner
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Praktische Tools für Cannabis-Anbauer, CSC-Gründer und Patienten. 
              Kosten berechnen, Pläne erstellen und mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Anbau Kalkulator */}
            <Card className="card-hover border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Anbau-Kalkulator</CardTitle>
                    <p className="text-sm text-neutral-500">Kosten berechnen</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm mb-4">
                  Berechne die Kosten für deinen Cannabis-Anbau in unter 2 Minuten.
                </p>
                <Button className="w-full btn-primary" asChild>
                  <Link to="/tools/anbau-kalkulator">
                    Kalkulator starten
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* CSC Gründungs-Check */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">CSC-Gründungs-Check</CardTitle>
                    <p className="text-sm text-neutral-500">Voraussetzungen prüfen</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm mb-4">
                  Prüfe, ob du alle Voraussetzungen für eine CSC-Gründung erfüllst.
                </p>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/tools/csc-check">
                    Check starten
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Arzt-Finder */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Arzt-Finder</CardTitle>
                    <p className="text-sm text-neutral-500">Cannabis-Ärzte finden</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm mb-4">
                  Finde autorisierte Cannabis-Ärzte in deiner Nähe.
                </p>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/medizinisch/aerzte-verzeichnis">
                    Arzt suchen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tool: Anbau Kalkulator */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="bg-primary/10 text-primary mb-4">Beliebt</Badge>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Anbau-Kalkulator
              </h2>
              <p className="text-neutral-600">
                Berechne die Kosten für deinen legalen Cannabis-Anbau in Deutschland.
              </p>
            </div>

            <AnbauKalkulator />
          </div>
        </div>
      </section>
    </div>
  );
}

function AnbauKalkulator() {
  const [anbauMethode, setAnbauMethode] = useState('indoor');
  const [pflanzenAnzahl, setPflanzenAnzahl] = useState([2]);
  const [equipmentQualitaet, setEquipmentQualitaet] = useState('mittel');

  // Kostenberechnung
  const calculateCosts = () => {
    const pflanzen = pflanzenAnzahl[0];
    let basisKosten = 0;
    let laufendeKosten = 0;

    // Basis-Kosten je nach Methode
    if (anbauMethode === 'indoor') {
      basisKosten += 300; // Growbox
      basisKosten += equipmentQualitaet === 'budget' ? 100 : equipmentQualitaet === 'mittel' ? 200 : 400; // Lampe
      basisKosten += equipmentQualitaet === 'budget' ? 50 : equipmentQualitaet === 'mittel' ? 100 : 200; // Lüftung
      basisKosten += 50; // Filter
      basisKosten += 30; // Töpfe
      basisKosten += 40; // Messgeräte
      laufendeKosten += 50; // Strom
    } else if (anbauMethode === 'outdoor') {
      basisKosten += 50; // Töpfe
      basisKosten += 30; // Messgeräte
      laufendeKosten += 20; // Dünger
    } else {
      // Balkon
      basisKosten += 100; // kleine Growbox
      basisKosten += 80; // kleine Lampe
      basisKosten += 30; // Töpfe
      laufendeKosten += 30; // Strom
    }

    // Samen-Kosten
    basisKosten += pflanzen * 25; // ca. 25€ pro Samen

    // Ertragsschätzung
    const ertragMin = pflanzen * 25; // 25g pro Pflanze (min)
    const ertragMax = pflanzen * 50; // 50g pro Pflanze (max)

    const kostenProGrammMin = (basisKosten + laufendeKosten) / ertragMax;
    const kostenProGrammMax = (basisKosten + laufendeKosten) / ertragMin;

    return {
      einmalkosten: basisKosten,
      laufendeKosten,
      ertragMin,
      ertragMax,
      kostenProGrammMin,
      kostenProGrammMax,
    };
  };

  const kosten = calculateCosts();

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Anbau-Methode */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Anbau-Methode</Label>
              <RadioGroup 
                value={anbauMethode} 
                onValueChange={setAnbauMethode}
                className="grid grid-cols-3 gap-3"
              >
                <div>
                  <RadioGroupItem 
                    value="indoor" 
                    id="indoor" 
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="indoor"
                    className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                  >
                    <Home className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">Indoor</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem 
                    value="outdoor" 
                    id="outdoor" 
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="outdoor"
                    className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                  >
                    <Sun className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">Outdoor</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem 
                    value="balkon" 
                    id="balkon" 
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="balkon"
                    className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                  >
                    <Home className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">Balkon</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Pflanzen-Anzahl */}
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Anzahl Pflanzen: <span className="text-primary">{pflanzenAnzahl[0]}</span>
              </Label>
              <Slider
                value={pflanzenAnzahl}
                onValueChange={setPflanzenAnzahl}
                max={3}
                min={1}
                step={1}
                className="w-full"
              />
              <p className="text-sm text-neutral-500 mt-2">
                Maximal 3 Pflanzen pro Person erlaubt
              </p>
            </div>

            {/* Equipment-Qualität */}
            {anbauMethode === 'indoor' && (
              <div>
                <Label className="text-base font-semibold mb-3 block">Equipment-Qualität</Label>
                <RadioGroup 
                  value={equipmentQualitaet} 
                  onValueChange={setEquipmentQualitaet}
                  className="grid grid-cols-3 gap-3"
                >
                  <div>
                    <RadioGroupItem 
                      value="budget" 
                      id="budget" 
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="budget"
                      className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                    >
                      <span className="text-sm font-medium">Budget</span>
                      <span className="text-xs text-neutral-500">ab 300€</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="mittel" 
                      id="mittel" 
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="mittel"
                      className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                    >
                      <span className="text-sm font-medium">Mittelklasse</span>
                      <span className="text-xs text-neutral-500">ab 500€</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="premium" 
                      id="premium" 
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="premium"
                      className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-neutral-50"
                    >
                      <span className="text-sm font-medium">Premium</span>
                      <span className="text-xs text-neutral-500">ab 800€</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="bg-neutral-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <Euro className="w-5 h-5 text-primary" />
              Ergebnis
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">Einmalkosten:</span>
                <span className="text-xl font-bold text-neutral-900">{kosten.einmalkosten}€</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">Laufende Kosten:</span>
                <span className="text-lg font-semibold text-neutral-900">{kosten.laufendeKosten}€</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">Geschätzter Ertrag:</span>
                <span className="text-lg font-semibold text-neutral-900">
                  {kosten.ertragMin}-{kosten.ertragMax}g
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-primary/10 rounded-lg px-4">
                <span className="font-medium text-neutral-900">Kosten pro Gramm:</span>
                <span className="text-xl font-bold text-primary">
                  {kosten.kostenProGrammMin.toFixed(2)}-{kosten.kostenProGrammMax.toFixed(2)}€
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-700">
                  Diese Berechnung ist eine Schätzung. Die tatsächlichen Kosten können 
                  je nach Anbieter und Standort variieren.
                </p>
              </div>
            </div>

            <Button className="w-full mt-6 btn-primary" asChild>
              <Link to="/produkte/grow-equipment">
                Equipment finden
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
