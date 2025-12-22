import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../assets/style/AppointmentCTA.css";

import atelierImg from "../../assets/images/atlas-opp.png";

export default function AppointmentCTA() {
  const { t } = useTranslation();

  return (
    <section
      className="appCTA"
      aria-label={t("appointment_aria", {
        defaultValue: "Appointment call to action",
      })}
    >
      <div className="appCTA__container">
        <div className="appCTA__media" aria-hidden="true">
          <img src={atelierImg} alt="" loading="lazy" />
        </div>

        <div className="appCTA__body">
          <p className="appCTA__kicker">
            {t("appointment_kicker", { defaultValue: "FITTING BY APPOINTMENT" })}
          </p>

          <h3 className="appCTA__title">
            {t("appointment_title", { defaultValue: "Your fit. Your signature." })}
          </h3>

          <p className="appCTA__sub">
            {t("appointment_sub", { defaultValue: "Limited weekly slots." })}
          </p>

          <Link className="appCTA__btn" to="/appointment">
            {t("appointment_btn", { defaultValue: "Book now" })}
          </Link>
        </div>
      </div>
    </section>
  );
}
