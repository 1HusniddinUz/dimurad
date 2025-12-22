import { useTranslation } from "react-i18next";
import "../assets/style/About.css";

import aboutImg from "../assets/images/qizil-opp.png";
import PageIntro from "../components/ui/PageIntro";

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="aboutPage">
      <section className="aboutWrap" aria-label={t("about_eyebrow", { defaultValue: "About" })}>
        {/* LEFT: IMAGE */}
        <div className="aboutPhoto">
          <img
            src={aboutImg}
            alt={t("about_img_alt", { defaultValue: "Atelier photo" })}
            loading="lazy"
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className="aboutContent">
          <p className="aboutEyebrow">
            {t("about_eyebrow", { defaultValue: "DI-MURAD haqida" })}
          </p>

          <h1 className="aboutTitle">
            {t("about_title_line1", { defaultValue: "Professional jamoa," })}{" "}
            <span className="aboutTitleBreak">
              {t("about_title_line2", { defaultValue: "tafsiIotlarga e’tiborli." })}
            </span>
          </h1>

          <p className="aboutLead">
            {t("about_title_line3", {
              defaultValue: "Uzoq muddat xizmat qiladigan mahsulotlarga urg‘u beramiz.",
            })}
          </p>

          <div className="aboutText">
            <p>{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
            <p>{t("about_p3")}</p>
          </div>
        </div>
      </section>

      <PageIntro />
    </main>
  );
};

export default About;
