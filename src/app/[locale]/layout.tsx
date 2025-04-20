// Language
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';

// Styles
import "../globals.css";
import '@/src/lib/fontawesome';
import { Poppins } from 'next/font/google';

// Components
import Navbar from '@/src/components/commons/Navbar';
import Footer from '@/src/components/commons/Footer';

// Google Analytics
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/src/lib/google-analytics';
import { Analytics } from '@/src/components/commons/Analytics'; // cria esse componente se for rastrear rotas

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <NextIntlClientProvider>
          <Analytics />
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
