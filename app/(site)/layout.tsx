import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Toaster } from "sonner";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import "../globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/humLogo.svg",
    shortcut: "/humLogo.svg",
    apple: "/humLogo.svg"
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#0F172A] min-h-screen flex flex-col selection:bg-[#265CA0] selection:text-white font-sans">
        <SmoothScrollProvider>
          {children}
          <Toaster position="bottom-right" theme="light" richColors />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
