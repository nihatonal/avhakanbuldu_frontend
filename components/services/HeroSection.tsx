'use client';

import React from 'react';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const HeroSection = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
            <motion.div
                className="container-max text-center"
                variants={containerStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={fadeUp}>
                    <Badge className="mb-4 bg-accent text-accent-foreground">
                        Kapsamlı Hukuki Hizmetler
                    </Badge>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="font-display text-4xl md:text-6xl font-bold mb-6"
                >
                    Çalışma Alanlarımız
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
                >
                    Geniş hukuk bilgim ve uzmanlaştığım alanlarla, sizlere kapsamlı hukuki hizmet sunuyorum.
                    Her alanda deneyimli ve güvenilir çözümler için yanınızdayım.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default HeroSection;
