
import { Link } from "react-router-dom";
import {
  Film,
  Video,
  Music,
  Megaphone,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "../components/ui/Reveal";

const services = [
  {
    number: "01",
    title: "Production cinématographique",
    description:
      "Développement et production de films de fiction, courts et longs métrages.",
    icon: Film,
  },
  {
    number: "02",
    title: "Documentaires",
    description:
      "Conception et réalisation de documentaires pour raconter des histoires inspirées du réel.",
    icon: Video,
  },
  {
    number: "03",
    title: "Clips musicaux",
    description:
      "Création de concepts visuels et réalisation de clips qui mettent la musique en images.",
    icon: Music,
  },
  {
    number: "04",
    title: "Films publicitaires",
    description:
      "Production de contenus audiovisuels pour présenter une marque, un produit ou un service.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Accompagnement audiovisuel",
    description:
      "Accompagnement des idées et des projets, de leur conception à leur réalisation.",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <Reveal>
        <section className="services-hero">
        <p className="eyebrow">CE QUE NOUS FAISONS</p>

        <h1>
          Nos idées prennent
          <br />
          <span>vie en images.</span>
        </h1>

        <p>
          De la première idée à l'écran, nous accompagnons
          la création de projets audiovisuels.
        </p>

        <a href="#nos-services" className="primary-button">
          Explorer nos services <ArrowUpRight size={18} />
        </a>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="services-list" id="nos-services">
        <div className="services-heading">
          <div>
            <p className="eyebrow">NOTRE EXPERTISE</p>
            <h2>Nos domaines d'intervention</h2>
          </div>

          <span>01 — 05</span>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <Icon size={36} strokeWidth={1.3} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link to="/contact" className="service-link">
                  Discutons de votre projet
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.2}>
      <section className="services-cta">
        <p className="eyebrow">UN PROJET EN TÊTE ?</p>
        <h2>Faisons-en une histoire.</h2>
        <p>
          Parlons de votre idée et imaginons ensemble
          sa réalisation audiovisuelle.
        </p>

        <Link to="/contact" className="primary-button">
          Demander un devis <ArrowUpRight size={18} />
        </Link>
      </section>
      </Reveal>

    </div>
  );
}
