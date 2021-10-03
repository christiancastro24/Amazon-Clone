import styled from "styled-components";

export const InputStyle = styled.input`
    background-color: var(--white);
    width:70vw;
    height: 6vh;
    margin: 1% 2% 0 -2%;

    ::placeholder{
        text-align: center;
        font-size: 20px;
        margin-top: 2%;
    }
    
`
export const SearchBox = styled.div`
    display: flex;

    .click-to-search{
        background-color:var(--orange);
        width: 55px;
        height: 43px;
        margin: 9px 0px 0px -50px;
    }
    svg{
        width: 40px;
        height: 20px;
        margin: 8px 5px 0 0;
        position: relative;
        top: 0.2rem;
        left: 0.2rem;
        color: white;
    }

`