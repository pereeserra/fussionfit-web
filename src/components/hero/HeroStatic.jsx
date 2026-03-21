
import React from 'react';

const HeroStatic = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] h-[88vh] max-h-[1100px] overflow-hidden flex items-center justify-center bg-black py-6 md:py-16 lg:py-20">
      {/* Premium static background with gradients + glow overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/15 via-transparent to-black/80" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 pointer-events-none" />
        {/* Glow effect behind content */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[120px] rounded-full" />
      </div>
      {/* Premium Overlay: gradient + vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-yellow-400/10" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white max-w-4xl mx-auto">
        {/* Badge millorada */}
        <span className="animate-[fadeIn_0.8s_ease-out] mb-4 inline-block rounded-full border border-fussion-500/40 bg-black/40 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-fussion-500 shadow-[0_0_24px_2px_rgba(255,199,0,0.13)] backdrop-blur-[8px] md:text-sm">
          Sa Pobla · Obert 6–23h
        </span>
        {/* Title */}
        <h1 className="animate-[fadeIn_1s_ease-out] mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_32px_rgba(0,0,0,0.85)] md:text-6xl lg:text-7xl lg:mb-7">
          El teu gimnàs de confiança a <span className="text-fussion-500">Sa Pobla</span>
        </h1>
        {/* Subtitle */}
        <p className="animate-[fadeIn_1.2s_ease-out] mb-7 max-w-2xl text-lg font-medium text-gray-200 md:text-2xl lg:mb-8 lg:text-2xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
          Entrena amb equipament modern, ambient proper i assessorament personalitzat.<br className="hidden md:inline" /> <span className="text-white/90 font-semibold">Comença avui.</span>
        </p>
        {/* CTAs */}
        <div className="mb-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:gap-6">
          <a href="#contact" className="btn-primary px-8 py-3 text-base font-bold shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,199,0,0.8)]">
            Demana informació
          </a>
          <a href="tel:+34604417552" className="btn-secondary px-8 py-3 text-base font-bold transition-all duration-300 hover:scale-105">
            Trucar ara
          </a>
          <a href="https://wa.me/34604417552" target="_blank" rel="noreferrer" className="btn-primary px-8 py-3 text-base font-bold shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,199,0,0.8)]">
            WhatsApp
          </a>
        </div>
        {/* Value Points */}
        <div className="mx-auto mt-2 grid w-full max-w-2xl grid-cols-1 gap-5 md:max-w-4xl md:grid-cols-3 lg:gap-8">
          <div className="animate-[fadeIn_1.4s_ease-out] rounded-2xl border border-fussion-500/40 bg-black/70 px-6 py-6 shadow-2xl backdrop-blur-lg flex flex-col items-center">
            <p className="text-fussion-500 mb-1 text-base font-extrabold uppercase tracking-wide">Obert cada dia</p>
            <p className="text-sm text-gray-200 md:text-base">De 6:00 a 23:00, 365 dies l’any</p>
          </div>
          <div className="animate-[fadeIn_1.6s_ease-out] rounded-2xl border border-fussion-500/40 bg-black/70 px-6 py-6 shadow-2xl backdrop-blur-lg flex flex-col items-center">
            <p className="text-fussion-500 mb-1 text-base font-extrabold uppercase tracking-wide">Opcions adaptades</p>
            <p className="text-sm text-gray-200 md:text-base">Plans personalitzats segons els teus objectius</p>
          </div>
          <div className="animate-[fadeIn_1.8s_ease-out] rounded-2xl border border-fussion-500/40 bg-black/70 px-6 py-6 shadow-2xl backdrop-blur-lg flex flex-col items-center">
            <p className="text-fussion-500 mb-1 text-base font-extrabold uppercase tracking-wide">Ambient proper</p>
            <p className="text-sm text-gray-200 md:text-base">Un equip que t’acompanya des del primer dia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStatic;
