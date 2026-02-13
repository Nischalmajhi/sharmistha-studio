import React from 'react';
import { motion } from 'framer-motion';
import HeadingDecorated from '../shared/HeadingDecorated';
import ImageMedia from '../shared/ImageMedia';

interface EditorialSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  layout?: 'left' | 'right';
  skewType?: 'top-right' | 'bottom-right';
}

const EditorialSection: React.FC<EditorialSectionProps> = ({
  title,
  description,
  image,
  imageAlt,
  layout = 'left',
  skewType = 'top-right',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: layout === 'left' ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const gridClass = layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className="min-h-screen w-full bg-background flex items-center justify-center py-20 md:py-24">
      <motion.div
        className={`w-full px-4 max-w-7xl flex flex-col ${gridClass} gap-8 md:gap-16 items-center`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex-shrink-0"
          variants={imageVariants}
        >
          <ImageMedia
            src={image}
            alt={imageAlt}
            aspectRatio="605by720"
            skewType={skewType}
            parallaxEnabled={true}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          variants={itemVariants}
        >
          <HeadingDecorated
            title={title}
            alignment="left"
            size="medium"
            showDecoration={true}
          />

          <motion.p
            className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-secondary font-light"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* Optional CTA Button */}
          <motion.div
            className="mt-8 md:mt-12"
            variants={itemVariants}
          >
            <a
              href="#collections"
              className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-light tracking-wider uppercase"
            >
              Learn more →
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EditorialSection;
