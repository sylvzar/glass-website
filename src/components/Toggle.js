import { motion } from 'framer-motion';
import React, {useState} from 'react'
import styled from 'styled-components';
const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <GlassBox>
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}> 
        <motion.h4 layout>{title}</motion.h4>
        {toggle ? children : ""}
         <div className="faq-line"></div>
        </motion.div>
        </GlassBox>
        
    )
};

const GlassBox = styled.div`
padding: 1rem;
margin-left: -1rem;
background: rgba(252, 232, 248, 0.2);
backdrop-filter: blur(4px);
border-radius: 5px;
`

export default Toggle
