import styled from "styled-components"


export const ContainerParent = styled.main `
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    padding: 2rem;
    background-color: lightgray; 
    height: 100vh;

    .info-address {
        width: 394px;
        height: 410px;
        border: 2px solid gray;
        margin-left: 5rem;
        padding: 1rem ;
        gap: 15px;
        border-radius: 16px;
        background-color: #fff;
    }

    .info-address h2:first-child {
        margin-top: 1rem;
    }

    .info-address h2 {
        margin-bottom: 1.5rem;
    }

    h1 {
        text-align: center;
        position: absolute; 
        top: 55px;
        left: 48%;
    }

`

export const ContainerAllCep = styled.div `
    justify-content: space-around;
    align-items: center;

    div {
        border: 2px solid #F27723;
        height: 20vh;
        width: 10vw;
    }
`

export const ContainerSearch = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    width: 40vw;
    margin: 5% auto;
    padding: 25px;
    box-shadow: 0 0 3pt 2pt #F27723;
    background-color: #fff;

    .btn-center {
        display: block;
        margin: 0.55rem auto;
        text-align: center;
    }

    .btn-center button {
        background-color: #F0C14B;
        height: 30px;
        width: 10rem;
        margin-left: -0.8rem;
        border-radius: 5px;
    }

    .cpf-tel, .number-house {
        display: flex;

        input {
            width: 16.5vw;
            margin-left: 1rem;
        }
    }

    .container-search {
        display: flex;
        
        button {
            background-color: #F0C14B;
            height: 30px;
            margin-top: 0.55rem;
            width: 10rem;
            margin-left: -0.8rem;
            border-radius: 5px;
        }

        button:hover {
            filter: brightness(90%);
        }
        
        input {
            border: 2px solid gray;
            margin: 9px 22px;
            width: 90%;
            height: 31px;
            border-radius: 0.5rem;
            border: 2.5px solid gray;
        }
    }

    .address {
        display: flex;
        flex-direction: column;
        margin-left: 5%;
    }

    input {
        border: 2px solid gray;
        margin: 9px auto 5px;
        width: 35vw;
        height: 31px;
        border-radius: 0.5rem;
        border: 2.5px solid gray;
    }


    label {
        padding-left: 0.3rem;
        margin-bottom: -0.4rem;
        font-size: 1.1rem;
        font-weight: 300;
        font-family: 'Rowdies', cursive;
    }
`