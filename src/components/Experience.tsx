import React from 'react';
import { clinicData } from '../config/clinicData';
import { Clock, ShieldCheck, Heart, Sparkles, MessageSquareHeart } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-16 sm:py-28 bg-[#FAF8F5] relative overflow-hidden border-y border-[#EBE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DFCBB5] text-[#786148] text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8976C]" />
            <span>Conduta & Credibilidade</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.18] mb-4 sm:mb-5 break-words">
            Uma experiência odontológica baseada no{' '}
            <span className="italic text-[#9D7C50]">respeito e na ética.</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#554F49] font-light leading-relaxed">
            Priorizamos a transparência diagnóstica e a tranquilidade do paciente em todas as etapas, desde a primeira conversa até a manutenção do seu sorriso.
          </p>
        </div>

        {/* 3 Pillars of Care */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
          
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] shadow-xs flex flex-col items-start text-left hover:border-[#C4A47C] transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center mb-5 sm:mb-6">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#1F1C18] font-medium mb-2.5 sm:mb-3">
              Consultas Sem Pressa
            </h3>
            <p className="text-xs sm:text-sm text-[#665F58] leading-relaxed font-light">
              Tempo reservado exclusivamente para você. Ouvimos suas queixas com calma para compreender suas expectativas estéticas e necessidades funcionais antes de qualquer decisão.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] shadow-xs flex flex-col items-start text-left hover:border-[#C4A47C] transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center mb-5 sm:mb-6">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#1F1C18] font-medium mb-2.5 sm:mb-3">
              Planejamento Transparente
            </h3>
            <p className="text-xs sm:text-sm text-[#665F58] leading-relaxed font-light">
              Explicação detalhada, passo a passo, de todas as opções de tratamento. Sem promessas irreais ou procedimentos desnecessários, respeitando sua anatomia e seus objetivos.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] shadow-xs flex flex-col items-start text-left hover:border-[#C4A47C] transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center mb-5 sm:mb-6">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#1F1C18] font-medium mb-2.5 sm:mb-3">
              Acolhimento & Sensibilidade
            </h3>
            <p className="text-xs sm:text-sm text-[#665F58] leading-relaxed font-light">
              Um ambiente pensado especialmente para quem sente receio ou ansiedade ao visitar o dentista. Anestesia delicada, conforto térmico e comunicação constante para que você se sinta seguro.
            </p>
          </div>

        </div>

        {/* Philosophy Quote Callout */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#24211D] to-[#363029] text-white text-center max-w-4xl mx-auto shadow-xl">
          <MessageSquareHeart className="w-7 h-7 sm:w-8 sm:h-8 text-[#DFC49E] mx-auto mb-3 sm:mb-4 opacity-90" />
          <blockquote className="font-serif text-lg sm:text-2xl font-normal leading-relaxed text-[#FAF8F5] mb-3 sm:mb-4">
            &ldquo;{clinicData.doctor.philosophyQuote}&rdquo;
          </blockquote>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#DFC49E] font-medium">
            Dra. Alice Bastos &bull; Arujá-SP
          </p>
        </div>

      </div>
    </section>
  );
};
