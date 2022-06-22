import React from 'react';
import {
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
  activeStyle,
} from './style';

import { Outlet, NavLink, useNavigate,useLocation } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Button } from '../Generic';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
const logout = ()=>{
  localStorage.removeItem('token');
  if(location?.pathname?.includes('profile')){
    navigate('/home');
  }else{
    navigate(location.pathname);
  }
};

  return (
    <Wrapper>
      <Container>
        <NavbarWrapper >
          <Logo onClick={() => navigate('/home')}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) =>  {
              return !value.hidden && (
                <NavLink style={activeStyle} key={value.id} to={value.path}>
                  {value.title}
                </NavLink>
              );
            })}
          </NavbarBody>
          <Logo>
            {
              localStorage.getItem('token') ? (
                <>
            <Button width={'131px'} mr={20} onClick={() => navigate('/profile/myProperty')}>Profile</Button>
            <Button width={'131px'} onClick={logout}>Log Out</Button>
   </>
              ):
            <Button width={'131px'} onClick={() => navigate('/signin')}>Signin</Button>
            }
          </Logo>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
