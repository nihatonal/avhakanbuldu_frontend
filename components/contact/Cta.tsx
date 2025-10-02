"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const Cta = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
            <motion.div
                className="container-max text-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerStagger}
            >
                <motion.div variants={fadeUp}>
                    <MessageSquare className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Acil Durum mu?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                        Gözaltı, tutuklama veya acil hukuki durumlarda 7/24 ulaşabilirsiniz.
                        Derhal size yardımcı olmaya hazırım.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark">
                        <a href="tel:+905305610034">
                            <Phone className="mr-2 h-5 w-5" />
                            Acil Hat: +90 530 561 00 34
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-[#075E54] border-none text-white hover:bg-white hover:text-primary">
                        <a href="https://wa.me/905305610034" target="_blank" rel="noopener noreferrer">
                            WhatsApp İletişim
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Cta
