export type Question = {
  id: string;
  text: string;
  options: { id: string; text: string }[];
};

export type QuizBlock = {
  title: string;
  questions: Question[];
  impactScreen?: {
    title: string;
    text: string;
    theme?: 'green' | 'red' | 'gold';
    buttonText?: string;
  };
};

export const quizData: QuizBlock[] = [
  {
    title: "O FOGO DO PERTENCIMENTO",
    questions: [
      {
        id: "q01",
        text: "Quando o Hino Nacional toca e você vê a nossa bandeira, o que realmente queima no seu peito?",
        options: [
          { id: "a", text: "Um orgulho inabalável: Eu daria a minha vida por este solo e pela nossa história." },
          { id: "b", text: "Uma tristeza profunda: Dói ver o que estão fazendo com o meu país e com nossos símbolos." },
          { id: "c", text: "Uma fúria contida: Não aceito ver o verde e amarelo ser pisoteado por quem odeia a pátria." },
          { id: "d", text: "Um senso de dever sagrado: Eu nasci para lutar pela liberdade da minha descendência." }
        ]
      },
      {
        id: "q02",
        text: "Você prefere ser chamado de \"Conservador\" por defender sua família ou de \"covarde\" por aceitar passivamente o que estão impondo?",
        options: [
          { id: "a", text: "Sou Conservador com orgulho. Minha honra e a segurança dos meus filhos não têm preço." },
          { id: "b", text: "Ser covarde não é uma opção para quem carrega o sangue de patriota nas veias." },
          { id: "c", text: "O sistema tenta nos rotular de radicais porque não consegue dobrar o nosso caráter." },
          { id: "d", text: "Prefiro a perseguição e o rótulo do sistema à covardia de me calar diante do erro." }
        ]
      },
      {
        id: "q03",
        text: "Para a sua vida, os pilares \"Deus, Pátria, Família e Liberdade\" são a base da civilização ou apenas palavras de um tempo passado?",
        options: [
          { id: "a", text: "É o meu código de honra inegociável, pelo qual eu vivo e pelo qual eu morreria." },
          { id: "b", text: "É a única estrutura sólida capaz de salvar o Brasil do caos absoluto e da anarquia." },
          { id: "c", text: "É o que eu defendo incansavelmente no meu trabalho, na minha casa e na minha igreja." },
          { id: "d", text: "É a linha de frente da minha luta diária contra a desconstrução social e moral." }
        ]
      }
    ],
    impactScreen: {
      title: "VOCÊ É A ÚLTIMA LINHA DE DEFESA.",
      text: "O sistema gasta bilhões para te fazer acreditar que você é minoria. MENTIRA. Nós somos a maioria silenciosa.",
      theme: 'green'
    }
  },
  {
    title: "O ABISMO DO MEDO",
    questions: [
      {
        id: "q04",
        text: "Você já percebeu que o cerco está se fechando e que a sua janela de liberdade pode ser lacrada definitivamente nos próximos meses?",
        options: [
          { id: "a", text: "Sim, sinto o hálito do sistema no meu pescoço e a vigilância em cada passo que dou." },
          { id: "b", text: "Tenho certeza de que estão preparando o golpe final contra as liberdades individuais." },
          { id: "c", text: "O medo de não poder mais proteger minha família e meu sustento me tira o sono." },
          { id: "d", text: "Sinto que estamos a um passo do controle total, onde o pensamento será monitorado." }
        ]
      },
      {
        id: "q05",
        text: "O que te causa mais pavor: o aparelhamento das leis ou a doutrinação dos seus filhos nas escolas?",
        options: [
          { id: "a", text: "A doutrinação: eles querem roubar a mente das crianças para destruir o núcleo familiar." },
          { id: "b", text: "O ativismo das instituições: quando a lei é usada como arma de guerra contra o cidadão." },
          { id: "c", text: "Ambos são tentáculos de um mesmo monstro que quer asfixiar nossa liberdade." },
          { id: "d", text: "Tenho medo de que em 2026 não reste nada da soberania nacional que conhecemos." }
        ]
      },
      {
        id: "q06",
        text: "Quando você olha para a Venezuela hoje, você vê um alerta distante ou o espelho do nosso futuro imediato?",
        options: [
          { id: "a", text: "O espelho exato do que seremos se não houver um contra-golpe estratégico de informação." },
          { id: "b", text: "O plano já está em curso: destruir a moeda, o setor privado e escravizar o povo." },
          { id: "c", text: "Um pesadelo que se torna realidade a cada nova decisão autoritária de Brasília." },
          { id: "d", text: "O destino inevitável de todo país que aceita trocar a sua liberdade por falsas promessas." }
        ]
      },
      {
        id: "q07",
        text: "Qual a sua reação ao ver criminosos sendo protegidos enquanto patriotas são tratados como ameaças?",
        options: [
          { id: "a", text: "Um ódio profundo e visceral pela injustiça institucionalizada que tomou o país." },
          { id: "b", text: "Sinto que as leis foram propositalmente invertidas para nos deixar indefesos." },
          { id: "c", text: "É a prova final de que as instituições viraram as costas para o cidadão de bem." },
          { id: "d", text: "Uma revolta que me motiva a querer derrubar essa estrutura podre." }
        ]
      }
    ],
    impactScreen: {
      title: "O CERCO ESTÁ SE FECHANDO.",
      text: "Eles não querem apenas o seu voto; eles querem a sua alma, sua família e seus bens. Você vai esperar a porta se fechar para sempre?",
      theme: 'red'
    }
  },
  {
    title: "O CONFLITO E A GUERRA ESTRATÉGICA",
    questions: [
      {
        id: "q08",
        text: "Na guerra de informação atual, você se sente um soldado armado ou indo para o combate de mãos vazias?",
        options: [
          { id: "a", text: "Sinto que estou desarmado. Sei a verdade, mas faltam dados e provas para convencer." },
          { id: "b", text: "O sistema usa \"armas pesadas\" de mentiras e sinto que minha voz é abafada." },
          { id: "c", text: "Eu preciso urgentemente de um arsenal tático de argumentos irrefutáveis." },
          { id: "d", text: "Sinto que sou atropelado por narrativas montadas e não tenho técnica para reagir." }
        ]
      },
      {
        id: "q09",
        text: "Você percebe que a direita muitas vezes perde por estar desorganizada enquanto \"eles\" são unidos?",
        options: [
          { id: "a", text: "Sim, somos milhões, mas estamos batendo cabeça por falta de um plano comum." },
          { id: "b", text: "Falta-nos estratégia de guerra. Coragem temos, mas a inteligência está dispersa." },
          { id: "c", text: "Sem um plano mestre para 2026, seremos derrotados novamente." },
          { id: "d", text: "Quero ser parte de uma força organizada e não apenas de quem reclama na internet." }
        ]
      },
      {
        id: "q10",
        text: "Você saberia como atrair um eleitor \"isento\" sem parecer um \"radical\" aos olhos dele?",
        options: [
          { id: "a", text: "Não, sempre acabo afastando as pessoas por causa da minha indignação." },
          { id: "b", text: "Sinto que não sei falar a língua de quem ainda não acordou para a realidade." },
          { id: "c", text: "Gostaria de aprender a \"vender\" a causa da liberdade de forma atraente e segura." },
          { id: "d", text: "Minha comunicação é falha e reconheço que sem um método eu só prego para convertidos." }
        ]
      }
    ],
    impactScreen: {
      title: "SUA VOZ ESTÁ SENDO SILENCIADA.",
      text: "O sistema vence quando você se cala por medo de ser chamado de radical ou quando você grita sem estratégia e afasta quem poderia estar do nosso lado. A guerra de 2026 será vencida na comunicação.",
      theme: 'gold',
      buttonText: "FINALIZAR DIAGNÓSTICO"
    }
  },
  {
    title: "O SONHO E A RETOMADA",
    questions: [
      {
        id: "q11",
        text: "Imagine um Brasil onde a maioria silenciosa se torna uma elite informada. O sistema suportaria?",
        options: [
          { id: "a", text: "Jamais. O maior medo deles é um povo que parou de ser enganado." },
          { id: "b", text: "Seria a maior virada da história desde a nossa fundação." },
          { id: "c", text: "É esse o sonho que me faz lutar: ver um país livre e próspero de verdade." },
          { id: "d", text: "O sistema colapsaria diante da verdade organizada e coordenada." }
        ]
      },
      {
        id: "q12",
        text: "Qual o valor de ter em mãos um mapa que mostre as armadilhas montadas para 2026?",
        options: [
          { id: "a", text: "Valor inestimável para minha segurança pessoal e para o futuro do meu país." },
          { id: "b", text: "Ferramenta definitiva para sairmos da paralisia e agirmos com precisão." },
          { id: "c", text: "É exatamente o que eu procuro: um direcionamento claro, corajoso e técnico." },
          { id: "d", text: "Sem esse mapa, estamos apenas marchando cegos para o abatedouro." }
        ]
      }
    ]
  },
  {
    title: "A DECISÃO FINAL",
    questions: [
      {
        id: "q13",
        text: "Você aceita o chamado para deixar de ser um alvo passivo e se tornar um estrategista?",
        options: [
          { id: "a", text: "Sim. Não aceito ser vítima. Quero ser o pesadelo de quem quer nos destruir." },
          { id: "b", text: "Aceito. O Brasil precisa de mentes preparadas e eu vou me preparar agora." },
          { id: "c", text: "É a minha última esperança de ver um plano real para a retomada de 2026." },
          { id: "d", text: "Pela minha família e pela minha pátria, eu me alisto nesta missão hoje." }
        ]
      },
      {
        id: "q14",
        text: "O que você dirá para seus netos quando eles perguntarem o que você fez quando a liberdade estava em jogo?",
        options: [
          { id: "a", text: "Diria com orgulho que lutei com inteligência e ajudei a salvar a nação." },
          { id: "b", text: "Diria que não me curvei e busquei o conhecimento necessário para guiar os outros." },
          { id: "c", text: "Diria que fui um dos que atendeu ao chamado do Manual da Liberdade." },
          { id: "d", text: "Não aceito a covardia. Quero ter a honra de deixar um legado de vitória." }
        ]
      },
      {
        id: "q15",
        text: "Pergunta Final: Você está pronto para se tornar um pilar da retomada?",
        options: [
          { id: "a", text: "Sim. Dê-me o mapa, as ferramentas e o plano. Eu aceito a missão." },
          { id: "b", text: "Sim, eu quero o Manual da Liberdade e o Plano 2026 em mãos agora mesmo." },
          { id: "c", text: "Pelo Brasil, por Deus e pela minha Família: Eu estou pronto para a batalha." },
          { id: "d", text: "Chega de desculpas. É hora de iniciarmos a nossa grande retomada." }
        ]
      }
    ]
  }
];
