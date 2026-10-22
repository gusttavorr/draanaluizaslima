import React, { useState, useEffect } from 'react';
import { clinicData } from '../config/clinicData';
import { Send, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Speech prompt bubble */}
      <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#E5DAC9] text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div>
          <p className="text-xs font-semibold text-[#1F1C18]">Dúvidas sobre procedimentos?</p>
          <p className="text-[11px] text-[#6E645B]">Converse diretamente pelo WhatsApp</p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-[#9C9286] hover:text-[#1F1C18] p-1 ml-1 cursor-pointer"
          aria-label="Dispensar aviso"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Floating Action Button */}
      <a
        href={clinicData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#1F1C18] text-[#DFC49E] hover:bg-[#38332D] flex items-center justify-center shadow-2xl border-2 border-[#DFC49E]/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Conversar no WhatsApp com Dra. Luiza S. Lima"
      >
        <Send className="w-6 h-6" />
      </a>
    </div>
  );
};
