import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/AppointmentCTA.css";

import atelierImg from "../../assets/images/atlas-opp.png";

export default function AppointmentCTA() {
  return (
    <section className="appCTA" aria-label="Appointment call to action">
      <div className="appCTA__container">
        <div className="appCTA__media" aria-hidden="true">
          <img src={atelierImg} alt="" loading="lazy" />
        </div>

        <div className="appCTA__body">
          <p className="appCTA__kicker">FITTING BY APPOINTMENT</p>
          <h3 className="appCTA__title">Your fit. Your signature.</h3>
          <p className="appCTA__sub">Limited weekly slots.</p>

          <Link className="appCTA__btn" to="/appointment">
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
}
