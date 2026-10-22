import React from 'react';
import { clinicData } from '../config/clinicData';
import { MapPin, Eye, Compass, ShieldCheck } from 'lucide-react';

export const Clinic: React.FC = () => {
  return (
    <section id="clinica" className="py-16 sm:py-28 bg-[#F6F1EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DFCBB5] text-[#786148] text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-[#B8976C]" />
            <span>Estrutura & Acolhimento</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.18] mb-4 sm:mb-5 break-words">
            Um ambiente pensado para <span className="italic text-[#9D7C50]">receber você.</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#554F49] font-light leading-relaxed">
            Localizado em Arujá, o consultório da Dra. Alice Bastos foi planejado com arquitetura biofílica, marcenaria acolhedora e iluminação serena, proporcionando uma experiência odontológica tranquila e acolhedora.
          </p>
        </div>

        {/* Editorial Photo & Feature Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 sm:mb-14">
          
          {/* Main Visual Display (Reel 1 snapshot / clinic tour) */}
          <div className="lg:col-span-7 relative w-full">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#EFE8DC] shadow-xl border border-white">
              <img
                src="/images/reel-1.jpg"
                alt="Novo consultório odontológico Dra. Alice Bastos em Arujá SP"
                className="w-full h-72 sm:h-96 object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-2">
                <div>
                  <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1F1C18] text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2">
                    Arujá &bull; São Paulo
                  </span>
                  <h3 className="text-white font-serif text-lg sm:text-2xl font-light">
                    Espaço Projetado para o Seu Bem-Estar
                  </h3>
                </div>

                <a
                  href="https://www.instagram.com/p/DQnO6eBiQPk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-[#1F1C18] text-xs font-medium hover:bg-white shadow-md transition-all shrink-0 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#B8976C]" />
                  <span>Ver Tour em Vídeo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Side Clinic Attributes (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 w-full">
            {clinicData.clinicFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#E5DAC9] transition-all hover:bg-white hover:shadow-xs text-left"
              >
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#C4A47C]" />
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1C18]">{feat.title}</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-[#686058] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E8DFCFC0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-left">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EFE8DC] flex items-center justify-center shrink-0 text-[#9D7C50]">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#1F1C18]">Biossegurança e Rigor Sanitário</h4>
              <p className="text-[11px] sm:text-xs text-[#686058] mt-1 max-w-xl leading-relaxed">
                Seguimos protocolos estritos de esterilização e desinfecção hospitalar para garantir total segurança durante todo o seu atendimento.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-[#7D6B57]">
            <MapPin className="w-4 h-4 text-[#C4A47C] shrink-0" />
            <span>Atendimento com agendamento prévio em Arujá-SP</span>
          </div>
        </div>

      </div>
    </section>
  );
};
