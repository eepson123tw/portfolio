// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useTranslation } from "react-i18next";
export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <section className="relative w-full mx-auto h-screen">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fc665f]"></div>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-red-500  "></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hero.title")}&nbsp;
            <span className="text-red-500"> {t("hero.name")}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("hero.text")} <br className="sm:block hidden" />
            {t("hero.text2")}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
