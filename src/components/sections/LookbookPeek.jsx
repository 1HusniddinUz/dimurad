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
          <h2 className="lbPeek__title">
            {t("lookbook_title", { defaultValue: "Lookbook" })}
          </h2>

          <Link className="lbPeek__link" to="/products">
            {t("lookbook_view_all", { defaultValue: "View all" })}
          </Link>
        </div>

        <div className="lbPeek__grid">
          <Link className="lbPeek__tile lbPeek__tile--tall" to="/lookbook">
            <img
              src={img1}
              alt={t("lookbook_alt_1", { defaultValue: "Look 01" })}
              loading="lazy"
            />
          </Link>

          <Link className="lbPeek__tile" to="/lookbook">
            <img
              src={img2}
              alt={t("lookbook_alt_2", { defaultValue: "Look 02" })}
              loading="lazy"
            />
          </Link>

          <Link className="lbPeek__tile" to="/lookbook">
            <img
              src={img3}
              alt={t("lookbook_alt_3", { defaultValue: "Look 03" })}
              loading="lazy"
            />
          </Link>

          <Link className="lbPeek__tile" to="/lookbook">
            <img
              src={img4}
              alt={t("lookbook_alt_4", { defaultValue: "Look 04" })}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
