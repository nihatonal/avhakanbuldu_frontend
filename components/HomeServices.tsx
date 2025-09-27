'use client'

import React from 'react'
import { ArrowRight, Gavel, FileText, Heart } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Container from './Container'
import { motion } from 'framer-motion'
import { containerStagger, fadeUp } from '@/lib/animations'
import { practicesData } from '@/constants/practiceAreas'

const HomeServices = () => {



    return (
        <section className="section-padding bg-secondary/100">
            <Container>
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                        Faaliyet Alanlarım
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Geniş hukuk bilgim ve deneyimimle, farklı alanlarda profesyonel hizmet sunuyorum.
                    </p>
                </motion.div>

                {/* Cards Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {practicesData.slice(0,3).map((area, index) => (
                        <motion.div key={index} variants={fadeUp}>
                            <Card className="card-elegant group hover:shadow-accent/20 cursor-pointer">
                                <Link href={`/faaliyet-alanlari/${area.slug}`} className="block">
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                                            <area.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <h3 className="font-display text-xl font-semibold text-primary">
                                            {area.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground mb-4 line-clamp-3">{area.description}</p>
                                    <div className="flex items-center text-accent font-medium group-hover:text-accent-dark transition-colors">
                                        Detayları Görüntüle
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="btn-primary">
                        <Link href="/faaliyet-alanlari">Tüm Faaliyet Alanları</Link>
                    </Button>
                </motion.div>
            </Container>
        </section>
    )
}

export default HomeServices
