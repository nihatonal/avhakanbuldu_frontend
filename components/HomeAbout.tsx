'use client'

import React from 'react'
import { Badge } from './ui/badge'
import { CheckCircle, Award } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import lawyerPortrait from '../assets/images/avukat-odasi.webp'
import Image from 'next/image'
import Container from './Container'
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight } from '@/lib/animations'



const HomeAbout = () => {
    return (
        <section className="section-padding bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column (Text) */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                            Deneyimli Hukuk Danışmanı
                        </Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                            Hakan Buldu
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            15 yılı aşkın hukuk deneyimimle, hukuki konularda doğru ve güvenilir bilgilendirme sağlıyorum.
                            Ankara Üniversitesi Hukuk Fakültesi mezunu olarak, ceza hukuku, medeni hukuk ve tazminat hukuku alanlarında bilgi ve danışmanlık sunuyorum.
                        </p>

                        <div className="space-y-3 mb-8 text-primary">
                            {[
                                'Ankara Üniversitesi Hukuk Fakültesi Mezunu',
                                'Türkiye Barolar Birliği Üyesi',
                                '15+ Yıl Hukuk Deneyimi',
                                '500+ Danışma / Bilgilendirme'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button asChild size="lg" className="btn-primary">
                            <Link href="/hakkinda">Daha Fazla Bilgi</Link>
                        </Button>
                    </motion.div>

                    {/* Right Column (Image) */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative inline-block"
                    >
                        <div className="shine-wrapper rounded-2xl shadow-elegant">
                            <div className="shine-effect rounded-2xl">
                                <Image
                                    src={lawyerPortrait}
                                    alt="Hakan Buldu"

                                    height={lawyerPortrait.height}
                                    className="w-full object-cover rounded-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-accent">
                            <Award className="h-8 w-8" />
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    )
}

export default HomeAbout
