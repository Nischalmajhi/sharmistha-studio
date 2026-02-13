import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Aanya Gupta",
        role: "Happy Bride",
        quote: "The lehenga was a dream. Every stitch spoke of perfection and heritage. I felt like royalty on my big day.",
    },
    {
        id: 2,
        name: "Riya Sharma",
        role: "Regular Client",
        quote: "Sharmishtha's attention to detail is unmatched. The sarees are timeless and the fabric quality is exceptional.",
    },
    {
        id: 3,
        name: "Meera Patel",
        role: "Wedding Guest",
        quote: "I received so many compliments on my gown. Minimal yet striking - exactly what I was looking for.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-surface/30">
            <div className="container mx-auto px-4 max-w-[1160px] text-center">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-secondary/40 block mb-8">Client Love</span>

                <div className="flex justify-center mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="text-primary fill-primary mx-0.5" />
                    ))}
                </div>

                <div className="max-w-3xl mx-auto relative overflow-hidden">
                    {/* Simple Carousel Logic - displaying first for minimal MVP or mapping all in a grid/slider */}
                    {/* For Strict Replication of "Minimal Testimonials", often it's just one static highlight or a simple fade. 
                     I'll implement a clean grid for now as it's safer than a complex slider without Swiper/Slick */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="flex flex-col items-center"
                            >
                                <p className="font-serif text-xl italic text-secondary leading-relaxed mb-6 opacity-80">"{t.quote}"</p>
                                <h4 className="text-[11px] uppercase tracking-widest font-bold text-primary">{t.name}</h4>
                                <span className="text-[10px] uppercase tracking-widest text-secondary/40 mt-1">{t.role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
