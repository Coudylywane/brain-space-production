import { Link } from "react-router-dom";
import { Play, Calendar } from "lucide-react";
import Reveal from "../ui/Reveal";

const films = [
  {
    title: "Les Trois Flammes",
    type: "Long métrage de fiction",
    director: "Mamadou Diop",
    year: "2025",
    duration: "92 min",
    slug: "/projets/les-trois-flammes",
    poster: "/images/poster-1.svg",
  },
  {
    title: "Dakar au crépuscule",
    type: "Documentaire",
    director: "Aïda Sarr",
    year: "2024",
    duration: "58 min",
    slug: "/projets/les-trois-flammes",
    poster: "/images/poster-2.svg",
  },
  {
    title: "Rythmes de Pikine",
    type: "Clip musical",
    director: "Cheikh Ba",
    year: "2024",
    duration: "4 min",
    slug: "/projets/les-trois-flammes",
    poster: "/images/poster-3.svg",
  },
  {
    title: "L'ombre du baobab",
    type: "Court métrage",
    director: "Fatou Ndiaye",
    year: "2023",
    duration: "18 min",
    slug: "/projets/les-trois-flammes",
    poster: "/images/poster-4.svg",
  },
];

export default function Filmography() {
  return (
    <section className="filmography" id="filmographie">
      <div className="filmography-heading">
        <div>
          <p className="eyebrow">NOTRE FILMOGRAPHIE</p>
          <h2>Des histoires à l'écran.</h2>
          <p>
            Découvrez les projets développés et accompagnés
            par Brain Space Production.
          </p>
        </div>
        <span className="filmography-count">
          {String(films.length).padStart(2, "0")} projet
          {films.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="filmography-grid">
        {films.map((film, index) => (
          <Reveal key={film.title} delay={index * 0.12}>
            <article className="film-card">
            <div className="film-card-poster">
              <img src={film.poster} alt={`Affiche du film ${film.title}`} loading="lazy" />
            </div>

            <div className="film-card-info">
              <span className="film-card-type">{film.type}</span>
              <h3>{film.title}</h3>
              <p>Réalisation : {film.director}</p>

              <div className="film-card-meta">
                <span>
                  <Calendar size={13} />
                  {film.year}
                </span>
                <span>{film.duration}</span>
              </div>

              <Link to={film.slug} className="film-card-link">
                Découvrir le film
                <Play size={15} />
              </Link>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}