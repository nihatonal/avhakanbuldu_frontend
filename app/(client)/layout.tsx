import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";


const siteUrl = "https://www.hakanbuldu.com";


export const metadata: Metadata = {
  title: "Av. Hakan Buldu | Ceza, İdare, İş ve Aile Hukukunda Uzman Avukat",
  description:
    "15+ yıllık deneyim, 500+ dava ve %95 başarı oranıyla Av. Hakan Buldu; ceza, idare, iş ve aile hukuku alanlarında güvenilir ve etkili hukuki destek sunar.",
  alternates: {
    canonical: `${siteUrl}/`
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Av. Hakan Buldu",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/arama?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};
const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Av. Hakan Buldu Hukuk Bürosu",
  image: `${siteUrl}/images/hakan-buldu.jpg`, // varsa avukatın fotoğrafı
  url: siteUrl,
  description:
    "Ceza, idare, iş ve aile hukuku alanlarında uzman avukatlık hizmetleri sunan İstanbul merkezli hukuk bürosu.",
  areaServed: "TR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR"
  },
  telephone: "+90-5xx-xxx-xx-xx", // Gerçek numarayla değiştir
  priceRange: "$$", // Orta segment
  founder: {
    "@type": "Person",
    name: "Av. Hakan Buldu"
  },
  employee: {
    "@type": "Person",
    name: "Av. Hakan Buldu"
  },
  sameAs: [
    "https://www.linkedin.com/in/...",
    "https://www.instagram.com/...",
    "https://www.avukatlar.org/..."
  ],
  legalName: "Av. Hakan Buldu Hukuk Bürosu"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script type="application/ld+json" id="website-jsonld">
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script type="application/ld+json" id="legalservice-jsonld">
        {JSON.stringify(legalServiceJsonLd)}
      </Script>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
