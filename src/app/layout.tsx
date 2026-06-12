import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hɛn Mpoano — Our Coast, Our Future",
    template: "%s – Hɛn Mpoano",
  },
  description:
    "Hɛn Mpoano is a Ghanaian non-profit sustaining coastal and marine ecosystems for the benefit of coastal communities.",
  openGraph: {
    title: "Hɛn Mpoano — Our Coast, Our Future",
    description:
      "Hɛn Mpoano is a Ghanaian non-profit sustaining coastal and marine ecosystems for the benefit of coastal communities.",
    url: "https://henmpoano.org",
    siteName: "Hɛn Mpoano",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://henmpoano.org/images/hero-slide-1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hɛn Mpoano — Our Coast, Our Future",
    description:
      "Hɛn Mpoano is a Ghanaian non-profit sustaining coastal and marine ecosystems for the benefit of coastal communities.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://henmpoano.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hɛn Mpoano",
              url: "https://henmpoano.org",
              logo: "https://henmpoano.org/logo.png",
              description:
                "A Ghanaian NGO providing technical, policy and extension support for integrated management of coastal and marine ecosystems.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "38 J. Cross Cole Street, Windy Ridge Extension",
                addressLocality: "Takoradi",
                addressRegion: "Western Region",
                addressCountry: "GH",
                postalCode: "AX 296",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+233-24-471-8165",
                email: "info@henmpoano.org",
                contactType: "General",
              },
            }),
          }}
        />
        <Header />
        <main style={{ minHeight: "calc(100vh - 72px - 400px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
