import { useContext } from 'react';
import styled from 'styled-components';
import NavBarInfo from './NavBarInfo';
import TabSection from './TabSection';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../contexts/ThemeContext';
const React = require('react');

const StyledNavBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledNavBar theme={theme}>
      <NavBarInfo />
      <TabSection />
      <ThemeToggle />
    </StyledNavBar>
  );
};

export default NavBar;
