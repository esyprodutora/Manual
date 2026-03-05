import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, Target, Star, ChevronRight, AlertTriangle, Share2, X, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PurchasePopups } from './PurchasePopups';

const DONATION_AMOUNTS = [30, 50, 100, 150, 200, 250, 300, 500, 1000];
const CHECKOUT_URL = "https://pagamento.manualdaliberdadebr.shop/checkout?product=1ff7a41d-17e9-11f1-b2a5-46da4690ad53";

export function SalesPage() {
  const [counter, setCounter] = useState(847);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Manual da Liberdade',
          text: 'Faça o diagnóstico e descubra se você está preparado para 2026.',
          url: window.location.origin,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copiado para a área de transferência!');
    }
  };

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
            VOCÊ É UM PATRIOTA, MAS ESTÁ <span className="text-red-500">DESARMADO</span> E MARCHANDO CEGO PARA UMA <span className="text-red-500">ARMADILHA.</span>
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
          </div>
        </div>
      </section>

      {/* Final CTA / Donation Offer */}
      <section id="checkout" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/80">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-2xl border border-[var(--color-brand-gold)]/50 bg-[#2C3B1E]/30 backdrop-blur-sm relative shadow-[0_0_50px_rgba(197,160,89,0.15)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[var(--color-brand-gold)] text-black text-sm font-bold uppercase tracking-widest rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(197,160,89,0.5)]">
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

            <div className="bg-black/40 border border-white/10 p-6 rounded-xl mb-10">
              <p className="text-xl text-white font-medium mb-2">
                Você não vai pagar pelo manual. Eu vou te entregar tudo isso.
              </p>
              <p className="text-lg text-[var(--color-brand-gold)] font-bold">
                Mas eu preciso que você me ajude com uma contribuição para ampliarmos o movimento. Você escolhe o valor.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-5 font-black text-white text-lg uppercase tracking-widest bg-[#009c3b] hover:bg-[#007a2e] rounded-sm transition-all shadow-[0_0_30px_rgba(0,156,59,0.4)] hover:shadow-[0_0_50px_rgba(0,156,59,0.6)] flex items-center justify-center gap-3 group"
              >
                <Heart className="w-6 h-6" />
                SIM! QUERO CONTRIBUIR COM A MISSÃO
              </button>
              
              <button 
                onClick={handleShare}
                className="w-full sm:w-auto px-8 py-5 font-bold text-white text-sm uppercase tracking-widest bg-transparent border-2 border-white/20 hover:border-white/50 rounded-sm transition-all flex items-center justify-center gap-3"
              >
                <Share2 className="w-5 h-5" />
                COMPARTILHAR O QUIZ
              </button>
            </div>
            
            <p className="mt-6 text-sm text-gray-400">
              Envie para uma pessoa que também precisa saber se está preparada.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-6 bg-[#009c3b]/5 border-y border-[#009c3b]/20">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-[#009c3b] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4 text-white">Garantia Vitalícia & Blindagem Jurídica</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Nós confiamos tanto no poder deste material que oferecemos uma garantia incondicional e vitalícia. Se em qualquer momento você entender que este plano não é para você, basta um único e-mail e devolveremos 100% da sua contribuição. Sem perguntas, sem burocracia. O risco é todo nosso.
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
              className="bg-[#1a2415] border border-[var(--color-brand-gold)]/30 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-8 text-center border-b border-white/10">
                <Heart className="w-12 h-12 text-[var(--color-brand-gold)] mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">
                  Escolha sua Contribuição
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Sua doação ajuda a manter nossa voz ativa e a espalhar nosso projeto cada vez mais. Juntos, vamos resgatar o Brasil.
                </p>
              </div>

              <div className="p-6 md:p-8 bg-black/20">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {DONATION_AMOUNTS.map((amount) => (
                    <a
                      key={amount}
                      href={CHECKOUT_URL}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 group overflow-hidden
                        ${amount === 150 
                          ? 'border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 shadow-[0_0_20px_rgba(197,160,89,0.2)]' 
                          : 'border-white/10 bg-white/5 hover:border-[var(--color-brand-gold)]/50 hover:bg-[var(--color-brand-gold)]/5'
                        }`}
                    >
                      {amount === 150 && (
                        <div className="absolute top-0 left-0 w-full bg-[var(--color-brand-gold)] text-black text-[10px] font-bold uppercase tracking-widest py-0.5 text-center">
                          Mais Escolhido
                        </div>
                      )}
                      <span className={`text-xl md:text-2xl font-black mt-2 ${amount === 150 ? 'text-[var(--color-brand-gold)]' : 'text-white group-hover:text-[var(--color-brand-gold)] transition-colors'}`}>
                        R$ {amount}
                      </span>
                    </a>
                  ))}
                </div>
                
                <p className="text-center text-xs text-gray-500 mt-6">
                  Ao clicar em um valor, você será redirecionado para o nosso checkout seguro.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
