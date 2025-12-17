import "../../assets/style/PageIntro.css";
import { CiInstagram } from "react-icons/ci";
import { RiTelegram2Fill } from "react-icons/ri";

export default function PageIntro({ title = "Welcome" }) {
  return (
    <section className="pi" aria-label="Page intro">
      <div className="pi__container">
        <h1 className="pi__title">{title}</h1>

        <div className="pi__socials" aria-label="Social links">
            <a
              className="pi__social"
              href="https://instagram.com/di.murad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <CiInstagram />
            </a>

            <a
              className="pi__social"
              href="https://t.me/+998934550770"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <RiTelegram2Fill />
            </a>
        </div>
      </div>
    </section>
  );
}
