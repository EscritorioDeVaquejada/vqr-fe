import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VQR",
  description: "VQR Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${styles.body}`}>{children}</body>
    </html>
  );
}
