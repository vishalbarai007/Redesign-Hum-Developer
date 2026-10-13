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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0A0A0C] text-[#F8FAFC] min-h-screen flex flex-col selection:bg-[#C5A880] selection:text-black">
        <SmoothScrollProvider>
          {children}
          <Toaster position="bottom-right" theme="dark" richColors />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
