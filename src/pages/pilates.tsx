// pages/pilates.tsx

import Layout from "@/components/Layout";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import {
  BoltIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Pilates() {
  return (
    <Layout
      title="Cours de Pilates à Anglet – Body Transformation"
      description="Rejoignez nos cours de Pilates à Anglet tous les mardis à 12h15. Renforcez votre centre, améliorez votre posture et tonifiez votre corps."
    >
      <Head>
        {/* JSON-LD pour le service Pilates */}
        <Script type="application/ld+json" id="ld-pilates" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: "Cours de Pilates – Body Transformation Anglet",
            description:
              "Cours de Pilates à Anglet, chaque mardi à 12h15, pour renforcer votre centre et améliorer votre posture.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "10 rue Jules Védrines",
              addressLocality: "Anglet",
              postalCode: "64600",
              addressCountry: "FR",
            },
            url: "https://www.body-transformation.fr/pilates",
            telephone: "+33658881560",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Tuesday",
              opens: "12:15",
              closes: "13:15",
            },
          })}
        </Script>

        <link rel="canonical" href="https://www.body-transformation.fr/pilates" />
        <meta
          property="og:title"
          content="Cours de Pilates à Anglet – Body Transformation"
        />
        <meta
          property="og:description"
          content="Participez à nos cours de Pilates à Anglet, tous les mardis à 12h15. Améliorez votre posture et tonifiez votre corps."
        />
        <meta
          property="og:image"
          content="https://www.body-transformation.fr/images/pilates-anglet.jpg"
        />
        <meta
          property="og:url"
          content="https://www.body-transformation.fr/pilates"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/pilates-anglet-hero.jpg"
          alt="Cours de Pilates à Anglet"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-40"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Cours de Pilates à Anglet
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
            Renforcez votre centre, améliorez votre posture et tonifiez votre corps.
            <br className="hidden md:block" />
            Tous les mardis à 12h15 chez Body Transformation.
          </p>
          <Link
            href="/tarifs"
            className="bg-[#F97316] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Voir les tarifs Pilates
          </Link>
        </div>
      </section>

      {/* Présentation du cours */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          <h2 className="text-3xl font-bold">Pourquoi choisir le Pilates à Anglet ?</h2>
          <p className="text-gray-700">
            Le <strong>Pilates</strong> est une méthode douce, idéale pour travailler en profondeur
            les muscles de la sangle abdominale, tout en corrigeant votre posture et en soulageant
            les tensions dorsales. Proposé dans notre <strong>salle de sport à Anglet</strong>,
            ce cours s’adresse à tous les niveaux : débutant, intermédiaire ou confirmé.
          </p>
          <p className="text-gray-700">
            En seulement 60 minutes, vous allez renforcer vos abdominaux profonds, améliorer la mobilité
            de votre colonne vertébrale et favoriser la coordination musculaire. Nos cours de{" "}
            <strong>Pilates Anglet</strong> sont encadrés par un professeur certifié, spécialisé dans
            la technique Pilates classique et contemporaine.
          </p>
        </div>
      </section>

      {/* Bienfaits & Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Bienfaits du Pilates</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            <li className="flex items-start space-x-3">
              <BoltIcon className="w-6 h-6 text-[#F97316] mt-1" />
              <span>
                <strong>Renforcement du centre (core)</strong> : sollicitation des muscles profonds
                de l’abdomen, dorsaux et périnée.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <BoltIcon className="w-6 h-6 text-[#F97316] mt-1" />
              <span>
                <strong>Amélioration de la posture</strong> : correction des déséquilibres posturaux,
                diminution des douleurs lombaires.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <BoltIcon className="w-6 h-6 text-[#F97316] mt-1" />
              <span>
                <strong>Souplesse et mobilité</strong> : étirements ciblés des chaînes musculaires,
                assouplissement des articulations.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <BoltIcon className="w-6 h-6 text-[#F97316] mt-1" />
              <span>
                <strong>Tonification harmonieuse</strong> : renforcement musculaire sans prise
                de volume, travail postural équilibré.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          <h2 className="text-3xl font-bold">Cours de Pilates – Pour qui ?</h2>
          <p className="text-gray-700">
            Nos séances de <strong>Pilates Anglet</strong> conviennent à :
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 mx-auto max-w-xl">
            <li>Débutants souhaitant découvrir le Pilates et travailler le gainage en douceur.</li>
            <li>Personnes souffrant de maux de dos ou de tensions posturales.</li>
            <li>Sportifs désirant améliorer leur centre pour optimiser leurs performances.</li>
            <li>Femmes enceintes (après le premier trimestre) et post-partum.</li>
            <li>Seniors cherchant une activité à faible impact pour préserver leurs articulations.</li>
          </ul>
        </div>
      </section>

      {/* Déroulement d’une séance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Déroulement d’une séance</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Échauffement doux</strong> : activation respiratoire et mobilisation articulaire.
            </li>
            <li>
              <strong>Travail au sol (matwork)</strong> : exercices de base (Ab Prep, The Hundred, Single Leg
              Stretch).
            </li>
            <li>
              <strong>Renforcement dynamique</strong> : enchaînements plus intenses (Roll Up, Spine Twist,
              Leg Circles).
            </li>
            <li>
              <strong>Étirements et relâchement</strong> : postures pour détendre la colonne et relâcher les
              tensions.
            </li>
            <li>
              <strong>Respiration finale</strong> : retour au calme avec des respirations profondes et
              visualisations.
            </li>
          </ol>
        </div>
      </section>

      {/* Tarifs & Réservation */}
      <section className="py-16 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tarifs & Réservation</h2>
          <p className="text-gray-700 mb-4">
            Le cours de <strong>Pilates à Anglet</strong> est accessible au tarif unique de{" "}
            <strong>15 €</strong> par séance. Pour plus d’informations sur nos formules et abonnements,
            rendez-vous sur la{" "}
            <Link
              href="/tarifs"
              className="text-[#F97316] font-semibold hover:underline"
            >
              page Tarifs
            </Link>
            .
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e65b1c] transition"
          >
            Réserver un cours de Pilates
          </Link>
        </div>
      </section>

      {/* FAQ Pilates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">FAQ – Pilates Anglet</h2>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-semibold text-lg">Quels sont les prérequis pour participer ?</h3>
              <p className="text-gray-700">
                Aucun prérequis n’est nécessaire. Le cours s’adapte à tous les niveaux, débutant ou confirmé.
                Prévoyez tenue souple et chaussettes antidérapantes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Dois-je apporter mon propre matériel ?</h3>
              <p className="text-gray-700">
                Non, nous fournissons tapis, ballons et petits accessoires. Apportez seulement votre bouteille
                d’eau.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Quelle est la durée du cours ?</h3>
              <p className="text-gray-700">
                Chaque séance dure environ 60 minutes, de 12h15 à 13h15.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Dois-je réserver à l’avance ?</h3>
              <p className="text-gray-700">
                Oui, le nombre de places est limité à 10 personnes. Réservez via notre page{" "}
                <Link
                  href="/contact"
                  className="text-[#F97316] font-semibold hover:underline"
                >
                  Contact
                </Link>{" "}
                ou en appelant au +33 6 58 88 15 60.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage Pilates */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Témoignages – Cours de Pilates</h2>
          <blockquote className="italic text-gray-700 mb-4">
            « Les cours de Pilates à midi me permettent de reprendre de l’énergie pour
            l’après-midi. Les exercices sont progressifs et le professeur est très à l’écoute. »
          </blockquote>
          <p className="font-semibold text-gray-500">– Sophie L., adhérente Pilates</p>
        </div>
      </section>

      {/* CTA final Pilates */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à découvrir le Pilates à Anglet ?</h2>
        <Link
          href="/tarifs"
          className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e65b1c] transition"
        >
          Voir les tarifs Pilates
        </Link>
      </section>
    </Layout>
  );
}
