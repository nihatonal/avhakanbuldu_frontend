import Link from '@/node_modules/next/link'
import React from 'react'
import { Button } from '../ui/button'
import {
    Phone
} from 'lucide-react';
import Container from '../Container';
const Cta = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
            <Container>
                <div className="container-max text-center animate-slide-up">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Deneyimime Güvenin
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
                        15 yılı aşkın deneyimimle, hukuki sorunlarınıza profesyonel çözümler sunuyorum.
                        İlk danışmanlık görüşmesi ücretsizdir.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark">
                            <Link href="/iletisim">
                                <Phone className="mr-2 h-5 w-5" />
                                Ücretsiz Danışmanlık
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                            <Link href="/faaliyet-alanlari">Faaliyet Alanları</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Cta