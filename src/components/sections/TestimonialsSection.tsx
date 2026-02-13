import React from 'react';
import { motion } from 'framer-motion';
import HeadingDecorated from '../shared/HeadingDecorated';
import MediaGrid from '../shared/MediaGrid';

interface TestimonialItem {
  id: string;
  image: string;
  avatar: string;
  name: string;
  location: string;
  testimonial: string;
}

interface TestimonialsSectionProps {
  title?: string;
  items?: TestimonialItem[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = 'OUR CLIENTELE',
  items = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      name: 'PRIYA',
      location: 'Mumbai, India',
      testimonial: 'Sharmistha\'s bridal collection is absolutely stunning. Every piece is crafted with such elegance and attention to detail.',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1587903283671-922fc38f1d7b?w=500&h=500&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      name: 'ANJALI',
      location: 'Delhi, India',
      testimonial: 'The customization options are incredible. I felt like a princess on my wedding day in the custom lehenga.',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1572804419408-d3bda0a4ac2c?w=500&h=500&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      name: 'DIVYA',
      location: 'Bangalore, India',
      testimonial: 'The quality of fabric and embroidery in every saree is unmatched. Sharmistha is my go-to designer.',
    },
  ],
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

  return (
    <section className="min-h-screen w-full bg-background flex items-center justify-center py-20 md:py-24">
      <motion.div
        className="w-full px-4 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <HeadingDecorated
            title={title}
            alignment="center"
            size="large"
            showDecoration={true}
          />
        </motion.div>

        {/* Media Grid */}
        <MediaGrid items={items} />
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
