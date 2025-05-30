export default function Footer() {
    return (
      <footer className="bg-gray-100 text-sm text-center py-6 mt-12">
        <div className="container mx-auto space-y-2">
          <p>© {new Date().getFullYear()} Body Transformation - 10 rue Jules Védrines, 64600 Anglet</p>
          <p>
            <a href="/mentions-legales" className="underline">Mentions légales</a> ·{" "}
            <a href="/politique-confidentialite" className="underline">Politique de confidentialité</a>
          </p>
        </div>
      </footer>
    );
  }
  