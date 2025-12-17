import { Routes, Route } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

// i18n | MULTI LANG
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Marketplaces from "../pages/Marketplaces.jsx";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../components/layout/Footer.jsx";
import translationsUz from "../locales/translationsUz.js"
export default function App() {
  i18n.use(initReactI18next).init({
    resources: {
      uz: { translation: translationsUz },
    },
    lng: "uz",
    fallbackLng: "uz",
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/marketplaces" element={<Marketplaces />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
