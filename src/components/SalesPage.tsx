import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Target, ChevronRight, Star, AlertTriangle, TrendingDown, Users } from 'lucide-react';
import { PurchasePopups } from './PurchasePopups';

export function SalesPage() {
  const [patriotCount, setPatriotCount] = useState(23487);

  useEffect(() => {
    // Dynamic counter logic
    // It speeds up, slows down, and changes randomly to look organic
    const updateCounter = () => {
      setPatriotCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      
      // Randomize the next timeout between 2s and 12s
      const nextTimeout = Math.random() * 10000 + 2000;
      setTimeout(updateCounter, nextTimeout);
    };

    const initialTimer = setTimeout(updateCounter, 3000);
    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[var(--color-brand-bg)] text-white pb-24"
    >
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[var(--color-brand-gold)]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-6 py-3 border-2 border-[var(--color-brand-gold)] bg-[#2C3B1E] rounded-full mb-8 shadow-[0_0_40px_rgba(197,160,89,0.3)] transform hover:scale-105 transition-transform">
              <span className="text-[var(--color-brand-gold)] font-black tracking-widest uppercase text-sm md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Resultado Patriota: Estado Máximo de Alerta
              </span>
            </div>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6 md:mb-8 uppercase">
            Sua coragem mantém o Brasil de pé, mas o que te falta é a <span className="text-[var(--color-brand-gold)]">munição certa</span> para combater o sistema e resgatar a nossa nação.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            O tempo de apenas 'ter razão' acabou. Agora é hora de ter o plano. O sistema está organizado, financiado e focado em 2026. Você não pode mais lutar de mãos vazias.
          </p>

          <a href="#checkout" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 font-bold text-white uppercase tracking-widest bg-[#009c3b] hover:bg-[#007a2e] rounded-sm transition-all hover:shadow-[0_0_40px_rgba(0,156,59,0.4)] group text-sm md:text-base text-center">
            GARANTIR MEU MANUAL E O PLANO 2026
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-3 text-sm text-gray-300 font-mono bg-white/5 px-6 py-3 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <Users className="w-4 h-4 text-gray-400" />
              <span><strong className="text-white text-base">{patriotCount.toLocaleString('pt-BR')}</strong> patriotas já receberam o Manual 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Threat Section (Agitation) */}
      <section className="py-24 px-6 bg-black relative border-y border-red-900/50 overflow-hidden">
        {/* Ominous Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-luminosity">
          <img src="https://picsum.photos/seed/dystopia/1920/1080?grayscale" alt="Dystopia" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-red-950/40 to-black pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-full animate-pulse">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase text-white leading-tight tracking-tight">
            O Brasil caminha a passos largos para uma <span className="text-red-500 border-b-4 border-red-500">ditadura</span>.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              <p>
                O que você sentiu durante a avaliação não é paranoia. É a realidade batendo à sua porta. Nossos direitos mais básicos estão sendo arrancados de nós, um por um, sob o aplauso de uma mídia cúmplice.
              </p>
              <p>
                O sistema não quer apenas governar; eles querem o controle absoluto sobre o que você pensa, o que você fala e o que você ensina aos seus filhos.
              </p>
              <div className="p-6 border-l-4 border-red-500 bg-red-950/30 italic text-xl text-white shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]">
                "Eles sabem que a única barreira entre o controle total e a liberdade é a força da família conservadora e do patriotismo verdadeiro."
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-black/80 border border-red-900/50 rounded-lg flex items-start gap-4 transform transition-transform hover:-translate-x-2 shadow-[0_0_30px_rgba(239,68,68,0.05)]">
                <TrendingDown className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Seus Bens Ameaçados</h3>
                  <p className="text-gray-400 text-sm">Impostos confiscatórios e controle digital financeiro para asfixiar quem produz.</p>
                </div>
              </div>

              <div className="p-6 bg-black/80 border border-red-900/50 rounded-lg flex items-start gap-4 transform transition-transform hover:-translate-x-2 shadow-[0_0_30px_rgba(239,68,68,0.05)]">
                <Lock className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Seus Valores Criminalizados</h3>
                  <p className="text-gray-400 text-sm">A fé cristã e o patriotismo sendo tratados como ameaças à "democracia".</p>
                </div>
              </div>

              <div className="p-6 bg-black/80 border border-red-900/50 rounded-lg flex items-start gap-4 transform transition-transform hover:-translate-x-2 shadow-[0_0_30px_rgba(239,68,68,0.05)]">
                <Target className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Sua Família no Alvo</h3>
                  <p className="text-gray-400 text-sm">Doutrinação nas escolas para destruir a autoridade dos pais e corromper as crianças.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Mas a direita não pode mais lutar apenas com indignação. Reclamar em grupos de mensagens não vai parar o avanço deles. Precisamos de <strong className="text-[var(--color-brand-gold)] font-bold">artilharia intelectual e tática</strong>.
            </p>
            <div className="inline-block px-8 py-4 border-2 border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 shadow-[0_0_40px_rgba(197,160,89,0.15)]">
              <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">
                É exatamente para isso que o <span className="text-[var(--color-brand-gold)]">Plano 2026</span> foi forjado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arsenal Section */}
      <section className="py-20 px-6 bg-black/50 border-y border-[var(--color-brand-gold)]/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src="https://picsum.photos/seed/brazil/1920/1080?blur=4" alt="Background Texture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16 uppercase tracking-widest text-[var(--color-brand-gold)]">
            O Que Você Recebe (O Arsenal)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="p-8 rounded-xl bg-[var(--color-brand-green)]/20 border border-[var(--color-brand-green)] relative overflow-hidden group hover:border-[var(--color-brand-gold)]/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-24 h-24 text-[var(--color-brand-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-brand-gold)]">Manual da Liberdade 2026</h3>
              <p className="text-gray-400">Dossiê Geopolítico completo. Entenda as peças do tabuleiro e antecipe os movimentos do sistema.</p>
            </div>

            <div className="p-8 rounded-xl bg-[var(--color-brand-green)]/20 border border-[var(--color-brand-green)] relative overflow-hidden group hover:border-[var(--color-brand-gold)]/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="w-24 h-24 text-[var(--color-brand-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-brand-gold)]">Oratória de Combate</h3>
              <p className="text-gray-400">Técnicas de argumentação irrefutáveis. Aprenda a calar militantes treinados em menos de 2 minutos.</p>
            </div>

            <div className="p-8 rounded-xl bg-[var(--color-brand-green)]/20 border border-[var(--color-brand-green)] relative overflow-hidden group hover:border-[var(--color-brand-gold)]/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Lock className="w-24 h-24 text-[var(--color-brand-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-brand-gold)]">Blindagem Digital e Familiar</h3>
              <p className="text-gray-400">Estratégias práticas para proteger seu patrimônio, sua privacidade e a mente dos seus filhos.</p>
            </div>

            <div className="p-8 rounded-xl bg-[var(--color-brand-green)]/20 border border-[var(--color-brand-green)] relative overflow-hidden group hover:border-[var(--color-brand-gold)]/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-24 h-24 text-[var(--color-brand-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-brand-gold)]">O Mapa da Retomada</h3>
              <p className="text-gray-400">A estratégia coordenada para a maioria silenciosa agir com impacto real e organizado.</p>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <a href="#checkout" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 font-bold text-white uppercase tracking-widest bg-[#009c3b] hover:bg-[#007a2e] rounded-sm transition-all hover:shadow-[0_0_40px_rgba(0,156,59,0.4)] group text-sm md:text-base text-center">
              QUERO MINHA MUNIÇÃO ESTRATÉGICA AGORA
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img src="https://picsum.photos/seed/patriot/1920/1080?grayscale" alt="Background Texture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16 uppercase tracking-widest">
            A Linha de Frente Já Está Armada
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col">
              <div className="flex text-[var(--color-brand-gold)] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 italic mb-6 flex-1">"Eu achei que já sabia de tudo, mas esse manual me mostrou o que realmente está sendo montado para 2026. Agora sei como proteger minha empresa e como falar com autoridade. É a nossa retomada!"</p>
              <div>
                <div className="font-bold text-[var(--color-brand-gold)]">Carlos M.</div>
                <div className="text-sm text-gray-500">Empresário</div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col">
              <div className="flex text-[var(--color-brand-gold)] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 italic mb-6 flex-1">"Finalmente um direcionamento real! O capítulo de Oratória de Combate é surreal. Calei um militante em 2 minutos. O Brasil tem esperança se nos unirmos assim."</p>
              <div>
                <div className="font-bold text-[var(--color-brand-gold)]">Dra. Helena</div>
                <div className="text-sm text-gray-500">Advogada</div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col">
              <div className="flex text-[var(--color-brand-gold)] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 italic mb-6 flex-1">"Comprei pelos meus netos. Não quero que eles vivam uma ditadura. Esse plano me deu os argumentos certos para ser um multiplicador na minha igreja. Não vamos recuar!"</p>
              <div>
                <div className="font-bold text-[var(--color-brand-gold)]">Dr. Roberto</div>
                <div className="text-sm text-gray-500">Dentista</div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col">
              <div className="flex text-[var(--color-brand-gold)] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 italic mb-6 flex-1">"Eu me sentia sozinha e sem saber como rebater as narrativas na escola. O manual abriu meus olhos e me deu a confiança que eu precisava para defender nossos valores."</p>
              <div>
                <div className="font-bold text-[var(--color-brand-gold)]">Mariana S.</div>
                <div className="text-sm text-gray-500">Professora</div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col">
              <div className="flex text-[var(--color-brand-gold)] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 italic mb-6 flex-1">"A blindagem digital e familiar vale cada centavo. O sistema quer nos asfixiar, mas agora eu sei exatamente como proteger o que é meu e da minha família."</p>
              <div>
                <div className="font-bold text-[var(--color-brand-gold)]">João P.</div>
                <div className="text-sm text-gray-500">Comerciante</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Offer */}
      <section id="checkout" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/80">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border border-[#009c3b]/50 bg-black/50 backdrop-blur-sm relative shadow-[0_0_50px_rgba(0,156,59,0.1)] flex flex-col md:flex-row gap-12 items-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#009c3b] text-white text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
              Oferta Especial de Acesso
            </div>
            
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Resumo do Seu Arsenal:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-brand-gold)] flex-shrink-0" />
                  <span><strong>Manual da Liberdade 2026:</strong> Dossiê Geopolítico completo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-brand-gold)] flex-shrink-0" />
                  <span><strong>Oratória de Combate:</strong> Técnicas de argumentação irrefutáveis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-brand-gold)] flex-shrink-0" />
                  <span><strong>Blindagem Digital e Familiar:</strong> Proteção de patrimônio e privacidade.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-brand-gold)] flex-shrink-0" />
                  <span><strong>O Mapa da Retomada:</strong> Estratégia coordenada de ação.</span>
                </li>
                <li className="flex items-start gap-3 mt-6 pt-4 border-t border-white/10">
                  <Star className="w-6 h-6 text-[#009c3b] flex-shrink-0" />
                  <span><strong className="text-[#009c3b]">BÔNUS 1:</strong> Guia de Sobrevivência à Censura.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-[#009c3b] flex-shrink-0" />
                  <span><strong className="text-[#009c3b]">BÔNUS 2:</strong> Manual de Inteligência e Contra-Informação.</span>
                </li>
              </ul>
            </div>

            <div className="flex-1 w-full flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              <div className="mb-6 md:mb-8 flex flex-col items-center">
                <span className="text-gray-500 line-through text-lg md:text-xl mb-1">De R$ 97,00</span>
                <div className="text-4xl md:text-5xl font-black text-[var(--color-brand-gold)] flex items-baseline justify-center gap-2 flex-wrap">
                  <span className="text-xl md:text-2xl font-medium text-white/80">por apenas</span>
                  <span className="whitespace-nowrap">R$ 29,90</span>
                </div>
              </div>

              <button className="w-full py-4 md:py-5 font-black text-white text-base md:text-lg uppercase tracking-widest bg-[#009c3b] hover:bg-[#007a2e] rounded-sm transition-all shadow-[0_0_30px_rgba(0,156,59,0.4)] hover:shadow-[0_0_50px_rgba(0,156,59,0.6)] flex items-center justify-center gap-2 md:gap-3 group text-center">
                SIM! QUERO FAZER PARTE DA RETOMADA
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>
              
              <p className="mt-6 text-xs text-gray-400">
                Acesso imediato e vitalício. Pagamento 100% seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-6 bg-[#009c3b]/5 border-y border-[#009c3b]/20">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-[#009c3b] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4 text-white">Garantia Vitalícia de Risco Zero</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Nós confiamos tanto no poder deste material que oferecemos uma garantia incondicional e vitalícia. Se em qualquer momento você entender que este plano não é para você, basta um único e-mail e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-xs text-gray-500 max-w-4xl mx-auto px-6 leading-relaxed text-justify md:text-center">
          Este material possui caráter estritamente educativo e informativo, fundamentado nos direitos fundamentais de Liberdade de Expressão e Pensamento, conforme o Artigo 5º, incisos IV e IX da Constituição Federal de 1988. O conteúdo aqui exposto visa a análise geopolítica, o debate de ideias e o fomento da cidadania, não configurando, sob hipótese alguma: (I) propaganda eleitoral antecipada; (II) pedido de voto; (III) promoção de candidatura ou (IV) ofensa à integridade do processo eleitoral. Nos termos da Lei nº 9.504/1997 (Lei das Eleições) e da jurisprudência do TSE, a livre manifestação do pensamento e o debate sobre políticas públicas por parte do cidadão e de entes privados são pilares da democracia e não se confundem com atos de campanha.
        </p>
      </footer>

      <PurchasePopups />
    </motion.div>
  );
}
