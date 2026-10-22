import React, { useState } from 'react';
import { clinicData } from '../config/clinicData';
import { Sparkles, ArrowRight, Check, Shield, HelpCircle, Star } from 'lucide-react';

export const Treatments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(clinicData.treatments[0].id);

  const activeTreatment =
    clinicData.treatments.find((t) => t.id === activeTab) || clinicData.treatments[0];

  const getWhatsappTreatmentUrl = (treatmentTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Dra. Luiza! Gostaria de receber informações e tirar dúvidas sobre ${treatmentTitle} para uma avaliação individualizada.`
    );
    return clinicData.contact.whatsappNumber
      ? `https://wa.me/${clinicData.contact.whatsappNumber}?text=${text}`
      : `https://wa.me/?text=${text}`;
  };

  return (
    <section id="procedimentos" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DFCBB5] text-[#786148] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8976C]" />
            <span>Procedimentos & Abordagens</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.18] mb-5">
            Cuidados para realçar a sua <span className="italic text-[#9D7C50]">beleza natural.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#554F49] font-light leading-relaxed">
            Procedimentos estéticos faciais conduzidos com precisão anatômica, foco em sustentação e total respeito aos contornos e à individualidade de cada pessoa.
          </p>
        </div>

        {/* Interactive Treatment Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Treatment Selector List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {clinicData.treatments.map((treatment, idx) => {
              const isSelected = treatment.id === activeTab;
              return (
                <button
                  key={treatment.id}
                  onClick={() => setActiveTab(treatment.id)}
                  type="button"
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#C4A47C] shadow-md -translate-x-1 sm:translate-x-2 ring-1 ring-[#C4A47C]/30'
                      : 'bg-[#F5F0E8]/70 border-[#E8DFCFC0] hover:bg-white/80 hover:border-[#D5C6B1]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-xs font-mono font-medium mt-0.5 ${
                        isSelected ? 'text-[#C4A47C]' : 'text-[#9A9084]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-base font-semibold ${isSelected ? 'text-[#1F1C18]' : 'text-[#453F39]'}`}>
                          {treatment.title}
                        </h3>
                        {treatment.highlight && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FAF0E1] text-[#9E7745] text-[10px] font-semibold border border-[#E9D5BD]">
                            <Star className="w-2.5 h-2.5 fill-[#9E7745]" />
                            Destaque
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6B655F] mt-1 line-clamp-1">
                        {treatment.shortDescription}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isSelected ? 'text-[#C4A47C] translate-x-1' : 'text-[#B8AEA0]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Editorial Card for Selected Treatment (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5DAC9] shadow-lg relative overflow-hidden text-left">
              
              {/* Subtle gold decorative gradient bar on top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C4A47C] via-[#DFC49E] to-[#9D7C50]" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                  activeTreatment.highlight
                    ? 'bg-[#FAF0E1] text-[#8C6430] border-[#DFC29E]'
                    : 'bg-[#FAF5EE] text-[#9D7C50] border-[#EADCC8]'
                }`}>
                  {activeTreatment.badge || 'Procedimento Especializado'}
                </span>
                <span className="text-xs text-[#8E8478] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C4A47C]" />
                  Planejamento individualizado
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1B18] font-normal mb-4">
                {activeTreatment.title}
              </h3>

              <p className="text-base text-[#524B45] leading-relaxed mb-6 font-light">
                {activeTreatment.fullDescription}
              </p>

              {/* Differential & Key Points */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9D7C50] mb-3">
                  Pilares do Tratamento:
                </h4>
                <ul className="space-y-3">
                  {activeTreatment.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FAF3EA] text-[#C4A47C] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm text-[#423C36]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Box */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#B8976C] shrink-0" />
                  <p className="text-xs text-[#686058] leading-snug">
                    Deseja entender como este procedimento pode valorizar a harmonia do seu rosto?
                  </p>
                </div>

                <a
                  href={getWhatsappTreatmentUrl(activeTreatment.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1F1C18] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38332D] transition-colors shadow-2xs cursor-pointer"
                >
                  <span>Consultar pelo WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC49E]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
