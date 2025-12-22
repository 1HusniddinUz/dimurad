import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../assets/style/Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeAll = () => setMenuOpen(false);

  // Scroll blur
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop =
        doc.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
      const maxScrollTop = doc.scrollHeight - window.innerHeight;
      const progress = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      setScrolled(progress >= 0.1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Outside click + ESC
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeAll();
    };
    const onEsc = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // Resize -> close mobile menu
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) closeAll();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const linkClass = ({ isActive }) => `nav_a ${isActive ? "active" : ""}`;

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* LEFT */}
        <div className="nav_side-left">
          <button
            aria-label={t("nav_open", { defaultValue: "Open menu" })}
            className="nav_toggle"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav_links ${menuOpen ? "open" : ""}`}>
            <button
              aria-label={t("nav_close", { defaultValue: "Close menu" })}
              className="nav_close"
              onClick={closeAll}
            >
              ×
            </button>

            <ul>
              <li>
                <NavLink to="/" end className={linkClass} onClick={closeAll}>
                  {t("home", { defaultValue: "Home" })}
                </NavLink>
              </li>

              <li>
                <NavLink to="/products" className={linkClass} onClick={closeAll}>
                  {t("products", { defaultValue: "Products" })}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/marketplaces"
                  className={linkClass}
                  onClick={closeAll}
                >
                  {t("marketplaces", { defaultValue: "Marketplaces" })}
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={linkClass} onClick={closeAll}>
                  {t("about", { defaultValue: "About" })}
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={linkClass} onClick={closeAll}>
                  {t("contact", { defaultValue: "Contact" })}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="logo_box">
          <h1>{t("hero_brand", { defaultValue: "DI-MURAD" })}</h1>
        </div>

        {/* RIGHT LANG */}
        <div className="lang_provider">
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            aria-label={t("nav_lang", { defaultValue: "Language" })}
          >
            <option value="uz">{t("lang_uz", { defaultValue: "O'zbek" })}</option>
            <option value="en">{t("lang_en", { defaultValue: "English" })}</option>
            <option value="ru">{t("lang_ru", { defaultValue: "Русский" })}</option>
            <option value="fr">{t("lang_fr", { defaultValue: "Français" })}</option>
            <option value="tr">{t("lang_tr", { defaultValue: "Türkçe" })}</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
