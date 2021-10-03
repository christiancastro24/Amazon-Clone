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
        accent-color: #f34f74;
    }

    input[type=text]:hover {
        border: 2.5px solid gray;
    }

    input[type=text]:focus {
        box-shadow: 0 0 3pt 2pt #F27723;
        outline-width: 0px;
    }

    input[type=checkbox], .span-KeepMeConnected {
        margin-left: -7.1rem;
        font-size: 0.9rem;
        font-family: Roboto, sans-serif;
        height: 1rem;
        cursor: pointer;
    }

    .span-KeepMeConnected {
        color: #000;
        margin-left: -8.1rem;
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

`

export const Footer = styled.footer `
    display: block; 
    margin: 3rem auto;
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
        padding-top: 1rem;
        font-weight: bold;
    }
`
