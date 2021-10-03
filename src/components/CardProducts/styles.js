import styled from "styled-components"

export const CartParent = styled.main `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;

    .card-recommendation {
        display: flex;
        margin-left: 1.6rem;
        flex-direction: column;
        border: 1.5px solid lightgray;
        box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        flex-wrap: wrap;
        gap: 0.3rem;
        width: 250px;
        height: 350px;

        .card-image {
            margin: 5px auto;

            img {
                height: 120px;    
                width: 120px;
                margin: 0.2rem auto;
            }

            p {
                font-weight: bold;
                font-size: 0.8rem;
            }
        }
        
        .description {
            font-size: 0.8rem;
            font-weight: 300;
            padding-left: 0.7rem;
        }

        .rating img {
            height: 15px;
            width: 60px;
            margin-left: 0.5rem;
        }

        h4 {
            font-weight: bold;
            padding-left: 0.5rem;
        }

        .prime-frete {
            display: flex;
            align-items: center;
        }

        .add-to-cart button{
            display: block;
            font-weight: bold;
            margin: 0.3rem auto;
            text-align: center;
            width: 10rem;
            height: 2rem;
            background-color: #FFD808;
            font-size: 0.9rem;
        }
    }
  `