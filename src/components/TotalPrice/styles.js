import styled from "styled-components"

export const Total = styled.div `
height: 300px;

    .sub-frete {
        width: 25vw;
        height: 37vh;
        box-shadow: 0 0 3pt 1pt rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        border: 1.5px solid lightgray;
        justify-content: center;
        align-items: center;
        margin: 25px;
        gap: 1rem;
        text-align: center;
        background-color: #fff;

        h2 {
            font-size: 1.4rem;
        }


        .verificado-text {
            display: flex;
        }

        img {
            height: 20px;
            width: 20px;
            margin-left: 7px;
        }

        .bold-span {
            font-weight: bold;
        }

        .span-parent {
            color: #222;
            font-weight: 300;

            span {
                color: #00DF76;
            }
        }

        .input-span {
            display: flex;
            flex-direction: row;

            span {
                display: block;
                margin-top: -0.25rem;
                margin-left: 0.5rem;
            }
        }

        .btn {
            width: 85%;
            background-color: #FFD809;
            color: #000;
            text-align: center;
            height: 2.01rem;
            line-height: 2rem;
            border-radius: 6px;
        }

        .btn-ceps {
            width: 65%;
            background-color: #f34f74;
            color: #fff;
            text-align: center;
            height: 2.01rem;
            line-height: 2rem;
            border-radius: 6px;
        }
        
        .btn button {
            font-weight: bold;
        }

        button:hover {
            filter: brightness(90%);
        }
    }
`