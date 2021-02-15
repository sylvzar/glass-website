import styled from 'styled-components';

export const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;

@media (max-width: 1300px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }

`

export const Description = styled.div`
background: rgba(252, 232, 248, 0.2);
backdrop-filter: blur(4px);
box-shadow: 1px 1px 10px rgba(73, 73, 73, 0.1);
border-radius: 5px;
flex: 1;
padding: 7rem 5rem;
z-index: 2;
h2 {
    font-weight: lighter;
}

@media (max-width: 1300px) {
       padding: 3rem 2rem;
       button {
           margin: 2rem 0rem 5rem 0rem;
       } 
       
    }

`

export const Image = styled.div`
z-index: 2;
flex: 1.5;
overflow: hidden;
padding: 0.5rem;
box-shadow: 1px 1px 5px rgba(73, 73, 73, 0.1);
border-radius: 5px;
margin-left: 3rem;
img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
   
}

@media (max-width: 1300px) {
    margin-top: 2rem;
    margin-left: 0rem;
}
`

export const Hide = styled.div`
overflow: hidden;
`