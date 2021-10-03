import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #101A20;
    --light-blue: #213643;
    --anchor-blue: #00798E;
    --box-blue: #AA5F3;
    --white: #FFFFFF;
    --orange: #F27723;
    --yellow: #FFD808;
    --dark-yellow: #FA0C14B
    --black: #000000;
    --gray: #344859;
    --meium-gray: #808080;
    --dark-gray: #212f3D;
    --green: #00DF76;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--white);
    color: var(--black);
    font-size: 1rem;
    font-family: 'Roboto Slab', serif;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }
  /* h1 {
      font-family: 'Roboto', serif;
}

h2, h3 {
    font-family: 'Rowdies', cursive;
  } */

  input {
    outline: none;
  }
  
  select {
    outline: none;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto', serif;
    
  }

  ::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  }

  ::-webkit-scrollbar-thumb{
  background: var(--black);
  border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb:hover{
  background: var(--gray);

  }

  ::-webkit-scrollbar-track{
  background: var(--orange);
  border-radius: 30px;
  box-shadow: inset 0px 0px 0px 0px #F0F0F0;
  }
  
`;