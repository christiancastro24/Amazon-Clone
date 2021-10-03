// REACT
import React from 'react';
import { bool } from 'prop-types';
import { useHistory } from "react-router-dom"

// STYLE
import { StyledMenu } from './menuBurguerStyle';

// ANTD
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuthentication } from '../../providers/Authentication';

const Menu = ({ open }) => {

    const history = useHistory();
    const { userName } = useAuthentication();

  return (
    <StyledMenu open={open} style={{zIndex: "1000"}}>
      <div className="profile">
      <Avatar className="avatar" size="small" icon={<UserOutlined />} />Olá, {userName}!
      </div>
  
      <h3>Serviços Amazon</h3>
      <a href="https://www.amazon.com.br/music" target="_blank">
        Amazon Music
        </a>
        <a href="https://www.amazon.com.br/prime" target="_blank">
        Prime Vídeo
        </a>
        <a title="Em Manuntenção" style={{cursor: "not-allowed"}}>
        Kindle
        </a>
        <h3 >
        Compre por Categoria
        </h3>
        <a onClick={() => history.push('/filteredCatA')}>
          Tecnologia
        </a>
        <a onClick={() => history.push('/filteredCatB')}>
          Telefonia
        </a>
        <a onClick={() => history.push('/filteredCatC')}>
          Fashion
        </a>
        <a onClick={() => history.push('/filteredCatD')}>
          Sports
        </a>
        <a title="Em Manuntenção" style={{cursor: "not-allowed"}}>
        Alexa
        </a>
        <a title="Em Manuntenção" style={{cursor: "not-allowed"}}>
        Video-games
        <br />
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;