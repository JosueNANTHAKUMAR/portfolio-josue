import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josué Nanthakumar | Développeur Full Stack",
  description: "Portfolio de Josué Nanthakumar, Développeur Full Stack Web & Mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
