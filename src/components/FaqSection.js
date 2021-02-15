import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";
import {Wave2} from '../components/Wave2';

const FaqSection = () => {
    return (
<Faq>
<Wave2/>
    <h2>Any questions? <span>FAQ</span></h2>
    <AnimateSharedLayout>
    <Toggle title='What services do we provide?'>
        <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, architecto?</p>
        </div> 
    </Toggle>
    <Toggle title='How to book? Schedule and availability.'>
        <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, architecto?</p>
        </div>
    </Toggle>
<Toggle title="How to get to Terra Spa?">
        <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, architecto?</p>
        </div>
</Toggle>
   <Toggle title="What products do you offer?">
        <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, architecto?</p>
        </div>
   </Toggle>
   </AnimateSharedLayout>
   
</Faq>

    )
}

const Faq = styled(About)`
color: black;
display: block;

span {
    display: block;
}
h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line {
    background: #d84ecc;
    height: 3px;
    margin: 2rem 0rem;
    width: 100%;

}

.question {
    padding: 3rem 0rem;
    cursor: pointer;

}
.answer {
    
    padding: 2rem 0rem;
    p {
        padding: 1rem 0rem;
    }
}
`;

export default FaqSection;