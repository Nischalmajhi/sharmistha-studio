import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeadingDecorated from '../shared/HeadingDecorated';

interface ConsultationProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const Consultation: React.FC<ConsultationProps> = ({
  title = 'SCHEDULE A CONSULTATION',
  description = 'Let our design experts help you create your perfect look.',
  buttonText = 'Book Now',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-background to-primary/5 flex items-center justify-center py-20 md:py-24">
      <motion.div
        className="w-full px-4 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <HeadingDecorated
          title={title}
          alignment="center"
          size="large"
          showDecoration={true}
        />

        {/* Description */}
        <motion.p
          className="text-center text-secondary font-light mt-6 md:mt-8 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 md:mt-16 space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 md:py-4 bg-white border-2 border-primary/20 focus:border-primary text-secondary placeholder-secondary/50 font-light focus:outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 md:py-4 bg-white border-2 border-primary/20 focus:border-primary text-secondary placeholder-secondary/50 font-light focus:outline-none transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-3 md:py-4 bg-white border-2 border-primary/20 focus:border-primary text-secondary placeholder-secondary/50 font-light focus:outline-none transition-colors"
            />
          </div>

          {/* Date */}
          <div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 md:py-4 bg-white border-2 border-primary/20 focus:border-primary text-secondary placeholder-secondary/50 font-light focus:outline-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 px-8 py-4 md:py-5 bg-primary text-white font-light tracking-wider hover:bg-accent transition-colors duration-300 uppercase"
          >
            {submitted ? '✓ Booking Received' : buttonText}
          </motion.button>
        </motion.form>

        {/* Terms */}
        <motion.p
          className="text-center text-secondary/60 text-xs md:text-sm mt-6 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We'll get back to you within 24 hours
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Consultation;
