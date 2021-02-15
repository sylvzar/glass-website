import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';


export const Wave2 = () => {
    return (
        <WaveSvg width="2000" height="1263" viewBox="0 0 1840 463" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
        initial={{pathLength: 0, pathOffset: 1}} animate={{pathLength: 1, pathOffset: 0}} transition={{ duration: 1}} d="M1 70.5001C162.291 221.15 64.9792 -143.849 462 70.5001C859.021 284.849 1090.98 22.3634 932 70.5001" stroke="#D96ED4" strokeOpacity="0.1" strokeWidth="15"/>
        </WaveSvg>
        
    )
};

const WaveSvg = styled.svg`
position: absolute;

left: 0;
z-index: -1;
;
`

