import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User, Instagram } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mainLinks = [
        { name: 'BRIDAL', href: '#bridal' },
        { name: 'SAREES', href: '#saree' },
        { name: 'LEHENGAS', href: '#lehenga' },
        { name: 'GOWNS', href: '#gowns' },
    ];

    const socialLinks = [
        {
            icon: Instagram,
            href: 'https://www.instagram.com/sharmishthadesignerstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            label: 'Instagram'
        },
    ];

    // Animation variants
    const navbarVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    const linkVariants = {
        idle: { color: isScrolled ? '#3A3A3A' : '#ffffff' },
        hover: { color: isScrolled ? '#A88D6F' : '#ffffff', transition: { duration: 0.2 } }
    };

    const underlineVariants = {
        initial: { width: 0 },
        hover: { width: '100%', transition: { duration: 0.3 } }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out h-20',
                isScrolled
                    ? 'bg-background/80 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
            )}
        >
            <div className="h-full px-4 md:px-8 flex items-center justify-between">
                {/* LEFT SECTION - DESKTOP ONLY */}
                <div className="hidden lg:flex items-center gap-12">
                    {/* Search Bar */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative"
                    >
                        <button className={cn(
                            "flex items-center gap-2 transition-colors duration-300",
                            isScrolled ? "text-secondary/70 hover:text-primary" : "text-white/80 hover:text-white"
                        )}>
                            <Search size={18} strokeWidth={1.5} />

                        </button>
                    </motion.div>
                </div>

                {/* MOBILE MENU BUTTON - LEFT */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                        "lg:hidden transition-colors",
                        isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-white/80"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>

                {/* CENTER LOGO */}
                <motion.a
                    href="/"
                    whileHover={{ letterSpacing: '0.15em' }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        "absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif font-light tracking-[0.2em] transition-colors duration-300",
                        isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-primary"
                    )}
                >
                    SHARMISTHA
                </motion.a>

                {/* RIGHT SECTION - DESKTOP NAVIGATION */}
                <div className="hidden lg:flex items-center gap-10">
                    {/* Main Navigation Links */}
                    <div className="flex items-center gap-10">
                        {mainLinks.map((link) => (
                            <motion.div
                                key={link.name}
                                variants={linkVariants}
                                initial="idle"
                                whileHover="hover"
                                className="relative group cursor-pointer"
                            >
                                <a
                                    href={link.href}
                                    className={cn(
                                        "text-sm md:text-base uppercase tracking-wider font-light transition-all duration-300 py-2 px-3 rounded-lg",
                                        isScrolled
                                            ? "text-secondary group-hover:text-primary group-hover:bg-primary/5"
                                            : "text-white/90 group-hover:text-white group-hover:bg-white/10"
                                    )}
                                >
                                    {link.name}
                                </a>
                                <motion.div
                                    className="absolute bottom-1 left-3 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                                    variants={underlineVariants}
                                    initial="initial"
                                    whileHover="hover"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* DIVIDER */}
                    <div className={cn(
                        "w-px h-6 bg-gradient-to-b from-transparent to-transparent transition-colors duration-300",
                        isScrolled ? "via-primary/30" : "via-white/30"
                    )} />

                    {/* ACTION ICONS */}
                    <div className="flex items-center gap-6">
                        {/* Instagram */}
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, color: '#A88D6F' }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                    "transition-all duration-300 group relative",
                                    isScrolled ? "text-secondary/70 hover:text-primary" : "text-white/80 hover:text-white"
                                )}
                                title={social.label}
                            >
                                <social.icon size={18} strokeWidth={1.5} />
                                <motion.div
                                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-secondary text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {social.label}
                                </motion.div>
                            </motion.a>
                        ))}

                        {/* User Account */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "transition-colors duration-300",
                                isScrolled ? "text-secondary/70 hover:text-primary" : "text-white/80 hover:text-white"
                            )}
                        >
                            <User size={18} strokeWidth={1.5} />
                        </motion.button>

                        {/* Shopping Bag with Badge */}
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                    "transition-colors duration-300 relative",
                                    isScrolled ? "text-secondary/70 hover:text-primary" : "text-white/80 hover:text-white"
                                )}
                            >
                                <ShoppingBag size={18} strokeWidth={1.5} />
                            </motion.button>
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 bg-gradient-to-br from-primary to-accent text-white text-[10px] font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow-md"
                            >
                                0
                            </motion.span>
                        </motion.div>
                    </div>
                </div>

                {/* MOBILE RIGHT ACTIONS */}
                <div className="lg:hidden flex items-center gap-3">
                    {/* Social - Instagram Mobile */}
                    <motion.a
                        href="https://www.instagram.com/sharmishthadesignerstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.9 }}
                        className="text-secondary hover:text-primary transition-colors"
                    >
                        <Instagram size={20} strokeWidth={1.5} />
                    </motion.a>

                    {/* Cart Mobile */}
                    <motion.div
                        className="relative"
                        whileTap={{ scale: 0.95 }}
                    >
                        <ShoppingBag size={20} className="text-secondary hover:text-primary transition-colors cursor-pointer" />
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-semibold">
                            0
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* MOBILE MENU - PREMIUM OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute top-20 left-0 w-full bg-background/98 backdrop-blur-xl border-b border-primary/10 lg:hidden overflow-hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="px-6 py-8 space-y-6"
                        >
                            {/* Mobile Nav Links */}
                            <div className="space-y-4">
                                {mainLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        whileHover={{ x: 8, color: '#A88D6F' }}
                                        className="block text-lg font-light tracking-widest text-secondary/90 hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Mobile Divider */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                            {/* Mobile Actions */}
                            <motion.div
                                className="pt-4 space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <button className="w-full flex items-center gap-3 text-secondary/80 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5">
                                    <Search size={18} strokeWidth={1.5} />
                                    <span className="text-sm font-light">Search</span>
                                </button>
                                <button className="w-full flex items-center gap-3 text-secondary/80 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5">
                                    <User size={18} strokeWidth={1.5} />
                                    <span className="text-sm font-light">Account</span>
                                </button>
                            </motion.div>

                            {/* Mobile Social Links */}
                            <motion.div
                                className="pt-4 border-t border-primary/10 flex justify-center gap-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.25 }}
                            >
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, color: '#A88D6F' }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-secondary/70 hover:text-primary transition-all duration-300"
                                    >
                                        <social.icon size={20} strokeWidth={1.5} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
