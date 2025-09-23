import React from 'react'
import { Card } from '../ui/card'
import {
    CheckCircle
} from 'lucide-react';
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
            description: 'Durumunuzu değerlendirip size dönüş yaparım'
        },
        {
            step: '3',
            title: 'Randevu',
            description: 'Ücretsiz ilk görüşme randevusu alın'
        },
        {
            step: '4',
            title: 'Çözüm',
            description: 'Hukuki çözüm sürecini başlatırız'
        }
    ];

    return (
        <div className="animate-scale-in">
            <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-primary mb-4">
                    Nasıl Çalışıyoruz?
                </h2>
                <p className="text-muted-foreground">
                    Hukuki danışmanlık sürecimiz şeffaf ve müvekkil odaklıdır.
                    İşte sizinle nasıl çalıştığımız:
                </p>
            </div>

            <div className="space-y-6">
                {processSteps.map((step, index) => (
                    <Card key={index} className="card-elegant">
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
                ))}
            </div>

            <Card className="card-accent mt-8">
                <div className="flex items-start space-x-4 p-2">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-display text-lg font-semibold text-primary mb-2">
                            Ücretsiz İlk Danışmanlık
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            İlk görüşmemiz tamamen ücretsizdir. Durumunuzu değerlendirip,
                            size en uygun hukuki çözüm önerilerini sunuyorum.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ProcessSteps