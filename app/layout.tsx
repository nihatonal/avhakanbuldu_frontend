
import CookieBannerPortal from "@/components/CookieBannerPortal";
import "./globals.css";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="tr">
      <body className="font-poppins antialiased">
        <CookieBannerPortal />
        {children}

      </body>
    </html>
  );
};
export default RootLayout;
