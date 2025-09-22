import React from 'react'
import { Card } from '../ui/card'
import {
    Award,
    Scale,
    Users,
    Trophy,

} from 'lucide-react';
import Container from '../Container';
const Achievements = () => {
    const achievements = [
        { icon: Trophy, title: '500+ Başarılı Dava', description: 'Müvekkillerim için kazandığım davalar' },
        { icon: Users, title: '1000+ Müvekkil', description: 'Hizmet verdiğim memnun müvekkil sayısı' },
        { icon: Award, title: '%95 Başarı Oranı', description: 'Üstlendiğim davalardaki başarı oranım' },
        { icon: Scale, title: '15+ Yıl Deneyim', description: 'Hukuk alanındaki profesyonel deneyimim' }
    ];

    return (
        <section className="section-padding bg-secondary/30">
            <Container>
                <div className="container-max">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <Card key={index} className="card-elegant text-center animate-fade-in">
                                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <achievement.icon className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                    {achievement.title}
                                </h3>
                                <p className="text-muted-foreground">{achievement.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Achievements