import React, { useState } from 'react';
import { clinicData } from '../config/clinicData';
import { Sparkles, ArrowRight, Check, Shield, HelpCircle } from 'lucide-react';

export const Treatments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(clinicData.treatments[0].id);

  const activeTreatment =
    clinicData.treatments.find((t) => t.id === activeTab) || clinicData.treatments[0];

  const getWhatsappTreatmentUrl = (treatmentTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Dra. Alice! Gostaria de receber mais informações e tirar dúvidas sobre ${treatmentTitle} em seu consultório em Arujá.`
    );
    return `https://wa.me/?text=${text}`;
  };

  return (
    <section id="tratamentos" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DFCBB5] text-[#786148] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8976C]" />
            <span>Procedimentos & Especialidades</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.18] mb-5">
            Cuidados para o <span className="italic text-[#9D7C50]">seu sorriso.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#554F49] font-light leading-relaxed">
            Procedimentos odontológicos planejados de forma individualizada, combinando precisão biomecânica, materiais contemporâneos e máximo respeito à anatomia natural de cada pessoa.
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
                      ? 'bg-white border-[#C4A47C] shadow-md -translate-x-1 sm:translate-x-2'
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
                      <div className="flex items-center gap-2">
                        <h3 className={`text-base font-semibold ${isSelected ? 'text-[#1F1C18]' : 'text-[#453F39]'}`}>
                          {treatment.title}
                        </h3>
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
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5DAC9] shadow-lg relative overflow-hidden">
              
              {/* Subtle gold decorative gradient bar on top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C4A47C] via-[#DFC49E] to-[#9D7C50]" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#FAF5EE] text-[#9D7C50] text-xs font-semibold uppercase tracking-wider border border-[#EADCC8]">
                  {activeTreatment.badge || 'Tratamento Especializado'}
                </span>
                <span className="text-xs text-[#8E8478] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C4A47C]" />
                  Procedimento personalizado
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1B18] font-normal mb-4">
                {activeTreatment.title}
              </h3>

              <p className="text-base text-[#524B45] leading-relaxed mb-6 font-light">
                {activeTreatment.fullDescription}
              </p>

              {/* Benefits list */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9D7C50] mb-3">
                  Diferenciais e Benefícios:
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
                    Quer saber se este tratamento é indicado para as necessidades do seu sorriso?
                  </p>
                </div>

                <a
                  href={getWhatsappTreatmentUrl(activeTreatment.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1F1C18] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38332D] transition-colors shadow-2xs"
                >
                  <span>Consultar no WhatsApp</span>
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
