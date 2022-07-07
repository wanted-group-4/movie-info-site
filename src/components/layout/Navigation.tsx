import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <NavWrapper>
      <NavLink to="">검색</NavLink>
      <NavLink to="bookmark">즐겨찾기</NavLink>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.nav`
  padding: 24px;
  a {
    margin: 16px;
    padding: 8px;
    text-decoration: none;
    &.active {
      border-bottom: 4px solid ${({ theme }) => theme.color.secondary_01};
    }
  }
`;
