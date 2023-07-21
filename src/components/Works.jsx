import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import SectionWrapper from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motions'
function Works() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, '')
