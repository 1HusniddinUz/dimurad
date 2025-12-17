// src/components/footer/Copyright.jsx
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import "../../assets/style/Copyright.css";
// import { useTranslation } from "react-i18next";

const Copyright = () => {
  //   const { t } = useTranslation();

  return (
    <div id="Copyright">
      <div className="container">
        <div className="social-link">
          <a
            href="https://t.me/dasaba_by_dildora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://instagram.com/dasaba_by_dildora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="link-to-copy">
          <a
            href="https://t.me/buxoro_tadbirkorlar_klubi"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2025 Buxoro tadbirkorlar biznes klubi
          </a>
          <span>Biznesingizni biz bilan barpo eting</span>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
