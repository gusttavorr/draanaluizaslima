import React from 'react';
import { clinicData } from '../config/clinicData';
import { Sparkles, CheckCircle2, Heart, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-28 bg-[#F6F1EA] relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#E8D7C0]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#DFC49E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Real Photo with Editorial Frame (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center w-full">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Backing decorative frame */}
              <div className="hidden sm:block absolute -inset-3 bg-[#EAE2D5] rounded-[32px] -rotate-1 pointer-events-none -z-10" />

              {/* Main Photo Card */}
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white shadow-xl border border-[#E0D4C3]">
                <img
                  src="/images/hero-dra-luiza.png"
                  alt="Dra. Luiza S. Lima - Profissional de Estética Facial"
                  className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Floating pill badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-[#E5DAC9] shadow-sm flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#B8976C]" />
                  <span className="text-[11px] sm:text-xs font-medium text-[#2E2822]">Estética Facial & Harmonização</span>
                </div>

                {/* Professional caption footer inside image */}
                <div className="p-4 sm:p-5 bg-white border-t border-[#F0E8DC] text-left">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9D7C50] font-semibold">Atendimento Individualizado</p>
                  <p className="text-sm font-serif text-[#1F1C18] mt-0.5">{clinicData.doctor.name}</p>
                  <p className="text-[11px] text-[#7A7268] mt-1 italic">
                    "O verdadeiro valor está em um resultado harmônico, sutil e que respeite quem você já é."
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Philosophy (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#9D7C50] mb-2 sm:mb-3">
              Sobre a Profissional
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.18] mb-5 sm:mb-6 break-words">
              Cuidado que começa em <span className="italic text-[#9D7C50]">ouvir você.</span>
            </h2>

            <p className="text-sm sm:text-lg text-[#554F49] font-light leading-relaxed mb-5 sm:mb-6">
              {clinicData.doctor.aboutLead}
            </p>

            <p className="text-xs sm:text-base text-[#68625B] leading-relaxed mb-4">
              {clinicData.doctor.aboutParagraph1}
            </p>

            <p className="text-xs sm:text-base text-[#68625B] leading-relaxed mb-7 sm:mb-8">
              {clinicData.doctor.aboutParagraph2}
            </p>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-white/80 border border-[#E5DAC9] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FAF5EE] text-[#9D7C50] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1C18]">Escuta e Atenção Plena</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B655F] mt-1 leading-snug">
                    Compreensão das suas queixas antes de qualquer indicação ou procedimento.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#E5DAC9] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FAF5EE] text-[#9D7C50] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1C18]">Naturalidade e Harmonia</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B655F] mt-1 leading-snug">
                    Preservação dos traços nativos, sem exageros ou transformações artificiais.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#E5DAC9] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FAF5EE] text-[#9D7C50] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1C18]">Técnica e Precisão</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B655F] mt-1 leading-snug">
                    Aplicação criteriosa com foco na mímica facial e suporte dos contornos.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#E5DAC9] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FAF5EE] text-[#9D7C50] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1C18]">Conduta Ética & Responsável</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B655F] mt-1 leading-snug">
                    Planejamento realista e transparente, respeitando as normas profissionais.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              <a
                href={clinicData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1F1C18] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38332D] transition-colors shadow-xs cursor-pointer"
              >
                <span>Falar diretamente no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#DFC49E]" />
              </a>

              <span className="text-[11px] sm:text-xs text-[#7B736A] italic text-center sm:text-left">
                {clinicData.doctor.croNotice}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
