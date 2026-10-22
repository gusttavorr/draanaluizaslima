import React, { useState } from 'react';
import { clinicData } from '../config/clinicData';
import { InstagramIcon } from './icons/InstagramIcon';
import { Clock, Send, CheckCircle2, ShieldCheck, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    procedimento: 'Toxina Botulínica (Botox)',
    periodo: 'A combinar',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Dra. Luiza!\n\nSolicitação de agendamento:\n• Nome: ${formData.nome}\n• Procedimento de interesse: ${formData.procedimento}\n• Melhor período: ${formData.periodo}\n${
        formData.mensagem ? `• Mensagem adicional: ${formData.mensagem}\n` : ''
      }\nGostaria de verificar a disponibilidade de horários para uma avaliação facial.`
    );

    const targetUrl = clinicData.contact.whatsappNumber
      ? `https://wa.me/${clinicData.contact.whatsappNumber}?text=${text}`
      : `https://wa.me/?text=${text}`;

    window.open(targetUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="agendamento" className="py-16 sm:py-28 bg-[#F6F1EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 text-left">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#9D7C50] mb-2 sm:mb-3 inline-block">
            Agendamento & Informações
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.18] mb-3 sm:mb-4 break-words">
            Solicite sua avaliação <span className="italic text-[#9D7C50]">personalizada.</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#554F49] font-light leading-relaxed">
            Preencha os dados abaixo para iniciar sua conversa com a Dra. Luiza pelo WhatsApp, com sua solicitação organizada e sem espera.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Alternative Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 text-left w-full">
            
            {/* WhatsApp Card */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EFE8DC] text-[#9D7C50] flex items-center justify-center mb-3 sm:mb-4">
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1C18] mb-1">
                Atendimento pelo WhatsApp
              </h3>
              <p className="text-xs text-[#6B655F] mb-4 sm:mb-5 leading-relaxed">
                Canal exclusivo para agendamento de avaliações, esclarecimento de dúvidas e informações sobre disponibilidade.
              </p>
              <a
                href={clinicData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 sm:py-3.5 px-6 rounded-full bg-[#1F1C18] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38332D] transition-colors shadow-2xs cursor-pointer"
              >
                <span>Falar no WhatsApp</span>
                <Send className="w-3.5 h-3.5 text-[#DFC49E]" />
              </a>
              <p className="text-[10px] text-[#8C8379] mt-3 text-center italic">
                {clinicData.contact.whatsappDisplay}
              </p>
            </div>

            {/* Direct Channel & Clinic Policy */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/80 border border-[#E5DAC9] flex flex-col gap-4 sm:gap-5">
              
              {/* Instagram Direct Option */}
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
                    className="text-xs sm:text-sm font-semibold text-[#1F1C18] hover:text-[#9D7C50] transition-colors mt-0.5 inline-flex items-center gap-1.5"
                  >
                    <span>{clinicData.contact.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3 text-[#B8976C]" />
                  </a>
                  <p className="text-[11px] text-[#7A7268] mt-1">
                    Você também pode enviar uma mensagem direta pelo Instagram para falar com a Dra. Luiza.
                  </p>
                </div>
              </div>

              <div className="h-px bg-[#EFEAE2]" />

              {/* Hours */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9D7C50]">Disponibilidade</h4>
                  <p className="text-xs sm:text-sm font-medium text-[#1F1C18] mt-0.5">{clinicData.contact.hours}</p>
                  <p className="text-[11px] text-[#7A7268] mt-1">Atendimento estritamente mediante agendamento prévio.</p>
                </div>
              </div>

              <div className="h-px bg-[#EFEAE2]" />

              {/* Attendance Protocol */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9D7C50]">Atendimento Privado</h4>
                  <p className="text-xs text-[#6B655F] mt-0.5 leading-relaxed">
                    Cada consulta conta com horário reservado com exclusividade, garantindo privacidade, discrição e pontualidade.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Pre-Scheduling Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] shadow-lg text-left">
              
              <div className="mb-5 sm:mb-6">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1F1C18] font-normal mb-1">
                  Solicitar Agendamento de Avaliação
                </h3>
                <p className="text-xs text-[#6B655F]">
                  Preencha os campos abaixo. Ao clicar em solicitar, o WhatsApp abrirá com sua mensagem organizada para envio imediato.
                </p>
              </div>

              {submitted ? (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#F5FAF2] border border-[#CDE5C4] text-center">
                  <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10 text-[#4E8C3B] mx-auto mb-3" />
                  <h4 className="text-sm sm:text-base font-semibold text-[#274E1A] mb-1">
                    Redirecionando para o WhatsApp...
                  </h4>
                  <p className="text-xs text-[#4E8C3B] max-w-md mx-auto mb-4">
                    Caso a conversa não abra automaticamente, clique no botão abaixo para concluir o contato.
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
                  {/* Nome */}
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
                      placeholder="Como você prefere ser chamada(o)?"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8C9] text-xs sm:text-sm text-[#1F1C18] placeholder-[#9C9287] focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C]/40 focus:border-[#C4A47C] transition-all"
                    />
                  </div>

                  {/* Procedimento */}
                  <div>
                    <label htmlFor="procedimento" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1">
                      Procedimento de Interesse *
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
                      <option value="Avaliação Geral / Harmonização Facial">Avaliação Geral de Harmonização Facial</option>
                      <option value="Outro assunto ou dúvida">Outro assunto ou dúvida</option>
                    </select>
                  </div>

                  {/* Melhor período para atendimento (Opcional) */}
                  <div>
                    <label htmlFor="periodo" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1">
                      Melhor Período para Atendimento (Opcional)
                    </label>
                    <select
                      id="periodo"
                      value={formData.periodo}
                      onChange={(e) => setFormData({ ...formData, periodo: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8C9] text-xs sm:text-sm text-[#1F1C18] focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C]/40 focus:border-[#C4A47C] transition-all"
                    >
                      <option value="A combinar">A combinar</option>
                      <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
                      <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                      <option value="Final de tarde (a partir das 17h)">Final de tarde (a partir das 17h)</option>
                    </select>
                  </div>

                  {/* Mensagem adicional (Opcional) */}
                  <div>
                    <label htmlFor="mensagem" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A443E] mb-1">
                      Mensagem Adicional (Opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Conte brevemente o que você busca cuidar na sua pele ou harmonia facial..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8C9] text-xs sm:text-sm text-[#1F1C18] placeholder-[#9C9287] focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C]/40 focus:border-[#C4A47C] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 px-6 sm:px-8 rounded-full bg-[#1F1C18] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38332D] transition-all duration-200 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Solicitar agendamento</span>
                      <Send className="w-3.5 h-3.5 text-[#DFC49E] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 justify-center text-[10px] sm:text-[11px] text-[#7E7469] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9D7C50] shrink-0" />
                    <span>Seus dados são protegidos e utilizados exclusivamente para orientar o seu atendimento.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Reassurance Notice without fake addresses or unconfirmed data */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5DAC9] text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FAF5EE] text-[#9D7C50] flex items-center justify-center shrink-0 mt-0.5">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#1F1C18]">
                Confirmação de Consulta
              </h4>
              <p className="text-[11px] sm:text-xs text-[#686058] mt-0.5 leading-relaxed">
                A solicitação enviada via formulário não gera confirmação automática. A disponibilidade de datas e horários será alinhada diretamente com você via WhatsApp ou Instagram Direct.
              </p>
            </div>
          </div>

          <a
            href={clinicData.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF5EE] text-[#8C6D45] text-xs font-semibold border border-[#E5DAC9] hover:bg-[#EFE8DC] transition-colors shrink-0"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Perfil @dra.luizaslima</span>
          </a>
        </div>

      </div>
    </section>
  );
};
