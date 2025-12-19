import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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

// slug helper (id va keylarni avtomatik qilish uchun)
const slugify = (s) =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// faqat shu listni kengaytirasiz (qolganini map qiladi)
const PRODUCT_SEED = [
  { name: "Чапан", price: `400 000 UZS`, image: p1 },
  { name: "Кардиган из шарф вышивальщица", price: `800 000 UZS`, image: p2 },
  { name: "Кардиган из шарф цветочный", price: `800 000 UZS`, image: p3 },
  { name: "Кардиган из шарф красный", price: `800 000 UZS`, image: p4 },

  { name: "Жакет чапан", price: `400 000 UZS`, image: p5 },
  { name: "Чапан двусторонний ", price: `800 000 UZS`, image: p6 },
  { name: "этно жакет", price: `1 800 000 UZS`, image: p7 },
  { name: "Синий чапан", price: `800 000 UZS`, image: p8 },
  { name: "Атлас чапан", price: `500 000 UZS`, image: p9 },
  { name: "Сумочка", price: `500 000 UZS`, image: p10 },
  { name: "Этно-жакет с вишивкой ", price: `600 000 UZS`, image: p11 },
  { name: "Двусторонний стёганый этно-жакет", price: `500 000 UZS`, image: p12 },
  { name: "Бампер двусторонний", price: `400 000 UZS`, image: p13 },
];

// FINAL PRODUCTS (map bilan)
const PRODUCTS = PRODUCT_SEED.map((p, idx) => {
  const slug = slugify(p.name) || `p-${idx + 1}`;
  return {
    id: slug,
    name: p.name.toUpperCase(),
    nameKey: `p_${slug.replace(/-/g, "_")}`,
    price: p.price,
    image: p.image,
  };
});

export default function Products() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  const formatPrice = (p) => {
    if (!p || p.price == null || p.price === 0) {
      return t("price_on_request", { defaultValue: "Price on request" });
    }
    return `${p.price}`;
  };

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
            aria-label="Search products"
          />
        </div>

        <section className="pr2__grid" aria-label="Products grid">
          {filtered.map((p) => (
            <div key={p.id} className="pTile">
              <img
                className="pTile__img"
                src={p.image}
                alt={p.name}
                loading="lazy"
              />
              <div className="pTile__label">
                <div className="pTile__name">{p.name}</div>
                <div className="pTile__price">{formatPrice(p)}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
