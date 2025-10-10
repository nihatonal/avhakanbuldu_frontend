'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { Phone } from 'lucide-react';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const Cta = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
            <Container>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="container-max text-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-display text-4xl md:text-5xl font-bold mb-6"
                    >
                        Deneyimime Güvenin
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
                    >
                        15 yılı aşkın deneyimimle, hukuki süreçlerinizi güvenle yönlendirecek ve en doğru çözümleri sunacak profesyonel destek sağlıyorum.
                    </motion.p>

                    <motion.div
                        variants={containerStagger}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div variants={fadeUp}>
                            <Button
                                asChild
                                size="lg"
                                className="bg-accent text-accent-foreground hover:bg-accent-dark"
                            >
                                <Link href="/iletisim">
                                    <Phone className="mr-2 h-5 w-5" />
                                    İletişime Geçin
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                            >
                                <Link href="/faaliyet-alanlari">
                                    Çalışma Alanlarımı Görün
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Cta;
