import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Evenements() {
  return (
    <Layout
      title="Événements sportifs à Anglet – Body Transformation"
      description="Organisez un EVJF, une séance team building ou un anniversaire sportif sur-mesure à Anglet avec Body Transformation. Sport, fun et souvenirs garantis !"
    >
      <Head>
        <link rel="canonical" href="https://www.body-transformation.fr/evenements" />
        <meta property="og:title" content="Événements sportifs à Anglet – Body Transformation" />
        <meta
          property="og:description"
          content="EVJF, cohésion d’équipe, anniversaires, séances famille... Vivez un moment unique avec une séance sportive sur-mesure à Anglet."
        />
        <meta
          property="og:image"
          content="https://www.body-transformation.fr/images/evenements-cover.jpg"
        />
        <meta property="og:url" content="https://www.body-transformation.fr/evenements" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Événements sportifs à Anglet",
              "startDate": "2024-01-01",
              "location": {
                "@type": "Place",
                "name": "Body Transformation",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "10 rue Jules Védrines",
                  "addressLocality": "Anglet",
                  "postalCode": "64600",
                  "addressCountry": "FR"
                }
              },
              "image": [
                "https://www.body-transformation.fr/images/evenements-cover.jpg"
              ],
              "description": "Organisez un événement sportif sur-mesure à Anglet : EVJF, team building, anniversaires, ou séances en famille. Fun, sport et cohésion garantis.",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "organizer": {
                "@type": "Organization",
                "name": "Body Transformation",
                "url": "https://www.body-transformation.fr"
              }
            })
          }}
        />
      </Head>

      <section className="py-16 bg-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Événements sportifs sur-mesure à Anglet</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Que ce soit pour un <strong>EVJF</strong>, une <strong>activité d’entreprise</strong> ou un <strong>anniversaire sportif</strong>,
          notre équipe vous propose des séances personnalisées, fun et mémorables. Nos <strong>événements sportifs à Anglet</strong> sont adaptés à tous les niveaux et encadrés par des professionnels.
        </p>
      </section>

      <section className="py-12 bg-orange-50 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Nos formats d’événements</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">EVJF / EVG</h3>
            <p className="text-gray-700">
              Offrez à la future mariée ou au futur marié un moment inoubliable ! Circuit training,
              challenges en équipe, musique, photos souvenirs… Ambiance garantie dans nos événements sportifs à Anglet !
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Cohésion d'équipe (team building)</h3>
            <p className="text-gray-700">
              Renforcez les liens dans votre entreprise grâce à une séance ludique, dynamique et
              fédératrice. Défis sportifs accessibles à tous niveaux. Une excellente option pour un événement sportif à Anglet original et efficace.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Anniversaires sportifs</h3>
            <p className="text-gray-700">
              Pour adultes ou ados, vivez un moment fun et différent. Sport, bonne humeur et énergie
              au programme. Option goûter possible. Idéal pour célébrer en mouvement à Anglet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Séances en famille ou entre amis</h3>
            <p className="text-gray-700">
              Venez partager une séance spéciale avec vos proches. Parents, enfants, amis… on
              s’adapte à tous les niveaux pour un moment collectif. Des événements sportifs à Anglet pour tous les âges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Pourquoi organiser un événement sportif à Anglet avec nous ?</h2>
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
          <p>✅ Un cadre idéal à Anglet : proche de la plage, en salle ou en extérieur selon vos envies.</p>
          <p>✅ Un encadrement professionnel : nos coachs diplômés assurent sécurité, fun et résultats.</p>
          <p>✅ Une formule sur-mesure : durée, intensité, thème… tout est adaptable selon vos besoins.</p>
          <p>✅ Des souvenirs garantis : photos, vidéos, animations possibles sur demande.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Tarif & réservation</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Le tarif dépend du format choisi, du nombre de personnes et de la durée de la séance. À partir de <strong>100 €</strong>. Possibilité de formules avec photos, collations, jeux d'équipe…
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Demander un devis personnalisé
        </Link>
      </section>

      <section className="py-12 bg-white text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Prêts pour un événement sportif inoubliable à Anglet ?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Que vous soyez une entreprise, un groupe d’amis, une famille ou un organisateur d’EVJF, Body Transformation vous propose des <strong>événements sportifs à Anglet</strong> qui sortent de l’ordinaire. Contactez-nous pour imaginer ensemble une séance unique, adaptée à vos envies et à vos objectifs !
        </p>
      </section>
    </Layout>
  );
}