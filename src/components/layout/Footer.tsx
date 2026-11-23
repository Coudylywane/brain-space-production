import { Link } from "react-router-dom";
import { Globe, Camera, Play, Mail, MapPin, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <Link to="/" className="brand">
            <img
              src="/images/brain-space-logo.webp"
              alt="Brain Space Production"
              className="brand-logo"
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p>
            Brain Space Production est une société de production
            audiovisuelle à Dakar. Nous imaginons et réalisons
            des contenus créatifs pour raconter vos histoires.
          </p>
          <div className="site-footer-social">
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Globe size={18} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Camera size={18} />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">
              <Play size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3>Nos productions</h3>
          <ul>
            <li><Link to="/services">Films</Link></li>
            <li><Link to="/services">Documentaires</Link></li>
            <li><Link to="/services">Clips musicaux</Link></li>
            <li><Link to="/services">Films publicitaires</Link></li>
          </ul>
        </div>

        <div>
          <h3>La maison</h3>
          <ul>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/actualites">Actualités</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Nous joindre</h3>
          <ul className="site-footer-contact">
            <li>
              <MapPin size={15} />
              <span>Dakar, Sénégal</span>
            </li>
            <li>
              <Phone size={15} />
              <a href="tel:+221770000000">+221 77 000 00 00</a>
            </li>
            <li>
              <Mail size={15} />
              <a href="mailto:contact@brainspaceproduction.com">
                contact@brainspaceproduction.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© {currentYear} Brain Space Production. Tous droits réservés.</span>
        <Link to="/">Retour à l’accueil</Link>
      </div>
    </footer>
  );
}