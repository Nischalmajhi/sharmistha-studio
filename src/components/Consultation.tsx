import { motion } from 'framer-motion';

const Consultation = () => {
    return (
        <section className="relative py-24 md:py-32 bg-secondary text-white overflow-hidden">
            {/* Background Element */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1610189022648-52264629ccf3?q=80&w=2670&auto=format&fit=crop"
                    alt="Background Pattern"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="container mx-auto px-4 max-w-[800px] relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 block mb-4">Book an Appointment</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">Begin your bespoke journey.</h2>
                    <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
                        Experience the art of personalization with our expert stylists.
                        Schedule a virtual or in-studio consultation to explore the collection.
                    </p>

                    <form className="max-w-md mx-auto space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none text-white placeholder:text-white/30 focus:border-primary transition-colors text-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none text-white placeholder:text-white/30 focus:border-primary transition-colors text-sm"
                            />
                        </div>
                        <div>
                            <select className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none text-white/50 focus:border-primary transition-colors text-sm appearance-none cursor-pointer">
                                <option className="bg-secondary text-white">Select Appointment Type</option>
                                <option className="bg-secondary text-white">Bridal Consultation</option>
                                <option className="bg-secondary text-white">Custom Couture</option>
                                <option className="bg-secondary text-white">Virtual Shopping</option>
                            </select>
                        </div>

                        <button className="w-full bg-white text-secondary uppercase tracking-[0.15em] text-xs font-bold py-4 hover:bg-primary hover:text-white transition-colors duration-300 mt-4">
                            Request Consultation
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Consultation;
