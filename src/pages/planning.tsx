// src/pages/planning.tsx
import Layout from "@/components/Layout";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Planning() {
  return (
    <Layout
      title="Planning des séances – Body Transformation Anglet"
      description="Téléchargez le planning des séances à Body Transformation Anglet : PDF A4 paysage à jour et consultable à tout moment."
    >
      {/* JSON-LD OpeningHoursSpecification */}
      <Head>
        <Script
          type="application/ld+json"
          id="ld-openinghours"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            name: "Body Transformation",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                opens: "09:00",
                closes: "20:20",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "12:15",
              },
            ],
          })}
        </Script>
      </Head>

      {/* En-tête */}
      <section className="py-16 bg-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          Planning des séances
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Toutes les séances durent 1 heure et sont limitées à 8 personnes.<br/>
          Cliquez ci-dessous pour télécharger le planning au format PDF.
        </p>
        <Link
          href="/planning.pdf"
          download
          className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Télécharger le planning (PDF)
        </Link>
      </section>

      
    </Layout>
  );
}
