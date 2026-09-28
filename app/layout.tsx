import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = "/karine-lima/compartilhamento.jpg";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: "Karine Lima | Advocacia Familiarista em Teófilo Otoni",
  description:
    "Advocacia familiarista em Teófilo Otoni, MG. Informações sobre divórcio, guarda, convivência familiar, pensão alimentícia e adoção.",
  keywords: [
    "Karine Lima",
    "advogada familiarista em Teófilo Otoni",
    "direito de família",
    "divórcio em Teófilo Otoni",
    "guarda e convivência familiar",
    "pensão alimentícia",
    "adoção",
  ],
  openGraph: {
    title: "Karine Lima | Advocacia Familiarista",
    description:
      "Informação jurídica e atendimento cuidadoso em Direito de Família, em Teófilo Otoni, Minas Gerais.",
    locale: "pt_BR",
    siteName: "Karine Lima",
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 1200,
            height: 630,
            alt: "Karine Lima — Advocacia Familiarista em Teófilo Otoni",
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title: "Karine Lima | Advocacia Familiarista",
    description:
      "Informação jurídica e atendimento cuidadoso em Direito de Família, em Teófilo Otoni, Minas Gerais.",
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
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
