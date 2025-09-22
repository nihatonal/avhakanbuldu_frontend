import React from 'react'
import { Badge } from '../ui/badge'

const HeroSection = () => {
    return (
        <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
            <div className="container-max text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">Kapsamlı Hukuki Hizmetler</Badge>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
                    Faaliyet Alanlarım
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in">
                    Geniş hukuk bilgim ve uzmanlaştığım alanlarla, müvekkillerime kapsamlı hukuki hizmet sunuyorum.
                    Her alanda deneyimli ve güvenilir çözümler için yanınızdayım.
                </p>
            </div>
        </section>
    )
}

export default HeroSection