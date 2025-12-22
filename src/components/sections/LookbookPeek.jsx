import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../assets/style/LookbookPeek.css";

import img1 from "../../assets/images/atlas-opp.png";
import img2 from "../../assets/images/chopon-opp.png";
import img3 from "../../assets/images/qizil-opp.png";
import img4 from "../../assets/images/qora-opp.png";

export default function LookbookPeek() {
  const { t } = useTranslation();

  return (
    <section className="lbPeek" aria-label="Lookbook preview">
      <div className="lbPeek__container">
        <div className="lbPeek__head">
          <h2 className="lbPeek__title" data-aos="fade-up" data-aos-delay="80">
            {t("lookbook_title")}
          </h2>

          <Link
            className="lbPeek__link"
            to="/products"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            {t("lookbook_view_all")}
          </Link>
        </div>

        <div className="lbPeek__grid">
          <Link
            className="lbPeek__tile lbPeek__tile--tall"
            to="/lookbook"
            data-aos="zoom-in"
            data-aos-delay="120"
          >
            <img src={img1} alt={t("lookbook_alt_1")} loading="lazy" />
          </Link>

          <Link
            className="lbPeek__tile"
            to="/lookbook"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src={img2} alt={t("lookbook_alt_2")} loading="lazy" />
          </Link>

          <Link
            className="lbPeek__tile"
            to="/lookbook"
            data-aos="zoom-in"
            data-aos-delay="280"
          >
            <img src={img3} alt={t("lookbook_alt_3")} loading="lazy" />
          </Link>

          <Link
            className="lbPeek__tile"
            to="/lookbook"
            data-aos="zoom-in"
            data-aos-delay="360"
          >
            <img src={img4} alt={t("lookbook_alt_4")} loading="lazy" />
          </Link>
        </div>
      </div>
    </section>
  );
}
