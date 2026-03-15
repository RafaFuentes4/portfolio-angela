import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angela Fuentes — Monitora Tecnológica & Coordinadora STEM",
  description:
    "Portfolio de Angela Fuentes Cantero. Vocal de Yes We Tech, coordinadora de Cyber Girl Squad en Google GSEC Málaga. Estudiante de Ingeniería de Sonido e Imagen en la UMA.",
  openGraph: {
    title: "Angela Fuentes — Portfolio",
    description:
      "Monitora tecnológica y coordinadora de eventos STEM en Google GSEC Málaga.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
