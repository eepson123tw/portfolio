// @ts-nocheck
import React, { useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import { github } from "../assets";
function Works() {
  const { t, i18n } = useTranslation();
  const i18nProject = useMemo(
    () =>
      projects.map((p, index) => ({
        ...p,
        name: t(`project.items.${index}.name`),
        description: t(`project.items.${index}.description`),
      })),
    [projects, t, i18n]
  );

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>{t("project.title")}</p>
        <h2 className={styles.sectionHeadText}>{t("project.subtitle")}</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {t("project.text")}
        </motion.p>
      </div>
      <div className="mt-20  flex flex-wrap gap-7  justify-center md:justify-start">
        {i18nProject.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) {
  return (
    <motion.div>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl xs:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt={name}
            className="object-cover rounded-2xl w-full h-full bg-white"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default SectionWrapper(Works, "work");
