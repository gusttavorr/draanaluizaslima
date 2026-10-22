import React, { useState } from 'react';
import { clinicData } from '../config/clinicData';
import { InstagramIcon } from './icons/InstagramIcon';
import { MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    procedimento: 'Facetas e Lentes em Resina',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Dra. Alice!\n\nMeu nome é ${formData.nome}.\nTelefone: ${formData.telefone}\nTenho interesse em: ${formData.procedimento}.\n${
        formData.mensagem ? `Mensagem: ${formData.mensagem}` : ''
      }\n\nGostaria de verificar a disponibilidade de horários para uma avaliação em Arujá.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-16 sm:py-28 bg-[#F6F1EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 text-left">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#9D7C50] mb-2 sm:mb-3 inline-block">
            Agendamento & Informações
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.18] mb-3 sm:mb-4 break-words">
            Vamos conversar sobre o <span className="italic text-[#9D7C50]">seu sorriso?</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#554F49] font-light leading-relaxed">
            Entre em contato para esclarecer suas dúvidas e verificar a disponibilidade de horários no consultório em Arujá.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Schedule Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 text-left w-full">
            
            {/* WhatsApp Highlight Card */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EFE8DC] text-[#9D7C50] flex items-center justify-center mb-3 sm:mb-4">
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1C18] mb-1">
                Atendimento pelo WhatsApp
              </h3>
              <p className="text-xs text-[#6B655F] mb-4 sm:mb-5 leading-relaxed">
                Canal ágil para dúvidas preliminares, orientações sobre procedimentos e agendamento de consultas.
              </p>
              <a
                href={clinicData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 sm:py-3.5 px-6 rounded-full bg-[#1F1C18] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38332D] transition-colors shadow-2xs cursor-pointer"
              >
                <span>Iniciar conversa no WhatsApp</span>
                <Send className="w-3.5 h-3.5 text-[#DFC49E]" />
              </a>
              <p className="text-[10px] text-[#8C8379] mt-3 text-center italic">
                {clinicData.contact.whatsappDisplay}
              </p>
            </div>

            {/* Location & Clinic Hours */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/80 border border-[#E5DAC9] flex flex-col gap-4 sm:gap-5">
              
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9D7C50]">Localização</h4>
                  <p className="text-xs sm:text-sm font-medium text-[#1F1C18] mt-0.5">{clinicData.doctor.locationFull}</p>
                  <p className="text-[11px] sm:text-xs text-[#7A7268] mt-1">{clinicData.contact.address}</p>
                </div>
              </div>

              <div className="h-px bg-[#EFEAE2]" />

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9D7C50]">Horário de Atendimento</h4>
                  <p className="text-xs sm:text-sm font-medium text-[#1F1C18] mt-0.5">{clinicData.contact.hours}</p>
                  <p className="text-[11px] sm:text-xs text-[#7A7268] mt-1">Atendimento exclusivamente mediante reserva prévia.</p>
                </div>
              </div>

              <div className="h-px bg-[#EFEAE2]" />

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center shrink-0 mt-0.5">
                  <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9D7C50]">Instagram Oficial</h4>
                  <a
                    href={clinicData.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-[#1F1C18] hover:text-[#9D7C50] transition-colors mt-0.5 block"
                  >
                    {clinicData.contact.instagramHandle}
                  </a>
                  <p className="text-[11px] sm:text-xs text-[#7A7268] mt-0.5">Acompanhe novidades, casos clínicos e bastidores.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Pre-Scheduling Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] shadow-lg text-left">
              
              <div className="mb-5 sm:mb-6">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1F1C18] font-normal mb-1">
                  Solicitar Contato ou Pré-Agendamento
                </h3>
                <p className="text-xs text-[#6B655F]">
                  Preencha os campos abaixo para ser direcionado ao WhatsApp com sua mensagem pronta e estruturada.
                </p>
              </div>

              {submitted ? (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#F5FAF2] border border-[#CDE5C4] text-center">
                  <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10 text-[#4E8C3B] mx-auto mb-3" />
                  <h4 className="text-sm sm:text-base font-semibold text-[#274E1A] mb-1">
                    Direcionando para o WhatsApp...
                  </h4>
                  <p className="text-xs text-[#4E8C3B] max-w-md mx-auto mb-4">
                    Caso a conversa não abra automaticamente, você pode clicar no botão abaixo para conversar com a clínica.
                  </p>
                  <a
                    href={clinicData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1F1C18] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    <span>Abrir Conversa</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Como podemos lhe chamar?"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8C9] text-xs sm:text-sm text-[#1F1C18] placeholder-[#9C9287] focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C]/40 focus:border-[#C4A47C] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8C9] text-xs sm:text-sm text-[#1F1C18] placeholder-[#9C9287] focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C]/40 focus:border-[#C4A47C] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="procedimento" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1">
                      Procedimento de Interesse
                    </label>
                    <select
                      id="procedimento"
                      value={formData.procedimento}
                      onChange={(e) => setFormData({ ...formData, procedimento: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8C9] text-xs sm:text-sm text-[#1F1C18] focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C]/40 focus:border-[#C4A47C] transition-all"
                    >
                      {clinicData.treatments.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                      <option value="Consulta Geral / Avaliação">Consulta Geral / Avaliação de Rotina</option>
                      <option value="Outro assunto">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1">
                      Mensagem Adicional (Opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Conte-nos brevemente o que você busca para o seu sorriso..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8C9] text-xs sm:text-sm text-[#1F1C18] placeholder-[#9C9287] focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C]/40 focus:border-[#C4A47C] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 px-6 sm:px-8 rounded-full bg-[#1F1C18] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38332D] transition-all duration-200 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Enviar Mensagem para o WhatsApp</span>
                      <Send className="w-3.5 h-3.5 text-[#DFC49E] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 justify-center text-[10px] sm:text-[11px] text-[#7E7469] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9D7C50] shrink-0" />
                    <span>Seus dados são protegidos e utilizados apenas para o atendimento na clínica.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
