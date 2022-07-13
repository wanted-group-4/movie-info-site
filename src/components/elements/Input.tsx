import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface StyledProps {
  type: string;
  placeholder?: string;
  value: string;
}

interface InputProps extends StyledProps {
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  (
    {
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
      placeholder,
      type,
      value,
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <StyledInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value || ''}
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
  color: ${({ theme }) => theme.color.white};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Input;
