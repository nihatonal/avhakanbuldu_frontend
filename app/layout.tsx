// app/layout.tsx
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import CookieBanner from '@/components/CookieBanner';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import Script from 'next/script';
import './globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {GA_MEASUREMENT_ID && (
          <>
            {/* GA4 global site tag */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        {/* Çerez bannerı */}
        <CookieBanner />

        {/* Sayfa geçişlerini otomatik izleyen tracker */}
        <AnalyticsTracker />

        {children}
      </body>
    </html>
  );
}
