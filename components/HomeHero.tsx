'use client'

import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/images/hero-lawyer.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerStagger, fadeUp } from '@/lib/animations'

const HomeHero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-white px-2 md:px-0">
            {/* Arka Plan */}
            <div className="fixed top-0 left-0 w-full h-screen -z-10">
                <Image
                    src={heroImage}
                    fill
                    className="object-cover"
                    priority
                    alt="avukat burosu hero image"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
            </div>

            {/* İçerik */}
            <motion.div
                className="container-max text-center"
                variants={containerStagger}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
            >
                <motion.div variants={fadeUp}>
                    <Badge className="mb-4 p-2 px-4 bg-accent text-accent-foreground hover:bg-accent">
                        Profesyonel &amp; Güvenilir Hukuki Çözüm
                    </Badge>
                </motion.div>

                <motion.div variants={fadeUp}>
                    <h1 className="font-display text-4xl md:text-7xl font-bold mb-6">
                        Güvenilir Hukuki <span className="text-gradient">Danışmanlık</span>
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp}>
                    <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
                        15 yılı aşkın deneyimle, müvekkillerimin haklarını korumak ve adaletin tecellisi için çalışıyorum.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={containerStagger}
                >
                    <motion.div variants={fadeUp}>
                        <Button asChild size="lg" className="btn-hero">
                            <Link href="/iletisim">
                                Ücretsiz Danışmanlık Alın
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                            <Link href="/about">Hakkımda Bilgi Al</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HomeHero
