'use client';

import React from 'react';
import { Card } from '../ui/card';
import Container from '../Container';
import {
    GraduationCap,
    UserCog,
    MessageCircle,
    CheckCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const WhyChooseMe = () => {
    const whyChooseUs = [
        {
            title: 'Deneyimli Uzmanlık',
            description: 'Her alanda yıllar içinde kazandığım derinlemesine uzmanlık',
            icon: GraduationCap
        },
        {
            title: 'Kişiselleştirilmiş Hizmet',
            description: 'Her müvekkilimin özel durumuna uygun çözümler',
            icon: UserCog
        },
        {
            title: 'Şeffaf İletişim',
            description: 'Süreç boyunca açık ve anlaşılır iletişim',
            icon: MessageCircle
        },
        {
            title: 'Güvenilir Sonuçlar',
            description: '%95 başarı oranıyla kanıtlanmış güvenilirlik',
            icon: CheckCheck
        }
    ];

    return (
        <section className="section-padding bg-secondary/30">
            <Container>
                <motion.div
                    className="container-max"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerStagger}
                >
                    {/* Başlık */}
                    <motion.div className="text-center mb-16" variants={fadeUp}>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                            Neden Beni Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Müvekkillerimin memnuniyeti ve başarılı sonuçlar için çalıştığım temel değerler.
                        </p>
                    </motion.div>

                    {/* Kartlar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <motion.div key={index} variants={fadeUp}>
                                    <Card className="card-elegant text-center">
                                        <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                            <Icon className="h-8 w-8 text-accent" />
                                        </div>
                                        <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                            {reason.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">{reason.description}</p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default WhyChooseMe;
