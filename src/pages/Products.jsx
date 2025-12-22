import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/style/Products.css";

import p1 from "../assets/images/clothes/chopon-opp.png";
import p2 from "../assets/images/clothes/qora.png";
import p3 from "../assets/images/clothes/qora-opp.png";
import p4 from "../assets/images/clothes/qizil-opp.png";
import p5 from "../assets/images/clothes/chp-jaket.png";
import p6 from "../assets/images/clothes/chapan-qizil.png";
import p7 from "../assets/images/clothes/jaket.png";
import p8 from "../assets/images/clothes/kok-chapan.png";
import p9 from "../assets/images/clothes/rgb-jacket.png";
import p10 from "../assets/images/clothes/sumochka.png";
import p11 from "../assets/images/clothes/xb-jacket.png";
import p12 from "../assets/images/clothes/rgb-jaket.png";
import p13 from "../assets/images/clothes/bm.png";

// ✅ id va nameKey stabil, nomlar i18n orqali chiqadi
const PRODUCTS = [
  { id: "chapan", nameKey: "prod_chapan", defaultName: "Чапан", price: "400 000 UZS", image: p1 },
  { id: "cardigan-embro", nameKey: "prod_cardigan_embro", defaultName: "Кардиган из шарф вышивальщица", price: "800 000 UZS", image: p2 },
  { id: "cardigan-floral", nameKey: "prod_cardigan_floral", defaultName: "Кардиган из шарф цветочный", price: "800 000 UZS", image: p3 },
  { id: "cardigan-red", nameKey: "prod_cardigan_red", defaultName: "Кардиган из шарф красный", price: "800 000 UZS", image: p4 },

  { id: "jacket-chapan", nameKey: "prod_jacket_chapan", defaultName: "Жакет чапан", price: "400 000 UZS", image: p5 },
  { id: "chapan-reversible", nameKey: "prod_chapan_reversible", defaultName: "Чапан двусторонний", price: "800 000 UZS", image: p6 },
  { id: "ethno-jacket", nameKey: "prod_ethno_jacket", defaultName: "Этно жакет", price: "1 800 000 UZS", image: p7 },
  { id: "blue-chapan", nameKey: "prod_blue_chapan", defaultName: "Синий чапан", price: "800 000 UZS", image: p8 },

  { id: "atlas-chapan", nameKey: "prod_atlas_chapan", defaultName: "Атлас чапан", price: "500 000 UZS", image: p9 },
  { id: "bag", nameKey: "prod_bag", defaultName: "Сумочка", price: "500 000 UZS", image: p10 },
  { id: "ethno-jacket-emb", nameKey: "prod_ethno_jacket_emb", defaultName: "Этно-жакет с вышивкой", price: "600 000 UZS", image: p11 },
  { id: "reversible-quilted-ethno", nameKey: "prod_rev_quilted_ethno", defaultName: "Двусторонний стёганый этно-жакет", price: "500 000 UZS", image: p12 },

  { id: "reversible-bomber", nameKey: "prod_rev_bomber", defaultName: "Бампер двусторонний", price: "400 000 UZS", image: p13 },
];

export default function Products() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");

  const getName = (p) =>
    t(p.nameKey, { defaultValue: p.defaultName });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter((p) => getName(p).toLowerCase().includes(q));
    // 👇 til o'zgarsa search ham moslashsin
  }, [query, i18n.language]);

  return (
    <main className="pr">
      <div className="pr__container">
        <header className="pr__head">
          <p className="pr__eyebrow">
            {t("products_eyebrow", { defaultValue: "Products" })}
          </p>
          <h1 className="pr__title">
            {t("products_title", { defaultValue: "Collection" })}
          </h1>
          <p className="pr__sub">
            {t("products_subtitle", {
              defaultValue: "Minimal. Editorial. Clean silhouettes.",
            })}
          </p>
        </header>

        <div className="pr__controls">
          <input
            className="pr__input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("products_search", { defaultValue: "Search..." })}
            aria-label={t("products_search_aria", { defaultValue: "Search products" })}
          />
        </div>

        <section className="pr2__grid" aria-label="Products grid">
          {filtered.map((p) => (
            <div key={p.id} className="pTile">
              <img
                className="pTile__img"
                src={p.image}
                alt={getName(p)}
                loading="lazy"
              />
              <div className="pTile__label">
                <div className="pTile__name">{getName(p).toUpperCase()}</div>
                <div className="pTile__price">{p.price}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
