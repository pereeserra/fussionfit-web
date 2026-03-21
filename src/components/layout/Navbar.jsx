import logo from '../../assets/logo.jpg';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAVBAR_HEIGHT = 80;

  return (
    <header
      className={`fixed top-0 w-full h-20 z-50 transition-all duration-300 ease-out ${scrolled ? 'bg-black/70 backdrop-blur-md border-b border-yellow-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : 'bg-black/20 backdrop-blur-[2px] border-b border-white/5'}`}
      style={{height: NAVBAR_HEIGHT, minHeight: NAVBAR_HEIGHT}}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-8 px-6 h-full">
        <a href="#" className="flex items-center h-full p-0 m-0">
          <img 
            src={logo} 
            alt="Fussion Fit"
            className="h-10 w-auto object-contain transition-all duration-300 ease-out cursor-pointer p-0 m-0 drop-shadow-[0_0_15px_rgba(255,200,0,0.2)] hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,200,0,0.5)]"
            style={{boxShadow: '0 0 15px rgba(255,200,0,0.2)'}}
          />
        </a>
        <nav className="flex items-center gap-8 text-xs font-bold uppercase tracking-wide text-white md:text-sm">
          <a href="#services" className="relative hover:text-fussion-500 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-fussion-500 after:transition-all after:duration-300 hover:after:w-full">Serveis</a>
          <a href="#schedules" className="relative hover:text-fussion-500 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-fussion-500 after:transition-all after:duration-300 hover:after:w-full">Horaris</a>
          <a href="#options" className="relative hover:text-fussion-500 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-fussion-500 after:transition-all after:duration-300 hover:after:w-full">Opcions</a>
          <a href="#contact" className="relative hover:text-fussion-500 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-fussion-500 after:transition-all after:duration-300 hover:after:w-full">Contacte</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
