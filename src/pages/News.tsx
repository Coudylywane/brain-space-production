
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Camera,
  Film,
  Megaphone,
  CalendarDays,
} from "lucide-react";

const news = [
  {
    number: "01",
    category: "PROJETS",
    date: "12 mars 2025",
    title: "De nouvelles histoires prennent forme",
    description:
      "Découvrez prochainement les projets audiovisuels développés par Brain Space Production.",
    icon: Film,
  },
  {
    number: "02",
    category: "COULISSES",
    date: "28 févr. 2025",
    title: "Dans les coulisses de la création",
    description:
      "Des moments de préparation aux tournages, entrez dans l'univers de la production audiovisuelle.",
    icon: Camera,
  },
  {
    number: "03",
    category: "ANNONCES",
    date: "10 janv. 2025",
    title: "Les actualités de Brain Space",
    description:
      "Retrouvez nos annonces, nos collaborations et les temps forts de notre activité.",
    icon: Megaphone,
  },
];

export default function News() {
  return (
    <div className="news-page">
      <section className="news-hero">
        <p className="eyebrow">LE JOURNAL DE BRAIN SPACE</p>

        <h1>
          Nos histoires
          <br />
          <span>continuent.</span>
        </h1>

        <p>
          Projets, rencontres, coulisses et actualités :
          découvrez ce qui fait vivre Brain Space Production.
        </p>
      </section>

      <section className="news-content" id="actualites">
        <div className="news-heading">
          <div>
            <p className="eyebrow">À LA UNE</p>
            <h2>Nos dernières actualités</h2>
          </div>

          <span>LE JOURNAL · BRAIN SPACE</span>
        </div>

        <div className="news-grid">
          {news.map((item) => {
            const Icon = item.icon;

            return (
              <article className="news-card" key={item.number}>
                <div className="news-image-placeholder">
                  <span className="news-number">{item.number}</span>
                  <Icon size={55} strokeWidth={1} />
                  <span className="news-image-label">
                    VISUEL À VENIR
                  </span>
                </div>

                <div className="news-card-content">
                  <div className="news-meta">
                    <span>{item.category}</span>
                    <span>
                      <CalendarDays size={13} />
                      {item.date}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="news-read-more">
                    Publication à venir
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="news-cta">
        <p className="eyebrow">RESTONS CONNECTÉS</p>
        <h2>Suivez notre univers créatif.</h2>
        <p>
          Retrouvez bientôt nos actualités, nos productions
          et nos moments de création.
        </p>

        <Link to="/#contact" className="primary-button">
          Nous contacter <ArrowUpRight size={18} />
        </Link>
      </section>

    </div>
  );
}
