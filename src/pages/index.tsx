import Layout from "@/components/Layout";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import {
  BoltIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <Layout
      title="Salle de sport Anglet – Body Transformation"
      description="Body Transformation Anglet : coaching sportif, suivi nutritionnel, ambiance conviviale et résultats durables."
    >
      {/* JSON-LD pour SEO local */}
      <Head>
        <Script
          type="application/ld+json"
          id="ld-healthclub"
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
            url: "https://www.body-transformation.fr",
            telephone: "+33658881560",
            openingHours: "Mo-Fr 09:00-20:30, Sa 09:00-12:15",
            image: "https://www.body-transformation.fr/01003167.JPG",
            description:
              "Salle de sport Anglet : coaching sportif, suivi nutritionnel, ambiance conviviale et résultats durables.",
          })}
        </Script>
      </Head>

      {/* Bandeau Hero */}
      <section className="relative w-full h-[75vh]">
        <Image
          src="/01003167.JPG"
          alt="Salle Body Transformation à Anglet"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Body Transformation Anglet
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mb-6">
            Coaching sportif & diététique <br className="hidden md:block" />
            sur-mesure, pour des résultats rapides et durables.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: "#F97316" }}
            className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Séance d’essai gratuite
          </Link>
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-3xl font-bold">Votre club & votre équipe</h2>
          <p className="text-gray-700">
            Implanté au cœur d’Anglet, Body Transformation c’est 250 m² de matériel
            haut de gamme, un coin détente, et deux coachs diplômés (sport &
            diététique) à votre écoute. Ouvert du lundi au vendredi de 9h à 20h20 et le samedi de 9h à 12h.
          </p>
        </div>
      </section>

      {/* Nos prestations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Nos prestations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <BoltIcon className="w-8 h-8 text-[#F97316] mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Coaching Sportif
              </h3>
              <p className="text-gray-600">
                Cours limités à 8 personnes pour un suivi personnalisé : fitness,
                muscu, cardio, posture, rééducation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <ChartBarIcon className="w-8 h-8 text-[#F97316] mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Consultations Diététiques
              </h3>
              <p className="text-gray-600">
                Bilan nutritionnel et suivi individuel avec notre diététicienne,
                pour optimiser vos résultats.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <UsersIcon className="w-8 h-8 text-[#F97316] mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                Vente de Compléments
              </h3>
              <p className="text-gray-600">
                Protéines, céréales, thés… sélection de qualité pour booster vos
                performances, en ligne et sur place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold">Visitez notre salle</h2>
        </div>
        <div className="container mx-auto px-4">
          <ImageCarousel />
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Pourquoi nous choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <BoltIcon className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Coaching personnalisé
              </h3>
              <p className="text-gray-600">
                Programme sur-mesure alliant fitness, musculation et suivi
                diététique.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <ChartBarIcon className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Résultats rapides</h3>
              <p className="text-gray-600">
                Transformations visibles dès 4 à 6 semaines.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <UsersIcon className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Ambiance conviviale
              </h3>
              <p className="text-gray-600">
                Groupes limités à 8 pour un climat motivant et bienveillant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">Témoignages de nos adhérents</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                text: "Une salle en tout point parfaite ! Deux coachs « Romain » qui vous suivent selon vos besoins, une super ambiance, des adhérents motivés… Sans oublier Clémence et ses précieux conseils en diététique ! La meilleure salle du Pays Basque, c’est certain.",
                author: "Paul P.",
              },
              {
                text: "Grosse ambiance à la salle et super professionnels ! Les Romains sont toujours souriants et motivants. En un mois et demi avec Clémence, j’ai perdu de la masse grasse et pris du muscle. Plus en forme que jamais !",
                author: "David R.M.",
              },
              {
                text: "Cela fait plus de 2 ans que je fréquente cette salle. Une équipe bienveillante, des coachs pédagogues et une ambiance qui donne envie de revenir. Merci à Clémence pour ses conseils diététiques !",
                author: "Marie-Claire R.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <p className="italic text-gray-700">"{t.text}"</p>
                <p className="mt-4 font-semibold text-sm text-gray-500">– {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
        <Link
          href="/contact"
          style={{ backgroundColor: "#F97316" }}
          className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Réservez votre séance d’essai
        </Link>
      </section>
    </Layout>
  );
}
