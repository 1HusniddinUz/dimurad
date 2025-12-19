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
    url: "https://uzum.uz/uz/product/etnik-jaket-yoqali-vintage-suzani-matosidan-2219594",
    logo: uzumLogo,
    logoAlt: "Uzum Market logo",
  },
  {
    name: "Wildberries",
    typeKey: "marketplaces_wb_type",
    focusKey: "marketplaces_wb_focus",
    url: "https://www.wildberries.ru/catalog/716736085/detail.aspx?targetUrl=GP",
    logo: wildberriesLogo,
    logoAlt: "Wildberries logo",
  },
  {
    name: "Ozon",
    typeKey: "marketplaces_ozon_type",
    focusKey: "marketplaces_ozon_focus",
    url: "https://uz.ozon.com/product/bomber-1-3260622131/?oos_search=false",
    logo: ozonLogo,
    logoAlt: "Ozon logo",
  },
  {
    name: "Yandex Market",
    typeKey: "marketplaces_yandex_type",
    focusKey: "marketplaces_yandex_focus",
    url: "https://market.yandex.uz/card/etno-zhaket-s-shalevym-vorotnikom-iz-vintazhnogo-suzani-stilnyy-zhenskiy-etno-zhaket-s-shalevym-vorotnikom/4901049161?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-9",
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
