import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const metaTitle =
    title || "Body Transformation - Salle de sport à Anglet";
  const metaDescription =
    description ||
    "Rejoignez la salle de sport Body Transformation à Anglet. Coaching personnalisé, résultats visibles, ambiance conviviale.";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.body-transformation.fr" />
        <meta
          property="og:image"
          content="https://www.body-transformation.fr/01003167.JPG"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
