import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    .nav{
        background-color: var(--dark-blue);
        width: 100vw;
        height: 8vh;
        margin-bottom: 5rem;

    }
`
export const ProdContainer = styled.div`
      display: flex;
      justify-content: space-around;
`
export const ImgContainer = styled.div`
        width: 20vw;
        justify-content: center;
        margin-top: 4rem;
        margin-left: 3rem;
        
        img:hover {
            -moz-transform: scale(1.4);
            -webkit-transform: scale(1.4);
            transform: scale(1.4);
            z-index: 1000;
            transition: all 1.2s;
            cursor: pointer;
        }
`
export const InfoContainer = styled.div`
        width: 40vw;
        background-color:var(--blue);
        margin-left: 1.5rem;

        .brand{
            color: var(--anchor-blue);
            font-weight: bold;
            margin: 1rem 0 0 0;
        }
    
        .indica{
            font-size:12px;
            font-weight: bold;
            text-align: center;
            width: 110px;
            background-color: var(--light-blue);
            
            .first{
                color: var(--white);
            }
            span{
                color: var(--orange);
            }
        }
        .rating{
            padding: 3% 0 ;
        }

        strong {
            font-size: 1.5rem;
        }
            
            .price{
                margin-top: 1rem;
                font-weight: 500;
                
                 .de-por {
                    text-decoration: line-through;
                }
                
                .descount{
                    span{
                        color: #B12704;
                    }
                }
                .installment{
                    font-weight: bold;
                    margin-top:1rem;
                }
            }

            .d-icons{
                display:flex;
                width: 32vw;
                margin: 1.8rem 0 2rem 0;

                img {
                    height: 50px;
                }

                p{
                    font-weight:bold;
                    color:var(--anchor-blue);
                    margin-left: 0.1rem;
                }

            }

            .description{
                margin-top: 1rem;
                width: 30vw; 
                font-style: italic;
            }
`
export const OrderContainer = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 1.2em;
    flex-direction: column;
    width: 21vw;
    height: 66vh;
    margin-right:2rem;
    border: solid 1px var(--gray);
    box-shadow: 0 0 3pt 3pt rgba(0, 0, 0, 0.25);
    gap: 4px;

    .select {
        width: 20%;
        cursor: pointer;
    }
    
    .order-price{
        color: #B12704;
        margin: 0.7rem 0 1rem 1rem;
        font-weight: 300;
        text-rendering: optimizeLegibility

    }
    .order-installment{
        margin: 0rem 0 2rem 1rem;
    }
    .frete{
        margin: 0rem 0 2rem 1rem;
        span{
            color: var(--anchor-blue);
            font-size: 1.2rem;
            margin: 1rem 0 2rem 0rem;
        }
    }
    .stock{
        color: #007600;
        margin: 0rem 0 2rem 1rem;
        text-transform: uppercase;
        font-weight: bolder;
    }

    .span-bold {
        font-weight: bold;
    }

    .color-normal {
        font-weight: 350;
    }

    .gray {
        color: #565959;
    }

    .about-frete {
        font-size: 1rem;
        margin: -1.5rem 0 2rem 1rem;
    }
    .quantity{
        margin: 0rem 0 2rem 1rem;
    }

    .addToCart{
        width:250px;
        height: 50px;
        border-radius: 25px;
        padding: 2%;
        font-size:1em;
        margin: 0rem 0 1rem 1rem;
        background-color: var(--yellow);
    }

    .addToCart:hover {
        filter: brightness(90%);
        transition: all 0.8s;
    }
`