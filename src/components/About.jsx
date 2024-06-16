// @ts-nocheck
import React from "react";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import SectionWrapper from "../hoc";
function About() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("intro.title")}</p>
        <h2 className={styles.sectionHeadText}>{t("intro.subtitle")}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="mt-4 text-white-100 text-[17px] w-max-3xl leading-[30px]"
      >
        {t("intro.text")}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10  justify-center md:justify-start">
        {services.map((ser, idx) => (
          <ServiceCard key={idx} index={idx} {...ser} />
        ))}
      </div>
    </>
  );
}

function ServiceCard({ index, title, icon }) {
  const { t, i18n } = useTranslation();
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center"
        >
          <img
            src={icon}
            alt={t(`intro.icons.${title}`)}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] text-center font-bold">
            {t(`intro.icons.${title}`)}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default SectionWrapper(About, "about");
