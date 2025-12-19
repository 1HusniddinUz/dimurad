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
    console.log("Contact form:", form);
    setForm({ firstName: "", lastName: "", email: "", message: "" });
    alert("Message sent! (demo)");
  };

  return (
    <main className="ct">
      <section className="ct__container">
        {/* LEFT IMAGE */}
        <div className="ct__photo">
          <img src={contactImg} alt="Contact" />
        </div>

        {/* RIGHT FORM */}
        <div className="ct__content">
          <h1 className="ct__title">
            {t("contact_title", { defaultValue: "Get in touch" })}
          </h1>

          <p className="ct__text">
            {t("contact_text1", {
              defaultValue:
                "We’d love to hear from you. Tell us what DI-MURAD can tailor for you.",
            })}
          </p>

          <p className="ct__text">
            {t("contact_text2", {
              defaultValue:
                "For special orders, please send a message so we can tailor everything to your needs.",
            })}
          </p>

          <form className="ct__form" onSubmit={onSubmit}>
            <label className="ct__label">
              {t("contact_name", { defaultValue: "Name" })} <span>*</span>
            </label>

            <div className="ct__row">
              <input
                className="ct__input"
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder={t("contact_first", { defaultValue: "First Name" })}
                required
              />
              <input
                className="ct__input"
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder={t("contact_last", { defaultValue: "Last Name" })}
                required
              />
            </div>

            <label className="ct__label">
              {t("contact_email", { defaultValue: "Email" })} <span>*</span>
            </label>
            <input
              className="ct__input"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="example@email.com"
              required
            />

            <label className="ct__label">
              {t("contact_message", { defaultValue: "Message" })} <span>*</span>
            </label>
            <textarea
              className="ct__textarea"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder={t("contact_message_ph", {
                defaultValue: "Write your message...",
              })}
              required
            />

            <button className="ct__btn" type="submit">
              {t("contact_submit", { defaultValue: "Submit" })}
            </button>
          </form>

          {/* SOCIALS */}
          <div className="ct__socials">
            <a
              className="ct__social"
              href="https://t.me/+998934550770"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              title="Telegram"
            >
              <FaTelegramPlane />
            </a>

            <a
              className="ct__social"
              href="https://www.instagram.com/di.murad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="ct__mapSection" aria-label="Map">
        <div className="ct__mapWrap">
          <iframe
            className="ct__map"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6133.107292590239!2d64.418134!3d39.772129!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzE5LjciTiA2NMKwMjUnMDUuMyJF!5e0!3m2!1sru!2s!4v1766033633750!5m2!1sru!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="DI-MURAD location"
          />
        </div>
      </section>
    </main>
  );
}
