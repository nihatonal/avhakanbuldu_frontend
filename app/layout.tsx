
import CookieBannerPortal from "@/components/CookieBannerPortal";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="tr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#9F8CFD" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

      </head>
      <body className="font-poppins antialiased">
        <CookieBannerPortal />
        {children}
        <Toaster />

      </body>
    </html>
  );
};
export default RootLayout;
