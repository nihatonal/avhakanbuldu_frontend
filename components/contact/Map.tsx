"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { MapPin } from 'lucide-react';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const Map = () => {
    return (
        <section className="section-padding bg-secondary/30">
            <Container>
                <div className="container-max">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl font-bold text-primary mb-4">
                                Ofis Konumum
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Ankara&apos;nın merkezinde, kolay ulaşılabilir konumda bulunan ofisimde
                                müvekkillerimi ağırlıyorum.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <Card className="card-elegant overflow-hidden">
                            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                                    <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                        Atatürk Bulvarı No:123
                                    </h3>
                                    <p className="text-muted-foreground">Çankaya/Ankara</p>
                                    <Button variant="outline" className="mt-4">
                                        Haritada Görüntüle
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default Map
