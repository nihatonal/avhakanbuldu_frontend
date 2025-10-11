import type { Metadata } from "next";
import HeroSection from '@/components/services/HeroSection';
import PracticeAreas from '@/components/services/PracticeAreas';
import WhyChooseMe from '@/components/services/WhyChooseMe';
import Process from '@/components/services/Process';
import Cta from '@/components/services/Cta';
import Script from "next/script";

const siteUrl = "https://www.hakanbuldu.com";

export const metadata: Metadata = {
    title: "Faaliyet Alanlarımız - Hakan Buldu | Uzman Hukuki Hizmetler",
    description:
        "Ceza, idare, iş ve aile hukuku alanlarında 15+ yıllık tecrübeyle kapsamlı ve güvenilir hukuki destek sunuyorum.",
    alternates: {
        canonical: `${siteUrl}/faaliyet-alanlari`
    }
};

const Services = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Faaliyet Alanlarımız",
        url: `${siteUrl}/faaliyet-alanlari`,
        description:
            "Hakan Buldu, ceza, idare, iş ve aile hukuku gibi birçok alanda kapsamlı hukuki hizmet sunmaktadır.",
        mainEntity: [
            {
                "@type": "Service",
                name: "Ceza Hukuku",
                serviceType: "Ağır ceza davaları, tutuklamaya itiraz, istinaf ve temyiz başvuruları",
                areaServed: "TR",
                provider: {
                    "@type": "Person",
                    name: "Hakan Buldu"
                }
            },
            {
                "@type": "Service",
                name: "İdare Hukuku",
                serviceType: "İptal davaları, idari para cezaları, anayasa başvuruları",
                areaServed: "TR",
                provider: {
                    "@type": "Person",
                    name: "Hakan Buldu"
                }
            },
            {
                "@type": "Service",
                name: "İş Hukuku",
                serviceType: "İşe iade, tazminat davaları, iş kazası ve SGK uyuşmazlıkları",
                areaServed: "TR",
                provider: {
                    "@type": "Person",
                    name: "Hakan Buldu"
                }
            },
            {
                "@type": "Service",
                name: "Aile Hukuku",
                serviceType: "Boşanma, velayet, nafaka ve mal paylaşımı davaları",
                areaServed: "TR",
                provider: {
                    "@type": "Person",
                    name: "Hakan Buldu"
                }
            }
        ]
    };



    return (
        <>
            <Script type="application/ld+json" id="practice-jsonld">
                {JSON.stringify(jsonLd)}
            </Script>

            <div className="overflow-hidden bg-background">
                {/* Hero Section */}
                <HeroSection />

                {/* Practice Areas Grid */}
                <PracticeAreas />

                {/* Why Choose Us */}
                <WhyChooseMe />

                {/* Process Section */}
                <Process />

                {/* CTA Section */}
                <Cta />
            </div>
        </>
    );
};

export default Services;