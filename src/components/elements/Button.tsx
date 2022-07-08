import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const StyledButton = styled.button`
  margin: 0 auto;
  padding: 0;
  width: 10%;
  background: transparent;
  border: none;
`;

interface ButtonProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent) => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <StyledButton>
      <AiOutlineSearch size={30} onClick={onClick} />
    </StyledButton>
  );
};

export default Button;
