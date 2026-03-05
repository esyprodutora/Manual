import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, Target, Star, ChevronRight, AlertTriangle, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { PurchasePopups } from './PurchasePopups';

const DONATION_OPTIONS = [
  { amount: 30, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=1ff7a41d-17e9-11f1-b2a5-46da4690ad53" },
  { amount: 50, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=018d31aa-17f1-11f1-b2a5-46da4690ad53" },
  { amount: 75, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=2913c7c2-17f1-11f1-b2a5-46da4690ad53" },
  { amount: 100, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=6e3fa830-17f1-11f1-b2a5-46da4690ad53" },
  { amount: 150, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=eb8612a0-18af-11f1-b2a5-46da4690ad53" },
  { amount: 200, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=fe1ce93f-18af-11f1-b2a5-46da4690ad53" },
  { amount: 250, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=2fa5d7f1-18c0-11f1-b2a5-46da4690ad53" },
  { amount: 300, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=6c797f35-18b0-11f1-b2a5-46da4690ad53" },
  { amount: 500, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=7af713bc-18b0-11f1-b2a5-46da4690ad53" },
  { amount: 1000, url: "https://pagamento.manualdaliberdadebr.shop/checkout?product=8a94ec2a-18b0-11f1-b2a5-46da4690ad53" }
];

export function SalesPage() {
  const [counter, setCounter] = useState(847);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCounter = () => {
      setCounter(prev => {
        const increment = Math.floor(Math.random() * 3) + 1;
        return prev + increment;
      });
      const nextUpdate = Math.floor(Math.random() * 5000) + 2000;
      setTimeout(updateCounter, nextUpdate);
    };

    const initialTimer = setTimeout(updateCounter, 3000);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
        // Reached the end, scroll back to start
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to next item (approximate width of item + gap)
        carousel.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[var(--color-brand-bg)] text-white pb-24 pt-10"
    >
      {/* Top Warning Banner */}
      <div className="fixed top-0 left-0 w-full bg-red-600/90 text-white py-2 px-4 text-center z-50 flex items-center justify-center gap-2 backdrop-blur-sm border-b border-red-500">
        <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
        <p className="text-xs md:text-sm font-bold tracking-wider uppercase">
          Atenção: Não saia deste site. Estão tentando derrubar este conteúdo.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[var(--color-brand-gold)]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-12"
          >
            <div className="inline-flex flex-col items-center px-8 py-6 border-2 border-[var(--color-brand-gold)] bg-[#2C3B1E] rounded-2xl mb-8 shadow-[0_0_50px_rgba(197,160,89,0.2)] transform hover:scale-105 transition-transform relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent opacity-50"></div>
              
              {/* Visual Graph/Meter */}
              <div className="w-full max-w-[200px] h-2 bg-black/50 rounded-full mb-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-600"></div>
                <motion.div 
                  initial={{ left: "0%" }}
                  animate={{ left: "85%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="absolute top-1/2 -translate-y-1/2 w-1 h-4 bg-white shadow-[0_0_10px_white]"
                />
              </div>

              <span className="text-red-400 font-bold tracking-widest uppercase text-sm mb-1">
                Nível de Risco Detectado: CRÍTICO
              </span>
              <span className="text-gray-300 text-xs">
                Seu perfil está na zona de alvo do sistema.
              </span>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight uppercase mb-8">
            VOCÊ É UM PATRIOTA DE VALOR, MAS ESTÁ <span className="text-red-500">DESARMADO</span> E MARCHANDO CEGO PARA UMA <span className="text-red-500">ARMADILHA.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            O diagnóstico foi claro: você tem os valores certos, mas não tem as ferramentas para se defender. O sistema já mapeou seus passos. A censura, a perda de liberdade e o ataque à sua família são um plano coordenado para 2026.
          </p>

          {/* Live Counter */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/40 border border-white/10 rounded-full mb-16">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              <strong className="text-white">{counter.toLocaleString('pt-BR')}</strong> patriotas já se uniram à missão hoje
            </span>
          </div>
        </div>
      </section>

      {/* The Problem / Agitation */}
      <section className="py-20 px-6 bg-black/40 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 uppercase tracking-widest text-red-500">
            Eles Contam Com o Seu Silêncio
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-900/20 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Censura Silenciosa</h3>
                  <p className="text-gray-400 text-sm">Algoritmos treinados para esconder suas opiniões e isolar você da sua rede de contatos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-900/20 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Asfixia Financeira</h3>
                  <p className="text-gray-400 text-sm">Novas leis e impostos desenhados especificamente para enfraquecer a classe média e os empreendedores.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-900/20 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Falsa Oposição</h3>
                  <p className="text-gray-400 text-sm">Políticos que usam o discurso conservador apenas para se eleger, mas votam com o sistema.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-900/20 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Sua Família no Alvo</h3>
                  <p className="text-gray-400 text-sm">Doutrinação nas escolas para destruir a autoridade dos pais e corromper as crianças.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A direita não pode mais lutar apenas com indignação. Reclamar em grupos de mensagens não vai parar o avanço deles. Precisamos de <strong className="text-[var(--color-brand-gold)] font-bold">artilharia intelectual e tática</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Arsenal Section */}
      <section className="py-20 px-6 bg-black/50 border-y border-[var(--color-brand-gold)]/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src="https://picsum.photos/seed/brazil/1920/1080?blur=4" alt="Background Texture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 uppercase tracking-widest text-[var(--color-brand-gold)]">
            O Que Você Vai Receber
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Nós não estamos cobrando por este material. Ele é seu. Mas precisamos da sua ajuda para manter este movimento vivo.
          </p>
          
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
          
          <div ref={carouselRef} className="flex overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory hide-scrollbar gap-6 scroll-smooth">
            {[
              {
                text: "O conteúdo é um verdadeiro arsenal. Contribuí com o projeto porque precisamos que essa mensagem chegue a mais pessoas antes de 2026. É a nossa retomada!",
                name: "Carlos M.",
                role: "Empresário"
              },
              {
                text: "Finalmente um direcionamento real! Fiz questão de apoiar a missão. O Brasil tem esperança se nos unirmos e financiarmos iniciativas como essa.",
                name: "Dra. Helena",
                role: "Advogada"
              },
              {
                text: "Apoiei o projeto porque não quero que meus netos vivam em uma ditadura. Esse plano me deu os argumentos certos para ser um multiplicador. Não vamos recuar!",
                name: "Dr. Roberto",
                role: "Dentista"
              },
              {
                text: "Eu me sentia sozinha e sem saber como rebater as narrativas na escola. O manual abriu meus olhos e me deu a confiança que eu precisava para defender nossos valores.",
                name: "Mariana S.",
                role: "Professora"
              },
              {
                text: "A blindagem digital e familiar vale cada centavo. O sistema quer nos asfixiar, mas agora eu sei exatamente como proteger o que é meu e da minha família.",
                name: "João P.",
                role: "Comerciante"
              },
              {
                text: "O nível de detalhe do dossiê é impressionante. Todos precisam ler isso antes que seja tarde demais. Fiz minha parte apoiando o projeto.",
                name: "Marcos V.",
                role: "Engenheiro"
              },
              {
                text: "Não é só um livro, é um plano de ação. A direita estava precisando de algo assim, organizado e tático. Contribuí com muito orgulho.",
                name: "Ana Paula",
                role: "Médica"
              },
              {
                text: "Estava cansado de só ver reclamação na internet. O Mapa da Retomada me deu esperança e ferramentas reais. Vale cada centavo da doação.",
                name: "Ricardo T.",
                role: "Produtor Rural"
              }
            ].map((testimonial, index) => (
              <div key={index} className="min-w-[280px] md:min-w-[320px] max-w-[350px] snap-center p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col flex-shrink-0">
                <div className="flex text-[var(--color-brand-gold)] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-6 flex-1">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-[var(--color-brand-gold)]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[var(--color-brand-gold)]' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Donation Offer */}
      <section id="checkout" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/80">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-2xl border border-[var(--color-brand-gold)]/30 bg-black/60 backdrop-blur-md relative shadow-[0_0_40px_rgba(197,160,89,0.1)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[var(--color-brand-gold)] text-black text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(197,160,89,0.3)]">
              DO POVO PARA O POVO
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              NÃO ESTAMOS COBRANDO PELO MATERIAL. <br className="hidden md:block" />
              <span className="text-[var(--color-brand-gold)]">QUEREMOS SUA AJUDA.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Este movimento é feito pelo povo e para o povo. Precisamos converter cada vez mais pessoas para resgatar o nosso país. A eleição de 2026 é a nossa última chance.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Precisamos espalhar a nossa palavra, o manual, e mostrar o caminho para transformar a indignação em voto. Para resgatar o Brasil com a direita. <strong className="text-white">Deus, Pátria, Família.</strong>
            </p>

            <div className="bg-white/5 border border-[var(--color-brand-gold)]/20 p-6 rounded-xl mb-10 max-w-2xl mx-auto">
              <p className="text-xl text-white font-medium mb-2">
                Você não vai pagar pelo manual. Eu vou te entregar tudo isso.
              </p>
              <p className="text-lg text-[var(--color-brand-gold)] font-bold">
                Mas eu preciso que você me ajude com uma contribuição para ampliarmos o movimento. Você escolhe o valor.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="relative overflow-hidden w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 rounded-lg border-2 border-[var(--color-brand-gold)] bg-[#0a2e14] hover:bg-[#0f421d] transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.15)] hover:shadow-[0_0_50px_rgba(197,160,89,0.4)] flex items-center justify-center group hover:-translate-y-1"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(197,160,89,0.2)] rounded-lg pointer-events-none" />
                
                {/* Sweep effect */}
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/30 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                
                <span className="relative font-black text-[var(--color-brand-gold)] text-lg md:text-xl uppercase tracking-widest">
                  SIM, QUERO CONTRIBUIR COM A MISSÃO
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-xs text-gray-500 max-w-4xl mx-auto px-6 leading-relaxed text-justify md:text-center">
          Este material possui caráter estritamente educativo e informativo, fundamentado nos direitos fundamentais de Liberdade de Expressão e Pensamento, conforme o Artigo 5º, incisos IV e IX da Constituição Federal de 1988. O conteúdo aqui exposto visa a análise geopolítica, o debate de ideias e o fomento da cidadania, não configurando, sob hipótese alguma: (I) propaganda eleitoral antecipada; (II) pedido de voto; (III) promoção de candidatura ou (IV) ofensa à integridade do processo eleitoral. Nos termos da Lei nº 9.504/1997 (Lei das Eleições) e da jurisprudência do TSE, a livre manifestação do pensamento e o debate sobre políticas públicas por parte do cidadão e de entes privados são pilares da democracia e não se confundem com atos de campanha.
        </p>
      </footer>

      <PurchasePopups />

      {/* Donation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#111] border border-[var(--color-brand-gold)]/50 rounded-2xl w-full max-w-lg overflow-hidden shadow-[0_0_50px_rgba(197,160,89,0.3)] relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 text-center border-b border-white/10">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  Escolha sua Contribuição
                </h3>
                <p className="text-gray-400 text-sm px-4">
                  Sua doação ajuda a manter nossa voz ativa e a espalhar nosso projeto cada vez mais.
                </p>
              </div>

              <div className="p-6 bg-black/40">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {DONATION_OPTIONS.map(({ amount, url }) => (
                    <a
                      key={amount}
                      href={url}
                      className={`relative flex flex-col items-center justify-center py-3 px-1 sm:px-2 rounded-lg border transition-all duration-300 group overflow-hidden
                        ${amount === 150 
                          ? 'border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 shadow-[0_0_15px_rgba(197,160,89,0.3)]' 
                          : 'border-[var(--color-brand-gold)]/30 bg-white/5 hover:border-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)]/10'
                        }`}
                    >
                      {amount === 150 && (
                        <div className="absolute top-0 left-0 w-full bg-[var(--color-brand-gold)] text-black text-[8px] sm:text-[9px] font-bold uppercase tracking-widest py-0.5 text-center">
                          Mais Escolhido
                        </div>
                      )}
                      <span className={`text-base sm:text-lg md:text-xl font-black whitespace-nowrap ${amount === 150 ? 'text-[var(--color-brand-gold)] mt-3' : 'text-white group-hover:text-[var(--color-brand-gold)] transition-colors'}`}>
                        {amount === 1000 ? 'R$ 1.000' : `R$ ${amount}`}
                      </span>
                    </a>
                  ))}
                </div>
                
                <p className="text-center text-xs text-gray-500 mt-6 space-y-2">
                  <span className="block">Ao clicar em um valor, você será redirecionado para o nosso checkout seguro.</span>
                  <strong className="block text-white/80 font-medium">O acesso ao material completo será enviado automaticamente para o seu e-mail logo após a confirmação.</strong>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
