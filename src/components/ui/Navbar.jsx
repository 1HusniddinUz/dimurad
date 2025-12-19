import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/style/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const navRef = useRef(null);

  const closeAll = () => {
    setMenuOpen(false);
    setMarketOpen(false);
  };

  // 70% scroll bo'lganda blur
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

  // Tashqariga bosilganda yopish
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAll();
      }
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

  // Katta ekranga qaytganda mobil menyuni yopish
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mobil overlay ochilganda body scrollni bloklash
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Chap: nav */}
        <div className="nav_side-left">
          <button
            aria-label="Open menu"
            className="nav_toggle"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav_links ${menuOpen ? "open" : ""}`}>
            {/* Mobil/planshet overlay uchun yopish tugmasi */}
            <button
              aria-label="Close menu"
              className="nav_close"
              onClick={closeAll}
            >
              ×
            </button>

            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `nav_a ${isActive ? "active" : ""}`}
                  onClick={closeAll}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) => `nav_a ${isActive ? "active" : ""}`}
                  onClick={closeAll}
                >
                  Products
                </NavLink>
              </li>

                            <li>
                <NavLink
                  to="/marketplaces"
                  className={({ isActive }) => `nav_a ${isActive ? "active" : ""}`}
                  onClick={closeAll}
                >
                  Marketplaces
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav_a ${isActive ? "active" : ""}`}
                  onClick={closeAll}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav_a ${isActive ? "active" : ""}`}
                  onClick={closeAll}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Markaz: logo */}
        <div className="logo_box">
          <h1>DI-MURAD</h1>
        </div>

        {/* O'ng: til tanlash */}
        <div className="lang_provider">
          <select>
            <option value="uz">O'zbek</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
