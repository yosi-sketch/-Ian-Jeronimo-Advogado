import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = "/Logotipo jurídico Adelaide Ferreira em azul-marinho.png";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: "Adelaide Ferreira Advogados Associados | Diamantina, MG",
  description:
    "Advocacia Civil, Previdenciária e Trabalhista em Diamantina, MG. Atendimento também em Felício dos Santos e Itamarandiba. Contato: (38) 3531-6697.",
  keywords: ["Adelaide Ferreira Advogados Associados", "advocacia em Diamantina", "Direito Civil", "Direito Previdenciário", "Direito Trabalhista", "Felício dos Santos", "Itamarandiba"],
  openGraph: {
    title: "Adelaide Ferreira Advogados Associados",
    description:
      "Advocacia Civil, Previdenciária e Trabalhista em Diamantina e região, Minas Gerais.",
    locale: "pt_BR",
    siteName: "Adelaide Ferreira Advogados Associados",
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 2043,
            height: 770,
            alt: "Adelaide Ferreira Advogados Associados",
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title: "Adelaide Ferreira Advogados Associados",
    description:
      "Advocacia Civil, Previdenciária e Trabalhista em Diamantina e região, Minas Gerais.",
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#202640",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable + " scroll-smooth"}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
