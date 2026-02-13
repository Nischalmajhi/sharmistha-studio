import React from 'react';
import { motion } from 'framer-motion';

interface MediaGridItem {
  id: string;
  image: string;
  avatar: string;
  name: string;
  location: string;
  testimonial: string;
}

interface MediaGridProps {
  items: MediaGridItem[];
}

const MediaGrid: React.FC<MediaGridProps> = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <motion.div
      className="media-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="media-grid__item"
          variants={itemVariants}
        >
          {/* Image Card */}
          <div className="mb-6 rounded-lg overflow-hidden aspect-square">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            {/* Avatar + Name */}
            <div className="flex items-start gap-3 md:gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-lg md:text-xl font-light tracking-wide">
                  {item.name}
                </h4>
                <p className="text-sm md:text-base text-secondary">
                  {item.location}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-sm md:text-base leading-relaxed text-secondary line-clamp-3 md:line-clamp-4">
              {item.testimonial}
            </p>

            {/* Read More Link */}
            <button className="mt-4 text-sm font-light text-primary hover:text-accent underline transition-colors">
              Read more →
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MediaGrid;
