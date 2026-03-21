import { useState, useEffect } from 'react';
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';

const images = [hero1, hero2, hero3];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel w-full h-96 flex items-center justify-center bg-black">
      <img
        src={images[currentIndex]}
        alt={`Hero ${currentIndex + 1}`}
        className="object-cover w-full h-full rounded-2xl shadow-lg transition-all duration-700"
      />
      {/* Afegir botons o indicadors si vols */}
    </div>
  );
};

export default HeroCarousel;
