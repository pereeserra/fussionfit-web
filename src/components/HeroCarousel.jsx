import { useEffect, useState } from 'react'

// Reactivar quan tinguem fotos reals del gimnàs
// Exemple correcte amb Vite:
// import hero1 from '../assets/images/hero1.jpg'
// import hero2 from '../assets/images/hero2.jpg'
// import hero3 from '../assets/images/hero3.jpg'
// const images = [hero1, hero2, hero3]

const images = []

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    if (images.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    if (images.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index) => {
    if (images.length === 0) return
    setCurrentIndex(index)
  }

  // Carrusel desactivat temporalment.
  // Reactivar quan tinguem fotos reals del gimnàs.
  return null
}

export default HeroCarousel