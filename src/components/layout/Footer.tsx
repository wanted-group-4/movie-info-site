import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/wanted-group-4/movie-info-site">
        <div className="title">Movies WEB</div>
        &copy; Wanted Pre-Onboarding Team 04
      </a>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 120px auto;
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2;
  background-color: ${({ theme }) => theme.color.primary_01};
  a {
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.gray_03};
    transition: all 300ms ease;
    &:hover {
      color: #fff;
    }
    .title {
      font-weight: 800;
    }
  }
`;
