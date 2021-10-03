import styled from "styled-components"

export const Container = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;

    .new4 {
        border: 1px solid red;
    }
`

export const Header = styled.header `
    img {
        height: 100.42px;
        width: 150.21px;
        padding: 1.5rem;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
    width: 24vw;
    gap: 0.5rem;

    h1 {
        padding-left: 1.4rem;
        font-weight: 300;
        font-family: 'Roboto', sans-serif;
    }

    label {
        padding-left: 1rem;
        margin-bottom: -0.7rem;
        font-size: 1.1rem;
        font-weight: 300;
        font-family: 'Rowdies', cursive;
    }

    input {
        margin: 9px auto 5px;
        width: 90%;
        height: 31px;
        border-radius: 3px;
        border: 2.5px solid gray;
    }

    input[type=text]:hover {
        border: 2.5px solid gray;
    }

    input[type=text]:focus {
        box-shadow: 0 0 3pt 2pt #F27723;
        outline-width: 0px;
    }

    button {
        display: block;
        margin: 1rem auto;
        border: 1px solid gray;
        background-color: #F0C14B;
        border: 1px solid #A88734; 
        width: 90%;
        border-radius: 3px;
        height: 31px;
        cursor: pointer;
    }

    button:hover, a:hover {
        filter: brightness(90%);
    }

    .about-p  {
        padding-left: 1rem;
        margin-top: -1.5rem;
    }
    
    .about-p p {
        font-size: 14px;
        color: #050505;
    }

    span, a {
       color: #1AA5F3; 
       font-weight: bold;
       text-decoration: none;
    }

    .account-exist {
        padding-left: 1.5rem;
        font-size: 1rem;
        font-weight: 390;
        margin-top: -0.8rem;
        font-family: 'Roboto', sans-serif;
    }

    .hr {
        border-bottom: 1px solid gray; 
        width: 80%; 
        margin: 1rem auto; 
        padding: 0rem; 
        background-color: gray;
    }   
`

export const Footer = styled.footer `
    display: block; 
    margin: 2rem auto;
    align-items: center;

    span {
        margin-left: 1rem;
        color: #1AA5F3; 
        font-weight: 400;
        font-family: 'Rowdies', cursive;
    }

    p {
        color: #808080;
        text-align: center;
        font-weight: bold;
    }
`
