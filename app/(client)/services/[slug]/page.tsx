import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { practicesData } from '@/constants/practiceAreas';
import ServiceDetails from '@/components/ServiceDetails';

type Props = { params: Promise<{ slug: string; }>; };

const siteUrl = 'https://www.hakanbuldu.com';
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const area = practicesData.find((item) => item.slug === slug);

    if (!area) {
        return {
            title: 'Hukuk Hizmeti',
            description: 'Uzmanlık alanları hakkında bilgi alın.',
            alternates: {
                canonical: `${siteUrl}/faaliyet-alanlari`,
            },
        };
    }
    const canonical = `${siteUrl}/faaliyet-alanlari/${area.slug}`;

    return {
        title: `${area.title} | Avukat Hakan Buldu`,
        description: area.description,
        alternates: {
            canonical,
        },
        openGraph: {
            title: area.title,
            description: area.description,
            url: canonical,
            type: 'website',
            images: [
                {
                    url: `${siteUrl}/images/services/${area.slug}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: area.title,
                },
            ],
        },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } =await params;
    const area = practicesData.find((item) => item.slug === slug);

    if (!area) {
        return notFound();
    }
    const safeArea = {
        title: area.title,
        description: area.description,
        services: area.services,
        detailTitle: area.detailTitle,
        detailDescription: area.detailDescription,
        detailedServices: area.detailedServices,
        faq: area.faq,
        examples: area.examples,
    };


    return (
        <ServiceDetails area={safeArea} />
    );

}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
    return practicesData.map((area) => ({ slug: area.slug }));
}
