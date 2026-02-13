import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import SearchSection from './components/sections/SearchSection';
import EditorialSection from './components/sections/EditorialSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import InstagramShowcase from './components/sections/InstagramShowcase';
import Consultation from './components/sections/Consultation';
import Footer from './components/Footer';

function App() {
    return (
        <ReactLenis root>
            <div className="font-sans text-secondary bg-background selection:bg-primary selection:text-white">
                <Navbar />
                <main>
                    {/* Hero Section */}
                    <Hero
                        mainText="SHARMISTHA"
                        subText="DESIGNER STUDIO"
                        ctaText="Explore Collections"
                        images={[
                            { id: '1', src: '/images/1.png' },
                            { id: '2', src: '/images/2.png' },
                            { id: '3', src: '/images/3.png' },
                        ]}
                    />

                    {/* Search/Explore Section */}
                    <SearchSection
                        title="EXPLORE DESIGNS"
                        placeholder="Search our collection..."
                    />

                    {/* Editorial Section 1 - Image Left */}
                    <EditorialSection
                        title="HERITAGE MEETS HAUTE COUTURE"
                        description="Each piece in our collection celebrates the timeless elegance of Indian heritage craftsmanship. From intricately embroidered sarees to exquisite bridal lehengas, we blend traditional artistry with contemporary elegance. Our designs are created for the modern Indian woman who honors her roots while embracing her individuality."
                        image="/images/download (2).jpg"
                        imageAlt="Heritage Collection"
                        layout="left"
                        skewType="top-right"
                    />

                    {/* Editorial Section 2 - Image Right */}
                    <EditorialSection
                        title="CURATED LUXURY FASHION"
                        description="Our signature collections showcase extraordinary craftsmanship and attention to detail. Every saree, every stitch, every embellishment is meticulously selected to ensure you feel absolutely radiant. We specialize in custom designs that reflect your personal style and celebrate your most important moments."
                        image="/images/download (3).jpg"
                        imageAlt="Luxury Collection"
                        layout="right"
                        skewType="bottom-right"
                    />

                    {/* Testimonials Section */}
                    <TestimonialsSection
                        title="OUR CLIENTELE"
                        items={[
                            {
                                id: '1',
                                image: '/images/download.jpg',
                                avatar: '/images/download (1).jpg',
                                name: 'PRIYA SHARMA',
                                location: 'Mumbai, India',
                                testimonial: 'Sharmistha\'s bridal collection transformed my wedding vision into reality. Every detail was perfection.',
                            },
                            {
                                id: '2',
                                image: '/images/download (2).jpg',
                                avatar: '/images/Indian lehnga choli.jpg',
                                name: 'ANJALI VERMA',
                                location: 'Delhi, India',
                                testimonial: 'The customization options and quality are unmatched. I felt like royalty in my custom lehenga.',
                            },
                            {
                                id: '3',
                                image: '/images/download (3).jpg',
                                avatar: '/images/shopkundusa-woman-7729639.jpg',
                                name: 'DIVYA NAIR',
                                location: 'Bangalore, India',
                                testimonial: 'Sharmistha is my go-to designer for everything. The fabric quality and embroidery are exceptional.',
                            },
                        ]}
                    />

                    {/* Instagram Showcase Section */}
                    <InstagramShowcase
                        title="FOLLOW OUR JOURNEY"
                        subtitle="@sharmishthadesignerstudio"
                        igProfileUrl="https://www.instagram.com/sharmishthadesignerstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        posts={[
                            {
                                id: '1',
                                image: '/images/Indian lehnga choli.jpg',
                                caption: 'Bridal elegance in every stitch - Custom lehenga adorned with intricate embroidery',
                                link: 'https://www.instagram.com/sharmishthadesignerstudio',
                                timestamp: '2 days ago',
                            },
                            {
                                id: '2',
                                image: '/images/download (1).jpg',
                                caption: 'New arrival! Vintage-inspired saree with gold embroidery',
                                link: 'https://www.instagram.com/sharmishthadesignerstudio',
                                timestamp: '4 days ago',
                            },
                            {
                                id: '3',
                                image: '/images/download (2).jpg',
                                caption: 'Heritage meets modernity in our latest collection',
                                link: 'https://www.instagram.com/sharmishthadesignerstudio',
                                timestamp: '1 week ago',
                            },
                            {
                                id: '4',
                                image: '/images/download (3).jpg',
                                caption: 'Behind the scenes: Our master artisans crafting magic',
                                link: 'https://www.instagram.com/sharmishthadesignerstudio',
                                timestamp: '1 week ago',
                            },
                            {
                                id: '5',
                                image: '/images/Whisk_343df9ba5029011a0a14a398c46ec06adr.png',
                                caption: 'Beautiful wedding moments in our custom designs',
                                link: 'https://www.instagram.com/sharmishthadesignerstudio',
                                timestamp: '2 weeks ago',
                            },
                            {
                                id: '6',
                                image: '/images/shopkundusa-woman-7729639.jpg',
                                caption: 'Exquisite embroidery details that steal hearts',
                                link: 'https://www.instagram.com/sharmishthadesignerstudio',
                                timestamp: '2 weeks ago',
                            },
                        ]}
                    />

                    {/* Consultation Section */}
                    <Consultation
                        title="SCHEDULE A CONSULTATION"
                        description="Let our design experts help you create your perfect look for your special occasion."
                        buttonText="Book Now"
                    />
                </main>
                <Footer />
            </div>
        </ReactLenis>
    );
}

export default App;
