
import { Play, Film } from "lucide-react";
import Reveal from "../components/ui/Reveal";

export default function ProjectDetails() {
  return (
    <div className="film-details">
      <Reveal>
        <section className="film-hero">
        <div className="film-hero-content">
          <p className="eyebrow">BRAIN SPACE PRODUCTION PRÉSENTE</p>

          <h1>
            LES TROIS
            <span> FLAMMES</span>
          </h1>

          <p className="film-type">
            LONG MÉTRAGE DE FICTION
          </p>

          <a href="#synopsis" className="primary-button">
            Découvrir le film <Play size={17} />
          </a>
        </div>

        <div className="film-poster-placeholder">
          <Film size={65} strokeWidth={1} />
          <h2>LES TROIS FLAMMES</h2>
          <p>VISUEL OFFICIEL À VENIR</p>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="film-synopsis" id="synopsis">
        <p className="eyebrow">L'HISTOIRE</p>
        <h2>Trois destins. Un même défi.</h2>

        <p>
          Mamadou, un recruteur sportif en fin de carrière,
          dispose de six semaines pour présenter trois jeunes
          athlètes aux sélections des Jeux de la Jeunesse.
        </p>

        <p>
          Il choisit un jeune fugueur de Pikine, un lutteur
          trop intense pour son propre corps et une nageuse
          qui pleure la mort de sa mère, pourtant toujours vivante.
        </p>

        <p>
          Personne ne croit en eux. Pas même Mamadou.
        </p>
      </section>
      </Reveal>

      <Reveal delay={0.2}>
      <section className="film-characters">
        <p className="eyebrow">LES PERSONNAGES</p>
        <h2>Trois parcours singuliers</h2>

        <div className="character-grid">
          <article>
            <span>01</span>
            <h3>Le fugueur de Pikine</h3>
            <p>Un jeune garçon qui a quitté son foyer.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Le lutteur</h3>
            <p>Une intensité qui dépasse les limites de son corps.</p>
          </article>

          <article>
            <span>03</span>
            <h3>La nageuse</h3>
            <p>Une jeune fille confrontée à un deuil mystérieux.</p>
          </article>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.3}>
      <section className="film-trailer">
        <Play size={42} />
        <h2>Bientôt en images</h2>
        <p>
          La bande-annonce et les premières images du film
          seront bientôt disponibles.
        </p>
      </section>
      </Reveal>

    </div>
  );
}
