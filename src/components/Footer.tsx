import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-secondary/10 pt-20 pb-12">
            <div className="container mx-auto px-4 max-w-[1160px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="/" className="text-2xl font-serif font-bold tracking-wider text-secondary mb-6 block">
                            SHARMISHTHA
                        </a>
                        <p className="text-secondary/60 text-sm leading-relaxed mb-6 font-light">
                            Redefining Indian luxury with heritage craftsmanship and contemporary aesthetics.
                        </p>
                        <div className="flex space-x-5 opacity-70">
                            <a href="#" className="text-secondary hover:text-primary transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
                            <a href="#" className="text-secondary hover:text-primary transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
                            <a href="#" className="text-secondary hover:text-primary transition-colors"><Twitter size={18} strokeWidth={1.5} /></a>
                        </div>
                    </div>

                    {/* Quick Channels */}
                    <div>
                        <h4 className="text-[11px] uppercase tracking-[0.15em] font-bold mb-6 text-secondary/90">Shop</h4>
                        <ul className="space-y-3 text-[13px] text-secondary/70 font-light">
                            <li><a href="#" className="hover:text-primary transition-colors block">Bridal Couture</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Luxury Sarees</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Lehengas</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Evening Gowns</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-[11px] uppercase tracking-[0.15em] font-bold mb-6 text-secondary/90">Information</h4>
                        <ul className="space-y-3 text-[13px] text-secondary/70 font-light">
                            <li><a href="#" className="hover:text-primary transition-colors block">Our Story</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter - 4th col */}
                    <div>
                        <h4 className="text-[11px] uppercase tracking-[0.15em] font-bold mb-6 text-secondary/90">Newsletter</h4>
                        <p className="text-[13px] text-secondary/70 mb-4 font-light">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="mb-6">
                            <div className="flex items-center border-b border-secondary/20 pb-2 transition-colors focus-within:border-secondary/60">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-transparent outline-none text-secondary placeholder:text-secondary/40 text-[13px] font-light"
                                />
                                <button className="text-secondary hover:text-primary ml-2 uppercase text-[10px] font-bold tracking-widest">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[11px] uppercase tracking-widest text-secondary/40 font-medium">
                        &copy; {new Date().getFullYear()} Sharmishtha Designer Studio.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] uppercase tracking-widest">Designed by MatrixIndia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
