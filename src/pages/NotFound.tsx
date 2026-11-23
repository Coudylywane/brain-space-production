import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <section className="not-found-content">
        <p className="eyebrow">ERREUR 404</p>
        <h1>Cette page n'existe pas.</h1>
        <p>
          La page que vous recherchez a peut-être été déplacée
          ou n'est plus disponible.
        </p>
        <Link to="/" className="primary-button">
          <Home size={17} />
          Retour à l'accueil
        </Link>
      </section>
    </div>
  );
}