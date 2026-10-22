import React from 'react';
import { clinicData } from '../config/clinicData';
import { Calendar, ArrowDown, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToTreatments = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#procedimentos');
    if (target) {
      const headerOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-24 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EA] to-[#FAF8F5]"
    >
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-12 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#EADCC8]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#DFC49E]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Editorial Presentation (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DFCBB5] text-[#786148] text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-5 sm:mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B8976C] shrink-0" />
              <span>Estética Facial &bull; Abordagem Individualizada</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1E1B18] font-normal leading-[1.18] sm:leading-[1.12] tracking-tight mb-5 sm:mb-6 break-words">
              {clinicData.doctor.heroTitleLead}{' '}
              <span className="italic font-normal text-[#9D7C50]">
                {clinicData.doctor.heroTitleHighlight}
              </span>
            </h1>

            {/* Supportive Paragraph */}
            <p className="text-sm sm:text-lg text-[#554F49] font-light leading-relaxed max-w-xl mb-7 sm:mb-9">
              {clinicData.doctor.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-12">
              <a
                href={clinicData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-[#1F1C18] text-[#FAF8F5] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#38332D] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#DFC49E] group-hover:scale-110 transition-transform" />
                <span>Agendar avaliação</span>
              </a>

              <a
                href="#procedimentos"
                onClick={scrollToTreatments}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/80 hover:bg-white text-[#38332D] text-xs sm:text-sm font-medium tracking-wide border border-[#DFCBB5] transition-all duration-300 hover:border-[#B8976C] shadow-2xs cursor-pointer"
              >
                <span>Conhecer os procedimentos</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#B8976C]" />
              </a>
            </div>

            {/* Editorial Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-6 border-t border-[#E8DFCFC0] w-full max-w-xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFE8DC] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#9D7C50]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F1C18]">Naturalidade</h4>
                  <p className="text-xs text-[#6B655F] leading-snug mt-0.5">Resultados sutis que preservam sua essência</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFE8DC] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-[#9D7C50]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F1C18]">Acolhimento</h4>
                  <p className="text-xs text-[#6B655F] leading-snug mt-0.5">Atendimento individual com escuta e calma</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFE8DC] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#9D7C50]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F1C18]">Precisão</h4>
                  <p className="text-xs text-[#6B655F] leading-snug mt-0.5">Planejamento focado na sua anatomia</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait Composition (5 cols on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full">
            
            {/* Elegant Background Frame / Card */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Outer decorative architectural outline */}
              <div className="hidden sm:block absolute -inset-3 rounded-[32px] border border-[#DFC49E]/40 pointer-events-none -z-10 translate-x-2 translate-y-2" />

              {/* Main Photo Card */}
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#EFEAE2] shadow-xl border border-white/60">
                <img
                  src="/images/hero-dra-luiza.png"
                  alt="Dra. Luiza S. Lima - Estética Facial e Harmonização"
                  className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle Gradient Overlay at bottom for seamless depth */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1F1C18]/60 via-[#1F1C18]/10 to-transparent pointer-events-none" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-[#EBE3D5] shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#1F1C18]">{clinicData.doctor.name}</p>
                    <p className="text-[10px] sm:text-[11px] text-[#7B6E60]">Estética Facial & Harmonização</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF5EE] text-[#9D7C50] text-[10px] font-semibold border border-[#E5DAC9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9D7C50] animate-pulse" />
                    <span>Atendimento Exclusivo</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
