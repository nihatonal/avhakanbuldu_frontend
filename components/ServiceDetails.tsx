'use client'
import React from 'react'
import Container from './Container'
import { motion } from 'framer-motion';
import { fadeUp, containerStagger } from '@/lib/animations';

interface DetailedService {
    title: string;
    description: string;
}
interface FAQ {
    question: string;
    answer: string;
}
interface Example {
    case: string;
}
interface Service {
    title: string;
    description: string;
    services: string[];
    detailTitle: string;
    detailDescription: string;
    detailedServices: DetailedService[];
    faq: FAQ[];
    examples: Example[];
    icon?: string; // opsiyonel eklenecekse
}

const ServiceDetails = ({ area }: { area: Service }) => {
    return (
        <div className='bg-background pb-12'>
            {/* Hero Başlık ve Kısa Açıklama */}

            <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white mb-12">
                <motion.div
                    className="container-max text-center"
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h1
                        variants={fadeUp}
                        className="font-display text-4xl md:text-6xl font-bold mb-6"
                    >
                        {area.title}
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
                    >
                        {area.description}
                    </motion.p>
                </motion.div>
            </section>
            <Container>
                <div>
                    {/* Temel Hizmetler */}
                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {area.services.map((service, i) => (
                            <div
                                key={i}
                                className="card-elegant shine-wrapper transition-transform hover:scale-105"
                            >
                                <div className="shine-effect">
                                    <p className="font-bold text-primary">{service}</p>
                                </div>
                            </div>
                        ))}
                    </motion.section>

                    {/* Detaylı Açıklama */}
                    <motion.section
                        variants={containerStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mb-12">
                        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-primary mb-4">
                            {area.detailTitle}
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-muted-foreground mb-6">{area.detailDescription}</motion.p>

                        {/* Detaylı Hizmetler */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            className="grid gap-6 md:grid-cols-2">
                            {area.detailedServices.map((service, i) => (
                                <div
                                    key={i}
                                    className="card-elegant shine-wrapper hover:shadow-elegant"
                                >
                                    <div className="shine-effect">
                                        <h3 className="font-semibold text-accent mb-2">{service.title}</h3>
                                        <p className="text-muted-foreground">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* SSS */}
                    {area.faq && area.faq.length > 0 && (
                        <motion.section
                            variants={containerStagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="mb-12">
                            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-primary mb-6">Sık Sorulan Sorular</motion.h2>
                            <div className="space-y-4">
                                {area.faq.map((item, i) => (
                                    <motion.div
                                        variants={fadeUp}
                                        key={i} className="card-elegant p-4">
                                        <p className="font-medium text-accent mb-1">{item.question}</p>
                                        <p className="text-muted-foreground">{item.answer}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* Örnek Vaka */}
                    {area.examples && area.examples.length > 0 && (
                        <motion.section
                            variants={containerStagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="mb-12">
                            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-primary mb-6">Örnek Vaka</motion.h2>
                            {area.examples.map((ex, i) => (
                                <motion.p variants={fadeUp} key={i} className="italic mb-2 text-muted-foreground">
                                    {ex.case}
                                </motion.p>
                            ))}
                        </motion.section>
                    )}

                    {/* CTA Banner */}
                    <motion.section
                        variants={containerStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="gradient-primary rounded-xl p-10 text-center text-white shadow-elegant"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
                            Hukuki Konularda Bilgi ve Rehberlik İçin İletişime Geçin
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mb-6 max-w-2xl mx-auto text-white/90">
                            15 yılı aşkın deneyimle, farklı hukuki konularda doğru bilgiye ulaşmanız ve süreci daha net anlamanız için yardımcı oluyorum. Amacım, sorularınıza güvenilir ve anlaşılır yanıtlar sunmak.
                        </motion.p>
                        <motion.a
                            variants={fadeUp}
                            href="/iletisim"
                            className="btn-hero inline-block text-lg font-semibold shadow-accent hover:shadow-elegant"
                        >
                            Sorularınızın Cevabı Burada
                        </motion.a>
                    </motion.section>

                </div>
            </Container>
        </div>
    )
}

export default ServiceDetails
