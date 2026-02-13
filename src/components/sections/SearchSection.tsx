import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeadingDecorated from '../shared/HeadingDecorated';

interface SearchSectionProps {
  title?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  title = 'EXPLORE DESIGNS',
  placeholder = 'Search our collection...',
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

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

  return (
    <section className="min-h-screen w-full bg-background flex items-center justify-center py-20 md:py-24">
      <motion.div
        className="w-full px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.div variants={itemVariants}>
          <HeadingDecorated
            title={title}
            alignment="center"
            size="large"
            showDecoration={true}
          />
        </motion.div>

        {/* Search Form */}
        <motion.form
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto mt-12 md:mt-16"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-6 md:px-8 py-4 md:py-5 bg-white border-2 border-primary text-secondary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-8 md:px-12 py-4 md:py-5 bg-primary text-white font-light tracking-wider hover:bg-accent transition-colors duration-300"
            >
              <span className="hidden md:inline">Search</span>
              <span className="md:hidden">→</span>
            </button>
          </div>
        </motion.form>

        {/* Fallback Link */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          variants={itemVariants}
        >
          <p className="text-secondary text-sm md:text-base mb-3">
            Can't find what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-block text-primary font-light tracking-wider hover:text-accent transition-colors underline decoration-2 underline-offset-4"
          >
            Contact us for custom designs
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SearchSection;
