import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HeroProps {
  mainText?: string;
  subText?: string;
  ctaText?: string;
  ctaLink?: string;
  images?: { id: string; src: string }[];
}

const Hero: React.FC<HeroProps> = ({
  mainText = 'SHARMISTHA',
  subText = 'DESIGNER STUDIO',
  ctaText = 'Explore Collections',
  ctaLink = '#collections',
  images = [
    { id: '1', src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=625&fit=crop' },
    { id: '2', src: 'https://images.unsplash.com/photo-1587903283671-922fc38f1d7b?w=500&h=625&fit=crop' },
    { id: '3', src: 'https://images.unsplash.com/photo-1572804419408-d3bda0a4ac2c?w=500&h=625&fit=crop' },
  ],
}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,
    customPaging: () => (
      <div className="w-2 h-2 bg-primary rounded-full mx-1 cursor-pointer hover:bg-accent transition-colors" />
    ),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />

      {/* Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <Slider {...sliderSettings}>
          {images.map((image) => (
            <div key={image.id} className="w-full h-screen">
              <img
                src={image.src}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        {/* Main Heading */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-white drop-shadow-lg">
            {mainText}
          </h1>
        </motion.div>

        {/* Sub Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white/90 drop-shadow-lg">
            {subText}
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <a
            href={ctaLink}
            className="inline-block px-8 md:px-12 py-3 md:py-4 border-2 border-white text-white font-light tracking-wider hover:bg-white hover:text-primary transition-all duration-500 uppercase"
          >
            {ctaText}
            <span className="ml-2">→</span>
          </a>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
