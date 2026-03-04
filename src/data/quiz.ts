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
        text: "Você sente que o seu amor pelo Brasil é o único alicerce que te mantém de pé, mesmo quando as instituições parecem desmoronar?",
        options: [
          { id: "a", text: "Sim, é a minha fé em Deus e o meu patriotismo que me dão forças para continuar." },
          { id: "b", text: "Sinto que fui escolhido para viver este momento histórico e não vou recuar agora." },
          { id: "c", text: "É um sentimento de missão inadiável: eu não vou entregar o Brasil sem lutar." },
          { id: "d", text: "Sinto que sou parte de um exército silencioso que está prestes a acordar com força total." }
        ]
      },
      {
        id: "q04",
        text: "Qual o nível de indignação que você sente ao presenciar a inversão total de valores, onde o certo vira errado e o crime vira virtude?",
        options: [
          { id: "a", text: "Uma indignação que consome minha alma e me exige uma ação imediata e estratégica." },
          { id: "b", text: "Sinto que vivemos em um hospício controlado por tiranos que odeiam a ordem." },
          { id: "c", text: "É um soco no estômago diário que me motiva a buscar ferramentas para a retomada." },
          { id: "d", text: "Sinto que o mal perdeu a vergonha e precisamos reagir com uma inteligência superior." }
        ]
      },
      {
        id: "q05",
        text: "Para a sua vida, os pilares \"Deus, Pátria, Família e Liberdade\" são a base da civilização ou apenas palavras de um tempo passado?",
        options: [
          { id: "a", text: "É o meu código de honra inegociável, pelo qual eu vivo e pelo qual eu morreria." },
          { id: "b", text: "É a única estrutura sólida capaz de salvar o Brasil do caos absoluto e da anarquia." },
          { id: "c", text: "É o que eu defendo incansavelmente no meu trabalho, na minha casa e na minha igreja." },
          { id: "d", text: "É a linha de frente da minha luta diária contra a desconstrução social e moral." }
        ]
      },
      {
        id: "q06",
        text: "Você se sente como um \"exilado\" dentro do próprio país ao ver os valores cristãos serem ridicularizados pela elite cultural?",
        options: [
          { id: "a", text: "Sim, parece que falo uma língua proibida que o sistema tenta banir a todo custo." },
          { id: "b", text: "Sinto que o bom senso virou crime e que a insanidade foi elevada ao status de lei." },
          { id: "c", text: "Sinto orgulho de não me dobrar a essa massa manobrada por ideologias destrutivas." },
          { id: "d", text: "Sinto que estou em uma trincheira espiritual defendendo a herança da minha família." }
        ]
      },
      {
        id: "q07",
        text: "Você acredita que a sua coragem pessoal pode ser o pavio que vai acender a coragem de outras pessoas ao seu redor?",
        options: [
          { id: "a", text: "Sim, o exemplo arrasta e eu estou pronto para assumir esse papel de liderança." },
          { id: "b", text: "Sei que as pessoas ao meu lado esperam apenas um sinal de força para reagirem também." },
          { id: "c", text: "Meu compromisso é ser um farol de verdade e esperança em meio à escuridão atual." },
          { id: "d", text: "Eu nasci para liderar e influenciar, não para ser gado conduzido pelo sistema." }
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
        id: "q08",
        text: "Você já percebeu que o cerco está se fechando e que a sua janela de liberdade pode ser lacrada definitivamente nos próximos meses?",
        options: [
          { id: "a", text: "Sim, sinto o hálito do sistema no meu pescoço e a vigilância em cada passo que dou." },
          { id: "b", text: "Tenho certeza de que estão preparando o golpe final contra as liberdades individuais." },
          { id: "c", text: "O medo de não poder mais proteger minha família e meu sustento me tira o sono." },
          { id: "d", text: "Sinto que estamos a um passo do controle total, onde o pensamento será monitorado." }
        ]
      },
      {
        id: "q09",
        text: "Se o controle social for implantado totalmente, você está preparado para ver seus bens confiscados \"em nome do bem comum\"?",
        options: [
          { id: "a", text: "Jamais. Lutarei com todas as minhas forças para proteger o fruto do meu suor." },
          { id: "b", text: "Tenho pavor de que o esforço de uma vida inteira seja devorado pela agenda estatal." },
          { id: "c", text: "Sei que o plano final é nos tornar escravos dependentes de migalhas do governo." },
          { id: "d", text: "Sinto que o confisco já começou através de impostos abusivos e inflação proposital." }
        ]
      },
      {
        id: "q10",
        text: "O que te causa mais pavor: o aparelhamento das leis ou a doutrinação dos seus filhos nas escolas?",
        options: [
          { id: "a", text: "A doutrinação: eles querem roubar a mente das crianças para destruir o núcleo familiar." },
          { id: "b", text: "O ativismo das instituições: quando a lei é usada como arma de guerra contra o cidadão." },
          { id: "c", text: "Ambos são tentáculos de um mesmo monstro que quer asfixiar nossa liberdade." },
          { id: "d", text: "Tenho medo de que em 2026 não reste nada da soberania nacional que conhecemos." }
        ]
      },
      {
        id: "q11",
        text: "Você acredita que o silêncio dos bons é o que dará a vitória final aos tiranos que odeiam o Brasil?",
        options: [
          { id: "a", text: "Sim, a omissão \"educada\" e o medo de se posicionar são o combustível da tirania." },
          { id: "b", text: "Tenho medo de que a nossa paralisia hoje entregue um futuro de cinzas aos nossos netos." },
          { id: "c", text: "O sistema quer que tenhamos medo de falar para nos vencer pelo cansaço e isolamento." },
          { id: "d", text: "Se não agirmos com estratégia e inteligência agora, o Brasil será apenas uma lembrança." }
        ]
      },
      {
        id: "q12",
        text: "Quando você olha para a Venezuela hoje, você vê um alerta distante ou o espelho do nosso futuro imediato?",
        options: [
          { id: "a", text: "O espelho exato do que seremos se não houver um contra-golpe estratégico de informação." },
          { id: "b", text: "O plano já está em curso: destruir a moeda, o setor privado e escravizar o povo." },
          { id: "c", text: "Um pesadelo que se torna realidade a cada nova decisão autoritária de Brasília." },
          { id: "d", text: "O destino inevitável de todo país que aceita trocar a sua liberdade por falsas promessas." }
        ]
      },
      {
        id: "q13",
        text: "Você teme ser impedido de trabalhar, viajar ou acessar seu dinheiro por causa de suas convicções?",
        options: [
          { id: "a", text: "Sim, o controle financeiro digital é a arma definitiva da ditadura moderna." },
          { id: "b", text: "Tenho medo de ser \"cancelado\" pelo sistema e perder minha capacidade de sustento." },
          { id: "c", text: "Sei que o sistema busca o controle total sobre quem pode comprar e vender." },
          { id: "d", text: "Já me sinto vigiado e ameaçado em minha sobrevivência financeira todos os dias." }
        ]
      },
      {
        id: "q14",
        text: "Qual a sua reação ao ver criminosos sendo protegidos enquanto patriotas são tratados como ameaças?",
        options: [
          { id: "a", text: "Um ódio profundo e visceral pela injustiça institucionalizada que tomou o país." },
          { id: "b", text: "Sinto que as leis foram propositalmente invertidas para nos deixar indefesos." },
          { id: "c", text: "É a prova final de que as instituições viraram as costas para o cidadão de bem." },
          { id: "d", text: "Uma revolta que me motiva a querer derrubar essa estrutura podre." }
        ]
      },
      {
        id: "q15",
        text: "Você acredita que a \"Grande Mídia\" trabalha para informar ou para destruir qualquer resistência patriota?",
        options: [
          { id: "a", text: "Eles trabalham como um exército de propaganda treinado para nos aniquilar." },
          { id: "b", text: "São cúmplices diretos da destruição do Brasil em troca de verbas estatais." },
          { id: "c", text: "Querem nos rotular de \"terroristas\" para justificar o controle total sobre nós." },
          { id: "d", text: "Perdi a confiança total; eles são o braço de guerra psicológica do sistema." }
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
        id: "q16",
        text: "Na guerra de informação atual, você se sente um soldado armado ou indo para o combate de mãos vazias?",
        options: [
          { id: "a", text: "Sinto que estou desarmado. Sei a verdade, mas faltam dados e provas para convencer." },
          { id: "b", text: "O sistema usa \"armas pesadas\" de mentiras e sinto que minha voz é abafada." },
          { id: "c", text: "Eu preciso urgentemente de um arsenal tático de argumentos irrefutáveis." },
          { id: "d", text: "Sinto que sou atropelado por narrativas montadas e não tenho técnica para reagir." }
        ]
      },
      {
        id: "q17",
        text: "Qual a sua frustração ao ver uma manipulação da mídia ser aceita por pessoas que você ama?",
        options: [
          { id: "a", text: "Extrema. Sinto que as pessoas estão hipnotizadas e não tenho o antídoto." },
          { id: "b", text: "É desesperador ver o povo sendo conduzido como gado cego para o abatedouro." },
          { id: "c", text: "Me sinto impotente por não saber desmascarar a mentira de forma técnica." },
          { id: "d", text: "Sinto que preciso de um guia de inteligência para abrir os olhos de quem está cego." }
        ]
      },
      {
        id: "q18",
        text: "Se o sistema decidisse apagar a sua voz digital amanhã, você saberia como continuar a luta?",
        options: [
          { id: "a", text: "Não. Eu seria completamente neutralizado e ficaria isolado do movimento." },
          { id: "b", text: "Não possuo canais alternativos e nem sei me proteger do monitoramento estatal." },
          { id: "c", text: "Sou vulnerável tecnologicamente e a ideia de ser silenciado me apavora." },
          { id: "d", text: "Preciso urgente de um manual de segurança para não ser calado pelo sistema." }
        ]
      },
      {
        id: "q19",
        text: "Você confia na sua capacidade de desmembrar uma lavagem cerebral em menos de 1 minuto?",
        options: [
          { id: "a", text: "Não, às vezes até eu fico confuso com a repetição das mentiras oficiais." },
          { id: "b", text: "Sinto que sou bombardeado e não tenho um filtro para a verdade." },
          { id: "c", text: "Sei que há algo errado, mas faltam as provas concretas para expor o erro." },
          { id: "d", text: "Gostaria de ter um método infalível para destruir narrativas assim que surgem." }
        ]
      },
      {
        id: "q20",
        text: "Você percebe que a direita muitas vezes perde por estar desorganizada enquanto \"eles\" são unidos?",
        options: [
          { id: "a", text: "Sim, somos milhões, mas estamos batendo cabeça por falta de um plano comum." },
          { id: "b", text: "Falta-nos estratégia de guerra. Coragem temos, mas a inteligência está dispersa." },
          { id: "c", text: "Sem um plano mestre para 2026, seremos derrotados novamente." },
          { id: "d", text: "Quero ser parte de uma força organizada e não apenas de quem reclama na internet." }
        ]
      },
      {
        id: "q21",
        text: "Em um debate contra um militante treinado, você consegue vencer usando apenas os fatos?",
        options: [
          { id: "a", text: "Não, acabo me exaltando e perdendo a razão pela raiva das mentiras." },
          { id: "b", text: "Sinto que o outro lado sempre tem \"frases prontas\" que não sei como rebater." },
          { id: "c", text: "Eu acabo me calando para não ser humilhado, mesmo sabendo que estou certo." },
          { id: "d", text: "Reconheço que preciso de um treinamento sério de oratória de combate." }
        ]
      },
      {
        id: "q22",
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
        id: "q23",
        text: "Imagine um Brasil onde a maioria silenciosa se torna uma elite informada. O sistema suportaria?",
        options: [
          { id: "a", text: "Jamais. O maior medo deles é um povo que parou de ser enganado." },
          { id: "b", text: "Seria a maior virada da história desde a nossa fundação." },
          { id: "c", text: "É esse o sonho que me faz lutar: ver um país livre e próspero de verdade." },
          { id: "d", text: "O sistema colapsaria diante da verdade organizada e coordenada." }
        ]
      },
      {
        id: "q24",
        text: "Você se vê como um líder de opinião na sua igreja, bairro ou família?",
        options: [
          { id: "a", text: "Gostaria, mas me sinto desatualizado e sem base para guiar os outros." },
          { id: "b", text: "Já sou uma referência, mas sinto que preciso de munição estratégica e técnica." },
          { id: "c", text: "As pessoas esperam uma resposta minha e eu fico angustiado sem saber o que dizer." },
          { id: "d", text: "Quero ser o farol que ilumina a verdade para quem ainda está na escuridão." }
        ]
      },
      {
        id: "q25",
        text: "Qual o valor de ter em mãos um mapa que mostre as armadilhas montadas para 2026?",
        options: [
          { id: "a", text: "Valor inestimável para minha segurança pessoal e para o futuro do meu país." },
          { id: "b", text: "Ferramenta definitiva para sairmos da paralisia e agirmos com precisão." },
          { id: "c", text: "É exatamente o que eu procuro: um direcionamento claro, corajoso e técnico." },
          { id: "d", text: "Sem esse mapa, estamos apenas marchando cegos para o abatedouro." }
        ]
      },
      {
        id: "q26",
        text: "Você concorda que o conhecimento é a única arma que o sistema jamais poderá confiscar?",
        options: [
          { id: "a", text: "Sim, podem tirar meus bens, mas não minha inteligência estratégica." },
          { id: "b", text: "É por isso que querem o controle das escolas: para nos manter ignorantes." },
          { id: "c", text: "Investir na minha preparação é a maior prova de patriotismo que posso dar." },
          { id: "d", text: "Quero me armar com a verdade que liberta, protege e nos leva à vitória." }
        ]
      }
    ]
  },
  {
    title: "A DECISÃO FINAL",
    questions: [
      {
        id: "q27",
        text: "Você aceita o chamado para deixar de ser um alvo passivo e se tornar um estrategista?",
        options: [
          { id: "a", text: "Sim. Não aceito ser vítima. Quero ser o pesadelo de quem quer nos destruir." },
          { id: "b", text: "Aceito. O Brasil precisa de mentes preparadas e eu vou me preparar agora." },
          { id: "c", text: "É a minha última esperança de ver um plano real para a retomada de 2026." },
          { id: "d", text: "Pela minha família e pela minha pátria, eu me alisto nesta missão hoje." }
        ]
      },
      {
        id: "q28",
        text: "Se o destino do Brasil dependesse do seu nível de preparo hoje, o país estaria salvo?",
        options: [
          { id: "a", text: "Estaria em perigo, e é por isso que preciso me instruir e me armar agora." },
          { id: "b", text: "Estaria salvo pela coragem, mas em grave risco pela falta de técnica e dados." },
          { id: "c", text: "Reconheço que preciso de ajuda para estar à altura do que o Brasil espera." },
          { id: "d", text: "Eu escolho a preparação imediata para garantir que o país tenha uma chance." }
        ]
      },
      {
        id: "q29",
        text: "O que você dirá para seus netos quando eles perguntarem o que você fez quando a liberdade estava em jogo?",
        options: [
          { id: "a", text: "Diria com orgulho que lutei com inteligência e ajudei a salvar a nação." },
          { id: "b", text: "Diria que não me curvei e busquei o conhecimento necessário para guiar os outros." },
          { id: "c", text: "Diria que fui um dos que atendeu ao chamado do Manual da Liberdade." },
          { id: "d", text: "Não aceito a covardia. Quero ter a honra de deixar um legado de vitória." }
        ]
      },
      {
        id: "q30",
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
