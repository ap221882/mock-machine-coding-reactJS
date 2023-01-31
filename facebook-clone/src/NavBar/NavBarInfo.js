import React from 'react';
import styled from 'styled-components';
import { FB_LOGO_URL } from '../assets';
import SearchComponent from './SearchComponent';

const StyledNavBarInfo = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
  img {
    display: block;
    max-width: 100px;
  }
`;

const NavBarInfo = () => {
  return (
    <StyledNavBarInfo>
      <img alt='logo' src={FB_LOGO_URL} />
      <SearchComponent />
    </StyledNavBarInfo>
  );
};

export default NavBarInfo;
