import styled from "styled-components"

export const ContainerAllInfo = styled.main `
     h1 {
        position: relative;
        top: 0.5rem;
        left: 8%;
        font-size: 2.5rem;
    }

    .not-allowed {
        cursor: not-allowed;
        border: 5px solid red;
    }

`

export const ContainerItems = styled.div `
    width: 85vw;
    height: 70vh;
    border: 1.5px solid gray;
    box-shadow: 0 0 3pt 2pt #0202;
    margin: 1.5% auto;
    display: flex;
    flex-wrap: wrap;
  
    .container-box {
        width: 20rem;
        height: 7rem;
        display: flex;
        align-items: center;
        margin: 2% 2.5%;
        flex-wrap: wrap;
        border: 2px solid lightgray;
        gap: 0.5rem;
        border-radius: 8px; 
        padding: 0.1rem;
        cursor: pointer;

       &:hover {
        box-shadow: 0 0 3pt 2pt #F27723;
        outline-width: 0px;
        transition: all 0.8s;
    }

        img {
            width: 76px;
            height: 86px;
            margin-left: 1rem;
        }

        .img-boleto {
            width: 90px;
            height: 70px;
        }

        .img-prime {
            width: 96px;
            height: 76px;
        }
    }

        h5 {
            font-weight: 700;
            padding-left: 1rem;
        }
        
        p {
            color: #565959;
            padding-left: 1rem;
            font-size: 0.8rem;
        }
`