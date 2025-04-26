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

// Meta tags - Adiciona aqui as tags de metadados para SEO
import Head from 'next/head';

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
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Portfólio de Mariana Almeida, desenvolvedora de software especializada em front-end e design de interfaces." />
          <meta name="keywords" content="portfólio, Mariana Almeida, desenvolvedora, front-end, software, design de interfaces, design ux/ui" />
          <meta name="author" content="Mariana Almeida" />
          <meta property="og:title" content="Mariana Almeida - Portfólio" />
          <meta property="og:description" content="Explore o portfólio de Mariana Almeida, com projetos e experiências na área de desenvolvimento de software e design." />
          <meta property="og:image" content="/favicon.ico" />
          <meta property="og:url" content="https://www.marialmeida.site/" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
          <title>Portfólio de Mariana Almeida</title>
        </Head>
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
