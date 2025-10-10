"use client"
import React from 'react'
import { Card } from '../ui/card'
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const ProcessSteps = () => {
    const processSteps = [
        {
            step: '1',
            title: 'İletişim',
            description: 'Formu doldurun veya direkt arayın'
        },
        {
            step: '2',
            title: 'Değerlendirme',
            description: 'Durumunuzu inceleyip size geri dönüş sağlıyorum'
        },
        {
            step: '3',
            title: 'Danışmanlık Görüşmesi',
            description: 'İlk danışmanlık görüşmesini planlayın'
        },
        {
            step: '4',
            title: 'Çözüm ve Rehberlik',
            description: 'Hukuki süreçle ilgili net ve güvenilir rehberlik sunuyorum'
        }
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerStagger}
        >
            <motion.div variants={fadeUp} className="mb-8">
                <h2 className="font-display text-3xl font-bold text-primary mb-4">
                    Nasıl Çalışıyoruz?
                </h2>
                <p className="text-muted-foreground">
                    Hukuki danışmanlık sürecimiz şeffaf ve danışan odaklıdır.
                </p>
            </motion.div>

            <div className="space-y-6">
                {processSteps.map((step, index) => (
                    <motion.div key={index} variants={fadeUp}>
                        <Card className="card-elegant">
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                    {step.step}
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={fadeUp}>
                <Card className="card-accent mt-8">
                    <div className="flex items-start space-x-4 p-2">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-display text-lg font-semibold text-primary mb-2">
                                Danışmanlık ve Rehberlik
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Sizinle birlikte durumunuzu ele alıp, güven temelli bir danışmanlık süreci yürütüyoruz.
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    )
}

export default ProcessSteps
