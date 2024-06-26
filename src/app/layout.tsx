import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WORKSHOP – O PODER DE REACIONAR-SE",
  description:
    "Não deixe escapar a chance de transformar sua carreira e negóciosp",
  openGraph: {
    title: "WORKSHOP – O PODER DE REACIONAR-SE",
    description:
      "Não deixe escapar a chance de transformar sua carreira e negócios",
    url: "https://opoderderelacionarse.netlify.app/", // substitua pelo URL do seu site
    type: "website",
    images: [
      {
        url: "/banner-home-mobile.webp", // URL relativa da imagem na pasta public
        width: 800,
        height: 600,
        alt: "Descrição da imagem",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
