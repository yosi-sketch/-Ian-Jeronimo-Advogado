import type { Metadata, Viewport } from "next";
import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = "/Logotipo IJ Advocacia Criminal.png";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: "Ian Jerônimo | Advocacia Criminal | Lavras, MG",
  description:
    "Advogado criminalista em Lavras, MG. Orientação criminal, acompanhamento processual e atuação no Tribunal do Júri. Contato: (35) 99118-0166.",
  keywords: ["Ian Jerônimo", "advogado criminalista em Lavras", "Direito Criminal", "Tribunal do Júri", "Lavras MG"],
  icons: {
    icon: [{ url: "/favicon-ij.ico?v=2", sizes: "32x32", type: "image/x-icon" }, { url: "/favicon-ij.png?v=2", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon-ij.png?v=2", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-ij.ico?v=2",
  },
  openGraph: {
    title: "Ian Jerônimo | Advocacia Criminal",
    description:
      "Advocacia criminal em Lavras e região, Minas Gerais.",
    locale: "pt_BR",
    siteName: "Ian Jerônimo | Advocacia Criminal",
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 2172,
            height: 724,
            alt: "Ian Jerônimo | Advocacia Criminal",
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title: "Ian Jerônimo | Advocacia Criminal",
    description:
      "Advocacia criminal em Lavras e região, Minas Gerais.",
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#090d0e",
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
