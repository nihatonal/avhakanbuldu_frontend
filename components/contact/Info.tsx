import React from 'react'
import { Card } from '../ui/card'
import {
    Phone,
    Mail,
    MapPin,
    Clock
} from 'lucide-react';
import Container from '../Container';
const Info = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: 'Telefon',
            details: ['+90 312 123 45 67', '+90 532 123 45 67'],
            description: 'Acil durumlar için 7/24 ulaşabilirsiniz'
        },
        {
            icon: Mail,
            title: 'E-posta',
            details: ['info@avhakanbuldu.com', 'avhakanbuldu@hukuk.com'],
            description: 'E-posta ile 24 saat içinde yanıt veririm'
        },
        {
            icon: MapPin,
            title: 'Adres',
            details: ['Atatürk Bulvarı No:123', 'Çankaya/Ankara 06420'],
            description: 'Metro ve otobüs ile kolay ulaşım'
        },
        {
            icon: Clock,
            title: 'Çalışma Saatleri',
            details: ['Pazartesi - Cuma: 09:00-18:00', 'Cumartesi: 09:00-14:00'],
            description: 'Randevu ile hafta sonu görüşme mümkün'
        }
    ];
    return (
        <section className="section-padding bg-secondary/30">
            <Container>
                <div className="container-max">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <Card key={index} className="card-elegant text-center animate-fade-in">
                                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <info.icon className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                                    {info.title}
                                </h3>
                                <div className="space-y-1 mb-3">
                                    {info.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-foreground font-medium">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                                <p className="text-muted-foreground text-sm">{info.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Info