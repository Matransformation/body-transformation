import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function DietetiquePage() {
  return (
    <>
      <Head>
        <title>Clémence – Diététicienne à Anglet | Body Transformation</title>
        <meta
          name="description"
          content="Clémence, diététicienne à Anglet, vous accompagne dans votre rééquilibrage alimentaire et votre transformation physique avec une approche bienveillante et personnalisée."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Clémence Alaux – Diététicienne à Anglet",
              "image": "https://www.body-transformation.fr/logo.jpg",
              "url": "https://www.body-transformation.fr/dietetique",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 rue Jules Védrines",
                "addressLocality": "Anglet",
                "postalCode": "64600",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.4801,
                "longitude": -1.5218
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "€€",
              "sameAs": [
                "https://www.doctolib.fr/dieteticien/bayonne/clemence-alaux"
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Fil d'Ariane */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>{" "}
          / <span className="text-gray-700 font-medium">Diététique</span>
        </nav>

        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Clémence – Diététicienne à Anglet
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Je suis Clémence, <strong>diététicienne diplômée à Anglet</strong>, spécialisée en rééquilibrage alimentaire et transformation physique. Mon objectif : vous accompagner dans une démarche bienveillante, durable et personnalisée.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Une approche humaine, adaptée à votre quotidien</h2>
          <p className="mb-4">
            Chaque personne est unique. J’adapte mes conseils à vos contraintes, vos objectifs, votre niveau d’activité et vos habitudes. Ici, pas de régimes restrictifs : nous privilégions le plaisir de manger, l’équilibre nutritionnel et la régularité.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Respect de votre rythme</li>
            <li>Pédagogie et autonomie</li>
            <li>Écoute et bienveillance</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Un accompagnement global au sein de Body Transformation</h2>
          <p className="mb-4">
            En tant que co-fondatrice de <strong>Body Transformation</strong> à Anglet, je travaille en lien direct avec l’équipe de coachs pour vous proposer un suivi nutritionnel cohérent avec votre pratique physique.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Suivi de votre composition corporelle (masse grasse, musculaire, eau)</li>
            <li>Analyse de vos habitudes alimentaires</li>
            <li>Équilibre avec sommeil, hydratation et stress</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Pour qui ?</h2>
          <p className="mb-4">J’accompagne différents profils :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Femmes actives</li>
            <li>Hommes souhaitant transformer leur corps</li>
            <li>Femmes enceintes ou post-partum</li>
            <li>Étudiants, couples, seniors</li>
          </ul>
          <p className="mb-4">
            Je m’adapte à votre mode de vie, vos horaires, vos goûts (végétarien, sans gluten…) et votre budget.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Ce que vous trouverez dans mon suivi</h2>
          <ul className="list-disc list-inside mb-4">
            <li>✅ Bilan personnalisé complet</li>
            <li>✅ Plan alimentaire clair et réaliste</li>
            <li>✅ Menus adaptés à votre métabolisme</li>
            <li>✅ Conseils pratiques et concrets</li>
            <li>✅ Suivi motivant dans la durée</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Ma vision</h2>
          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 mb-4">
            Je suis convaincue qu’on peut transformer son corps sans se priver ni culpabiliser, en respectant ses besoins et son rythme.
          </blockquote>
          <ul className="list-disc list-inside mb-4">
            <li>Comprendre son corps</li>
            <li>Sortir des régimes</li>
            <li>Se réconcilier avec l’alimentation</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Prendre rendez-vous</h2>
          <p className="mb-4">
            Les consultations ont lieu au sein de la salle Body Transformation à Anglet (10 rue Jules Védrines), ou à distance selon vos besoins.
          </p>
          <a
            href="https://www.doctolib.fr/dieteticien/bayonne/clemence-alaux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
          >
            Prendre rendez-vous sur Doctolib
          </a>
        </section>
      </main>
    </>
  );
}
