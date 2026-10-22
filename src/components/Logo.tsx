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
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Luxury Minimalist Facial Contour Monogram */}
      <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="luizaGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C4A47C" />
              <stop offset="50%" stopColor="#DFC49E" />
              <stop offset="100%" stopColor="#9C7748" />
            </linearGradient>
          </defs>

          {/* Exterior delicate circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill={isLight ? 'rgba(255,255,255,0.05)' : 'rgba(196,164,124,0.06)'}
            stroke="url(#luizaGold)"
            strokeWidth="1.2"
            strokeDasharray="2 3"
          />

          {/* Fluid organic facial harmony curve & 'L' monogram */}
          <path
            d="M 32 26 C 45 22, 68 28, 70 48 C 72 65, 54 74, 38 74 L 68 74"
            stroke="url(#luizaGold)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central beauty spark */}
          <circle cx="50" cy="48" r="2.5" fill="#C4A47C" />
        </svg>
      </div>

      {/* Typography: Editorial Signature */}
      {variant !== 'symbol' && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif tracking-tight sm:tracking-wide font-normal text-base sm:text-lg leading-tight ${
              isLight ? 'text-[#FAF8F5]' : 'text-[#1E1B18]'
            }`}
          >
            Dra. Luiza S. Lima
          </span>
          <span
            className={`text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium mt-0.5 ${
              isLight ? 'text-[#D8C7B0]' : 'text-[#8E7964]'
            }`}
          >
            Estética Facial
          </span>
        </div>
      )}
    </div>
  );
};
