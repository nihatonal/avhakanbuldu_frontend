import React from 'react'
import { Card } from '../ui/card'

import {
    Shield
} from 'lucide-react';
import Container from '../Container';
const WhyChooseMe = () => {
    const whyChooseUs = [
        {
            title: 'Deneyimli Uzmanlık',
            description: 'Her alanda yıllar içinde kazandığım derinlemesine uzmanlık'
        },
        {
            title: 'Kişiselleştirilmiş Hizmet',
            description: 'Her müvekkilimin özel durumuna uygun çözümler'
        },
        {
            title: 'Şeffaf İletişim',
            description: 'Süreç boyunca açık ve anlaşılır iletişim'
        },
        {
            title: 'Güvenilir Sonuçlar',
            description: '%95 başarı oranıyla kanıtlanmış güvenilirlik'
        }
    ];

    return (
        <section className="section-padding bg-secondary/30">
            <Container>
                <div className="container-max">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                            Neden Beni Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Müvekkillerimin memnuniyeti ve başarılı sonuçlar için çalıştığım temel değerler.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((reason, index) => (
                            <Card key={index} className="card-elegant text-center animate-scale-in">
                                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <Shield className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">{reason.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WhyChooseMe