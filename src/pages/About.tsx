
import {
  Film,
  Camera,
  Lightbulb,
  Users,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "../components/ui/Reveal";

const activities = [
  {
    icon: Film,
    number: "01",
    title: "Production de films",
    description:
      "Des œuvres de fiction qui donnent vie aux histoires et aux émotions.",
  },
  {
    icon: Camera,
    number: "02",
    title: "Documentaires",
    description:
      "Des récits inspirés du réel pour raconter le monde autrement.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Publicités",
    description:
      "Des concepts créatifs pour valoriser les marques et leurs messages.",
  },
  {
    icon: Users,
    number: "04",
    title: "Clips musicaux",
    description:
      "Des créations visuelles qui donnent une nouvelle dimension à la musique.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <Reveal>
        <section className="about-hero">
        <p className="eyebrow">QUI SOMMES-NOUS ?</p>

        <h1>
          Nous donnons vie
          <br />
          aux <span>histoires.</span>
        </h1>

        <p>
          Brain Space Production est une société de production
          audiovisuelle dédiée à la création d'univers visuels
          et au partage d'histoires.
        </p>

        <a href="#vision" className="primary-button">
          Découvrir notre vision <ArrowUpRight size={18} />
        </a>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="about-vision" id="vision">
        <div>
          <p className="eyebrow">NOTRE VISION</p>
          <h2>
            Créer.
            <br />
            Raconter.
            <br />
            <span>Émouvoir.</span>
          </h2>
        </div>

        <div className="vision-text">
          <p>
            Chaque histoire mérite d'être racontée avec
            créativité, sensibilité et ambition.
          </p>

          <p>
            À travers nos productions, nous souhaitons
            développer des univers audiovisuels capables
            de captiver les publics et de laisser une impression durable.
          </p>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.2}>
      <section className="about-activities">
        <div className="section-heading">
          <p className="eyebrow">NOTRE SAVOIR-FAIRE</p>
          <h2>Nos domaines de création</h2>
          <p>
            Des formats différents, une même passion pour l'image
            et la narration.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <article className="activity-card" key={activity.number}>
                <span>{activity.number}</span>
                <Icon size={34} strokeWidth={1.3} />
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.3}>
      <section className="about-values">
        <p className="eyebrow">NOTRE ENGAGEMENT</p>
        <h2>Des idées, des images et des émotions.</h2>
        <p>
          Nous croyons au pouvoir des histoires et à la force
          de la création audiovisuelle pour transmettre des
          idées et rapprocher les publics.
        </p>
      </section>
      </Reveal>

      <Reveal delay={0.4}>
      <section className="about-team">
        <p className="eyebrow">LES VISAGES DE BRAIN SPACE</p>
        <h2>Une équipe à découvrir.</h2>
        <p>
          Des profils complémentaires au service de vos projets.
        </p>

        <div className="team-grid">
          {[
            {
              name: "Mamadou Diop",
              role: "Réalisateur",
              bio: "Spécialiste des récits de fiction et des univers visuels.",
              avatar: "/images/avatar-1.svg",
            },
            {
              name: "Aïda Sarr",
              role: "Productrice",
              bio: "Accompagnement de projets du développement à la diffusion.",
              avatar: "/images/avatar-2.svg",
            },
            {
              name: "Cheikh Ba",
              role: "Directeur photo",
              bio: "Image, lumière et captation pour la fiction et le documentaire.",
              avatar: "/images/avatar-3.svg",
            },
          ].map((member) => (
            <article className="team-card" key={member.name}>
              <img
                src={member.avatar}
                alt={member.name}
                width={88}
                height={88}
                loading="lazy"
              />
              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
      </Reveal>

    </div>
  );
}
