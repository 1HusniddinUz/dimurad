import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import "../assets/style/Contact.css";

import contactImg from "../assets/images/chopon-opp.png";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const fullName = [form.firstName, form.lastName].filter(Boolean).join(" ");

    const subject = t("contact_email_subject"); // translationdan oladi

    const bodyLines = [
      fullName && `${t("contact_mail_fullname")}: ${fullName}`,
      `${t("contact_mail_email")}: ${form.email}`,
      "",
      `${t("contact_mail_message")}:`,
      form.message,
    ].filter(Boolean);

    const body = bodyLines.join("\n");

    const toEmail = "muraddilnoza@gmail.com"; // shu yerda admin email
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // UX: tozalash
    setForm({ firstName: "", lastName: "", email: "", message: "" });
    alert(t("contact_alert_sent"));
  };

  return (
    <main className="ct">
      <section className="ct__container" aria-label={t("contact_aria")}>
        {/* LEFT IMAGE */}
        <div className="ct__photo">
          <img src={contactImg} alt={t("contact_img_alt")} loading="lazy" />
        </div>

        {/* RIGHT FORM */}
        <div className="ct__content">
          <h1 className="ct__title">{t("contact_title")}</h1>

          <p className="ct__text">{t("contact_text1")}</p>
          <p className="ct__text">{t("contact_text2")}</p>

          <form className="ct__form" onSubmit={onSubmit}>
            <label className="ct__label">
              {t("contact_name")} <span>*</span>
            </label>

            <div className="ct__row">
              <input
                className="ct__input"
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder={t("contact_first")}
                required
              />
              <input
                className="ct__input"
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder={t("contact_last")}
              />
            </div>

            <label className="ct__label">
              {t("contact_email")} <span>*</span>
            </label>

            <input
              className="ct__input"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder={t("contact_email_ph")}
              required
            />

            <label className="ct__label">
              {t("contact_message")} <span>*</span>
            </label>

            <textarea
              className="ct__textarea"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder={t("contact_message_ph")}
              required
            />

            <button className="ct__btn" type="submit">
              {t("contact_submit")}
            </button>
          </form>

          {/* SOCIALS */}
          <div className="ct__socials" aria-label={t("contact_socials_aria")}>
            <a
              className="ct__social"
              href="https://t.me/DilnozaMurad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("contact_social_telegram")}
              title={t("contact_social_telegram")}
            >
              <FaTelegramPlane />
            </a>

            <a
              className="ct__social"
              href="https://www.instagram.com/di_murad_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("contact_social_instagram")}
              title={t("contact_social_instagram")}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="ct__mapSection" aria-label={t("contact_map_aria")}>
        <div className="ct__mapWrap">
          <iframe
            className="ct__map"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6133.107292590239!2d64.418134!3d39.772129!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzE5LjciTiA2NMKwMjUnMDUuMyJF!5e0!3m2!1sru!2s!4v1766033633750!5m2!1sru!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title={t("contact_map_title")}
          />
        </div>
      </section>
    </main>
  );
}
