import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import bath from '../img/bath.jpg';
import massage from '../img/massage.jpg';
import stones from '../img/stones.jpg';
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from '../animation';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
    
    return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit="exit">
       <Work>
        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        </motion.div>
        <Movie>
         <motion.h2 variants={fade}>Massage</motion.h2>
         <motion.div variants={lineAnim} className="line"></motion.div>
         <Link to="work/massage">
         <Hide><motion.img variants={photoAnim} src={massage} alt="bath"/></Hide>
         </Link>
        </Movie> 
        <Movie>
         <motion.h2 variants={fade}>Spa</motion.h2>
         <motion.div variants={lineAnim} className="line"></motion.div>
         <Link to="work/bath">
         <motion.img variants={photoAnim} src={bath} alt="bath"/>
         </Link>
        </Movie> 
        <Movie>
         <motion.h2 variants="fade">Treatments</motion.h2>
         <motion.div variants={lineAnim} className="line"></motion.div>
         <Link to="work/stones">
         <motion.img variants="photoAnim" src={stones} alt="goodtimes"/>
         </Link>
        </Movie> 
       </Work>
        <ScrollTop/>
       </motion.div>
    )
}

const Work = styled.div`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;

@media (max-width: 1300px) {
padding: 2rem 2rem;
}

h2 {
    color: black;
    padding: 1rem 0rem;
}
`;

const Movie = styled.div`
padding-bottom: 10rem;
.line {
    height: 0.5rem;
    background: #ebbbe8;
    margin-bottom: 3rem;
}
img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`;

const Hide = styled.div`
overflow: hidden;
`

const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%; 
width: 100%;
height: 100vh;
background: #fdbcfd;
z-index:2;
`;

const Frame2 = styled(Frame1)`
background: #ebbbe8;
`

const Frame3 = styled(Frame1)`
background: #fcb9cf;
`

const Frame4 = styled(Frame1)`
background: #fcb1b5;
`

export default OurWork;