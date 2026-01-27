'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Headphones', href: '/category/headphones' },
    { name: 'Speakers', href: '/category/speakers' },
    { name: 'Earphones', href: '/category/earphones' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-dark text-white border-b border-white/10 relative z-50">
            <div className="container-custom flex items-center justify-between h-24">
                {/* 1. Hamburger Menu (Visible only on Mobile/Tablet) */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {/* Simple Inline SVG Icon for performance */}
                    <svg
                        width="16"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#FFF" fillRule="evenodd">
                            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
                        </g>
                    </svg>
                </button>

                {/* 2. Logo (Centered on Mobile, Left aligned on Desktop) */}
                <Link href="/" className="md:mr-auto lg:mr-0 ml-4 md:ml-0">
                    <h1 className="font-bold text-2xl tracking-wide leading-none">
                        audiophile
                    </h1>
                </Link>

                {/* 3. Desktop Navigation (Hidden on Mobile) */}
                <nav className="hidden lg:flex gap-8 mx-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-[2px] hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* 4. Shopping Cart Icon */}
                <button
                    aria-label="Cart"
                    className="text-white hover:text-primary transition-colors"
                >
                    <svg
                        width="23"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.625 15.833c1.134 0 2.063.929 2.063 2.084 0 1.154-.929 2.083-2.063 2.083-1.134 0-2.063-.929-2.063-2.083 0-1.155.929-2.084 2.063-2.084zm8.25 0c1.134 0 2.063.929 2.063 2.084 0 1.154-.929 2.083-2.063 2.083-1.134 0-2.063-.929-2.063-2.083 0-1.155.929-2.084 2.063-2.084zm1.096-10.667H6.23l.589-2.678 12.087-.66.815 3.338zm-14.86-6l2.164 9.167h12.396l2.09-8.334H3.111z"
                            fill="currentColor"
                            fillRule="nonzero"
                        />
                    </svg>
                </button>
            </div>

            {/* 5. Mobile Menu Overlay (Conditional Rendering) */}
            {isMenuOpen && (
                <div className="absolute top-24 left-0 w-full bg-white text-black py-8 px-6 rounded-b-lg shadow-xl lg:hidden">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center justify-between font-bold uppercase text-sm border-b border-gray-100 pb-4"
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                {link.name}
                                <span className="text-primary text-lg">›</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
