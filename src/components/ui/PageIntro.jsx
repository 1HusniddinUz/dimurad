import "../../assets/style/PageIntro.css";
import { CiInstagram } from "react-icons/ci";
import { RiTelegram2Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export default function PageIntro() {
  const { t } = useTranslation();

  return (
    <section className="pi" aria-label={t("pageintro_aria")}>
      <div className="pi__container">
        <h2
          className="pi__title"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {t(`pageintro_aria`)}
        </h2>

        <div
          className="pi__socials"
          aria-label={t("pageintro_socials_aria")}
          data-aos="fade-up"
          data-aos-delay="220"
        >
          <a
            className="pi__social"
            href="https://instagram.com/di_murad_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("pageintro_instagram")}
            title={t("pageintro_instagram")}
          >
            <CiInstagram />
          </a>

          <a
            className="pi__social"
            href="https://t.me/DilnozaMurad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("pageintro_telegram")}
            title={t("pageintro_telegram")}
          >
            <RiTelegram2Fill />
          </a>
        </div>
      </div>
    </section>
  );
}
