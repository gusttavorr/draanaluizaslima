import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'symbol';
  className?: string;
  theme?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Dental Clover Monogram Symbol */}
      <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C4A47C" />
              <stop offset="50%" stopColor="#DFC49E" />
              <stop offset="100%" stopColor="#9C7748" />
            </linearGradient>
            <linearGradient id="logoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#FFFFFF' : '#2A2521'} />
              <stop offset="100%" stopColor={isLight ? '#E5D6C5' : '#453B33'} />
            </linearGradient>
          </defs>

          {/* Background aura circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill={isLight ? 'rgba(255,255,255,0.06)' : 'rgba(196,164,124,0.08)'}
            stroke="url(#logoGold)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />

          {/* Dental Clover Motif matching wall signage */}
          <g transform="translate(50, 50)" stroke="url(#logoGold)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round">
            {/* Top Tooth Silhouette */}
            <path d="M -11 -15 C -11 -26 -5 -32 0 -32 C 5 -32 11 -26 11 -15 C 11 -8 5 -3 0 -3 C -5 -3 -11 -8 -11 -15 Z" />
            <path d="M -3 -26 C -1 -28 1 -28 3 -26" strokeWidth="2.5" />

            {/* Bottom Tooth Silhouette */}
            <path d="M -11 15 C -11 26 -5 32 0 32 C 5 32 11 26 11 15 C 11 8 5 3 0 3 C -5 3 -11 8 -11 15 Z" />
            <path d="M -3 26 C -1 28 1 28 3 26" strokeWidth="2.5" />

            {/* Left Clover Ribbon */}
            <path d="M -15 -11 C -26 -11 -32 -5 -32 0 C -32 5 -26 11 -15 11 C -8 11 -3 5 -3 0 C -3 -5 -8 -11 -15 -11 Z" />

            {/* Right Clover Ribbon */}
            <path d="M 15 -11 C 26 -11 32 -5 32 0 C 32 5 26 11 15 11 C 8 11 3 5 3 0 C 3 -5 8 -11 15 -11 Z" />

            {/* Center Core */}
            <circle cx="0" cy="0" r="2.8" fill="#C4A47C" />
          </g>
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'symbol' && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif tracking-wide sm:tracking-wider font-medium text-sm sm:text-lg leading-tight ${
              isLight ? 'text-[#FAF8F5]' : 'text-[#1F1C19]'
            }`}
          >
            Dra. Alice Bastos
          </span>
          <span
            className={`text-[8px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.26em] uppercase font-medium ${
              isLight ? 'text-[#D8C7B0]' : 'text-[#8E7964]'
            }`}
          >
            Odontologia <span className="hidden sm:inline">&bull; Arujá</span>
          </span>
        </div>
      )}
    </div>
  );
};
