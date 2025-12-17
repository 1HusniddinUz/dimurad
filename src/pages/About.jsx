import { useTranslation } from "react-i18next";
import "../assets/style/About.css";

// O'zingizning rasm yo'lingiz bilan almashtiring
import aboutImg from "../assets/images/qizil-opp.png";
import PageIntro from "../components/ui/PageIntro";

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="aboutPage">
      <section className="aboutWrap">
        {/* LEFT: IMAGE */}
        <div className="aboutPhoto">
          <img src={aboutImg} alt={t("about_eyebrow", { defaultValue: "Atelier photo" })} />
        </div>

        {/* RIGHT: TEXT */}
        <div className="aboutContent">
          <h1 className="aboutTitle">
            {t("about_eyebrow", { defaultValue: "Hi there, I’m DI-MURAD!" })}
          </h1>

          <div className="aboutText">
            <p>
              {t("about_p1", {
                defaultValue:
                  "We are a tailoring atelier focused on clean silhouettes, precise fit, and premium fabrics. Every piece is designed to feel effortless — and look intentional.",
              })}
            </p>

            <p>
              {t("about_p2", {
                defaultValue:
                  "Our approach is simple: measure carefully, cut thoughtfully, and finish with discipline. No loud details — just timeless elegance that stays relevant season after season.",
              })}
            </p>

            <p>
              {t("about_p3", {
                defaultValue:
                  "If you value minimal design and craftsmanship, book an appointment — we’ll tailor a piece that matches your lifestyle, not just your size.",
              })}
            </p>
          </div>
        </div>
      </section>

      <PageIntro />
      
    </main>
  );
};

export default About;
