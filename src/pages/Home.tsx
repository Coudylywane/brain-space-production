
import { lazy, Suspense } from "react";
import Productions from "../components/home/Productions";
import Filmography from "../components/home/Filmography";
import Studio3DErrorBoundary from "../components/home/Studio3DErrorBoundary";
import Reveal from "../components/ui/Reveal";

const Studio3D = lazy(() => import("../components/home/Studio3D"));

export default function Home() {
  return (
    <div id="accueil">
      <Reveal>
        <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            CRÉER <span>•</span> RACONTER <span>•</span> ÉMOUVOIR
          </p>

          <h1>
            BRAIN SPACE
            <br />
            <span>PRODUCTION</span>
          </h1>

          <p className="hero-description">
            Une société de production audiovisuelle
            <br />
            au service de vos idées et de vos histoires.
          </p>

          <a href="#productions" className="primary-button">
            Découvrir notre univers <span>→</span>
          </a>
        </div>

        <div className="hero-visual">
          <Suspense fallback={<div className="studio-3d studio-3d--loading">Chargement de la scène 3D…</div>}>
            <Studio3DErrorBoundary>
              <Studio3D />
            </Studio3DErrorBoundary>
          </Suspense>
          <p className="visual-label">
            BRAIN SPACE STUDIO · DAKAR
          </p>
        </div>
      </section>
      </Reveal>
      <Reveal>
        <Productions />
      </Reveal>
      <Reveal delay={0.15}>
        <Filmography />
      </Reveal>
      <Reveal delay={0.3}>
        <section className="about" id="apropos">
        <p className="eyebrow">QUI SOMMES-NOUS ?</p>
        <h2>
          Plus qu'une production,
          <span> une vision.</span>
        </h2>
        <p>
          Brain Space Production imagine et réalise des contenus
          audiovisuels créatifs pour raconter des histoires,
          transmettre des émotions et donner vie aux idées.
        </p>
        <a href="/contact" className="primary-button">
          Parlons de votre projet →
        </a>
      </section>
      </Reveal>

    </div>
  );
}
