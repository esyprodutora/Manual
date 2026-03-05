import { useState, useEffect, useRef } from 'react';
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

const donationAmounts = [30, 50, 75, 100, 150, 200, 250, 300, 500];

export function PurchasePopups() {
  const [popup, setPopup] = useState<{ name: string; location: string; time: string; amount: number } | null>(null);
  const popupCount = useRef(0);

  useEffect(() => {
    const showRandomPopup = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomTime = Math.floor(Math.random() * 15) + 1; // 1 to 15 minutes ago
      
      // Gradually increase the possible amounts based on how many popups have been shown
      // First popup: index 0-2 (30, 50, 75)
      // Second popup: index 0-4 (30, 50, 75, 100, 150)
      // Third+ popup: all amounts
      let maxIndex = 2;
      if (popupCount.current === 1) maxIndex = 4;
      if (popupCount.current >= 2) maxIndex = donationAmounts.length - 1;
      
      const randomAmountIndex = Math.floor(Math.random() * (maxIndex + 1));
      const randomAmount = donationAmounts[randomAmountIndex];
      
      setPopup({ name: randomName, location: randomLocation, time: `Há ${randomTime} min`, amount: randomAmount });
      popupCount.current += 1;

      // Hide after 8 seconds
      setTimeout(() => {
        setPopup(null);
      }, 8000);
    };

    // Initial delay before first popup (15 seconds)
    const initialTimer = setTimeout(showRandomPopup, 15000);

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
                contribuiu com <strong className="text-[#009c3b]">R$ {popup.amount},00</strong> para a missão
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
