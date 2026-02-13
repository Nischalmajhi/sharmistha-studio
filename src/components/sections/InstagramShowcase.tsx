import React from 'react';
import { motion } from 'framer-motion';
import HeadingDecorated from '../shared/HeadingDecorated';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  id: string;
  image: string;
  caption?: string;
  link: string;
  timestamp?: string;
}

interface InstagramShowcaseProps {
  title?: string;
  subtitle?: string;
  igProfileUrl?: string;
  posts?: InstagramPost[];
}

const InstagramShowcase: React.FC<InstagramShowcaseProps> = ({
  title = 'FOLLOW OUR JOURNEY',
  subtitle = '@sharmishthadesignerstudio',
  igProfileUrl = 'https://www.instagram.com/sharmishthadesignerstudio',
  posts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      caption: 'Bridal elegance in every stitch',
      link: 'https://instagram.com/p/sample1',
      timestamp: '2 days ago',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1587903283671-922fc38f1d7b?w=400&h=400&fit=crop',
      caption: 'Custom lehenga for your special moment',
      link: 'https://instagram.com/p/sample2',
      timestamp: '4 days ago',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1572804419408-d3bda0a4ac2c?w=400&h=400&fit=crop',
      caption: 'Saree draping tutorial - Master the art',
      link: 'https://instagram.com/p/sample3',
      timestamp: '1 week ago',
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
      caption: 'New arrivals in our winter collection',
      link: 'https://instagram.com/p/sample4',
      timestamp: '1 week ago',
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1617783386910-b0f7a6b3be5a?w=400&h=400&fit=crop',
      caption: 'Customer love story - Beautiful wedding moments',
      link: 'https://instagram.com/p/sample5',
      timestamp: '2 weeks ago',
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1515231557744-8aac61f82e01?w=400&h=400&fit=crop',
      caption: 'Embroidery details that steal hearts',
      link: 'https://instagram.com/p/sample6',
      timestamp: '2 weeks ago',
    },
  ],
}) => {

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

  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-background via-background to-surface py-20 md:py-24">
      <motion.div
        className="w-full px-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HeadingDecorated
            title={title}
            alignment="center"
            size="large"
            showDecoration={true}
          />

          <motion.p
            className="mt-6 md:mt-8 text-secondary/80 font-light text-base md:text-lg flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Instagram size={20} className="text-primary" />
            <span>{subtitle}</span>
          </motion.p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              variants={postVariants}
              whileHover="hover"
              onClick={() => window.open(post.link, '_blank')}
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Instagram Icon Overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                variants={overlayVariants}
              >
                <Instagram size={48} className="text-white mb-4" />
                <p className="text-white text-center px-4 font-light tracking-wide text-sm md:text-base">
                  View on Instagram
                </p>
              </motion.div>

              {/* Caption Bottom */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
              >
                <p className="text-white font-light text-sm md:text-base leading-relaxed">
                  {post.caption}
                </p>
                {post.timestamp && (
                  <p className="text-white/60 text-xs mt-2">{post.timestamp}</p>
                )}
              </motion.div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={16} className="text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Follow Button */}
          <a
            href={igProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-primary to-accent text-white font-light tracking-wider hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            <Instagram size={20} />
            <span className="uppercase">Follow on Instagram</span>
          </a>

          {/* Divider */}
          <div className="hidden md:block h-12 w-px bg-primary/20" />

          {/* Text */}
          <p className="text-center md:text-left text-secondary font-light text-sm md:text-base max-w-xs">
            Stay updated with our latest designs, behind-the-scenes content, and special announcements
          </p>
        </motion.div>

        {/* Instagram Embed Section (Optional) */}
        <motion.div
          className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light tracking-wide text-secondary mb-3">
              Latest From Our Feed
            </h3>
            <p className="text-secondary/70 font-light">
              Real-time updates from @sharmishthadesignerstudio
            </p>
          </div>

          {/* Embed Instruction */}
          <div className="bg-surface rounded-lg p-8 text-center max-w-2xl mx-auto">
            <p className="text-secondary/80 font-light mb-4">
              To embed live Instagram feed, add your Access Token below or use a third-party service like Elfsight, Feedify, or Instagram's official embed.
            </p>
            <a
              href={igProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary font-light hover:text-accent transition-colors underline"
            >
              Visit our Instagram profile →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstagramShowcase;
