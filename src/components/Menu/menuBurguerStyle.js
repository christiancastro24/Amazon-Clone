import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--white);
  border-right: solid 7px var(--dark-blue);
  height: 92vh;
  text-align: left;
  position: absolute;
  top: 15;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    font-size: 15px;
    padding: 7px 10px;
    font-weight: regular;
    color: var(--black) !important;
    text-decoration: none;
    transition: color 0.3s linear;
  }


  h3{
    font-weight: 600;
    margin-left: 0rem;
    margin-top: 2.1rem;
    padding:1rem;
    background-color: var(--dark-blue);
    color: var(--white);
  }

    .profile{
      margin: 0rem 0 1rem -1rem;
      width: 16rem;
      background-color: var(--dark-blue);
      padding: 10%;
      color: var(--white);

      .avatar{
        margin:0 28px;
      }
    }
`;