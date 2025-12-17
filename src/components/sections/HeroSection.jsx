import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/HeroSection.css";

import heroImg from "../../assets/images/bg.png"; // premium editorial photo shart :)

export default function HeroSection() {
  return (
    <header className="heroA" aria-label="Home hero">
      <div className="heroA__container">
        {/* LEFT (editorial copy) */}
        <div className="heroA__left">
          <p className="heroA__kicker">DI-MURAD ATELIER</p>

          <h1 className="heroA__title">
            Bespoke tailoring
            <span className="heroA__titleBreak"> with quiet confidence.</span>
          </h1>

          <p className="heroA__sub">
            Minimal silhouette. Perfect fit. Premium fabrics.
          </p>

          <div className="heroA__actions">
            <Link className="btnA btnA--primary" to="/appointment">
              Book Appointment
            </Link>
            <Link className="btnA btnA--ghost" to="/lookbook">
              View Lookbook
            </Link>
          </div>

          <div className="heroA__note">
            <span className="heroA__dot" />
            Crafted in-atelier • Limited slots weekly
          </div>
        </div>

        {/* RIGHT (image frame) */}
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
