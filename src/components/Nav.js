import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Terra</Link></h1>
        <ul>
            <li>
                <Link to="/">Our Spa</Link>
                <Line 
                transition={{duration: 0.75}} 
                initial={{ width: "0%"}} 
                animate={{ width: pathname === '/' ? "50%" : "0%" }} />
            </li>
            <li>
                <Link to="/work">Pricing</Link>
                <Line 
                transition={{duration: 0.75}} 
                initial={{ width: "0%"}} 
                animate={{ width: pathname === '/work' ? "50%" : "0%" }} />
            </li>
            <li>
                <Link to="/contact">Book Treatment</Link>
                <Line 
                transition={{duration: 0.75}} 
                initial={{ width: "0%"}} 
                animate={{ width: pathname === '/contact' ? "50%" : "0%" }} />
            </li>
        </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #412c3a;
position: sticky;
top: 0;
z-index: 10;
a {
    color: white;
    text-decoration: none;
}
ul {
    display: flex;
    list-style: none;
}

li {
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    padding-left: 10rem;
    font-weight: lighter;
    position: relative;
}

#logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
}

@media (max-width: 1300px) {
     flex-direction: column;
     padding: 1rem 1rem;
     ul {
         padding: 1rem;
         justify-content: space-around;
         width: 100%;
     }

     li {
         padding: 0;
     }

     #logo {
         display: inline-block;
         margin: 1rem;
     }
    }

`

const Line = styled(motion.div)`
height: 0.3rem;
background: #f0cfee;
width: 0%;
position: absolute;
bottom: -60%;
left: 60%;
`

export default Nav;
