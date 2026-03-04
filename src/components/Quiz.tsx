import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ShieldAlert } from 'lucide-react';
import { quizData, Question, QuizBlock } from '../data/quiz';

interface QuizProps {
  onComplete: () => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showImpactScreen, setShowImpactScreen] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentBlock: QuizBlock = quizData[currentBlockIndex];
  const currentQuestion: Question = currentBlock.questions[currentQuestionIndex];

  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));

    if (currentQuestionIndex < currentBlock.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // End of block
      if (currentBlock.impactScreen) {
        setShowImpactScreen(true);
      } else {
        nextBlock();
      }
    }
  };

  const nextBlock = () => {
    setShowImpactScreen(false);
    if (currentBlockIndex < quizData.length - 1) {
      setCurrentBlockIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      onComplete();
    }
  };

  const totalQuestions = quizData.reduce((acc, block) => acc + block.questions.length, 0);
  const currentGlobalQuestion = quizData
    .slice(0, currentBlockIndex)
    .reduce((acc, block) => acc + block.questions.length, 0) + currentQuestionIndex + 1;
  const progress = (currentGlobalQuestion / totalQuestions) * 100;

  const theme = currentBlock.impactScreen?.theme || 'gold';
  const themeColors = {
    green: {
      text: 'text-[#009c3b]',
      bg: 'bg-[#009c3b]/10',
      border: 'border-[#009c3b]/30',
      icon: 'text-[#009c3b]',
      btnBg: 'bg-[#009c3b]',
      btnHover: 'hover:bg-[#007a2e]'
    },
    red: {
      text: 'text-red-500',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      icon: 'text-red-500',
      btnBg: 'bg-red-600',
      btnHover: 'hover:bg-red-700'
    },
    gold: {
      text: 'text-[var(--color-brand-gold)]',
      bg: 'bg-[var(--color-brand-gold)]/10',
      border: 'border-[var(--color-brand-gold)]/30',
      icon: 'text-[var(--color-brand-gold)]',
      btnBg: 'bg-[var(--color-brand-gold)]',
      btnHover: 'hover:bg-[var(--color-brand-gold-dark)]'
    }
  }[theme];

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-white flex flex-col relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-gold)] rounded-full blur-[150px]" />
      </div>

      {/* Header / Progress */}
      <header className="relative z-10 p-6 border-b border-[var(--color-brand-gold)]/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-3xl mx-auto flex items-center justify-center mb-4">
          <div className="text-xs font-bold tracking-widest text-[var(--color-brand-gold)] uppercase">
            Avaliação de Risco
          </div>
        </div>
        <div className="max-w-3xl mx-auto h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-brand-gold)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {showImpactScreen && currentBlock.impactScreen ? (
            <motion.div
              key="impact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl w-full text-center space-y-6 md:space-y-8 px-4"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full ${themeColors.bg} border ${themeColors.border} mb-4 md:mb-6 mx-auto`}>
                <ShieldAlert className={`w-10 h-10 md:w-12 md:h-12 ${themeColors.icon}`} />
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase ${themeColors.text} leading-tight`}>
                {currentBlock.impactScreen.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                {currentBlock.impactScreen.text}
              </p>
              <button
                onClick={nextBlock}
                className={`mt-8 md:mt-12 w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 font-bold text-white uppercase tracking-widest ${themeColors.btnBg} ${themeColors.btnHover} rounded-sm transition-all hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] group text-sm md:text-base`}
              >
                CONTINUAR AVALIAÇÃO
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl w-full px-2 sm:px-4"
            >
              <div className="mb-8 md:mb-12 text-center">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight text-white">
                  {currentQuestion.text}
                </h2>
              </div>

              <div className="space-y-3 md:space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className="w-full text-left p-4 md:p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-[var(--color-brand-green)]/20 hover:border-[var(--color-brand-gold)]/50 transition-all group relative overflow-hidden flex items-start gap-3 md:gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center text-xs md:text-sm font-mono text-gray-400 group-hover:border-[var(--color-brand-gold)] group-hover:text-[var(--color-brand-gold)] transition-colors mt-0.5 md:mt-0">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors leading-snug md:leading-relaxed">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
