import { motion } from 'framer-motion';

const collections = [
    {
        id: 1,
        title: 'Bridal Couture',
        image: 'https://images.unsplash.com/photo-1627964408693-0cd18696d7af?q=80&w=2574&auto=format&fit=crop',
        link: '#bridal',
        size: 'large' // Spans 2 cols on desktop if needed, for now standard grid
    },
    {
        id: 2,
        title: 'Luxury Sarees',
        image: 'https://images.unsplash.com/photo-1610189022648-52264629ccf3?q=80&w=2670&auto=format&fit=crop',
        link: '#sarees',
        size: 'small'
    },
    {
        id: 3,
        title: 'Festive Wear',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2583&auto=format&fit=crop',
        link: '#festive',
        size: 'small'
    },
    {
        id: 4,
        title: 'Accessories',
        image: 'https://images.unsplash.com/photo-1605218457221-8208a5436a5b?q=80&w=2670&auto=format&fit=crop',
        link: '#accessories',
        size: 'large'
    },
];

const FeaturedCollections = () => {
    return (
        <section className="py-16 md:py-24 bg-background" id="collections">
            <div className="container px-4 md:px-0 mx-auto max-w-[1620px]"> {/* Wide container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {/* Custom Grid Logic for "Editorial" Feel */}
                    {collections.map((collection, index) => (
                        <motion.a
                            href={collection.link}
                            key={collection.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative overflow-hidden block ${collection.size === 'large' ? 'h-[60vh] md:h-[80vh]' : 'h-[50vh] md:h-[60vh]'}`}
                        >
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transform transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Overlay Text - Bottom aligned, minimal */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute bottom-10 left-10 md:bottom-12 md:left-12 z-20">
                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-3 tracking-wide">{collection.title}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-xs uppercase tracking-widest font-bold border-b border-white pb-1 group-hover:text-primary group-hover:border-primary transition-colors">
                                        Discover
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;
