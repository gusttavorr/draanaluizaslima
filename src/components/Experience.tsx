import React from 'react';
import { clinicData } from '../config/clinicData';
import { Clock, ShieldCheck, Heart, Sparkles, MessageSquareHeart } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="cuidado" className="py-16 sm:py-28 bg-[#FAF8F5] relative overflow-hidden border-y border-[#EBE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DFCBB5] text-[#786148] text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8976C]" />
            <span>Filosofia de Cuidado & Ética</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.18] mb-4 sm:mb-5 break-words">
            Uma abordagem estética baseada no{' '}
            <span className="italic text-[#9D7C50]">respeito à sua essência.</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#554F49] font-light leading-relaxed">
            Priorizamos a avaliação criteriosa, a escuta sensível e a segurança em cada detalhe, sem promessas ilusórias ou padronizações artificiais.
          </p>
        </div>

        {/* 4 Pillars of Care */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {clinicData.carePillars.map((pillar, idx) => {
            const icons = [
              <Clock className="w-5 h-5 text-[#9D7C50]" key="clock" />,
              <Heart className="w-5 h-5 text-[#9D7C50]" key="heart" />,
              <ShieldCheck className="w-5 h-5 text-[#9D7C50]" key="shield" />,
              <Sparkles className="w-5 h-5 text-[#9D7C50]" key="sparkle" />,
            ];

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] shadow-xs flex flex-col items-start text-left hover:border-[#C4A47C] transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] flex items-center justify-center mb-4 sm:mb-5">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="font-serif text-lg text-[#1F1C18] font-medium mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#665F58] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Educational Focus: Why Individualized Evaluation Matters */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#F6F1EA] border border-[#E5DAC9] text-left max-w-5xl mx-auto mb-10 sm:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#9D7C50] block mb-2">
                Conhecimento & Segurança
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1E1B18] font-normal mb-3">
                Por que a avaliação facial individualizada é indispensável?
              </h3>
              <p className="text-xs sm:text-sm text-[#5A524A] leading-relaxed font-light">
                Cada face tem uma anatomia única: espessura dérmica, padrão de força muscular, proporções ósseas e histórico de envelhecimento. Procedimentos aplicados em série geram resultados desarmônicos. O cuidado de alto padrão exige mapear cada vetor antes de qualquer conduta.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="p-4 rounded-2xl bg-white border border-[#E2D8C9] w-full text-center">
                <span className="text-2xl sm:text-3xl font-serif text-[#9D7C50] block mb-1">100%</span>
                <span className="text-xs font-medium text-[#24211D] block">Personalizado</span>
                <span className="text-[10px] text-[#7A7165] block mt-0.5">Sem receitas prontas ou fórmulas prontas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote Callout */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#24211D] to-[#363029] text-white text-center max-w-4xl mx-auto shadow-xl">
          <MessageSquareHeart className="w-7 h-7 sm:w-8 sm:h-8 text-[#DFC49E] mx-auto mb-3 sm:mb-4 opacity-90" />
          <blockquote className="font-serif text-lg sm:text-2xl font-normal leading-relaxed text-[#FAF8F5] mb-3 sm:mb-4">
            &ldquo;{clinicData.doctor.philosophyQuote}&rdquo;
          </blockquote>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#DFC49E] font-medium">
            {clinicData.doctor.name} &bull; {clinicData.doctor.title}
          </p>
        </div>

      </div>
    </section>
  );
};
