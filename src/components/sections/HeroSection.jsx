import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../assets/style/HeroSection.css";

import heroImg from "../../assets/images/clothes/kok-chapan.png";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <header className="heroA" aria-label="Home hero">
      <div className="heroA__container">
        {/* LEFT */}
        <div className="heroA__left">
          <p className="heroA__kicker" data-aos="fade-right" data-aos-delay="140">
            {t("hero_kicker")}
          </p>

          <h1 className="heroA__title" data-aos="fade-right" data-aos-delay="220">
            {t("hero_title_line1")}
            <span className="heroA__titleBreak">{t("hero_title_line2")}</span>
          </h1>

          <p className="heroA__sub" data-aos="fade-right" data-aos-delay="300">
            {t("hero_subtitle")}
          </p>

          <div className="heroA__actions" data-aos="fade-right" data-aos-delay="380">
            <Link className="btnA btnA--primary" to="/products">
              {t("hero_cta_primary")}
            </Link>

            <Link className="btnA btnA--ghost" to="/contact">
              {t("hero_cta_secondary")}
            </Link>
          </div>

          <div className="heroA__note" data-aos="fade-right" data-aos-delay="460">
            <span className="heroA__dot" />
            {t("hero_note")}
          </div>
        </div>

        {/* RIGHT */}
        <div className="heroA__right" aria-hidden="true" data-aos="fade-left" data-aos-delay="160">
          <div className="heroA__frame" data-aos="zoom-in" data-aos-delay="260">
            <img className="heroA__img" src={heroImg} alt="" loading="lazy" />
            <div className="heroA__reveal" />
          </div>

          <div className="heroA__stamp" data-aos="zoom-in" data-aos-delay="520">
            <span>EST.</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </header>
  );
}
