import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Lock, Target, Search } from 'lucide-react';

const steps = [
  { text: "Iniciando Avaliação Patriota...", icon: Activity },
  { text: "Cruzando dados de vulnerabilidade...", icon: Search },
  { text: "Analisando nível de preparo geopolítico...", icon: Lock },
  { text: "Calculando índice de resgate do Brasil...", icon: Target },
  { text: "Gerando diagnóstico final...", icon: ShieldCheck },
];

export function AnalysisLoading({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds total
    const interval = 50;
    const stepsCount = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const newProgress = Math.min((current / stepsCount) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 20 && newProgress < 40) setCurrentStep(1);
      if (newProgress >= 40 && newProgress < 60) setCurrentStep(2);
      if (newProgress >= 60 && newProgress < 80) setCurrentStep(3);
      if (newProgress >= 80) setCurrentStep(4);

      if (current >= stepsCount) {
        clearInterval(timer);
        setTimeout(onComplete, 800); // brief pause at 100% before transitioning
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const Icon = steps[currentStep].icon;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-gold)]/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        <motion.div
          key={currentStep}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8 p-6 rounded-full bg-white/5 border border-[var(--color-brand-gold)]/30 relative"
        >
          <div className="absolute inset-0 rounded-full border border-[var(--color-brand-gold)]/50 animate-ping opacity-20" />
          <Icon className="w-12 h-12 text-[var(--color-brand-gold)] relative z-10" />
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest text-center mb-2">
          Avaliação Patriota
        </h2>
        <p className="text-[var(--color-brand-gold)] text-sm md:text-base font-bold tracking-widest uppercase mb-12 text-center">
          Diagnóstico de Resgate do Brasil
        </p>

        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-6 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[var(--color-brand-gold)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="h-8 flex items-center justify-center w-full">
          <motion.p
            key={currentStep}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-gray-400 font-mono text-sm text-center"
          >
            {steps[currentStep].text}
          </motion.p>
        </div>
        
        <div className="mt-8 text-xs text-gray-600 font-mono tracking-widest">
          {Math.round(progress)}% CONCLUÍDO
        </div>
      </div>
    </motion.div>
  );
}
