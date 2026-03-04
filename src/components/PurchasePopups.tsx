import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const names = [
  "João da Mata", "Maria do Rosário", "Carlos Eduardo", "Ana Paula", 
  "Roberto Silva", "Fernanda Costa", "Ricardo Almeida", "Juliana Martins",
  "Sérgio Oliveira", "Patrícia Lima", "Marcelo Santos", "Luciana Pereira",
  "Antônio Costa", "Cláudia Ribeiro", "Marcos Vinícius", "Beatriz Souza"
];

const locations = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR", 
  "Brasília, DF", "Goiânia, GO", "Porto Alegre, RS", "Salvador, BA",
  "Fortaleza, CE", "Manaus, AM", "Recife, PE", "Florianópolis, SC"
];

export function PurchasePopups() {
  const [popup, setPopup] = useState<{ name: string; location: string; time: string } | null>(null);

  useEffect(() => {
    const showRandomPopup = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomTime = Math.floor(Math.random() * 15) + 1; // 1 to 15 minutes ago
      
      setPopup({ name: randomName, location: randomLocation, time: `Há ${randomTime} min` });

      // Hide after 5 seconds
      setTimeout(() => {
        setPopup(null);
      }, 5000);
    };

    // Initial delay before first popup (5 seconds)
    const initialTimer = setTimeout(showRandomPopup, 5000);

    // Then loop every 15-30 seconds to be less annoying
    const interval = setInterval(() => {
      showRandomPopup();
    }, Math.random() * 15000 + 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-black/95 border border-[#009c3b]/40 p-4 rounded-xl shadow-[0_8px_30px_rgba(0,156,59,0.25)] flex items-center gap-4 max-w-[320px] backdrop-blur-md"
          >
            <div className="bg-[#009c3b]/20 p-2.5 rounded-full flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#009c3b]" />
            </div>
            <div>
              <p className="text-white text-sm font-bold leading-tight">
                {popup.name}
              </p>
              <p className="text-gray-300 text-xs mt-0.5">
                acabou de adquirir o Manual 2026
              </p>
              <p className="text-[var(--color-brand-gold)] text-[10px] mt-1.5 font-mono font-medium tracking-wider uppercase">
                {popup.time} • {popup.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
