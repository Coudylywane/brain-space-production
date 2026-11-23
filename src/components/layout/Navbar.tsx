import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos services", href: "/services" },
  { label: "Nos productions", href: "/#productions" },
  { label: "Filmographie", href: "/#filmographie" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        <picture>
          <source srcSet="/images/brain-space-logo.webp" type="image/webp" />
          <img
            src="/images/brain-space-logo.jpeg"
            alt="Brain Space Production"
            className="brand-logo"
            width={76}
            height={76}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </Link>

      <nav className="nav-links" aria-label="Navigation principale">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            end={link.href === "/"}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact" className="contact-button">
        Collaborons <ArrowUpRight size={17} />
      </Link>

      <button
        type="button"
        className="mobile-menu"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`mobile-drawer ${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navigation mobile">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === "/"}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}

          <Link to="/contact" className="mobile-contact-button" onClick={closeMenu}>
            Collaborons <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="mobile-backdrop"
          aria-label="Fermer le menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}