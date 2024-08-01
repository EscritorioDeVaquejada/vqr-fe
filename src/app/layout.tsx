import type { Metadata } from 'next';
import './globals.css';

import { Inter } from 'next/font/google';

import { RootLayout as RootLayoutLayout } from '@/layouts';

import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VQR',
  description: 'VQR Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${styles.body}`}>
        <RootLayoutLayout>{children}</RootLayoutLayout>
      </body>
    </html>
  );
}
