import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai';

const StyledButton = styled.button`
  margin: 0 auto;
  padding: 0;
  width: 10%;
  background: transparent;
  border: none;
`;

interface ButtonProps {
  _onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  _onClick?: (event: React.MouseEvent) => void;
}

const Button = ({_onClick}: ButtonProps) => {
  return (
    <StyledButton>
      <AiOutlineSearch 
        size={30}
        onClick={_onClick}
      />
    </StyledButton>
  )
}

export default Button