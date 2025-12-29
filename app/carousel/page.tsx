'use client'
import React from 'react'
import Image from "next/image";
import { useState, useEffect } from "react";
import '../style/carousel.css';

function CarouselPage() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Image data for the carousel
    const images = [{ src: '/images/pexels-jasper-hunter-692558448-17994861.jpg', alt: 'Beautiful coral reef', title: 'Beautiful Coral Reef' }, { src: '/images/pexels-valeriya-34759410.jpg', alt: 'Marine Life', title: 'Marine Life' }];

    // Previous slide function
    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev - 1);
    }

    // Next slide function
    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev + 1);
    }

    //Reset Position
    useEffect(() => {
        if (currentSlide === images.length) {
            setTimeout(() => {
                setIsTransitioning(false); //Close Transition
                setCurrentSlide(0); //Reset to first slide(without transition)
            }, 600);
        }

        if (currentSlide === -1) {
            setTimeout(() => {
                setIsTransitioning(false); //Close Transition
                setCurrentSlide(images.length - 1); //Reset to last slide(without transition)
            }, 600);
        }
    })

    //Auto Slide Play Function
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div>{/* Carousel Section  */}
            <section className="carousel-section">
                <h2 className="carousel-heading">Images Carousel</h2>

                <div className="carousel-container">
                    <button className="carousel-btn prev" onClick={prevSlide}>❮</button>

                    <div className="carousel-track">
                        <div className='carousel-slide-wrapper' style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none' }}>
                            {images.map((image, index) => (
                                <div key={index} className="carousel-slide-item">
                                    <Image src={image.src} alt={image.alt} width={500} height={350} className='carousel-image' />
                                    <div className="carousel-caption">
                                        <h3>{image.title}</h3>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate first slide for infinite loop effect */}
                            <div className="carousel-slide-item">
                                <Image src={images[0].src} alt={images[0].alt} width={500} height={350} className='carousel-image' />
                                <div className="carousel-caption">
                                    <h3>{images[0].title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-btn next" onClick={nextSlide}>❯</button>
                </div>
                {/* Dots Indicators */}
                <div className="carousel-dots">
                    {images.map((_, index) => (<button key={index} className={`dot ${currentSlide % images.length === index ? 'active' : ''}`}
                        onClick={() => { setIsTransitioning(true); setCurrentSlide(index); }}
                    />))}
                </div>
            </section></div>
    )
}

export default CarouselPage