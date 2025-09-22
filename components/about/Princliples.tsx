import React from 'react'
import {
    CheckCircle
} from 'lucide-react';
import { Card } from '../ui/card';
import Container from '../Container';
const Princliples = () => {
    const principles = [
        {
            title: 'Dürüstlük ve Şeffaflık',
            description: 'Müvekkillerimle her zaman dürüst ve şeffaf bir iletişim kurarım.'
        },
        {
            title: 'Profesyonellik',
            description: 'Her davaya aynı titizlik ve profesyonellikle yaklaşırım.'
        },
        {
            title: 'Müvekkil Odaklılık',
            description: 'Müvekkillerimin çıkarlarını her zaman ön planda tutarım.'
        },
        {
            title: 'Sürekli Gelişim',
            description: 'Hukuki gelişmeleri takip ederek kendimi sürekli geliştiririm.'
        }
    ];
    return (
        <section className="section-padding bg-secondary/50">
            <Container>
                <div className="container-max">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                            Çalışma Prensiplerin
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Mesleki hayatımda benimsediğim temel prensipler ve değerler.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {principles.map((principle, index) => (
                            <Card key={index} className="card-elegant animate-fade-in">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                            {principle.title}
                                        </h3>
                                        <p className="text-muted-foreground">{principle.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Princliples