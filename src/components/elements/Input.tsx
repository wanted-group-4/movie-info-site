import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface StyledProps {
  type: string;
  placeholder?: string;
}

interface InputProps extends StyledProps {
  onKeyPress?: (event: React.KeyboardEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  (
    { onChange, onKeyPress, onFocus, onBlur, placeholder, type }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <StyledInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
);
Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
  placeholder: '텍스트를 입력해주세요.',
};

const StyledInput = styled.input`
  margin: 0 auto;
  padding: 5px 20px;
  width: 100%;
  background: transparent;
  font-weight: 400;
  size: 24px;
  line-height: 34px;
  border: none;
  color: ${({ theme }) => theme.color.white};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Input;
