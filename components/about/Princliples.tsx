'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const Princliples = () => {
    const principles = [
        {
            title: 'Güven ve Şeffaflık',
            description: 'Danışanlara bilgi ve rehberlik sunarken, açık ve güvene dayalı iletişim kurarım; süreç boyunca şeffaf davranırım.'
        },
        {
            title: 'Profesyonel Yaklaşım',
            description: 'Tüm bilgilendirme ve rehberlik süreçlerinde titizlik ve özenle hareket ederim.'
        },
        {
            title: 'Danışan Odaklılık',
            description: 'Danışanların bilgi ihtiyaçlarını ve yönlendirme beklentilerini her zaman ön planda tutarım.'
        },
        {
            title: 'Sürekli Gelişim ve Güncel Bilgi',
            description: 'Hukuk alanındaki güncel bilgileri takip ederek, paylaştığım rehberliği sürekli geliştirmeye çalışırım.'
        }
    ];



    return (
        <section className="section-padding bg-secondary/50">
            <Container>
                <div className="container-max">
                    {/* Başlık */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                            Çalışma Prensiplerim
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Mesleki hayatımda benimsediğim temel prensipler ve değerler.
                        </p>
                    </motion.div>

                    {/* Kartlar */}
                    <motion.div
                        variants={containerStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {principles.map((principle, index) => (
                            <motion.div key={index} variants={fadeUp}>
                                <Card className="card-elegant hover:shadow-lg hover:shadow-gray-200 transition-shadow">
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                                {principle.title}
                                            </h3>
                                            <p className="text-muted-foreground">{principle.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Princliples;
