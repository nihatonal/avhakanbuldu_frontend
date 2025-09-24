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
    // ArrowRight
} from 'lucide-react';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

const PracticeAreas = () => {
    const practiceAreas = [
        {
            icon: Gavel,
            title: 'Ceza Hukuku',
            description: 'Ceza yargılamasında sanık ve mağdur haklarını korumak için kapsamlı hukuki destek sunuyorum. Her aşamada etkin savunma hizmeti veriyorum.',
            services: [
                'Ağır ceza mahkemesi davaları',
                'Sulh ve asliye ceza davaları',
                'Soruşturma aşamasında müdafilik',
                'Tutuklamaya itiraz ve tahliye',
                'İstinaf ve temyiz başvuruları',
                'Mağdur vekilliği ve şikayet süreçleri'
            ],
            experience: '10+ yıl deneyim, 200+ dava tecrübesi'
        },
        {
            icon: Home,
            title: 'Aile Hukuku',
            description: 'Boşanma, velayet, nafaka gibi hassas aile hukuku meselelerinde müvekkillerime çözüm odaklı ve duyarlı hukuki danışmanlık sunuyorum.',
            services: [
                'Anlaşmalı ve çekişmeli boşanma',
                'Velayet ve nafaka davaları',
                'Mal rejimi tasfiye işlemleri',
                'Aile içi şiddet koruma tedbirleri',
                'Evlilik öncesi sözleşmeler',
                'Soybağı ve evlat edinme davaları'
            ],
            experience: '10+ yıl deneyim, 120+ dava tecrübesi'
        },
        {
            icon: Users,
            title: 'Kamu Hukuku',
            description: 'İdarenin işlem ve eylemlerine karşı birey haklarını savunuyorum. İdari davalar ve anayasal başvurular alanında deneyimliyim.',
            services: [
                'İptal ve tam yargı davaları',
                'Memur disiplin işlemleri',
                'İdari para cezalarına itiraz',
                'Kamulaştırma ve imar uyuşmazlıkları',
                'Vergi ceza ve uzlaşma süreçleri',
                'Anayasa Mahkemesi başvuruları'
            ],
            experience: '9+ yıl deneyim, 100+ dava ve başvuru'
        },
        {
            icon: FileText,
            title: 'Medeni Hukuk',
            description: 'Kişiler hukuku, borçlar ve eşya hukuku alanlarında bireysel ve kurumsal müvekkillere hukuki destek sağlıyorum.',
            services: [
                'Sözleşme hazırlama ve yorumu',
                'Tapu iptali ve tescil davaları',
                'Kişilik haklarının korunması',
                'Borç-alacak tahsil işlemleri',
                'Zilyetlik ve ecrimisil davaları',
                'Haksız fiil kaynaklı tazminatlar'
            ],
            experience: '12+ yıl deneyim, 150+ dosya'
        },
        {
            icon: Heart,
            title: 'Tazminat Hukuku',
            description: 'Müvekkillerimin uğradığı maddi ve manevi zararların tazmini için güçlü ve sonuç odaklı dava süreçleri yürütüyorum.',
            services: [
                'Trafik kazası tazminatları',
                'İş kazası ve meslek hastalığı',
                'Malpraktis (doktor hatası) davaları',
                'Manevi tazminat talepleri',
                'Sigorta şirketi uyuşmazlıkları',
                'Kamulaştırmasız el atma davaları'
            ],
            experience: '8+ yıl deneyim, 100+ dosya başarıyla sonuçlandı'
        },
        {
            icon: Building2,
            title: 'İş Hukuku',
            description: 'İşçi ve işveren haklarının korunması için dava takibi ve danışmanlık hizmeti sunuyorum. İş uyuşmazlıklarında güçlü temsil sağlıyorum.',
            services: [
                'İşe iade ve fesih davaları',
                'Kıdem ve ihbar tazminatları',
                'Fazla mesai ve ücret alacakları',
                'Mobbing ve psikolojik taciz davaları',
                'İş kazası kaynaklı tazminatlar',
                'İş sözleşmesi ve SGK uyuşmazlıkları'
            ],
            experience: '7+ yıl deneyim, 80+ başarılı çözüm'
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
                                <Card className="card-elegant relative hover:shadow-accent/20 h-full">
                                    {/* İKON - SOL ÜST KÖŞEDE */}
                                    <div className="absolute top-4 right-4 p-2.5 bg-accent/10 rounded-md z-10">
                                        <area.icon className="h-8 w-8 text-accent" />
                                    </div>

                                    {/* ANA İÇERİK */}
                                    <div className="p-4 flex flex-col h-full">
                                        <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-3">
                                            {area.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm sm:text-base mb-4">
                                            {area.description}
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="font-semibold text-primary text-sm sm:text-base mb-2">Hizmet Alanları:</h4>
                                            <ul className="space-y-1">
                                                {area.services.map((service, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start text-sm text-muted-foreground"
                                                    >
                                                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                                                        {service}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-auto pt-2">
                                            <Badge variant="secondary" className="text-xs">
                                                {area.experience}
                                            </Badge>
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
