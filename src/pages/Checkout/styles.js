import styled from "styled-components"

export const ContainerCheckout = styled.main `
    display: flex;
    justify-content: space-evenly;
    margin: 0%;
    overflow-y: hidden;

    .product {
        width: 60vw;
        height: 68vh;
        border-radius: 15px;
        overflow-y: scroll 50px;
        overflow-x: hidden;

        .prods {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 1rem;
            background-color: #fff;
            border-radius: 15px;
            gap: 10px;
            height: 20vh;
            box-shadow: 1px 1px 32px 4px rgba(0, 0, 0, 0.2);
        }

        img {
            height: 120px;
            max-width: 150px;
        }

        span {
            font-weight: bold;
        }
    }

    .subTotal {
        width: 24.5vw;
        display: flex;
        flex-direction: column;
        height: 72.5vh;
        box-shadow: 0 0 2pt 1pt rgba(0, 0, 0, 0.1);
        background-color: #fff;
        gap: 15px;
        padding: 0.3rem 1rem;

        h1 {
            font-size: 1.6rem;
        }

        .span-bold {
            font-weight: bold;
        }

        button {
            display: block;
            margin: 0 auto;
            height: 2rem;
            border-radius: 15px;
            width: 70%;
            font-weight: bold;
            background-color: #FFD809;
        }
    }
`