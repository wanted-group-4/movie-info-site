import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  margin: 0 auto;
  padding: 0;
  width: 10%;
  background: transparent;
  border: none;
`;
