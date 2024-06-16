// @ts-nocheck
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import emails from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc";
import { slideIn } from "../utils/motions";
import { EarthCanvas } from "./canvas";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleChang = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //TkmmWbU87JFi6BHUf
    //template_pysktmn
    //service_s95qvp8
    setLoading(true);
    emails
      .send(
        "service_s95qvp8",
        "template_pysktmn",
        {
          from_name: form.name,
          to_name: "Allen Chou",
          from_email: form.email,
          to_email: "ninocar215@gmail.com",
          message: form.message,
        },
        "TkmmWbU87JFi6BHUf"
      )
      .then(
        () => {
          setLoading(false);
          alert("THX! I will get back to you as soon as possible!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          setLoading(true);
          alert("Wops! Something bad happened!");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t("contact.title")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact.subtitle")}</h3>

        <form
          className="mt-10 flex flex-col gap-8"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.name")}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChang}
              placeholder={t("contact.placeholder.name")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.email")}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChang}
              placeholder={t("contact.placeholder.email")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.message")}
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChang}
              placeholder={t("contact.placeholder.message")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            disabled={loading}
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
