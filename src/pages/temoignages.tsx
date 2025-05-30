import { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import TestimonialCard from '@/components/TestimonialCard';

const Temoignages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Témoignages - Body Transformation</title>
        <meta
          name="description"
          content="Avis des membres de la salle de sport Body Transformation à Anglet. Découvrez pourquoi ils nous font confiance."
        />
        <link rel="canonical" href="https://www.body-transformation.fr/temoignages" />
        <meta property="og:title" content="Témoignages - Body Transformation Anglet" />
        <meta
          property="og:description"
          content="Avis vérifiés et authentiques sur la salle de sport Body Transformation à Anglet. Coaching pro, ambiance motivante."
        />
        <meta
          property="og:image"
          content="https://www.body-transformation.fr/images/temoignages-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://www.body-transformation.fr/temoignages"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Script
        type="application/ld+json"
        id="ld-temoignages"
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
          url: "https://www.body-transformation.fr/temoignages",
          telephone: "+33658881560",
          description:
            "Découvrez les témoignages des membres de la salle de sport Body Transformation à Anglet. Coaching personnalisé et ambiance conviviale.",
        })}
      </Script>

      <Navbar />

      <main className="px-4 py-12 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Témoignages</h1>

        <p className="text-lg text-center mb-8">
          Découvrez ce que nos adhérents pensent de Body Transformation :
        </p>

        {/* Carte Google Maps */}
        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg mb-12">
          <iframe
            title="Carte de localisation de la salle de sport Body Transformation à Anglet"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.7576427571485!2d-1.5024630073617393!3d43.46565669662544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd513f2801289467%3A0x986ff976103f3ae0!2sBody%20Transformation%20-%20salle%20de%20sport%20Anglet!5e0!3m2!1sfr!2sfr!4v1748587477563!5m2!1sfr!2sfr"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Témoignages */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <TestimonialCard name="Johana" text="Un peu plus de 3 ans que je fréquente cette salle, rien à redire ! Elle est parfaite. Les Romain et Clémence sont vraiment très sympas, c’est un plaisir d’y aller à chaque fois." />
          <TestimonialCard name="Marie Claire Rigaud" text="Cela fait plus de 2 ans que je fréquente cette salle. L’équipe est formidable et l’encadrement pour les séances de musculation est bien présent. Les coachs font preuve de pédagogie et d’écoute." />
          <TestimonialCard name="Paul Perromat" text="Une salle en tout point parfaite ! Deux coachs au top, un suivi personnalisé, une excellente ambiance, des adhérents motivés... que demander de plus ?" />
          <TestimonialCard name="Paula Sicardi" text="Le plus de cette salle c’est la qualité des coachs et le suivi personnalisé ! L’espace est idéal, toujours propre avec des machines au top." />
          <TestimonialCard name="Margaux" text="Super salle de sport et de fitness ! Les coachs sont supers. Je recommande ++++ ce n’est plus une corvée pour moi d’aller faire du sport :)" />
          <TestimonialCard name="Fabienne David" text="Clémence et Romain sont de grands professionnels ! Bienveillance, adaptabilité, professionnalisme... Vous êtes au bon endroit pour prendre soin de vous !" />
        </div>

        {/* Appel à l’action */}
        <div className="bg-[#F97316] rounded-2xl p-12 text-white text-center mt-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Prêt(e) à commencer votre transformation ?</h2>
          <p className="text-lg mb-6">
            Réservez votre séance découverte gratuite et venez tester l’ambiance Body Transformation !
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#F97316] px-6 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
          >
            Réserver ma séance gratuite
          </a>
        </div>
      </main>
    </>
  );
};

export default Temoignages;
