import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface StyledProps {
  type: string;
  placeholder?: string;
}

interface InputProps extends StyledProps {
  _onKeyPress?: (event: React.KeyboardEvent) => void;
  _onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  _onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  _onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  (
    {
      _onChange,
      _onKeyPress,
      _onFocus,
      _onBlur,
      placeholder,
      type,
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <StyledInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        onKeyPress={_onKeyPress}
        onChange={_onChange}
        onFocus={_onFocus}
        onBlur={_onBlur}
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
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  size: 24px;
  line-height: 34px;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Input;
