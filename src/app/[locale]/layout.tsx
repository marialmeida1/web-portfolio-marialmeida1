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
      <body className={poppins.className}>
        <Navbar />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
