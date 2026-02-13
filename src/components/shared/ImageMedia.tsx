import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ImageMediaProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | '605by720' | '1by1';
  skewType?: 'top-right' | 'bottom-right' | 'none';
  parallaxEnabled?: boolean;
  className?: string;
}

const ImageMedia: React.FC<ImageMediaProps> = ({
  src,
  alt,
  aspectRatio = 'square',
  skewType = 'none',
  parallaxEnabled = true,
  className = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const aspectClasses = {
    square: 'aspect-square',
    '605by720': 'aspect-[605/720]',
    '1by1': 'aspect-square',
  };

  const skewClasses = {
    'top-right': '[transform:perspective(600px)_rotateX(5deg)_rotateY(-5deg)]',
    'bottom-right': '[transform:perspective(600px)_rotateX(-5deg)_rotateY(-5deg)]',
    none: '',
  };

  return (
    <motion.div
      ref={ref}
      className={`image-media-container overflow-hidden rounded-lg ${aspectClasses[aspectRatio]} ${className}`}
      style={parallaxEnabled ? { scale, y } : {}}
    >
      <div className={`w-full h-full ${skewClasses[skewType]}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default ImageMedia;
