import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderStyled = styled.header`
  display: flex;
  gap: 20px;
  background-color: #dfdde6;
  align-items: center;
  font-size: 20px;
  padding: 30px;
  nav {
    display: flex;
    gap: 20px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: red;
  }
`;

export { HeaderStyled, NavLinkStyled };
