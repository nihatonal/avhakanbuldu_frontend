'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';
import { headerData } from '@/constants/data';
import { usePathname } from '@/node_modules/next/navigation';

export default function MobileMenu() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                aria-label="mobile menu hamburger button"
                className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1 focus:outline-none z-50"
            >
                <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className={`block w-8 h-0.5  ${!isOpen ? "bg-primary" : "bg-background"} rounded`}
                />
                <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className={`block w-8 h-0.5  ${!isOpen ? "bg-primary" : "bg-background"} rounded`}
                />
                <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className={`block w-8 h-0.5  ${!isOpen ? "bg-primary" : "bg-background"} rounded`}
                />
            </button>

            {/* Sidebar + Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            onClick={toggleMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                        />

                        {/* Sidebar */}
                        <motion.nav
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-16 left-0 h-auto w-64 bg-background shadow-lg z-50 flex flex-col p-6 gap-4"
                        >
                            {headerData.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`font-medium transition-colors duration-200 ${pathname === item?.path
                                        ? 'text-accent font-semibold'
                                        : 'text-foreground hover:text-accent'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button asChild className="btn-hero">
                                <Link href="/iletisim">Ücretsiz Danışmanlık</Link>
                            </Button>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
