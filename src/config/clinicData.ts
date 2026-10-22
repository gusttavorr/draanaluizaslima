export interface InstagramPostData {
  id: string;
  code: string;
  url: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tags: string[];
}

export interface TreatmentData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  badge?: string;
  highlight?: boolean;
}

export interface CarePillar {
  title: string;
  description: string;
}

export const clinicData = {
  doctor: {
    name: "Dra. Luiza S. Lima",
    prefix: "Dra.",
    title: "Estética Facial",
    subtitle: "Harmonização & Estética Facial",
    instagramHandle: "@dra.luizaslima",
    heroTitleLead: "Realce sua beleza, respeitando a sua",
    heroTitleHighlight: "essência.",
    heroSubtitle:
      "Uma abordagem individualizada para cuidar da sua beleza com atenção, equilíbrio e naturalidade.",
    philosophyTitle: "Beleza que respeita quem você é",
    philosophyQuote:
      "Uma reestruturação bem planejada devolve sustentação e melhora os contornos de forma sutil, respeitando a anatomia e a individualidade de cada pessoa.",
    aboutLead:
      "A estética facial é sobre equilíbrio, frescor e autoestima — nunca sobre transformar quem você é.",
    aboutParagraph1:
      "Com olhar clínico refinado e foco no atendimento humanizado, cada planejamento é desenvolvido de forma única e sem pressa. A prioridade é compreender a dinâmica da sua musculatura, a firmeza dos tecidos e as suas reais expectativas.",
    aboutParagraph2:
      "Com tratamentos focados em toxina botulínica, reestruturação e sustentação dos contornos faciais, o objetivo é devolver harmonia e leveza ao rosto, preservando a identidade e a expressividade natural.",
    croNotice: "Atendimento estético profissional • Dados de registro a serem formalizados no rodapé",
  },

  contact: {
    // Para atualizar o número oficial, basta alterar a variável whatsappNumber (ex: "5511999999999")
    whatsappNumber: "", 
    get whatsappUrl() {
      const defaultText = encodeURIComponent(
        "Olá, Dra. Luiza! Gostaria de receber informações e verificar a disponibilidade de horários para uma avaliação facial."
      );
      return this.whatsappNumber
        ? `https://wa.me/${this.whatsappNumber}?text=${defaultText}`
        : `https://wa.me/?text=${defaultText}`;
    },
    whatsappDisplay: "WhatsApp da Profissional (Aguardando confirmação do número oficial)",
    instagramUrl: "https://www.instagram.com/dra.luizaslima/",
    instagramHandle: "@dra.luizaslima",
    hours: "Segunda a Sexta-feira: 09h às 18h (mediante agendamento prévio)",
    locationNotice: "Atendimento com agendamento prévio individualizado",
  },

  instagramPosts: [
    {
      id: "post-1",
      code: "Dc1Sp2Zx_Zn",
      url: "https://www.instagram.com/p/Dc1Sp2Zx_Zn/",
      title: "Reestruturação e Sustentação Facial",
      category: "Sustentação & Anatomia",
      thumbnail: "/images/post-1.jpg",
      description:
        "Uma reestruturação bem planejada pode devolver sustentação e melhorar os contornos de forma sutil, respeitando a anatomia e a individualidade de cada paciente.",
      tags: ["Reestruturação", "HarmonizaçãoFacial", "Naturalidade"],
    },
    {
      id: "post-2",
      code: "Dc3jc4NxgQ_",
      url: "https://www.instagram.com/p/Dc3jc4NxgQ_/",
      title: "Cuidado e Acolhimento em Cada Detalhe",
      category: "Experiência & Acolhimento",
      thumbnail: "/images/post-2.jpg",
      description:
        "Do cuidado ao acolhimento, aqui cada experiência é preparada com muito amor para receber cada um de vocês.",
      tags: ["Acolhimento", "Experiência", "Cuidado"],
    },
    {
      id: "post-3",
      code: "DdDA7PRxcNU",
      url: "https://www.instagram.com/p/DdDA7PRxcNU/",
      title: "Melhora da Flacidez sem Mudar o Rosto",
      category: "Contornos & Harmonia",
      thumbnail: "/images/post-3.jpg",
      description:
        "Melhora da sensação de flacidez preservando a essência: reposicionamento e firmeza respeitando os traços que já eram da paciente.",
      tags: ["Contornos", "Sustentação", "Equilíbrio"],
    },
  ] as InstagramPostData[],

  treatments: [
    {
      id: "toxina-botulinica",
      title: "Toxina Botulínica (Botox)",
      badge: "Procedimento em Destaque",
      highlight: true,
      shortDescription:
        "Suavização refinada de linhas dinâmicas e prevenção do envelhecimento precoce com total preservação da sua expressão natural.",
      fullDescription:
        "Aplicação milimetricamente planejada para modular a contração muscular em áreas estratégicas — como testa, glabela ('entre as sobrancelhas') e região periocular ('pés de galinha'). O foco é descansar o olhar e prevenir linhas profundas, sem paralisar o rosto ou alterar a sua mímica espontânea.",
      benefits: [
        "Preservação da expressividade e dos movimentos faciais espontâneos",
        "Atenuação de linhas de expressão e prevenção de vincos permanentes",
        "Procedimento seguro, pontual e com retorno imediato à rotina",
        "Planejamento anatômico customizado para as proporções do seu rosto",
      ],
    },
    {
      id: "reestruturacao-sustentacao",
      title: "Reestruturação & Sustentação Facial",
      badge: "Sustentação Anatômica",
      highlight: false,
      shortDescription:
        "Reposicionamento suave e devolução de suporte para recuperar a firmeza e os contornos naturais da face.",
      fullDescription:
        "Com o tempo, as estruturas de suporte da face sofrem reabsorção natural, gerando sensação de flacidez e cansaço. A reestruturação facial repõe esses pontos de ancoragem fundamentais, promovendo suporte sutil e definição harmônica.",
      benefits: [
        "Devolução de firmeza e suporte aos vetores faciais",
        "Definição suave dos contornos mandibulares e malares",
        "Resultados elegantes que respeitam a anatomia individual",
        "Sem excesso de volume ou aparência artificial",
      ],
    },
    {
      id: "gerenciamento-flacidez",
      title: "Gerenciamento da Flacidez & Firmeza",
      badge: "Estímulo de Firmeza",
      highlight: false,
      shortDescription:
        "Cuidados dedicados à qualidade cutânea, estímulo biológico e recuperação da elasticidade e densidade da pele.",
      fullDescription:
        "Tratamento voltado para quem busca melhorar a textura, tonicidade e firmeza tecidual. Um plano contínuo que incentiva a vitalidade da derme de maneira progressiva, mantendo a pele saudável e luminosa.",
      benefits: [
        "Aumento gradual da densidade e sustentação da pele",
        "Melhora da textura, tônus e luminosidade",
        "Cuidado progressivo com foco em longevidade da beleza",
        "Tratamento sem modificação dos traços ou fisionomia",
      ],
    },
    {
      id: "harmonizacao-facial-sutil",
      title: "Harmonização Facial Equilibrada",
      badge: "Harmonia & Proporção",
      highlight: false,
      shortDescription:
        "Refinamento das proporções e realce dos pontos fortes do rosto, com equilíbrio e elegância discreta.",
      fullDescription:
        "Uma leitura minuciosa da arquitetura facial que busca alinhar proporções, luzes e sombras com sensibilidade estética. O objetivo nunca é criar um rosto novo, e sim realçar a melhor versão da sua própria beleza.",
      benefits: [
        "Valorização exclusiva da sua essência e traços característicos",
        "Composição tridimensional harmônica e atemporal",
        "Afastamento total de exageros ou padrões estéticos artificiais",
        "Renovação da autoestima com naturalidade comprovada",
      ],
    },
    {
      id: "avaliacao-individualizada",
      title: "Avaliação Facial & Diagnóstico Exclusivo",
      badge: "Etapa Fundamental",
      highlight: false,
      shortDescription:
        "Consulta minuciosa para compreender suas queixas, mapear sua anatomia facial e traçar um planejamento sob medida.",
      fullDescription:
        "Cada rosto possui uma dinâmica anatômica e uma história próprias. A consulta de avaliação é o momento de escuta atenta, diagnóstico cuidadoso e alinhamento de expectativas antes de qualquer intervenção.",
      benefits: [
        "Atendimento com tempo generoso e escuta qualificada",
        "Mapeamento anatômico e dinâmica muscular detalhada",
        "Transparência total sobre possibilidades e cuidados",
        "Plano seguro construído em sintonia com os seus objetivos",
      ],
    },
  ] as TreatmentData[],

  carePillars: [
    {
      title: "Escuta Atenta e Sem Pressa",
      description:
        "Cada consulta é um momento de acolhimento genuíno. Ouvimos suas queixas e desejos com sensibilidade para compreender o que você realmente busca para a sua autoestima.",
    },
    {
      title: "Naturalidade Absoluta",
      description:
        "Respeito absoluto à sua anatomia de nascença. Nosso princípio inegociável é valorizar os seus traços únicos, sem excessos, volumes caricatos ou padrões artificiais.",
    },
    {
      title: "Planejamento Ético e Transparente",
      description:
        "Diagnóstico responsável, sem promessas irrealistas de resultados garantidos ou intervenções desnecessárias. Clareza total em cada etapa.",
    },
    {
      title: "Cuidado e Rigor Técnico",
      description:
        "Ambiente preparado com zelo, assepsia estrita e materiais de excelência para proporcionar segurança e tranquilidade durante todo o atendimento.",
    },
  ] as CarePillar[],
};
