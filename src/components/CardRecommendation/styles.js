import styled from "styled-components"

export const CartParent = styled.main `

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
    
    .card-recommendation {
        width: 220px;
        border: 1.5px solid #D0CFCF;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        height: 270px;
        margin-left: 3rem;
        box-shadow: 0 0 3pt 2pt rgba(0, 0, 0, 0.1);
    }

    h4 {
        font-size: 0.85rem;
        font-weight: 900;
        padding-left: 0.5rem;
    }

    p {
        color: #00798E;
        font-size: 0.75rem;
        font-weight: 900;
        padding-left: 0.5rem;
        cursor: pointer;
    }

    p:hover {
        color: red;
    }

    .bolsa {
        position: relative;
        left: 1rem;
    }

    img {
        height: 70px;
        margin: 0 auto;
    }

    .fone-left {
        position: relative;
        left: -14px;
    }

    .fone-left-not-much {
        position: relative;
        left: -25px;
    }


    .sports {
        
    img {
        height: 200px;
        margin: -20px 8%;
    }

        h4 {
            font-size: 0.85rem;
            font-weight: bold;
            padding-left: 0.5rem;
            padding-bottom: 0.7rem;
        }

        p {
        color: #00798E;
        font-size: 0.75rem;
        font-weight: bold;
        padding-left: 0.6rem;
        margin-top: 0.3rem;
    }
    }

    .ipad {
            width: 90%;
            position: relative;
            left: -0.6rem;
    }
`