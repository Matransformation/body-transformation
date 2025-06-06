import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function CoachingPrive() {
  return (
    <Layout
      title="Coaching privé à Anglet – Body Transformation"
      description="Séances de coaching sportif privé à Anglet. Solo, duo ou trio, bénéficiez d’un accompagnement 100% personnalisé avec un coach diplômé."
    >
      <Head>
        <link
          rel="canonical"
          href="https://www.body-transformation.fr/coaching-prive"
        />
        <meta
          property="og:title"
          content="Coaching privé à Anglet – Body Transformation"
        />
        <meta
          property="og:description"
          content="Réservez un créneau de coaching personnalisé à Anglet, seul ou en petit groupe. Adapté à vos objectifs, pathologies et emploi du temps."
        />
        <meta
          property="og:image"
          content="https://www.body-transformation.fr/images/coaching-prive.jpg"
        />
        <meta
          property="og:url"
          content="https://www.body-transformation.fr/coaching-prive"
        />
        <meta property="og:type" content="website" />
      </Head>

      <section className="py-16 bg-white text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Coaching privé à Anglet</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Vous recherchez un <strong>coaching privé à Anglet</strong> pour progresser efficacement,
          en toute sécurité et à votre rythme ? Chez Body Transformation, nous vous proposons
          des séances sur-mesure, encadrées par un coach diplômé, dans une salle de sport à taille
          humaine, conviviale et motivante.
        </p>
      </section>

      <section className="py-12 bg-orange-50 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Pourquoi choisir le coaching privé à Anglet ?
        </h2>
        <div className="max-w-3xl mx-auto text-gray-700 space-y-5 text-left text-lg">
          <p>
            Le <strong>coaching privé</strong> est idéal si vous souhaitez un suivi personnalisé, adapté à votre condition
            physique, vos objectifs, vos contraintes ou pathologies. C’est la solution parfaite si vous débutez,
            si vous stagnez, ou si vous manquez de motivation en salle classique.
          </p>
          <p>
            🔶 <strong>Un programme sur-mesure</strong> : chaque séance est préparée spécifiquement selon vos besoins :
            perte de poids, renforcement musculaire, mobilité, préparation physique, retour post-partum...
          </p>
          <p>
            🔶 <strong>Un coach à l’écoute</strong> : votre coach s’adapte à votre forme du jour, vous corrige, vous
            motive et vous guide en temps réel.
          </p>
          <p>
            🔶 <strong>Une flexibilité totale</strong> : vous réservez le créneau qui vous convient. Les séances peuvent
            se faire en solo, duo ou trio — au même tarif.
          </p>
          <p>
            🔶 <strong>Une ambiance bienveillante</strong> : l’espace est privatisé pour vous, dans notre salle Body
            Transformation à Anglet, avec du matériel professionnel, sans pression ni jugement.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-3xl font-bold text-orange-600">60 € la séance</p>
          <p className="text-sm text-gray-600 italic">
            Solo, duo ou trio – tarif unique. Séance d’environ 1h.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Comment se déroule une séance ?</h2>
        <div className="max-w-2xl mx-auto text-gray-700 text-left space-y-4 text-lg">
          <p>
            Avant votre première séance, nous échangeons sur vos objectifs, vos habitudes, votre niveau
            actuel et d’éventuelles douleurs ou pathologies. Cela permet de construire un programme progressif
            et sécurisé.
          </p>
          <p>
            Chaque séance inclut un échauffement spécifique, un travail ciblé (renfo, cardio, mobilité, etc.)
            et un retour au calme adapté. Vous progressez à votre rythme, dans une ambiance motivante.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Pour qui est fait le coaching privé ?</h2>
        <ul className="text-gray-700 max-w-2xl mx-auto space-y-3 text-left text-lg">
          <li>✅ Débutants souhaitant apprendre les bons gestes</li>
          <li>✅ Sportifs confirmés en recherche de performance ou de variété</li>
          <li>✅ Personnes en rééducation ou après blessure</li>
          <li>✅ Mamans post-partum qui veulent reprendre en douceur</li>
          <li>✅ Seniors, étudiants, ou toute personne qui veut se (re)mettre au sport sans jugement</li>
        </ul>
      </section>

      <section className="py-12 bg-white px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Réserver votre coaching privé à Anglet</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Pour réserver votre créneau, il vous suffit de remplir notre formulaire de contact en précisant vos
          disponibilités, vos objectifs, et si vous venez seul(e) ou accompagné(e).
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Réserver un créneau
        </Link>
      </section>

      <section className="py-16 bg-orange-50 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">FAQ – Coaching privé Body Transformation Anglet</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left text-gray-700 text-lg">
          <div>
            <h3 className="font-semibold text-orange-600">Combien de personnes maximum ?</h3>
            <p>Jusqu’à 3 personnes par séance. Le tarif reste identique, que vous veniez seul(e) ou en petit groupe.</p>
          </div>
          <div>
            <h3 className="font-semibold text-orange-600">Dois-je avoir un bon niveau sportif ?</h3>
            <p>Pas du tout. Nos coachs s’adaptent totalement à votre niveau, même si vous débutez.</p>
          </div>
          <div>
            <h3 className="font-semibold text-orange-600">Quel est le matériel utilisé ?</h3>
            <p>
              Notre salle est équipée de matériel professionnel (haltères, barres, TRX, box, kettlebells…). Chaque
              séance est variée, efficace et sécurisée.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-orange-600">Où se déroule le coaching ?</h3>
            <p>
              Dans notre espace dédié à Anglet : Body Transformation – 10 rue Jules Védrines, 64600 Anglet.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
