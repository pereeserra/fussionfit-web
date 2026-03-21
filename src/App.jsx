
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroStatic from './components/hero/HeroStatic';
import Services from './components/sections/Services';
import Schedule from './components/sections/Schedule';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <HeroStatic />
        <Services />
        <Schedule />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a href="tel:+34604417552" className="btn-primary px-4 py-2 text-xs">Trucar</a>
        <a href="https://wa.me/34604417552" target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs">WhatsApp</a>
      </div>
    </div>
  );
}

export default App;
