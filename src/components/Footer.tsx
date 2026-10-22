import React, { useState } from 'react';
import { Logo } from './Logo';
import { clinicData } from '../config/clinicData';
import { InstagramIcon } from './icons/InstagramIcon';
import { ArrowUp, X, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A Dra. Alice', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'A Clínica', href: '#clinica' },
    { label: 'Presença Digital', href: '#presenca-digital' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <footer className="bg-[#181614] text-[#E0D8CE] pt-16 pb-12 border-t border-[#2D2823] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#2C2723] text-left">
            
            {/* Column 1: Brand & Identity (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <Logo variant="full" theme="light" className="mb-4" />
              
              <p className="text-xs sm:text-sm text-[#A89F93] leading-relaxed max-w-sm mb-6 font-light">
                Odontologia estética contemporânea, facetas em resina, alinhadores invisíveis e reabilitação oral com acolhimento, naturalidade e cuidado individualizado em Arujá, São Paulo.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={clinicData.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#27231F] hover:bg-[#C4A47C] text-[#DFC49E] hover:text-[#181614] flex items-center justify-center transition-colors border border-[#3A342D]"
                  aria-label="Instagram da Dra. Alice Bastos"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <span className="text-xs text-[#8E8376]">
                  {clinicData.contact.instagramHandle}
                </span>
              </div>
            </div>

            {/* Column 2: Navigation Links (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A47C] mb-4">
                Navegação
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs text-[#B5ABA0] hover:text-[#DFC49E] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal & Regulatory (4 cols) */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A47C] mb-4">
                Informações Éticas & Legais
              </h4>
              <p className="text-xs text-[#9E9385] leading-relaxed mb-3">
                <strong>Responsável Técnica:</strong> Dra. Alice Bastos
                <br />
                <strong>Atuação:</strong> Cirurgiã-Dentista &bull; Odontologia Clínica e Estética
                <br />
                <strong>Registro Profissional:</strong> {clinicData.doctor.croNotice}
              </p>
              <p className="text-[11px] text-[#7A7064] leading-relaxed">
                Este website tem finalidade estritamente institucional e informativa, de acordo com o Código de Ética Odontológica (Resolução CFO). Não substitui a avaliação clínica presencial individualizada.
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7165]">
            <p>
              &copy; {new Date().getFullYear()} Dra. Alice Bastos &bull; Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="hover:text-[#DFC49E] transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Privacidade & Termos
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 hover:text-[#DFC49E] transition-colors p-1 cursor-pointer"
                aria-label="Voltar ao topo da página"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div
            className="bg-[#FAF8F5] text-[#24211D] max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5DAC9] relative max-h-[90vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFEAE2] transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5 text-[#4D453E]" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-[#9D7C50]" />
              <h3 className="font-serif text-xl font-normal text-[#1F1C18]">
                Política de Privacidade & Ética
              </h3>
            </div>

            <div className="space-y-4 text-xs text-[#5D554C] leading-relaxed">
              <p>
                <strong>Compromisso de Privacidade:</strong> O website da Dra. Alice Bastos preza pela total confidencialidade e segurança dos dados fornecidos por potenciais pacientes, respeitando a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
              </p>
              <p>
                <strong>Uso dos Dados de Contato:</strong> As informações preenchidas nos formulários de contato são utilizadas exclusivamente para o direcionamento e facilitação do agendamento de consultas via canais oficiais (WhatsApp), sem compartilhamento com terceiros.
              </p>
              <p>
                <strong>Diretrizes do CFO:</strong> Em cumprimento às normas do Conselho Federal de Odontologia e do Código de Ética Odontológica, os conteúdos apresentados neste site não garantem resultados pré-determinados, pois cada organismo e anatomia bucal demandam diagnóstico individual.
              </p>
              <p>
                <strong>Registro Profissional:</strong> Os dados de CRO-SP e endereço definitivo da clínica serão atualizados no lançamento formal definitivo do website.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE2D5] flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#1F1C18] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#38332D]"
              >
                Compreendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
