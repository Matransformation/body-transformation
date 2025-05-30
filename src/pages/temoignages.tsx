import { NextPage } from 'next';
import Head from 'next/head';
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
      </Head>

      <Navbar />

      <main className="px-4 py-12 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Témoignages</h1>

        <p className="text-lg text-center mb-8">
          Découvrez ce que nos adhérents pensent de Body Transformation :
        </p>

        {/* Carte Google Maps */}
        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg mb-12">
          <iframe
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
          <TestimonialCard
            name="Johana"
            text="Un peu plus de 3 ans que je fréquente cette salle, rien à redire ! Elle est parfaite. Les Romain et Clémence sont vraiment très sympas, c’est un plaisir d’y aller à chaque fois."
          />
          <TestimonialCard
            name="Marie Claire Rigaud"
            text="Cela fait plus de 2 ans que je fréquente cette salle. L’équipe est formidable et l’encadrement pour les séances de musculation est bien présent. Les coachs font preuve de pédagogie et d’écoute."
          />
          <TestimonialCard
            name="Paul Perromat"
            text="Une salle en tout point parfaite ! Deux coachs au top, un suivi personnalisé, une excellente ambiance, des adhérents motivés... que demander de plus ?"
          />
          <TestimonialCard
            name="Paula Sicardi"
            text="Le plus de cette salle c’est la qualité des coachs et le suivi personnalisé ! L’espace est idéal, toujours propre avec des machines au top."
          />
          <TestimonialCard
            name="Margaux"
            text="Super salle de sport et de fitness ! Les coachs sont supers. Je recommande ++++ ce n’est plus une corvée pour moi d’aller faire du sport :)"
          />
          <TestimonialCard
            name="Fabienne David"
            text="Clémence et Romain sont de grands professionnels ! Bienveillance, adaptabilité, professionnalisme... Vous êtes au bon endroit pour prendre soin de vous !"
          />
        </div>

        {/* Appel à l’action */}
        <div
  style={{
    backgroundColor: '#F97316',
    borderRadius: '1rem',
    padding: '3rem 1rem',
    textAlign: 'center',
    color: 'white',
    marginTop: '4rem',
  }}
>
  <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
    Prêt(e) à commencer votre transformation ?
  </h2>
  <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
    Réservez votre séance découverte gratuite et venez tester l’ambiance Body Transformation !
  </p>
  <a
    href="/contact"
    style={{
      display: 'inline-block',
      backgroundColor: 'white',
      color: '#F97316',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      fontSize: '1rem',
      textDecoration: 'none',
    }}
  >
    Réserver ma séance gratuite
  </a>
</div>

      </main>
    </>
  );
};

export default Temoignages;
