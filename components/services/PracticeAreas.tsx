'use client';

import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import {
    Gavel,
    FileText,
    Heart,
    Building2,
    Home,
    Users,
    CheckCircle,
    ArrowRight
} from 'lucide-react';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const PracticeAreas = () => {
    const practiceAreas = [
        {
            icon: Gavel,
            title: 'Ceza Hukuku',
            description: 'Suç mağdurları ve sanıklar için kapsamlı savunma hizmetleri sunuyorum. Deneyimli ceza avukatı olarak, müvekkillerimin haklarını en iyi şekilde koruyorum.',
            services: [
                'Ağır ceza davalarında savunma',
                'Sulh ceza davalarında temsil',
                'Soruşturma aşamasında müdafaa',
                'Temyiz ve istinaf başvuruları',
                'Tutuklama itirazları',
                'Mağdur hakları danışmanlığı'
            ],
            experience: '10+ yıl deneyim, 200+ başarılı dava'
        },
        {
            icon: FileText,
            title: 'Medeni Hukuk',
            description: 'Kişisel haklar, borçlar hukuku ve genel hukuki meseleler konusunda uzman hizmet veriyorum. Müvekkillerimin medeni haklarını korumak önceliğimdir.',
            services: [
                'Sözleşme hukuku danışmanlığı',
                'Kişilik haklarının korunması',
                'Borç-alacak davaları',
                'Tapu iptali ve tescil davaları',
                'Zilyetlik davaları',
                'Haksız fiil tazminatları'
            ],
            experience: '12+ yıl deneyim, 150+ başarılı dava'
        },
        {
            icon: Heart,
            title: 'Tazminat Hukuku',
            description: 'Maddi ve manevi zararların tazmininde uzmanlaşmış olarak, müvekkillerimin haklarını en üst düzeyde koruyorum.',
            services: [
                'Trafik kazası tazminatları',
                'İş kazası tazminatları',
                'Malpraktis davaları',
                'Manevi tazminat davaları',
                'Kamulaştırma bedeli davaları',
                'Sigorta tazminat davaları'
            ],
            experience: '8+ yıl deneyim, 100+ başarılı dava'
        },
        {
            icon: Building2,
            title: 'İş Hukuku',
            description: 'Çalışan ve işveren haklarının korunması konusunda profesyonel hizmet sunuyorum. İş hukuku alanındaki deneyimimle adaletli çözümler üretiyorum.',
            services: [
                'İşçi hakları danışmanlığı',
                'İşveren hukuki danışmanlığı',
                'İş akdi fesih davaları',
                'Kıdem-ihbar tazminatı davaları',
                'Mobbing davaları',
                'İş güvenliği danışmanlığı'
            ],
            experience: '7+ yıl deneyim, 80+ başarılı dava'
        },
        {
            icon: Home,
            title: 'Aile Hukuku',
            description: 'Aile içi hukuki meseleler konusunda hassas ve çözüm odaklı yaklaşımla hizmet veriyorum. Ailelerin huzuru için çalışıyorum.',
            services: [
                'Boşanma davaları',
                'Velayet davaları',
                'Nafaka davaları',
                'Mal rejimi davaları',
                'Evlilik öncesi danışmanlık',
                'Aile içi şiddet korunma'
            ],
            experience: '10+ yıl deneyim, 120+ başarılı dava'
        },
        {
            icon: Users,
            title: 'Miras Hukuku',
            description: 'Miras hukukundaki karmaşık süreçlerde uzman danışmanlık sunuyorum. Miras haklarının korunması ve dağılımında adil çözümler üretiyorum.',
            services: [
                'Miras taksim davaları',
                'Vasiyet danışmanlığı',
                'Saklı pay davaları',
                'Mirastan feragat sözleşmeleri',
                'Veraset ilamlı',
                'Miras reddi işlemleri'
            ],
            experience: '9+ yıl deneyim, 90+ başarılı dava'
        }
    ];

    return (
        <section className="section-padding">
            <Container>
                <motion.div
                    className="container-max"
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {practiceAreas.map((area, index) => (
                            <motion.div key={index} variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <Card className="card-elegant hover:shadow-accent/20">
                                    <div className="flex items-start space-x-6">
                                        <div className="p-4 bg-accent/10 rounded-xl flex-shrink-0">
                                            <area.icon className="h-8 w-8 text-accent" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="font-display text-2xl font-bold text-primary mb-3">
                                                {area.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                {area.description}
                                            </p>

                                            <div className="mb-4">
                                                <h4 className="font-semibold text-primary mb-2">Hizmet Alanları:</h4>
                                                <ul className="space-y-1">
                                                    {area.services.slice(0, 4).map((service, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-center text-sm text-muted-foreground"
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                                                            {service}
                                                        </li>
                                                    ))}
                                                    {area.services.length > 4 && (
                                                        <li className="text-sm text-accent font-medium">
                                                            +{area.services.length - 4} diğer hizmet
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Badge variant="secondary" className="text-xs">
                                                    {area.experience}
                                                </Badge>
                                                <Button variant="ghost" className="text-accent hover:text-accent-dark">
                                                    Detaylar
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default PracticeAreas;
