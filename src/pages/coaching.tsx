// src/pages/coaching.tsx
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import {
  BoltIcon,
  ChartBarIcon,
  UsersIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Coaching() {
  return (
    <Layout
      title="Coach sportif Anglet – Body Transformation"
      description="Découvrez nos formules de coaching sportif et diététique à Anglet : programmes sur-mesure, suivi expert et résultats durables."
    >
      <Head>
        {/* JSON-LD pour coaching */}
        <Script
          type="application/ld+json"
          id="ld-service"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Coaching sportif Body Transformation",
            serviceType: ["Coaching sportif", "Nutrition"],
            areaServed: "Anglet",
            url: "https://www.body-transformation.fr/coach-sportif-anglet",
            logo: "https://www.body-transformation.fr/653a5f900c5b9_clmenceromainlogobodytransformation.png",
            description:
              "Programmes de coaching sportif et diététique à Anglet, personnalisés et encadrés par des professionnels.",
          })}
        </Script>

        {/* Balises SEO */}
        <link rel="canonical" href="https://www.body-transformation.fr/coach-sportif-anglet" />
        <meta property="og:title" content="Coach sportif Anglet – Body Transformation" />
        <meta
          property="og:description"
          content="Coaching sportif et nutritionnel à Anglet : résultats visibles, ambiance conviviale, encadrement professionnel."
        />
        <meta property="og:image" content="https://www.body-transformation.fr/P1000107.JPG" />
        <meta property="og:url" content="https://www.body-transformation.fr/coach-sportif-anglet" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/P1000107.JPG"
          alt="Coaching sportif Anglet"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Coaching sportif à Anglet
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
            Programmes individuels & suivi diététique<br />
            pour des résultats rapides et durables
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F97316] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Réservez votre séance offerte
          </Link>
        </div>
      </section>

      {/* Nos points forts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos points forts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center">
              <BoltIcon className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Approche globale</h3>
              <p className="text-gray-600">
                Sport, nutrition, supplémentation et récupération : tout est pris en charge.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center">
              <ChartBarIcon className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Centre sportif</h3>
              <p className="text-gray-600">
                250 m² d’installations pour vous recevoir dans les meilleures dispositions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center">
              <UsersIcon className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Groupes limités</h3>
              <p className="text-gray-600">
                Maximum 8 personnes pour un suivi ultra-personnalisé et convivial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Votre parcours</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Contactez-nous", icon: <UsersIcon className="w-8 h-8 text-[#F97316]" /> },
              { label: "Bilan initial", icon: <BoltIcon className="w-8 h-8 text-[#F97316]" /> },
              { label: "Programme sur-mesure", icon: <ChartBarIcon className="w-8 h-8 text-[#F97316]" /> },
              { label: "Suivi & ajustements", icon: <ArrowRightIcon className="w-8 h-8 text-[#F97316]" /> },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
                {step.icon}
                <p className="mt-4 font-semibold">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coachs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Rencontrez notre équipe</h2>
          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg max-w-lg">
              <div className="relative w-full h-80">
                <Image
                  src="/653a64f24dba5_romaingavillet_198196362_796888621015530_8737562002313266136_n.jpg"
                  alt="Romain & Clémence, Coach sportif et Diététicienne"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold">Romain, Romain & Clémence</h3>
                <p className="text-gray-600 mt-2">Coach sportif & Diététicienne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre corps ?</h2>
        <Link
          href="/contact"
          className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Demande de RDV gratuit
        </Link>
      </section>
    </Layout>
  );
}
