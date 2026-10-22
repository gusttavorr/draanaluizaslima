# 🦷 TEMPLATE ODONTOLOGIA PREMIUM — GUIA DE REUTILIZAÇÃO

Este template foi projetado para permitir que você crie novos sites odontológicos de alto padrão para qualquer dentista em poucos minutos, apenas trocando as imagens, vídeos e os dados cadastrais em um único arquivo de configuração.

---

## 📁 1. As Imagens que Você Precisa Coletar do Novo Dentista

Coloque as imagens do novo cliente na pasta `public/images/` com os mesmos nomes:

| Arquivo | Descrição | Onde aparece no site |
| :--- | :--- | :--- |
| `hero-dra-alice.png` *(ou hero.png)* | Foto vertical da profissional no consultório ou estúdio | Seção Hero (Primeira dobra) |
| `about-dra-alice.png` *(ou about.png)* | Foto da profissional atendendo, com jaleco ou resinas | Seção Sobre a Profissional |
| `reel-1.jpg` | Capa/Frame vertical do 1º Reel (Tour do consultório) | Mockup de celular / Instagram |
| `reel-2.jpg` | Capa/Frame vertical do 2º Reel (Ex: Facetas em Resina) | Mockup de celular / Instagram |
| `reel-3.jpg` | Capa/Frame vertical do 3º Reel (Ex: Lentes / Transformação) | Mockup de celular / Instagram |
| `reel-4.jpg` | Capa/Frame vertical do 4º Reel (Ex: Alinhadores / Dicas) | Mockup de celular / Instagram |
| `favicon.svg` | Ícone/logo da clínica para a aba do navegador | Favicon |

---

## ⚙️ 2. O Único Arquivo que Você Precisa Editar: `src/config/clinicData.ts`

Basta alterar os campos deste arquivo com os dados do novo dentista:

```typescript
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

export const clinicData = {
  // DADOS DO PROFISSIONAL
  doctor: {
    name: "Dr. Nome do Dentista",
    prefix: "Dr." ou "Dra.",
    title: "Cirurgião-Dentista | Especialidade",
    city: "Nome da Cidade",
    state: "UF",
    locationFull: "Cidade — Estado",
    croNotice: "CRO-UF 00.000",
    philosophyTitle: "Cuidado que começa em ouvir você",
    philosophyQuote: "Frase marcante ou lema do profissional...",
    heroTitle: "Seu sorriso merece cuidado em cada detalhe.",
    heroSubtitle: "Texto de apresentação acolhedor da primeira dobra...",
  },

  // CANAIS DE CONTATO E LOCALIZAÇÃO
  contact: {
    whatsappUrl: "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta...",
    whatsappDisplay: "(11) 99999-9999",
    phoneDisplay: "(11) 3333-3333",
    email: "contato@clinica.com.br",
    address: "Rua / Avenida, Número — Bairro, Cidade - UF",
    mapsRouteUrl: "https://www.google.com/maps/dir/?api=1&destination=SEU+ENDERECO+AQUI",
    mapsEmbedUrl: "https://maps.google.com/maps?q=SEU+ENDERECO+AQUI&t=&z=15&ie=UTF8&iwloc=&output=embed",
    hours: "Segunda a Sexta-feira: 09h às 18h",
    instagramUrl: "https://www.instagram.com/usuario_do_instagram/",
    instagramHandle: "@usuario_do_instagram",
  },

  // OS 4 REELS DO INSTAGRAM (Substitua os links e códigos)
  instagramPosts: [
    {
      id: "post-1",
      code: "CODIGO_DO_POST_1", // Ex: DQnO6eBiQPk
      url: "https://www.instagram.com/p/CODIGO_DO_POST_1/",
      title: "Tour pelo Nosso Consultório",
      category: "Espaço & Acolhimento",
      thumbnail: "/images/reel-1.jpg",
      description: "Descrição da postagem...",
      tags: ["Consultorio", "Cidade", "Acolhimento"],
    },
    {
      id: "post-2",
      code: "CODIGO_DO_POST_2",
      url: "https://www.instagram.com/p/CODIGO_DO_POST_2/",
      title: "Facetas em Resina",
      category: "Odontologia Estética",
      thumbnail: "/images/reel-2.jpg",
      description: "Descrição da postagem...",
      tags: ["FacetasEmResina", "Naturalidade"],
    },
    {
      id: "post-3",
      code: "CODIGO_DO_POST_3",
      url: "https://www.instagram.com/p/CODIGO_DO_POST_3/",
      title: "Lentes de Contato em Resina",
      category: "Reabilitação Estética",
      thumbnail: "/images/reel-3.jpg",
      description: "Descrição da postagem...",
      tags: ["LentesDeResina", "SorrisoHarmonico"],
    },
    {
      id: "post-4",
      code: "CODIGO_DO_POST_4",
      url: "https://www.instagram.com/p/CODIGO_DO_POST_4/",
      title: "Alinhadores Invisíveis",
      category: "Ortodontia Digital",
      thumbnail: "/images/reel-4.jpg",
      description: "Descrição da postagem...",
      tags: ["Alinhadores", "OrtodontiaInvisivel"],
    },
  ],

  // TRATAMENTOS OFERECIDOS (Adicione ou remova conforme a especialidade)
  treatments: [
    {
      id: "facetas-resina",
      title: "Facetas e Lentes em Resina",
      shortDescription: "Escultura estética delicada com resinas de alta fidelidade...",
      fullDescription: "Descrição detalhada do procedimento...",
      benefits: [
        "Preservação máxima da estrutura dental",
        "Efeito biomimético com brilho e translucidez natural",
        "Execução personalizada e ajuste anatômico em consultório",
      ],
      badge: "Destaque Estético",
    },
    // ...
  ],
};
```

