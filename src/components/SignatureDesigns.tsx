import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const designs = [
    {
        id: 1,
        title: 'The Royal Velvet',
        price: '₹ 85,000',
        image: 'https://images.unsplash.com/photo-1549488497-650820063259?q=80&w=2670&auto=format&fit=crop',
        tag: 'New'
    },
    {
        id: 2,
        title: 'Ivory Silk',
        price: '₹ 45,000',
        image: 'https://images.unsplash.com/photo-1627964408693-0cd18696d7af?q=80&w=2574&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Golden Hour',
        price: '₹ 65,000',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop',
        tag: 'Best Seller'
    },
    {
        id: 4,
        title: 'Midnight Blue',
        price: '₹ 55,000',
        image: 'https://images.unsplash.com/photo-1627964408693-0cd18696d7af?q=80&w=2574&auto=format&fit=crop',
    },
];

const SignatureDesigns = () => {
    return (
        <section className="py-24 bg-background border-t border-secondary/5">
            <div className="container mx-auto px-4 max-w-[1620px]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:px-0">
                    <div className="mb-6 md:mb-0">
                        <span className="text-secondary/50 text-[11px] uppercase tracking-[0.2em] font-bold block mb-3">Latest Collection</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-secondary">Signature Designs</h2>
                    </div>
                    <a href="#all-designs" className="group hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-secondary hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary">
                        View All Designs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {designs.map((design, index) => (
                        <motion.div
                            key={design.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-surface">
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                />
                                {design.tag && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-[2px] px-3 py-1 text-[10px] uppercase tracking-widest text-secondary font-bold shadow-sm">
                                            {design.tag}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg font-serif mb-2 text-secondary group-hover:text-primary transition-colors duration-300">{design.title}</h3>
                                <p className="text-[13px] text-secondary/60 font-medium tracking-wide">{design.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#all-designs" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-secondary pb-1">
                        View All <ArrowRight size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SignatureDesigns;
