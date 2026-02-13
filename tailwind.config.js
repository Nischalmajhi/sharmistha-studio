/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1160px', // Standard container from Gradwear
                '2xl': '1620px', // Wide container from Gradwear
            },
        },
        extend: {
            colors: {
                background: '#F9F7F3', // Warm ivory for Sharmistha
                surface: '#F5F1E8', // Soft Beige
                primary: '#A88D6F', // Warm gold/bronze for luxury
                secondary: '#3A3A3A', // Deep charcoal for text
                accent: '#D4AF8F', // Light gold accent
                'dark-accent': '#8B7355', // Dark brown for hover states
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
            fontSize: {
                base: ['1.4rem', { lineHeight: '1.5', letterSpacing: '0.07em' }], // Gradwear base
                lg: ['1.6rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
                xl: ['1.8rem', { lineHeight: '1.4' }],
                '2xl': ['2.2rem', { lineHeight: '1.3' }],
                '3xl': ['2.6rem', { lineHeight: '1.2' }],
                '4xl': ['3.2rem', { lineHeight: '1.1' }],
                '5xl': ['4.8rem', { lineHeight: '1.1' }],
                '6xl': ['6rem', { lineHeight: '1' }],
            },
            letterSpacing: {
                normal: '0.07em', // Gradwear default
                wide: '0.1em',
                widest: '0.15em',
            },
            height: {
                header: '70px',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-up': 'fadeUp 1s ease-out forwards',
                'zoom-in': 'zoomIn 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                }
            }
        },
    },
    plugins: [],
}
