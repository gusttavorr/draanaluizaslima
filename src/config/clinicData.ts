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
  durationHint?: string;
  badge?: string;
}

export const clinicData = {
  doctor: {
    name: "Dra. Alice Bastos",
    prefix: "Dra.",
    title: "Cirurgiã-Dentista",
    city: "Arujá",
    state: "SP",
    locationFull: "Arujá — São Paulo",
    croNotice: "CRO-SP (Registro profissional ativo — a ser formalizado no rodapé)",
    philosophyTitle: "Cuidado que começa em ouvir você",
    philosophyQuote:
      "Acredito em uma odontologia que valoriza a naturalidade, a saúde e o bem-estar de cada pessoa, sem padrões artificiais e com muito acolhimento em cada etapa.",
    heroTitle: "Seu sorriso merece cuidado em cada detalhe.",
    heroSubtitle:
      "Um atendimento pensado para acolher você, compreender suas necessidades e cuidar do seu sorriso com atenção, dedicação e técnica refinada em Arujá.",
  },

  contact: {
    whatsappUrl: "https://wa.me/?text=Ol%C3%A1%2C%20Dra.%20Alice!%20Gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20e%20verificar%20a%20disponibilidade%20de%20hor%C3%A1rios%20para%20uma%20avalia%C3%A7%C3%A3o%20em%20Aruj%C3%A1.",
    whatsappDisplay: "WhatsApp da Clínica (Aguardando confirmação do número oficial)",
    phoneDisplay: "(11) Contato a confirmar",
    email: "contato@dralicebastos.com.br",
    address: "Rod. Alberto Hinoto, 2360 — Arujá, SP",
    mapsRouteUrl: "https://www.google.com/maps/dir/?api=1&destination=Rod.+Alberto+Hinoto,+2360+-+Aruj%C3%A1+-+SP",
    mapsEmbedUrl: "https://maps.google.com/maps?q=Rod.+Alberto+Hinoto,+2360+-+Aruj%C3%A1+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed",
    hours: "Segunda a Sexta-feira: 09h às 18h (mediante agendamento prévio)",
    instagramUrl: "https://www.instagram.com/dra.alicebastos/",
    instagramHandle: "@dra.alicebastos",
  },

  instagramPosts: [
    {
      id: "post-1",
      code: "DQnO6eBiQPk",
      url: "https://www.instagram.com/p/DQnO6eBiQPk/",
      title: "Tour pelo Nosso Novo Consultório",
      category: "Espaço & Acolhimento",
      thumbnail: "/images/reel-1.jpg",
      description:
        "Um espaço planejado em cada detalhe para acolher você com serenidade, conforto e modernidade em Arujá. Pronto para transformar sorrisos com todo o carinho.",
      tags: ["Novo Consultório", "Arujá-SP", "Acolhimento"],
    },
    {
      id: "post-2",
      code: "DYlQwiwsZtu",
      url: "https://www.instagram.com/p/DYlQwiwsZtu/",
      title: "Facetas em Resina Ultra Naturais",
      category: "Odontologia Estética",
      thumbnail: "/images/reel-2.jpg",
      description:
        "Transformando sorrisos com leveza, textura e naturalidade. Porque um sorriso bonito não precisa parecer artificial — respeitamos a essência e os traços de cada paciente.",
      tags: ["Facetas em Resina", "Naturalidade", "Harmonia"],
    },
    {
      id: "post-3",
      code: "DWb70nUiTmF",
      url: "https://www.instagram.com/p/DWb70nUiTmF/",
      title: "10 Lentes em Resina: Realismo & Textura",
      category: "Reabilitação Estética",
      thumbnail: "/images/reel-3.jpg",
      description:
        "Caso conduzido com foco total na mimetização do esmalte natural: formato, anatomia, translucidez e harmonia biológica de longa durabilidade.",
      tags: ["Lentes de Resina", "Biomimética", "Design de Sorriso"],
    },
    {
      id: "post-4",
      code: "DZtUVutJpn0",
      url: "https://www.instagram.com/p/DZtUVutJpn0/",
      title: "Alinhadores Invisíveis Sousmile",
      category: "Ortodontia Digital",
      thumbnail: "/images/reel-4.jpg",
      description:
        "Unboxing e tecnologia de ponta dos alinhadores transparentes Sousmile. Tratamento ortodôntico discreto, confortável e previsível para a sua rotina.",
      tags: ["Alinhadores Invisíveis", "Sousmile", "Ortodontia Discreta"],
    },
  ] as InstagramPostData[],

  treatments: [
    {
      id: "facetas-resina",
      title: "Facetas e Lentes em Resina",
      shortDescription:
        "Escultura estética delicada com resinas de alta fidelidade óptica, preservando ao máximo a estrutura dental sadia.",
      fullDescription:
        "Técnica restauradora de precisão que permite harmonizar formato, proporção, fechamento de diastemas e alinhamento visual com naturalidade, sem a necessidade de desgastes agressivos.",
      benefits: [
        "Preservação máxima da estrutura dental",
        "Efeito biomimético com brilho e translucidez natural",
        "Execução personalizada e ajuste anatômico em consultório",
      ],
      badge: "Destaque Estético",
    },
    {
      id: "alinhadores-invisiveis",
      title: "Alinhadores Invisíveis",
      shortDescription:
        "Ortodontia digital moderna, imperceptível e removível para alinhar o seu sorriso com liberdade no dia a dia.",
      fullDescription:
        "Planejamento 3D sequencial utilizando placas transparentes termoformadas de alta precisão. Proporciona conforto, facilidade de higienização e discrição completa.",
      benefits: [
        "Quase imperceptível aos olhos",
        "Removível para refeições e escovação",
        "Previsibilidade digital de cada etapa do tratamento",
      ],
      badge: "Tecnologia Digital",
    },
    {
      id: "clareamento-dental",
      title: "Clareamento Personalizado",
      shortDescription:
        "Protocolo seguro e supervisionado para restaurar a luminosidade e vivacidade do esmalte dental.",
      fullDescription:
        "Avaliação criteriosa prévia com dosagem controlada de agentes clareadores, minimizando a sensibilidade e alcançando um resultado claro e natural.",
      benefits: [
        "Acompanhamento profissional em todas as sessões",
        "Protocolos específicos com foco em conforto gengival",
        "Brilho saudável sem aspecto artificial",
      ],
      badge: "Luminosidade",
    },
    {
      id: "restauracoes-biomimeticas",
      title: "Restaurações Biomiméticas",
      shortDescription:
        "Recuperação funcional e estética de dentes com resinas compostas avançadas que imitam o dente natural.",
      fullDescription:
        "Troca de restaurações escuras ou desgastadas por compósitos nobres com propriedades ópticas e mecânicas fiéis à anatomia dental biológica.",
      benefits: [
        "Adesão segura e selamento marginal preciso",
        "Textura e coloração imperceptíveis",
        "Durabilidade e restabelecimento da mastigação",
      ],
      badge: "Saúde & Função",
    },
    {
      id: "prevencao-profilaxia",
      title: "Check-up & Profilaxia Suave",
      shortDescription:
        "Cuidado preventivo contínuo, remoção delicada de placa e biofilme para manter a saúde bucal sempre em dia.",
      fullDescription:
        "Sessões regulares de limpeza profissional com ultrassom delicado e polimento dental, garantindo gengivas saudáveis e prevenção de intercorrências.",
      benefits: [
        "Ambiente calmo e procedimento indolor",
        "Prevenção eficaz contra tártaro e inflamações",
        "Orientação personalizada de higiene domiciliar",
      ],
      badge: "Prevenção Essencial",
    },
  ] as TreatmentData[],

  clinicFeatures: [
    {
      title: "Ambiente Acolhedor e Sereno",
      description:
        "Consultório concebido para oferecer tranquilidade desde o primeiro minuto, com iluminação suave, paleta neutra e elementos naturais.",
    },
    {
      title: "Atendimento Humanizado Sem Pressa",
      description:
        "Cada consulta é agendada com tempo generoso para ouvir suas queixas, esclarecer todas as dúvidas e planejar cada passo com transparência.",
    },
    {
      title: "Materiais de Referência Internacional",
      description:
        "Utilização de resinas e alinhadores consagrados mundialmente (como resinas japonesas de alta estética e tecnologia Sousmile).",
    },
    {
      title: "Biossegurança e Protocolos Rigorosos",
      description:
        "Esterilização hospitalar e higienização contínua de todo o espaço para a máxima segurança de você e da sua família.",
    },
  ],
};
