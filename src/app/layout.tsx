import type { Metadata } from "next";
import { Inria_Serif, Outfit } from "next/font/google";
import "./globals.css";

const inriaSerif = Inria_Serif({
  weight: "400",
});

const outfit = Outfit({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REMY Marketing | Agence de Marketing Digital",
  description:
    "REMY Marketing - Votre partenaire en stratégie marketing, performance média, création de contenu et croissance organique sur les réseaux sociaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.className}  antialiased`}>{children}</body>
    </html>
  );
}
