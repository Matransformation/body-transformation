// pages/index.tsx

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
      title="Salle de sport à Anglet avec coaching – Body Transformation"
      description="Body Transformation Anglet : coaching sportif, suivi nutritionnel, accès libre à la salle, ambiance conviviale et résultats durables."
    >
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
              "Salle de sport Anglet : coaching sportif, accès libre, suivi nutritionnel, ambiance conviviale et résultats durables.",
          })}
        </Script>
        <Script
          type="application/ld+json"
          id="ld-faq"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quels sont les horaires d’ouverture ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous sommes ouverts du lundi au vendredi de 9h à 20h30, et le samedi de 9h à 12h15."
                }
              },
              {
                "@type": "Question",
                name: "Peut-on venir en accès libre ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, notre formule accès libre permet de s'entraîner en autonomie avec tout le matériel à disposition."
                }
              },
              {
                "@type": "Question",
                name: "Proposez-vous un suivi diététique ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, Clémence, notre diététicienne diplômée, propose un accompagnement nutritionnel personnalisé."
                }
              },
              {
                "@type": "Question",
                name: "Est-ce adapté aux débutants ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tout à fait. Chaque membre suit un programme individuel, quel que soit son niveau."
                }
              }
            ]
          })}
        </Script>

        <link rel="canonical" href="https://www.body-transformation.fr" />
        <meta property="og:title" content="Salle de sport à Anglet avec coaching – Body Transformation" />
        <meta
          property="og:description"
          content="Coaching sportif, accès libre et suivi diététique sur-mesure à Anglet. Résultats rapides, ambiance conviviale."
        />
        <meta
          property="og:image"
          content="https://www.body-transformation.fr/01003167.JPG"
        />
        <meta property="og:url" content="https://www.body-transformation.fr" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
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
            Coaching sportif & diététique<br className="hidden md:block" />
            Accès libre ou encadrement personnalisé dans notre salle à Anglet.
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

      {/* Club & Team */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-3xl font-bold">Votre club & votre équipe</h2>
          <p className="text-gray-700">
            Implanté au cœur d’Anglet, Body Transformation c’est 250 m² de matériel
            haut de gamme, un coin détente, et deux coachs diplômés (sport &
            diététique) à votre écoute. Ouvert du lundi au vendredi de 9h à 20h20 et le samedi de 9h à 12h.
            <br className="mt-2" />
            <strong>
              Même en petit groupe, chaque adhérent suit un programme différent selon ses objectifs et son niveau. Et pour ceux qui préfèrent s’entraîner en autonomie, notre formule <em>accès libre</em> vous permet de profiter de tous les équipements librement.
            </strong>
          </p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Prestations de notre salle de sport à Anglet
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
                Accès libre à la salle
              </h3>
              <p className="text-gray-600">
                Vous souhaitez vous entraîner à votre rythme ? Profitez de notre
                matériel haut de gamme en autonomie avec notre formule d'accès libre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold">Découvrez notre salle de sport à Anglet en images</h2>
        </div>
        <div className="container mx-auto px-4">
          <ImageCarousel />
        </div>
      </section>

      {/* Pourquoi choisir */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Pourquoi choisir notre salle de sport à Anglet ?</h2>
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

      {/* Localisation et Accès */}
      <section className="py-16 bg-gray-50 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Où nous trouver ?</h2>
          <p className="text-gray-700 mb-4">
            La salle Body Transformation se situe au <strong>10 rue Jules Védrines, 64600 Anglet</strong>, à 2 minutes de la route de Bayonne.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.7576427571485!2d-1.5024630073617393!3d43.46565669662544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd513f2801289467%3A0x986ff976103f3ae0!2sBody%20Transformation%20-%20salle%20de%20sport%20Anglet!5e0!3m2!1sfr!2sfr!4v1748587477563!5m2!1sfr!2sfr" // Remplace par l'URL complète de Google Maps
            width="100%"
            height="300"
            className="rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">FAQ – Salle de sport à Anglet</h2>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-semibold text-lg">Quels sont les horaires d’ouverture ?</h3>
              <p className="text-gray-700">
                Nous sommes ouverts du lundi au vendredi de 9h à 20h30, et le samedi de 9h à 12h15.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Peut-on venir en accès libre ?</h3>
              <p className="text-gray-700">
                Oui, notre formule <strong>accès libre</strong> permet de s'entraîner en autonomie avec tout le matériel à disposition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Proposez-vous un suivi diététique ?</h3>
              <p className="text-gray-700">
                Oui, Clémence, notre diététicienne diplômée, propose un accompagnement nutritionnel personnalisé à tous les adhérents.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Est-ce adapté aux débutants ?</h3>
              <p className="text-gray-700">
                Tout à fait. Chaque membre suit un programme individuel, que vous soyez débutant ou confirmé.
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
