import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1700px) {
        font-size: 75%;
    }

    @media (max-width: 1300px) {
        
    }
}

body {
    background: #f8eaf3;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    color: black;
}

button {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 2px solid #eeb2eb;
    background: transparent;
    color: black;
    transition: all 0.5s ease;
    border-radius: 5px;
&:hover {
    background-color: #eeb2eb;
    color: black;
}
}
h2 {
    color: black;
    font-weight: lighter;
    font-size: 3rem;
}

h3 {
    color: black;
}

p {
    padding: 3rem 0rem;
    color: black;
    font-size: 1.4rem;
    line-height: 150%;
}

h4 {
    font-weight: bold;
    font-size: 2rem;
}

span {
    font-weight: bold;
    color: #eeb2eb;
}

a {
    font-size: 1.1.rem;
}
`;

export default GlobalStyle;
