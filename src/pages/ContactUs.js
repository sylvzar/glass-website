import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

const ContactUs = () => {
    return (
    <ContactStyle variants={pageAnimation} initial='hidden' animate='show' exit="exit" style={{background: "rgba(252, 232, 248, 0.2)"}}>
    <Title>
        <Hide>
        <motion.h2 variants={titleAnim}>
        Make a booking
        </motion.h2>
        </Hide>
    </Title>
    <ScrollTop/>
    <div>
    <Hide>
    <Social variant={titleAnim}>
    <Circle/>
    <h2>Message us @ bookings@terraspa.com</h2>
    </Social>
    </Hide>
    <Hide>
    <Social variant={titleAnim}>
    <Circle/>
    <h2>Call our branch number - Cardiff 02920XXXXX</h2>
    </Social>
    </Hide>
    <Hide>
    <Social variant={titleAnim}>
    <Circle/>
    <h2>Follow our social media accounts for latest offers!</h2>
    </Social>
    </Hide>
    </div>
    </ContactStyle> 
    )
}

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
background: rgb(252, 201, 242);
@media (max-width: 1300px) {

    padding: 2rem;
    font-size: 1rem;
    
}
`

const Title = styled.div`
margin-bottom: 4rem;
color: black;
@media (max-width: 1300px) {
    margin-top: 5rem;
}
`

const Hide = styled.div`
overflow: hidden;`


const Circle = styled.div`
border-radius: 50%;
width: 2rem;
height: 2rem;
background: #353535;`

const Social = styled(motion.div)`
display: flex;
align-items: center;
h2 {
    margin: 2rem;
}
`

export default ContactUs;