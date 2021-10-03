import styled from "styled-components";
import Background from "../../assets/background.jpg";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 99vw;
    height: 30vh;
    z-index: -1;
    
  }
  
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0px auto;
  }
`;


export const Image = styled.div`
  @media (min-width: 1200px) {
    height: 28.4%;
    width: 98.5vw;
    background-image: url(${Background});
    background-size: contain;
    position: absolute;
    top: 18.4%;
    left: 1.1%;
    filter: blur(2px);
    opacity: 0.8;
  }
`;
