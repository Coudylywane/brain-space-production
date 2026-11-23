
import { useState } from "react";
import Reveal from "../components/ui/Reveal";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      form.subject || `Demande de projet : ${form.projectType}`
    );
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone}\nType de projet : ${form.projectType}\n\nMessage :\n${form.message}`
    );

    window.location.href = `mailto:contact@brainspaceproduction.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <Reveal>
        <section className="contact-hero">
        <p className="eyebrow">ENTRONS EN CONTACT</p>

        <h1>
          Parlons de votre
          <br />
          <span>prochain projet.</span>
        </h1>

        <p>
          Une idée de film, un documentaire, un clip ou une publicité ?
          Présentez-nous votre projet.
        </p>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="contact-content">
        <div className="contact-info">
          <p className="eyebrow">CONTACTEZ-NOUS</p>
          <h2>Créons quelque chose ensemble.</h2>

          <p className="contact-intro">
            Notre équipe est à votre écoute pour discuter
            de vos idées et de vos besoins audiovisuels.
          </p>

          <div className="contact-detail">
            <Mail />
            <div>
              <span>Email</span>
              <a href="mailto:contact@brainspaceproduction.com">
                contact@brainspaceproduction.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <Phone />
            <div>
              <span>Téléphone</span>
              <p>+221 77 000 00 00</p>
            </div>
          </div>

          <div className="contact-detail">
            <MapPin />
            <div>
              <span>Localisation</span>
              <p>Dakar, Sénégal</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <p className="eyebrow">VOTRE DEMANDE</p>
          <h2>Présentez votre projet</h2>

          {submitted ? (
            <div className="contact-success">
              <Send size={35} />
              <h3>Merci pour votre demande !</h3>
              <p>
                Le formulaire est prêt. La transmission des messages
                sera activée lors de la connexion à notre service d'envoi.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="primary-button"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <label>
                  Nom complet *
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </label>

                <label>
                  Adresse e-mail *
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Téléphone
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+221 ..."
                  />
                </label>

                <label>
                  Type de projet *
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choisir un service</option>
                    <option value="Film">Production de film</option>
                    <option value="Documentaire">Documentaire</option>
                    <option value="Clip">Clip musical</option>
                    <option value="Publicité">Film publicitaire</option>
                    <option value="Autre">Autre projet</option>
                  </select>
                </label>
              </div>

              <label>
                Sujet de votre demande
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre demande"
                />
              </label>

              <label>
                Décrivez votre projet *
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Parlez-nous de votre idée..."
                  rows={6}
                  required
                />
              </label>

              <button type="submit" className="primary-button">
                Envoyer ma demande <ArrowUpRight size={18} />
              </button>
            </form>
          )}
        </div>
      </section>
      </Reveal>

    </div>
  );
}
