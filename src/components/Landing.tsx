import { motion } from 'motion/react';
import { ShieldAlert, ChevronRight, AlertTriangle } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-brand-green)] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl w-full z-10 flex flex-col items-center text-center space-y-8 md:space-y-12 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-brand-green)] border border-[var(--color-brand-gold)]/30 mb-2 md:mb-4 shadow-[0_0_30px_rgba(197,160,89,0.15)]"
        >
          <ShieldAlert className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-gold)]" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-[var(--color-brand-gold)]/30 bg-[var(--color-brand-gold)]/5 text-[var(--color-brand-gold)] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">
            Acesso Restrito
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white uppercase">
            O Brasil chegou ao <span className="text-[var(--color-brand-gold)]">ponto de não retorno.</span>
            <br className="hidden sm:block" />
            Você vai lutar ou se entregar?
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed font-light"
        >
          O cerco está fechando. Sua liberdade, seu patrimônio e sua família são os alvos. 2026 não é apenas uma eleição, é a última janela para o resgate do Brasil. Isto não é uma enquete; é o diagnóstico do seu nível de prontidão para o confronto final.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full sm:w-auto"
        >
          <button
            onClick={onStart}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 font-bold text-white uppercase tracking-widest bg-[var(--color-brand-green)] overflow-hidden rounded-sm transition-all hover:bg-[var(--color-brand-green-dark)] border border-[var(--color-brand-gold)]/50 hover:border-[var(--color-brand-gold)] hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] text-sm md:text-base"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative flex items-center gap-3">
              AVALIAÇÃO PATRIOTA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
