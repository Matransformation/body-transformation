import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Body Transformation</title>
        <meta
          name="description"
          content="Contactez la salle de sport Body Transformation à Anglet pour toute demande d'information ou prise de rendez-vous."
        />
      </Head>

      <Navbar />

      <main style={{ padding: '3rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>
          Contact
        </h1>

        <p style={{ textAlign: 'center', fontSize: '1.125rem', marginBottom: '2rem' }}>
          Une question ? Besoin d’un renseignement ? Contactez-nous par mail ou venez directement à la salle.
        </p>

        {/* Bouton email sans Tailwind */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <a
            href="mailto:contact@romain-fitness.com"
            style={{
              display: 'inline-block',
              backgroundColor: '#F97316',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'opacity 0.3s',
            }}
            onMouseOver={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
            onMouseOut={(e) => ((e.target as HTMLElement).style.opacity = '1')}
          >
            Nous écrire
          </a>
        </div>

        {/* Coordonnées */}
        <div style={{ textAlign: 'center', color: '#374151', marginBottom: '3rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: '500' }}>📍 13 Rue Jules Védrines, 64600 Anglet</p>
          <p style={{ marginBottom: '0.5rem' }}>📞 06 58 88 15 60</p>
          <p>✉️ contact@romain-fitness.com</p>
        </div>

        {/* Carte Google Maps */}
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.7576427571485!2d-1.5024630073617393!3d43.46565669662544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd513f2801289467%3A0x986ff976103f3ae0!2sBody%20Transformation%20-%20salle%20de%20sport%20Anglet!5e0!3m2!1sfr!2sfr!4v1748587477563!5m2!1sfr!2sfr"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </main>
    </>
  );
};

export default Contact;
