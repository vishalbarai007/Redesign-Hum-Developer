import { Footer } from "@/components/reusable/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const validPages: Record<string, { title: string; subtitle: string; content: string[] }> = {
    privacy: {
      title: "Privacy & Data Protection Policy",
      subtitle: "Commitment to Client Confidentiality & MahaRERA Compliance",
      content: [
        "HUM Developers Pvt. Ltd. prioritizes the privacy and security of prospective homebuyers and investors. Any personal contact details (such as your full name, telephone number, email address, or unit interest) submitted through our official website or appointment booking desks are strictly utilized for direct communication regarding project specifications, site tours, and booking documentation.",
        "We maintain a strict zero-spam and zero-third-party-broker policy. Your details are never sold, rented, or traded with unverified marketing agencies.",
        "All data transmissions are processed via encrypted secure transport layer channels in accordance with the Information Technology Act and MahaRERA guidelines."
      ]
    },
    terms: {
      title: "Terms & Conditions of Showcase",
      subtitle: "Official Developer Terms of Use",
      content: [
        "The imagery, elevations, floor plans, layouts, and specifications displayed on this digital showcase are artistic impressions and conceptual representations of projects undertaken by HUM Developers.",
        "All dimensions mentioned in floor plans (sq.ft. and sq.m.) are based on RERA carpet area definitions. Furniture, decorative fittings, and soft furnishings shown in 3D walkthroughs are indicative and do not form part of standard sales agreements.",
        "Formal sales bookings are governed exclusively by executed Registered Agreements for Sale, sanctioned municipal building plans, and statutory MahaRERA disclosures."
      ]
    },
    rera: {
      title: "MahaRERA Statutory Disclosures",
      subtitle: "Real Estate (Regulation and Development) Act Compliance",
      content: [
        "HUM Developers operates under strict adherence to Maharashtra Real Estate Regulatory Authority (MahaRERA) mandates. Every ongoing residential and commercial development is independently registered with its dedicated MahaRERA certificate number.",
        "Flagship Registration Highlight: HUM Emerald Heights (MahaRERA No: PM1180002502952), HUM Solaris (MahaRERA No: P51800048123), HUM GS Heights (MahaRERA No: P51800031940), HUM Gagansagar (MahaRERA No: P51800037889).",
        "Disclosures including sanctioned architectural plans, title certificates, encumbrance certificates, development timelines, and quarterly progress updates are accessible on the official portal: https://maharera.mahaonline.gov.in."
      ]
    }
  };

  const pageData = validPages[slug];
  if (!pageData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/humLogo.svg" alt="HUM Developers" width={140} height={45} className="h-8 w-auto object-contain" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center text-xs uppercase tracking-wider text-[#265CA0] hover:text-[#183C68] font-bold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#265CA0]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#265CA0] font-bold">
                {pageData.subtitle}
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl text-slate-900 font-bold mb-3">
              {pageData.title}
            </h1>
          </div>

          <div className="p-8 sm:p-10 bg-white border border-slate-200 rounded-lg shadow-sm space-y-5 text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
            {pageData.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
