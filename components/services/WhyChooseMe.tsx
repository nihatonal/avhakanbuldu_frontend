'use client';

import React from 'react';
import { Card } from '../ui/card';
import Container from '../Container';
import {
    Trophy,
    Users,
    Award,
    Scale
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const WhyChooseMe = () => {
    const whyChooseUs = [
        {
            icon: Trophy,
            title: 'Güvenilir Bilgi Kaynağı',
            description: 'Danışanlara doğru ve anlaşılır bilgi sunarak süreçlerde rehberlik sağlarım.'
        },
        {
            icon: Users,
            title: 'Deneyim ve Uzmanlık',
            description: 'Yılların bilgi birikimi ile farklı hukuk konularında yönlendirme yaparım.'
        },
        {
            icon: Award,
            title: 'Şeffaf ve Açık Yaklaşım',
            description: 'Tüm bilgi paylaşımında şeffaflık ve güven odaklı iletişim sağlanır.'
        },
        {
            icon: Scale,
            title: 'Bilgi Güncelliği',
            description: 'Sürekli güncellenen bilgilerle karmaşık konuları anlaşılır hâle getiririm.'
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
                            Neden Bize Danışmalısınız?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Hukuki konular hakkında doğru ve güvenilir bilgilendirme sağlamak için çalışıyorum.
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
