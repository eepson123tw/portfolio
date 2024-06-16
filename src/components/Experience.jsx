// @ts-nocheck
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc";
import { textVariant } from "../utils/motions";

function Experience() {
  const { t, i18n } = useTranslation();
  const experiencesI18n = useMemo(
    () =>
      experiences.map((ex, index) => ({
        title: t(`experience.items.${index}.title`),
        company_name: t(`experience.items.${index}.company_name`),
        icon: t(`experience.items.${index}.icon`),
        iconBg: t(`experience.items.${index}.iconBg`),
        date: t(`experience.items.${index}.date`),
        points: t(`experience.items.${index}.points`, { returnObjects: true }),
      })),
    [t]
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("experience.title")}</p>
        <h2 className={styles.sectionHeadText}>{t("experience.subtitle")}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiencesI18n.map((ex, index) => (
            <ExperienceCard key={index} {...ex} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

function ExperienceCard({ iconBg, date, title, company_name, points, icon }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            className="w-[60%] h-[60%] object-contain"
            src={icon}
            alt={company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default SectionWrapper(Experience, "");
