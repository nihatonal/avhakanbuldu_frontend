'use client'

import Link from 'next/link'
import React from 'react'
import Container from './Container'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'



const HomeCta = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
            <Container className="text-center">
                {/* Başlık ve Açıklama */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Hukuki Desteğe İhtiyacınız mı Var?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
                        Profesyonel hukuki danışmanlık için bugün bize ulaşın. İlk konsültasyon ücretsizdir.
                    </p>
                </motion.div>

                {/* Butonlar */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div variants={fadeUp}>
                        <Button
                            asChild
                            size="lg"
                            className="bg-accent text-accent-foreground hover:bg-accent-dark"
                        >
                            <a href="tel:+905551112233" className="flex items-center text-primary">
                                <Phone className="mr-2 h-5 w-5" />
                                Hemen Arayın
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-white text-white bg-transparent hover:bg-white hover:text-primary"
                        >
                            <Link href="/iletisim">Online Randevu Al</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    )
}

export default HomeCta
