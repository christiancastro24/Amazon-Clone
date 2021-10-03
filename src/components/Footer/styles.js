import styled from "styled-components"

export const FooterItems = styled.main `
    position: absolute;
    top: 95%;
    width: 99vw;
    margin-top: 11rem;
    left: 0.24%;

    .back-to-top {
        height: 30px;
        width: 100%;
        background-color: #344859;
        color: #fff;
        text-align: center;
        cursor: pointer;
        
    }

    h2 {
        color: #fff;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .up-first {
        margin-top: -5.5rem;
    }

    .up-third {
        margin-top: -7.2rem;
    }

    .footer-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
        background-color: #212F3D;
        color: #fff;
        height: 65vh;
        overflow: hidden;

        p {
            font-weight: 300;
            font-size: 0.9rem;
        }
        
    }

    .get-to-know-us, .make-mokey-with-us, .amazon-payment-products, .let-us-help-you{
        display: flex;
        flex-direction: column;
    }

    .footer-info {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .select-language {
            height: 24px;
            width: 8rem;
            color: lightgray;
            background-color: #212F3D;
            border: 1.5px solid lightgray;
            margin-left: 2rem;
            cursor: pointer;
        }

        img {
            height: 61.95px;
            width: 220px;
        }
        
        .usa-image {
            display: flex;
            margin-left: 2.1rem;
            border: 1.5px solid lightgray;
            padding-left: 3rem;
        }

        .usa-image img {
            height: 20px;
            width: 25px;
            position: relative;
            left: -2.5rem;
        }

        .usa-image span {
            font-size: 0.6rem;
            position: relative;
            left: -2rem;
            top: 0.2rem;
            font-weight: bold;    
        }
    }
`