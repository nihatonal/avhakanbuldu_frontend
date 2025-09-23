import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import React from 'react'
import { Button } from '../ui/button';
import {
    Phone
} from 'lucide-react';
import { Badge } from '../ui/badge';
import lawyerPortrait from '@/assets/images/lawyer-portrait.jpg';
import Container from '../Container';
const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-primary to-primary-light text-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 pb-12 md:pb-0">

                    {/* METİN BLOĞU */}
                    <div className="flex flex-col justify-center items-start md:min-h-screen md:py-20 py-12">
                        <Badge className="mb-4 bg-accent text-accent-foreground">Profesyonel Avukat</Badge>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            Av. Hakan Buldu
                        </h1>
                        <p className="text-xl mb-8 text-white/90">
                            15 yılı aşkın deneyimimle, müvekkillerimin haklarını korumak ve adaletin tecellisi için çalışıyorum.
                            Güvenilir, deneyimli ve sonuç odaklı hukuki hizmet anlayışımla yanınızdayım.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-dark">
                                <Link href="/iletisim">
                                    <Phone className="mr-2 h-5 w-5" />
                                    İletişime Geçin
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                                <Link href="/faaliyet-alanlari">Faaliyet Alanları</Link>
                            </Button>
                        </div>
                    </div>

                    {/* GÖRSEL BLOĞU */}
                    <div className="relative flex justify-center ">
                        <div className="md:sticky md:top-24 self-start w-full max-w-[400px] rounded-2xl shadow-elegant overflow-hidden aspect-[3/4]">
                            <Image
                                src={lawyerPortrait}
                                alt="Av. Mehmet Özkan"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>


    )
}

export default HeroSection