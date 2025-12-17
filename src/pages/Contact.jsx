import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import "../assets/style/Contact.css";

import contactImg from "../assets/images/chopon-opp.png"; // o'zingizniki bilan almashtiring

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

    // Hozircha demo (backend yo'q). Keyin Telegram bot / Email API ulaymiz.
    console.log("Contact form:", form);

    // Minimal UX: formni tozalash
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
          <h1 className="ct__title">{t("contact_title", { defaultValue: "Get in touch" })}</h1>

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
              placeholder={t("contact_message_ph", { defaultValue: "Write your message..." })}
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
              href="https://t.me/your_username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              title="Telegram"
            >
              <FaTelegramPlane />
            </a>

            <a
              className="ct__social"
              href="https://instagram.com/your_username"
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
    </main>
  );
}
