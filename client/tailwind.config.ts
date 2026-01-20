import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#D87D4A',
                    light: '#fbaf85',
                },
                dark: {
                    DEFAULT: '#101010',
                    light: '#191919',
                },
                light: {
                    DEFAULT: '#F1F1F1',
                    gray: '#FAFAFA',
                },
                white: '#FFFFFF',
                black: '#000000',
            },
            fontFamily: {
                sans: ['var(--font-manrope)', 'sans-serif'],
            },
            screens: {
                xs: '375px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1440px',
            },
        },
    },
    plugins: [],
};
export default config;
