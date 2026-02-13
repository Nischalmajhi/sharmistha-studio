import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="py-20 md:py-32 bg-surface overflow-hidden" id="about">
            <div className="container mx-auto px-4 md:px-0 max-w-[1160px]"> {/* Standard container */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Image Side - Left */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative h-[600px] w-full overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1583391733975-203ea02a156e?q=80&w=2574&auto=format&fit=crop"
                                alt="Artisan working on embroidery"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                            />
                        </motion.div>
                    </div>

                    {/* Text Side - Right */}
                    <motion.div
                        className="w-full md:w-1/2 md:pl-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-sm uppercase tracking-widest text-primary block mb-4 font-bold">The Heritage</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-secondary">
                            Weaving stories of <br /><span className="italic">grace & tradition.</span>
                        </h2>

                        <div className="prose prose-lg text-secondary/70 mb-8">
                            <p className="mb-6 leading-relaxed">
                                At Sharmishtha Designer Studio, we rethink luxury through the lens of Indian craftsmanship.
                                Each silhouette is a dialogue between the past and the present, designed for the modern woman who cherishes her roots.
                            </p>
                            <p className="leading-relaxed">
                                From intricate Zardosi work to hand-woven Banarasi silks, our collections are more than just garments—they are heirlooms in the making.
                            </p>
                        </div>

                        <button className="text-secondary text-sm uppercase tracking-widest pb-1 border-b-2 border-secondary hover:text-primary hover:border-primary transition-colors duration-300 font-bold">
                            Our Philosophy
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
