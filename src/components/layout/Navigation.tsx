import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { SearchBar } from '../elements';

const Navigation = () => {
  return (
    <NavWrapper>
      <div>
        <NavLink to="">
          <AiFillHome />
        </NavLink>
        <NavLink to="bookmark">즐겨찾기</NavLink>
      </div>
      <SearchBar />
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.nav`
  position: relative;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  * {
    color: #fff;
    background-color: #212225;
  }
  a {
    margin: 16px;
    padding: 12px;
    text-decoration: none;
    &.active {
      border-bottom: 4px solid ${({ theme }) => theme.color.secondary_01};
    }
  }
`;
