import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax effect
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-secondary">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop"
                    alt="Luxury Indian Bridal"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay for text readability */}
            </motion.div>

            {/* Content - Centered */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} // Soft easing
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight tracking-wide">
                        SHARMISHTHA <br />
                        <span className="text-2xl md:text-4xl italic text-primary font-normal mt-2 block">Designer Studio</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-6 mt-8"
                >
                    {/* Gradwear style buttons: Minimal, uppercase, tracking-widest */}
                    <button className="px-10 py-4 bg-white text-secondary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-[1.2rem] font-bold min-w-[200px]">
                        Shop Collection
                    </button>
                    <button className="px-10 py-4 border border-white text-white hover:bg-white hover:text-secondary transition-all duration-300 uppercase tracking-widest text-[1.2rem] font-bold min-w-[200px]">
                        Book Appointment
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator - Line animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
                    <div className="absolute top-0 w-full h-1/2 bg-white animate-fade-up" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
