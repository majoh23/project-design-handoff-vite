import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Menu, Icon, Hamburger, NavLink, NavList, BookButton } from './StyledComponents';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo><Link to="/" style={{color: '#333', textDecoration: 'none'}}>Logo</Link></Logo>
      <Menu>
        <NavList>
          <NavLink><Link to="/about">About</Link></NavLink>
          <NavLink><Link to="/classes">Classes</Link></NavLink>
          <NavLink><Link to="/studio">Studio</Link></NavLink>
        </NavList>
        <Icon>🔍</Icon>
        <BookButton>BOOK</BookButton>
        <Hamburger>☰</Hamburger>
      </Menu>
    </HeaderWrapper>
  );
}
