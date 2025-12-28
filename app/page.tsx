'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import './style/home.css';
import { clear } from "console";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const [fade, setFade] = useState(true);

  // Image data for the carousel
  const images = [{ src: '/images/pexels-jasper-hunter-692558448-17994861.jpg', alt: 'Beautiful coral reef', title: 'Beautiful Coral Reef' }, { src: '/images/pexels-valeriya-34759410.jpg', alt: 'Marine Life', title: 'Marine Life' }];

  // Previous slide function
  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  }

  // Next slide function
  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 300);
  }

  //Auto Slide Play Function
  useEffect(() => {
    if(!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="home-container">
      <h1>Hello, World</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quas harum cupiditate officiis consectetur iusto repellendus odio obcaecati doloremque maiores, pariatur qui delectus in molestias,
        quisquam nihil soluta ut similique corporis quo, vitae sapiente facere laborum. Repudiandae soluta, repellat temporibus quae enim esse officia adipisci tempora accusantium pariatur dolorum a culpa nesciunt
        reiciendis labore est laboriosam debitis consequuntur blanditiis ipsa veniam. Dicta minus, culpa expedita hic quibusdam voluptas nulla commodi doloribus dolores placeat, provident quae? Odio tempora iste placeat
        veniam illum nemo possimus doloremque a voluptatibus suscipit ipsum hic quasi consequatur sapiente deleniti reiciendis qui, non nostrum quae modi autem.</p>

      <div className="coral-gallery">
        <div className="coral-card">
          <div className="image-wrapper">
            <Image src='/images/pexels-jasper-hunter-692558448-17994861.jpg' alt='Beautiful coral reef' width={500} height={350} />
            <div className="overlay"><p>Explore the reef</p></div>
          </div>
          <h3 className="coral-title">Beautiful Coral Reef</h3>
        </div>

        <div className="coral-card">
          <div className="image-wrapper">
            <Image src='/images/pexels-valeriya-34759410.jpg' alt='Beautiful coral reef' width={500} height={350} />
            <div className="overlay"><p>Explore the reef</p></div>
          </div>
          <h3 className="coral-title">Marine Life</h3>
        </div>
      </div>

      {/* Carousel Section  */}
      <section className="carousel-section">
        <h2 className="carousel-heading">Images Carousel</h2>

        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
          <div className={`carousel-slide ${fade ? 'fade-in' : 'fade-out'}`}>
            <Image src={images[currentSlide].src} alt={images[currentSlide].alt} width={500} height={350} className='carousel-image' />
            <div className="carousel-caption">
              <h3>{images[currentSlide].title}</h3>
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>❯</button>
        </div>
        {/* Dots Indicators */}
        <div className="carousel-dots">
          {images.map((_, index) => (<button key={index} className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />))}
        </div>
      </section>
    </div>
  );
}
