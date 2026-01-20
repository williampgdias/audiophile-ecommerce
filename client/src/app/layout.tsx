import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['200', '400', '500', '700'],
    variable: '---font-manrope',
});

export const metadata: Metadata = {
    title: 'Audiophile E-commerce',
    description: 'Best audio gear in the market',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={manrope.className} suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    );
}
