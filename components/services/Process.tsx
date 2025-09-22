import React from 'react'
import Container from '../Container'

const Process = () => {
    return (
        <section className="section-padding">
            <Container>
                <div className="container-max">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                            Çalışma Sürecim
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Müvekkillerimle şeffaf ve düzenli bir süreç izleyerek en iyi sonuçları elde ederim.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'İlk Görüşme', description: 'Durum analizi ve hukuki değerlendirme' },
                            { step: '02', title: 'Strateji Belirleme', description: 'En uygun hukuki yol haritası' },
                            { step: '03', title: 'Süreç Yönetimi', description: 'Düzenli bilgilendirme ve takip' },
                            { step: '04', title: 'Sonuç', description: 'Başarılı sonuç ve müvekkil memnuniyeti' }
                        ].map((process, index) => (
                            <div key={index} className="text-center animate-fade-in">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                                        {process.step}
                                    </div>
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/30 -z-10"></div>
                                    )}
                                </div>
                                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                                    {process.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Process