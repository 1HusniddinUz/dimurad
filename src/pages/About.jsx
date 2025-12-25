import { useTranslation } from "react-i18next";
import "../assets/style/About.css";

import aboutImg from "../assets/images/clothes/16.png";
import PageIntro from "../components/ui/PageIntro";

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="aboutPage">
      <section className="aboutWrap" aria-label={t("about_eyebrow")}>
        {/* LEFT: IMAGE */}
        <div className="aboutPhoto">
          <img
            src={aboutImg}
            alt={t("about_img_alt")}
            loading="lazy"
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className="aboutContent">
          <p className="aboutEyebrow">{t("about_eyebrow")}</p>

          <h1 className="aboutTitle">
            {t("about_title_line1")}{" "}
            <span className="aboutTitleBreak">{t("about_title_line2")}</span>
          </h1>

          <p className="aboutLead">{t("about_title_line3")}</p>

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
