"use client"
import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const HeroSection = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
            <div className="container-max text-center">
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <Badge className="mb-4 bg-accent text-accent-foreground">Hemen İletişime Geçin</Badge>
                    <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                        İletişim
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
                        Hukuki danışmanlık ihtiyacınız için benimle iletişime geçin. İlk danışmanlık görüşmesi ücretsizdir.
                    </p>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark">
                        <a href="tel:+903121234567">
                            <Phone className="mr-2 h-5 w-5" />
                            Hemen Arayın
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                        <a href="mailto:info@avmehmtozkan.com">
                            <Mail className="mr-2 h-5 w-5" />
                            E-posta Gönderin
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
