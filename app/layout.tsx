import "./globals.css";
import '@/lib/fontawesome';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // Suporte para caracteres em português
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'], // Selecione os pesos desejados
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
