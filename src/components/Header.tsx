import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { clinicData } from '../config/clinicData';
import { Menu, X, Calendar, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Cuidado & Ética', href: '#cuidado' },
    { label: 'Meu Trabalho', href: '#meu-trabalho' },
    { label: 'Contato', href: '#agendamento' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-xs py-3 sm:py-3.5'
            : 'bg-[#FAF8F5]/90 backdrop-blur-xs py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Signature */}
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="group focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C]/40 rounded-lg p-1 -m-1 transition-transform"
              aria-label="Página inicial Dra. Luiza S. Lima"
            >
              <Logo variant="full" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.16em] font-medium text-[#4A443E] hover:text-[#C4A47C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C4A47C] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={clinicData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1F1C18] text-[#FAF8F5] hover:bg-[#38332D] transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02] border border-[#3D3730] cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#DFC49E]" />
                <span>Agendar avaliação</span>
              </a>
            </div>

            {/* Mobile Actions Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={clinicData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#1F1C18] text-[#FAF8F5]"
                aria-label="Agendar via WhatsApp"
              >
                <span>Agendar</span>
                <ArrowUpRight className="w-3 h-3 text-[#DFC49E]" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#1F1C18] hover:bg-[#EFEAE1] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#C4A47C] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-[64px] sm:top-[68px] left-0 right-0 bg-[#FAF8F5] border-b border-[#E8DFCFC0] shadow-xl p-6 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium uppercase tracking-wider text-[#35302B] hover:text-[#C4A47C] py-2 border-b border-[#F0EBE2]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={clinicData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1F1C18] text-[#FAF8F5]"
                >
                  <Calendar className="w-4 h-4 text-[#DFC49E]" />
                  <span>Agendar Avaliação</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
