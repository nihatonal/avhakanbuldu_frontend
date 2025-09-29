import CookieBanner from "@/components/CookieBanner";
import "./globals.css";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="tr">
      <body className="font-poppins antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
};
export default RootLayout;
