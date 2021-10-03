import styled from "styled-components"


export const ContainerItemsCart = styled.main `
    display: flex;
    flex-direction: column;
    overflow-y: scroll 50px;
    overflow-x: hidden;
    height: 85vh;
    `

export const ContainerCart = styled.div `
    .container-items {
        margin: 2% 7%;
        width: 63vw;
        height: 30vh;
        box-shadow: 0 0 3pt 1pt rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-around;
        background-color: #fff;
        gap: 15px;
        padding-top: 1.5rem;
        flex-wrap: wrap;
        
        .cart-buy {
            position: absolute;
            top: 20%;
            left: 100px;
            font-weight: 550;
            font-size: 1.8rem;
            color: #222;
        }

        .hr-separator-two {
            border: 1px solid lightgray;
            height: 0px;
            width: 100%;
            margin-top: 30px;
        }
           
        .hr-separator {
            border: 1px solid lightgray;
            height: 0px;
            width: 100%;
            position: relative; 
            top: -40%;
        }

        .subtotal {
            position: relative;
            top: -42%;
            margin-left: auto;
            margin-right: 50px;
            font-weight: 500;
            font-size: 1.2rem;

            span {
                font-weight: bold;
                font-size: 1.1rem;
            }
        }

        img {
            width: 120px;
            height: 102px;
        }

        h1, h2 {
            font-weight: bold;
            margin-left: -7rem;
        }
    }

    .info-prod {
        display: flex;
        justify-content: space-between;
        width: 100%;

        img {
            height: 25px;
            width: 140px;
            margin-left: 1rem;
            position: relative;
            top: -190%;
            left: 30%;
        }

        p {
            position: relative;
            top: -190%;
            left: -8%;
            font-size: 0.9rem;
            color: gray;
            text-align: center;
        }
    }
    
    .h3 {
        position: relative;
        top: -105px;
        left: -95px;
    }

    .container-controll {
        margin: 10px;

        button {
            width: 22px;
            color: #000;
            border-radius: 5px;
            height: 26px;
            background-color: transparent;
        }

        button:nth-child(1) {
            border: 2.5px solid red;
        }

        button:nth-child(3) {
            border: 2.5px solid green;

        }

        span {
            font-size: 0.9rem;
            margin: 0.5rem;
        }
    }
`