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
          <p className="heroA__kicker">
            {t("hero_kicker", { defaultValue: "DI-MURAD ATELYE" })}
          </p>

          <h1 className="heroA__title">
            {t("hero_title_line1", { defaultValue: "Abadiy siluetlar," })}
            <span className="heroA__titleBreak">
              {" "}
              {t("hero_title_line2", { defaultValue: "zamonaviy tafsilotlar." })}
            </span>
          </h1>

          <p className="heroA__sub">
            {t("hero_subtitle", {
              defaultValue:
                "Ayollar milliy liboslari, kelin sarpolari va zamonaviy kiyimlari uchun nafis, minimal dizaynlar yaratamiz.",
            })}
          </p>

          <div className="heroA__actions">
            <Link className="btnA btnA--primary" to="/products">
              {t("hero_cta_primary", { defaultValue: "Kolleksiyani ko‘rish" })}
            </Link>

            <Link className="btnA btnA--ghost" to="/contact">
              {t("hero_cta_secondary", { defaultValue: "Biz bilan bog‘lanish" })}
            </Link>
          </div>

          <div className="heroA__note">
            <span className="heroA__dot" />
            {t("hero_note", {
              defaultValue: "Atelyeda yaratiladi • Haftasiga cheklangan qabul",
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="heroA__right" aria-hidden="true">
          <div className="heroA__frame">
            <img className="heroA__img" src={heroImg} alt="" />
            <div className="heroA__reveal" />
          </div>

          <div className="heroA__stamp">
            <span>EST.</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </header>
  );
}
