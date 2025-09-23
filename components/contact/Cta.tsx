import React from 'react'
import { Button } from '../ui/button'
import {
    Phone,
    MessageSquare
} from 'lucide-react';
const Cta = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
            <div className="container-max text-center animate-slide-up">
                <MessageSquare className="h-16 w-16 text-accent mx-auto mb-6" />
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                    Acil Durum mu?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                    Gözaltı, tutuklama veya acil hukuki durumlarda 7/24 ulaşabilirsiniz.
                    Derhal size yardımcı olmaya hazırım.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark">
                        <a href="tel:+905321234567">
                            <Phone className="mr-2 h-5 w-5" />
                            Acil Hat: +90 532 123 45 67
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-[#075E54] border-none text-white hover:bg-white hover:text-primary">
                        <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer">
                            WhatsApp İletişim
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Cta