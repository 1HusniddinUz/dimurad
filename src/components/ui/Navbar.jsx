import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../assets/style/Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeAll = () => setMenuOpen(false);

  // ✅ AOS init
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 10,
    });
  }, []);

  // ✅ menu ochilib-yopilganda AOS qayta hisoblasin (mobile overlay uchun)
  useEffect(() => {
    AOS.refresh();
  }, [menuOpen]);

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

  // ✅ AOS helper
  const aos = (type, delay) => ({
    "data-aos": type,
    "data-aos-delay": String(delay),
    "data-aos-duration": "650",
    "data-aos-easing": "ease-out-cubic",
    "data-aos-anchor-placement": "top-top",
  });

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      {...aos("fade-down", 0)}
    >
      <div className="container">
        {/* LEFT */}
        <div className="nav_side-left" {...aos("fade-right", 60)}>
          <button
            aria-label={t("nav_open")}
            className="nav_toggle"
            onClick={() => setMenuOpen(true)}
            {...aos("fade-right", 100)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav_links ${menuOpen ? "open" : ""}`}>
            <button
              aria-label={t("nav_close")}
              className="nav_close"
              onClick={closeAll}
              {...aos("fade-in", 80)}
            >
              ×
            </button>

            <ul {...aos("fade-down", 120)}>
              <li {...aos("fade-down", 140)}>
                <NavLink to="/" end className={linkClass} onClick={closeAll}>
                  {t("home")}
                </NavLink>
              </li>

              <li {...aos("fade-down", 200)}>
                <NavLink to="/products" className={linkClass} onClick={closeAll}>
                  {t("products")}
                </NavLink>
              </li>

              <li {...aos("fade-down", 260)}>
                <NavLink
                  to="/marketplaces"
                  className={linkClass}
                  onClick={closeAll}
                >
                  {t("marketplaces")}
                </NavLink>
              </li>

              <li {...aos("fade-down", 320)}>
                <NavLink to="/about" className={linkClass} onClick={closeAll}>
                  {t("about")}
                </NavLink>
              </li>

              <li {...aos("fade-down", 380)}>
                <NavLink to="/contact" className={linkClass} onClick={closeAll}>
                  {t("contact")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="logo_box" {...aos("zoom-in", 140)}>
          <img src={logo} alt="DI-MURAD Logo" />
        </div>

        {/* RIGHT LANG */}
        <div className="lang_provider" {...aos("fade-left", 200)}>
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            aria-label={t("nav_lang")}
          >
            <option value="uz">{t("lang_uz")}</option>
            <option value="en">{t("lang_en")}</option>
            <option value="ru">{t("lang_ru")}</option>
            <option value="fr">{t("lang_fr")}</option>
            <option value="tr">{t("lang_tr")}</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
