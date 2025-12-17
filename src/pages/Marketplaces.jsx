import React from "react";
import { useTranslation } from "react-i18next";
import "../assets/style/Marketplaces.css";

import uzumLogo from "../assets/images/marketplaces-icon/uzummarket.png";
import wildberriesLogo from "../assets/images/marketplaces-icon/wb.png";
import ozonLogo from "../assets/images/marketplaces-icon/ozon.png";
import yandexLogo from "../assets/images/marketplaces-icon/yandexmarket.png";

const b2cPlatforms = [
  {
    name: "Uzum Market",
    typeKey: "marketplaces_uzum_type",
    focusKey: "marketplaces_uzum_focus",
    url: "https://uzum.uz/uz/shop/husniddin",
    logo: uzumLogo,
    logoAlt: "Uzum Market logo",
  },
  {
    name: "Wildberries",
    typeKey: "marketplaces_wb_type",
    focusKey: "marketplaces_wb_focus",
    url: "https://www.wildberries.ru/seller/250059885",
    logo: wildberriesLogo,
    logoAlt: "Wildberries logo",
  },
  {
    name: "Ozon",
    typeKey: "marketplaces_ozon_type",
    focusKey: "marketplaces_ozon_focus",
    url: "https://www.ozon.ru/product/plate-1-3225615896/?oos_search=false",
    logo: ozonLogo,
    logoAlt: "Ozon logo",
  },
  {
    name: "Yandex Market",
    typeKey: "marketplaces_yandex_type",
    focusKey: "marketplaces_yandex_focus",
    url: "https://market.yandex.uz/card/stilnyy-zhenskiy-kostyum-sostoyashchiy-iz-myagkikh-drapovykh-bryuk-i-udobnoy-kurtki-iz-zamshevoy-tkani/4850174486?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-8",
    logo: yandexLogo,
    logoAlt: "Yandex Market logo",
  },
];

const Marketplaces = () => {
  const { t } = useTranslation();

  return (
    <section className="marketplaces-page">
      <div className="marketplaces-container">
        {/* HEADER */}
        <header className="marketplaces-header">
          <p className="marketplaces-eyebrow">{t("marketplaces_eyebrow")}</p>
          <h1 className="marketplaces-title">{t("marketplaces_title")}</h1>
          <p className="marketplaces-subtitle">{t("marketplaces_subtitle")}</p>
        </header>

        {/* B2C BLOCK */}
        <section className="marketplaces-block">
          <div className="marketplaces-block-header">
            <h2 className="marketplaces-block-title">
              {t("marketplaces_b2c_title")}
            </h2>
            <p className="marketplaces-block-text">
              {t("marketplaces_b2c_text")}
            </p>
          </div>

          <div className="marketplaces-grid">
            {b2cPlatforms.map((mkt) => (
              <article className="marketplace-card" key={mkt.name}>
                <div className="marketplace-card-top">
                  <div className="marketplace-logo">
                    {mkt.logo && <img src={mkt.logo} alt={mkt.logoAlt} />}
                  </div>
                  <div className="marketplace-card-texts">
                    <h3 className="marketplace-name">{mkt.name}</h3>
                    <p className="marketplace-type">{t(mkt.typeKey)}</p>
                  </div>
                </div>

                <p className="marketplace-focus">{t(mkt.focusKey)}</p>

                <div className="marketplace-footer">
                  <a
                    href={mkt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="marketplace-link"
                  >
                    {t("marketplaces_button_view")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NOTE */}
        <section className="marketplaces-note">
          <p>{t("marketplaces_note")}</p>
        </section>
      </div>
    </section>
  );
};

export default Marketplaces;
