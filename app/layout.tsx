import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import '../responsive.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desafio Vitalidade',
  description: 'Transforme sua saúde e bem-estar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
   );
}
