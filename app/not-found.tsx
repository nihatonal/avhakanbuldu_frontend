import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-32 min-h-screen">
      <div className="max-w-md w-full space-y-8 text-center">
        <Logo />

        <h2 className="mt-6 text-3xl font-extrabold text-foreground">
          Aradığınız sayfa bulunamadı
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Üzgünüz, girdiğiniz web adresi sitemizde mevcut değil.
          Lütfen aşağıdaki seçeneklerden birini kullanın.
        </p>

        <div className="mt-8 space-y-4">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold text-primary-foreground gradient-primary shadow-elegant hover:bg-primary-light transition"

          >
            Ana Sayfaya Dön
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Daha fazla yardım için{" "}
          <Link
            href="/iletisim"
            className="font-medium text-accent hover:text-accent-dark"

          >
            bizimle iletişime geçin
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
