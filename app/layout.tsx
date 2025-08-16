import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibn Rajab Academy",
  description: "Classical Knowledge. Modern Experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f1e9de] text-[#5b2f2a] antialiased`}>{children}</body>
    </html>
  );
}