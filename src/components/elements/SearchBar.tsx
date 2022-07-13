import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearchBarClick = (): void => {
    navigate('/search');
  };

  return (
    <Form onClick={handleSearchBarClick}>
      <input
        disabled
        name="keyword"
        type="text"
        placeholder="영화 제목을 검색해보세요"
      />
      <AiOutlineSearch />
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    input {
      display: none;
    }
    svg {
      right: 36px;
    }
  }
  margin: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    cursor: pointer;
    padding: 12px 24px;
    width: 280px;
    border-radius: 25px;
    border: 1px solid #fff;
    &::placeholder {
      color: #fff;
    }
  }
  svg {
    cursor: pointer;
    position: absolute;
    right: 48px;
    font-size: 20px;
    background-color: transparent;
  }
`;
