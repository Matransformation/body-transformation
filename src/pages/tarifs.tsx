// src/pages/tarifs.tsx
import Layout from "@/components/Layout";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

type Plan = {
  sessionsPerWeek: string;
  startingPrice: string;
  tiers: { duration: string; price: string }[];
};

const groupPlans: Plan[] = [
  {
    sessionsPerWeek: "1 séance / semaine",
    startingPrice: "34,99 €",
    tiers: [
      { duration: "1 an", price: "34,99 €/mois" },
      { duration: "6 mois", price: "39,99 €/mois" },
      { duration: "3 mois", price: "44,99 €/mois" },
      { duration: "1 mois", price: "49,99 €/mois" },
    ],
  },
  {
    sessionsPerWeek: "2 séances / semaine",
    startingPrice: "54 €",
    tiers: [
      { duration: "1 an", price: "54 €/mois" },
      { duration: "6 mois", price: "59 €/mois" },
      { duration: "3 mois", price: "63 €/mois" },
      { duration: "1 mois", price: "68 €/mois" },
    ],
  },
  {
    sessionsPerWeek: "3 séances / semaine",
    startingPrice: "65 €",
    tiers: [
      { duration: "1 an", price: "65 €/mois" },
      { duration: "6 mois", price: "70 €/mois" },
      { duration: "3 mois", price: "75 €/mois" },
      { duration: "1 mois", price: "80 €/mois" },
    ],
  },
  {
    sessionsPerWeek: "4 séances / semaine",
    startingPrice: "75 €",
    tiers: [
      { duration: "1 an", price: "75 €/mois" },
      { duration: "6 mois", price: "79 €/mois" },
      { duration: "3 mois", price: "83 €/mois" },
      { duration: "1 mois", price: "88 €/mois" },
    ],
  },
];

const freePlans: Plan[] = [
  {
    sessionsPerWeek: "1 séance / semaine",
    startingPrice: "24,99 €",
    tiers: [
      { duration: "1 an", price: "24,99 €/mois" },
      { duration: "6 mois", price: "28,99 €/mois" },
      { duration: "3 mois", price: "32,99 €/mois" },
      { duration: "1 mois", price: "36,99 €/mois" },
    ],
  },
  {
    sessionsPerWeek: "2 séances / semaine",
    startingPrice: "29,99 €",
    tiers: [
      { duration: "1 an", price: "29,99 €/mois" },
      { duration: "6 mois", price: "33,99 €/mois" },
      { duration: "3 mois", price: "37,99 €/mois" },
      { duration: "1 mois", price: "41,99 €/mois" },
    ],
  },
  {
    sessionsPerWeek: "3 séances / semaine",
    startingPrice: "39,99 €",
    tiers: [
      { duration: "1 an", price: "39,99 €/mois" },
      { duration: "6 mois", price: "43,99 €/mois" },
      { duration: "3 mois", price: "47,99 €/mois" },
      { duration: "1 mois", price: "51,99 €/mois" },
    ],
  },
  {
    sessionsPerWeek: "4 séances / semaine",
    startingPrice: "44,99 €",
    tiers: [
      { duration: "1 an", price: "44,99 €/mois" },
      { duration: "6 mois", price: "48,99 €/mois" },
      { duration: "3 mois", price: "52,99 €/mois" },
      { duration: "1 mois", price: "56,99 €/mois" },
    ],
  },
];

const groupPack = [
  { label: "1 séance", price: "15 €", info: "Valable 1 mois" },
  { label: "10 séances", price: "100 €", info: "Valable 3 mois (10 €/séance)" },
  { label: "25 séances", price: "225 €", info: "Valable 6 mois (9 €/séance)" },
  { label: "50 séances", price: "400 €", info: "Valable 12 mois (8 €/séance)" },
];

const freePack = [
  { label: "1 séance", price: "10 €", info: "Valable 1 mois" },
  { label: "10 séances", price: "70 €", info: "Valable 3 mois (7 €/séance)" },
  { label: "25 séances", price: "150 €", info: "Valable 6 mois (6 €/séance)" },
  { label: "50 séances", price: "250 €", info: "Valable 12 mois (5 €/séance)" },
];

