import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../assets/style/AppointmentCTA.css";

import atelierImg from "../../assets/images/atlas-opp.png";

export default function AppointmentCTA() {
  const { t } = useTranslation();

  return (
    <section className="appCTA" aria-label={t("appointment_aria")}>
      <div className="appCTA__container">
        <div
          className="appCTA__media"
          aria-hidden="true"
          data-aos="zoom-in"
          data-aos-delay="120"
        >
          <img src={atelierImg} alt="" loading="lazy" />
        </div>

        <div className="appCTA__body">
          <p className="appCTA__kicker" data-aos="fade-up" data-aos-delay="160">
            {t("appointment_kicker")}
          </p>

          <h3 className="appCTA__title" data-aos="fade-up" data-aos-delay="220">
            {t("appointment_title")}
          </h3>

          <p className="appCTA__sub" data-aos="fade-up" data-aos-delay="280">
            {t("appointment_sub")}
          </p>

          <Link
            className="appCTA__btn"
            to="/appointment"
            data-aos="fade-up"
            data-aos-delay="340"
          >
            {t("appointment_btn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
