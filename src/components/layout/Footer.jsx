const Footer = () => (
  <footer className="bg-black px-4 py-6 text-center text-xs text-gray-400 select-none">
    <div className="flex flex-col items-center gap-1">
      <span>
        <span className="font-semibold text-yellow-400">Fussion Fit</span> · Sa Pobla, Mallorca
      </span>
      <span>Obert cada dia · 6:00–23:00</span>
      <div className="flex items-center gap-2 mt-1">
        <span className="hidden md:inline">Contacta:</span>
        <a
          href="https://wa.me/34604417552"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Fussion Fit"
          className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.7.97.99-3.6-.24-.38A9.94 9.94 0 1 1 12 22zm5.13-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.27 1.23.43 1.65.55.69.18 1.32.16 1.82.1.56-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
          </svg>
        </a>
        <a
          href="tel:+34604417552"
          className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
          aria-label="Truca a Fussion Fit"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
          </svg>
        </a>
      </div>
      <span className="mt-2 text-[11px] text-gray-500">
        © {new Date().getFullYear()} Fussion Fit · Tanca la teva visita i entrena amb nosaltres.
      </span>
    </div>
  </footer>
);

export default Footer;