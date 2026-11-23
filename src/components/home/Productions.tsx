
import { Film, Video, Music, Clapperboard, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Films",
    description: "Longs et courts métrages",
    icon: Film,
    number: "01",
  },
  {
    title: "Documentaires",
    description: "Des histoires inspirées du réel",
    icon: Video,
    number: "02",
  },
  {
    title: "Clips musicaux",
    description: "La musique prend vie en images",
    icon: Music,
    number: "03",
  },
  {
    title: "Publicités",
    description: "Des histoires pour les marques",
    icon: Clapperboard,
    number: "04",
  },
];

export default function Productions() {
  return (
    <section className="portfolio" id="productions">
      <div className="portfolio-heading">
        <div>
          <p className="eyebrow">BRAIN SPACE PRODUCTION</p>
          <h2>Nos univers créatifs</h2>
          <p>
            Nous donnons vie aux idées à travers des créations
            audiovisuelles originales.
          </p>
        </div>
        <span className="portfolio-count">01 — 04</span>
      </div>

      <article className="featured-project">
        <div className="project-artwork">
          <span className="project-tag">LONG MÉTRAGE DE FICTION</span>
          <div className="project-symbol">
            <Film size={65} strokeWidth={1} />
          </div>
          <h3>LES TROIS<br />FLAMMES</h3>
          <span className="artwork-caption">
            VISUEL PROVISOIRE
          </span>
        </div>

        <div className="project-info">
          <p className="eyebrow">À LA UNE · FILMS</p>
          <h3>LES TROIS FLAMMES</h3>
          <p>
            Trois jeunes athlètes, six semaines et un défi
            qui pourrait changer leur vie. Une histoire
            de détermination, de sport et d'espoir.
          </p>
          {/* <span className="project-status">
            Projet en développement
          </span> */}
            <Link
            to="/projets/les-trois-flammes"
            className="primary-button"
          >
            Découvrir le film →
          </Link>
        </div>
      </article>

      <div className="category-grid">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <article className="category-card" key={category.number}>
              <span className="category-number">
                {category.number}
              </span>
              <Icon size={35} strokeWidth={1.3} />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ArrowUpRight className="category-arrow" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
