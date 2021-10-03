import styled from "styled-components";

export const SearchBox = styled.div`
    background-color: var(--dark-blue);
    width: 100vw;
    height: 11vh;
    display: flex;
    align-items: center;
    

    img{
        width: 180px;
        height: 80px;
        margin-left: 1rem;
    }

    .setUser{
        color: var(--white);
        margin: 1% 0 0 1%;
        font-size: 15px;
        line-height: 25px;

        .account{
        color: var(--white);
        }
    }
    
    .cart{
        width: 50px;
        height: 40px;
        color: var(--orange);
    }
`
export const MenuBox = styled.div`
    background-color: var(--light-blue);
    width:100vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    z-index: 1000;

    a {
        color: #fff;
        margin-left: 2.7rem;
        margin-top: 0.35rem;
    }

    /* p{
        color: white;
        margin: 5px 1.4rem;
        font-weight: 600;
        font-size: 18px;
    } */
    span{
        color: white;
        margin: 5px 1rem;
        font-weight: 500;
        font-size: 15px;
    }
`