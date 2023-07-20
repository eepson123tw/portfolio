// @ts-nocheck
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import SectionWrapper from '../hoc'
import { textVariant } from '../utils/motions'

function Experience() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col '>
        <VerticalTimeline>
          {experiences.map((ex, index) => (
            <ExperienceCard key={index} {...ex} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

function ExperienceCard({ iconBg, date, title, company_name, points, icon }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            className='w-[60%] h-[60%] object-contain'
            src={icon}
            alt={company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default SectionWrapper(Experience)