---

## 🤖 3. Prompt Copiar-e-Colar para Criar Novo Site com IA

Quando for criar o site de um novo dentista, basta copiar o prompt abaixo e colar para a IA junto com as imagens e links dele:

```markdown
Você é um desenvolvedor frontend sênior especializado em websites odontológicos de luxo.
Quero criar um website odontológico premium exatamente com a mesma arquitetura, tecnologia e design system do template da Dra. Alice Bastos (React 19 + TypeScript + Vite + Tailwind CSS v4 + Lucide Icons).

Aqui estão os dados do novo cliente para você configurar:

- Nome do Dentista: [Preencher: Dr(a). Nome Sobrenome]
- Especialidade: [Preencher: Ex: Ortodontia, Implantes, Harmonização, Estética Dental]
- CRO: [Preencher: Ex: CRO-SP 12345]
- Cidade/Estado: [Preencher: Ex: Santos - SP]
- Endereço da Clínica: [Preencher: Ex: Av. Ana Costa, 100]
- WhatsApp: [Preencher: 5513999999999]
- Instagram: [Preencher: @perfil]
- URLs dos 4 Vídeos/Reels do Instagram:
  1. [URL Reel 1 - Consultório / Apresentação]
  2. [URL Reel 2 - Tratamento Principal]
  3. [URL Reel 3 - Transformação / Caso Clínico]
  4. [URL Reel 4 - Dicas / Tecnologia]

Instruções obrigatórias:
1. Mantenha todas as seções: Header fixo, Hero editorial, Sobre a profissional, Seletor interativo de Tratamentos, A Clínica, Presença Digital com o Mockup Realista de Smartphone interativo, Experiência Ética, Contato com cálculo de rotas no Google Maps e Rodapé legal.
2. A primeira foto anexada é a do Hero. A segunda foto anexada é para a seção Sobre.
3. Centralize todos os dados no arquivo `src/config/clinicData.ts`.
4. Deixe o projeto pronto para deploy imediato na Vercel via GitHub.
```
