import React from 'react';
import beauty1 from "../img/beauty1.jpg";
import {About, Description, Image, Hide} from "../styles";
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from "../animation";
import {Wave} from '../components/Wave';

const AboutSection = () => {
    return (
<About>
   <Description>
       <motion.div>
           <Hide>
               <motion.h2 variants={titleAnim} >Making</motion.h2>
           </Hide>
           <Hide>
               <motion.h2 variants={titleAnim} >your <span>dreams</span> come </motion.h2>
           </Hide>
           <Hide>
               <motion.h2 variants={titleAnim} >true.</motion.h2>
           </Hide>
       </motion.div>
       <motion.p variants={fade}>Our spa offer a variety of relaxing treatments and healing sessions as well as massages, facials, and body scrubs.</motion.p>
       <motion.button variants={fade}>Contact Us</motion.button>
   </Description>
   <Image><motion.img variants={photoAnim} initial="hidden" animation="show" src={beauty1} alt="towels"/></Image>
   <Wave/>
</About>
    )
}


export default AboutSection;