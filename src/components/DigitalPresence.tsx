import React, { useState } from 'react';
import { clinicData } from '../config/clinicData';
import { InstagramIcon } from './icons/InstagramIcon';
import {
  Play,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ExternalLink,
  Volume2,
  Sparkles,
  ArrowRight,
  Wifi,
  Battery,
  SlidersHorizontal,
} from 'lucide-react';

export const DigitalPresence: React.FC = () => {
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'preview' | 'embed'>('preview');

  const posts = clinicData.instagramPosts;
  const currentPost = posts[selectedPostIndex] || posts[0];

  const handlePostChange = (idx: number) => {
    setSelectedPostIndex(idx);
  };

  return (
    <section
      id="presenca-digital"
      className="py-16 sm:py-28 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] relative overflow-hidden"
    >
      {/* Ambient Lighting Spheres */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#E8D9C5]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#DFC49E]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header for Mobile / Tablet Top View */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DFCBB5] text-[#786148] text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-4">
            <InstagramIcon className="w-3.5 h-3.5 text-[#B8976C]" />
            <span>Presença Digital Oficial</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal leading-[1.18] mb-3 sm:mb-4 break-words">
            Seu cuidado também está presente no{' '}
            <span className="italic text-[#9D7C50]">digital.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#554F49] font-light leading-relaxed">
            Conheça mais sobre o universo da Dra. Alice, acompanhe seus conteúdos e fique por dentro de informações sobre saúde e cuidados com o sorriso.
          </p>
        </div>

        {/* Asymmetrical 2-Column Desktop Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Presentation, Reel Selector & Primary CTA (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Desktop Kicker */}
            <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DFCBB5] text-[#786148] text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
              <InstagramIcon className="w-3.5 h-3.5 text-[#B8976C]" />
              <span>Presença Digital Oficial</span>
            </div>

            {/* Desktop Headline */}
            <h2 className="hidden lg:block font-serif text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15] mb-5">
              Seu cuidado também está presente no{' '}
              <span className="italic text-[#9D7C50]">digital.</span>
            </h2>

            {/* Desktop Subtitle */}
            <p className="hidden lg:block text-base sm:text-lg text-[#554F49] font-light leading-relaxed mb-8 max-w-xl">
              Conheça mais sobre o universo da Dra. Alice, acompanhe seus conteúdos e fique por dentro de informações sobre saúde e cuidados com o sorriso.
            </p>

            {/* Content Selector Description */}
            <div className="w-full mb-3 sm:mb-4 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#8E7964]">
                Publicações e Casos Reais:
              </span>
              <span className="text-xs text-[#8E7964] font-mono">
                {selectedPostIndex + 1} de {posts.length}
              </span>
            </div>

            {/* Interactive Reels Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full mb-6 sm:mb-8">
              {posts.map((post, idx) => {
                const isActive = idx === selectedPostIndex;
                return (
                  <button
                    key={post.id}
                    type="button"
                    onClick={() => handlePostChange(idx)}
                    className={`text-left p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#C4A47C] shadow-md ring-2 ring-[#C4A47C]/20'
                        : 'bg-white/70 border-[#E8DFCFC0] hover:bg-white hover:border-[#D5C6B1]'
                    }`}
                  >
                    <div className="w-12 h-16 rounded-xl overflow-hidden shrink-0 relative bg-[#E8E1D5]">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 text-white fill-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#9D7C50]">
                        {post.category}
                      </span>
                      <h4 className="text-xs font-semibold text-[#1F1C18] truncate mt-0.5">
                        {post.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#6E6760] line-clamp-1 mt-0.5">
                        {post.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display Mode Switcher (Interactive Preview vs. Official Embed) */}
            <div className="w-full p-3.5 sm:p-4 rounded-2xl bg-white/80 border border-[#E5DAC9] mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#9D7C50]" />
                <span className="text-xs font-medium text-[#38332D]">
                  Modo de visualização no smartphone:
                </span>
              </div>

              <div className="flex items-center bg-[#EFEAE2] p-1 rounded-full w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setViewMode('preview')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    viewMode === 'preview'
                      ? 'bg-white text-[#1F1C18] shadow-2xs font-semibold'
                      : 'text-[#6B655F] hover:text-[#1F1C18]'
                  }`}
                >
                  Player Interativo
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('embed')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    viewMode === 'embed'
                      ? 'bg-white text-[#1F1C18] shadow-2xs font-semibold'
                      : 'text-[#6B655F] hover:text-[#1F1C18]'
                  }`}
                >
                  Embed Oficial Instagram
                </button>
              </div>
            </div>

            {/* Instagram Main CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={clinicData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#24211D] to-[#3B342C] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase hover:from-[#38332D] hover:to-[#50483E] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4 text-[#DFC49E] group-hover:scale-110 transition-transform" />
                <span>Conheça o Instagram da Dra. Alice</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#DFC49E]/70" />
              </a>

              <a
                href={currentPost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/70 hover:bg-white text-[#38332D] text-xs font-medium tracking-wide border border-[#DFCBB5] transition-all cursor-pointer"
              >
                <span>Assistir Reel Selecionado</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8976C]" />
              </a>
            </div>

            {/* Verified Profile Notice */}
            <div className="flex items-center gap-2 mt-4 text-[11px] text-[#7A7268]">
              <Sparkles className="w-3 h-3 text-[#C4A47C]" />
              <span>Perfil oficial verificado: <strong className="font-semibold text-[#24211D]">{clinicData.contact.instagramHandle}</strong></span>
            </div>

          </div>

          {/* Right Column: Realistic High-Fidelity Smartphone Mockup (5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 w-full">
            
            {/* Phone Container with Subtle Floating Animation */}
            <div className="relative animate-phone-float transition-transform duration-500">
              
              {/* Outer Ambient Glow / Drop Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C4A47C]/25 to-[#1F1C18]/15 rounded-[56px] blur-2xl pointer-events-none -z-10" />

              {/* Realistic Smartphone Chassis */}
              <div className="relative w-[280px] min-[380px]:w-[310px] sm:w-[330px] h-[570px] min-[380px]:h-[620px] sm:h-[660px] bg-[#141210] rounded-[44px] sm:rounded-[48px] p-2.5 sm:p-3 shadow-2xl border-[3px] border-[#36322E] flex flex-col">
                
                {/* Metallic Edge Specular Highlight */}
                <div className="absolute inset-0 rounded-[42px] sm:rounded-[46px] border border-white/10 pointer-events-none" />

                {/* Smartphone Side Buttons (Hardware details) */}
                <div className="absolute -left-[5px] top-24 sm:top-28 w-[3px] h-9 sm:h-10 bg-[#36322E] rounded-l-sm" />
                <div className="absolute -left-[5px] top-38 sm:top-42 w-[3px] h-10 sm:h-12 bg-[#36322E] rounded-l-sm" />
                <div className="absolute -right-[5px] top-28 sm:top-32 w-[3px] h-12 sm:h-14 bg-[#36322E] rounded-r-sm" />

                {/* Smartphone Screen Inner Bezel */}
                <div className="relative w-full h-full bg-black rounded-[34px] sm:rounded-[38px] overflow-hidden flex flex-col">
                  
                  {/* Top Status Bar & Dynamic Island */}
                  <div className="relative z-30 pt-2 px-5 sm:px-6 flex items-center justify-between text-white text-[10px] sm:text-[11px] select-none font-medium">
                    <span>20:26</span>
                    
                    {/* Dynamic Island / Speaker */}
                    <div className="w-20 sm:w-24 h-4 sm:h-5 bg-[#141210] rounded-full flex items-center justify-end pr-2 border border-white/5">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#1F1C18] border border-white/10" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3 h-3 text-white" />
                      <Battery className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* SCREEN CONTENT AREA */}
                  <div className="relative flex-1 w-full h-full overflow-hidden flex flex-col bg-black">
                    
                    {viewMode === 'preview' ? (
                      /* Realistic High-Definition Reels Player Preview */
                      <div className="relative w-full h-full flex flex-col justify-between text-white">
                        
                        {/* Background Post Real Image */}
                        <img
                          src={currentPost.thumbnail}
                          alt={currentPost.title}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        {/* Top & Bottom Cinematic Gradient Overlays */}
                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                        {/* Instagram Reels Top Header Inside Screen */}
                        <div className="relative z-10 px-3.5 sm:px-4 pt-2.5 sm:pt-3 flex items-center justify-between">
                          <span className="font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">
                            Reels
                          </span>
                          <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px]">
                            <Volume2 className="w-3 h-3 text-[#DFC49E]" />
                            <span>Áudio Original</span>
                          </div>
                        </div>

                        {/* Center Play Button Overlay */}
                        <div className="relative z-10 flex-1 flex items-center justify-center">
                          <a
                            href={currentPost.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 hover:bg-black/60 transition-all shadow-xl"
                            aria-label={`Reproduzir ${currentPost.title} no Instagram`}
                          >
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-0.5 group-hover/btn:text-[#DFC49E] transition-colors" />
                          </a>
                        </div>

                        {/* Right Action Rail (Instagram style: like, comment, share) */}
                        <div className="absolute right-2.5 sm:right-3 bottom-18 sm:bottom-20 z-20 flex flex-col items-center gap-3.5 sm:gap-4 text-white">
                          <a
                            href={currentPost.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-0.5 sm:gap-1 hover:text-[#DFC49E] transition-colors"
                          >
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md" />
                            <span className="text-[9px] sm:text-[10px] font-medium">Curtir</span>
                          </a>

                          <a
                            href={currentPost.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-0.5 sm:gap-1 hover:text-[#DFC49E] transition-colors"
                          >
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md" />
                            <span className="text-[9px] sm:text-[10px] font-medium">Comentar</span>
                          </a>

                          <a
                            href={currentPost.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-0.5 sm:gap-1 hover:text-[#DFC49E] transition-colors"
                          >
                            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md" />
                            <span className="text-[9px] sm:text-[10px] font-medium">Enviar</span>
                          </a>

                          <a
                            href={currentPost.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-0.5 sm:gap-1 hover:text-[#DFC49E] transition-colors"
                          >
                            <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-md" />
                          </a>
                        </div>

                        {/* Bottom Instagram Profile Info & Caption */}
                        <div className="relative z-10 px-3.5 sm:px-4 pb-3.5 sm:pb-4 pr-14 sm:pr-16 text-left">
                          
                          {/* Profile Row */}
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C4A47C] overflow-hidden bg-[#24211D] flex items-center justify-center shrink-0">
                              <img
                                src="/images/hero-dra-alice.png"
                                alt="Dra. Alice Bastos"
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                            <span className="text-[11px] sm:text-xs font-semibold drop-shadow-md">
                              dra.alicebastos
                            </span>
                            <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[8px] sm:text-[9px] font-medium border border-white/20">
                              Seguir
                            </span>
                          </div>

                          {/* Caption */}
                          <p className="text-[10px] sm:text-[11px] leading-tight text-white/90 drop-shadow-md line-clamp-2 mb-1.5 sm:mb-2 font-normal">
                            {currentPost.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-2">
                            {currentPost.tags.slice(0, 2).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[8px] sm:text-[9px] text-[#E8D7C0] bg-black/30 backdrop-blur-xs px-1 sm:px-1.5 py-0.5 rounded-md"
                              >
                                #{tag.replace(/\s+/g, '')}
                              </span>
                            ))}
                          </div>

                          {/* In-Screen Watch Button */}
                          <a
                            href={currentPost.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white text-black text-[10px] sm:text-[11px] font-semibold hover:bg-[#FAF8F5] transition-colors shadow-lg"
                          >
                            <InstagramIcon className="w-3 h-3 text-[#B8976C]" />
                            <span>Assistir no Instagram</span>
                          </a>
                        </div>

                      </div>
                    ) : (
                      /* Official Instagram Embed Mode */
                      <div className="relative w-full h-full bg-[#181818] flex flex-col">
                        <iframe
                          key={currentPost.code}
                          src={`https://www.instagram.com/p/${currentPost.code}/embed/`}
                          title={`Post do Instagram Dra. Alice Bastos ${currentPost.title}`}
                          className="w-full h-full border-0"
                          scrolling="no"
                          allowFullScreen
                        />

                        {/* Fallback & Direct Link Bar below embed */}
                        <div className="p-2 bg-[#222] border-t border-white/10 flex items-center justify-between px-3 text-white text-[10px] sm:text-[11px]">
                          <span className="truncate pr-2">{currentPost.title}</span>
                          <a
                            href={currentPost.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DFC49E] hover:underline flex items-center gap-1 shrink-0 font-medium"
                          >
                            <span>Abrir</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Home Indicator Bar */}
                  <div className="py-1 sm:py-1.5 flex justify-center bg-black">
                    <div className="w-24 sm:w-32 h-1 bg-white/40 rounded-full" />
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