export default function Tarifs() {
    return (
      <Layout
        title="Nos tarifs – Body Transformation Anglet"
        description="Formules Coaching en groupe ou Accès libre, abonnements et carnets de séances à prix dégressifs."
      >
        <Head>
          {/* JSON-LD : HealthClub */}
          <Script
            type="application/ld+json"
            id="ld-healthclub-tarifs"
            strategy="beforeInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: "Body Transformation",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10 rue Jules Védrines",
                addressLocality: "Anglet",
                postalCode: "64600",
                addressCountry: "FR",
              },
              url: "https://www.body-transformation.fr/tarifs",
              telephone: "+33658881560",
              description:
                "Tarifs coaching sportif à Anglet. Formules en groupe ou accès libre dès 24,99 €/mois. Carnets de séances disponibles.",
            })}
          </Script>
  
          {/* SEO classique + OpenGraph */}
          <link rel="canonical" href="https://www.body-transformation.fr/tarifs" />
          <meta property="og:title" content="Nos tarifs – Body Transformation Anglet" />
          <meta
            property="og:description"
            content="Coaching en groupe (8 pers. max.) ou accès libre. Abonnements dès 24,99 € et carnets de séances à prix dégressifs."
          />
          <meta
            property="og:image"
            content="https://www.body-transformation.fr/images/tarifs-cover.jpg"
          />
          <meta
            property="og:url"
            content="https://www.body-transformation.fr/tarifs"
          />
          <meta property="og:type" content="website" />
        </Head>

      {/* En-tête */}
      <section className="py-16 bg-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Nos tarifs</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Coaching en groupe (8 personnes max.) ou accès libre aux installations.<br />
          Abonnements mensuels dès 24,99 € et carnets de séances dégressifs.
        </p>
      </section>

      {/* Coaching en groupe */}
      <section className="px-4 pb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Coaching en groupe</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {groupPlans.map((plan) => (
            <div
              key={plan.sessionsPerWeek}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-center">
                {plan.sessionsPerWeek}
              </h3>
              <p className="text-2xl font-bold text-[#F97316] mb-4 text-center">
                À partir de {plan.startingPrice}
              </p>
              <ul className="space-y-1 mb-4">
                {plan.tiers.map((tier) => (
                  <li
                    key={tier.duration}
                    className="flex justify-between text-gray-700"
                  >
                    <span>{tier.duration}</span>
                    <span>{tier.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Accès libre */}
      <section className="px-4 pb-16 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Accès libre</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {freePlans.map((plan) => (
            <div
              key={plan.sessionsPerWeek}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-center">
                {plan.sessionsPerWeek}
              </h3>
              <p className="text-2xl font-bold text-[#F97316] mb-4 text-center">
                À partir de {plan.startingPrice}
              </p>
              <ul className="space-y-1 mb-4">
                {plan.tiers.map((tier) => (
                  <li
                    key={tier.duration}
                    className="flex justify-between text-gray-700"
                  >
                    <span>{tier.duration}</span>
                    <span>{tier.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Carnets de séances */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Carnets de séances – Coaching en groupe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {groupPack.map((pack) => (
              <div
                key={pack.label}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {pack.label}
                </h3>
                <p className="text-2xl font-bold text-[#F97316] mb-1 text-center">
                  {pack.price}
                </p>
                <p className="text-gray-600 text-sm text-center">
                  {pack.info}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-8">
            Carnets de séances – Accès libre
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {freePack.map((pack) => (
              <div
                key={pack.label}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {pack.label}
                </h3>
                <p className="text-2xl font-bold text-[#F97316] mb-1 text-center">
                  {pack.price}
                </p>
                <p className="text-gray-600 text-sm text-center">
                  {pack.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Prêt(e) à vous lancer ?</h2>
        <Link
          href="/contact"
          className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Je demande ma séance d’essai
        </Link>
      </section>
    </Layout>
  );
}
