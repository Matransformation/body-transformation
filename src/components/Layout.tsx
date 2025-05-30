import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title, description }: { children: React.ReactNode, title?: string, description?: string }) {
  return (
    <>
      <Head>
        <title>{title || "Body Transformation - Salle de sport à Anglet"}</title>
        <meta
          name="description"
          content={
            description ||
            "Rejoignez la salle de sport Body Transformation à Anglet. Coaching personnalisé, résultats visibles, ambiance conviviale."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
