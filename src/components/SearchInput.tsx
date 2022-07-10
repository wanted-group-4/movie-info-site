import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Input from './elements/Input';
import Button from './elements/Button';
import SearchRecommendList from './SearchRecommentList';
import SearchRecentList from './SearchRecentList';

interface SearchInputProps {
  movies: any;
}

const SearchInput = ({ movies }: SearchInputProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [filterMovie, setFilterMovie] = useState<Array<object>>([]);
  const [recentKeyword, setRecentKeyword] = useState(
    JSON.parse(localStorage.getItem('recentkeyword') || '[]')
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInputText = event.target.value;
    setSearchInput(searchInputText);
  };

  const handleSearch = () => {
    if (searchInput.length === 0) return;
    const filterData = movies.filter((movie: { title: string }) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(filterData);
    setFilterMovie(filterData);
    setRecentKeyword([searchInput, ...recentKeyword]);
  };

  const onCheckEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFocus = () => {
    if (isInputFocus) {
      return setIsInputFocus(false);
    }
    setIsInputFocus(true);
  };

  useEffect(() => {
    localStorage.setItem('recentKeyword', JSON.stringify(recentKeyword));
  }, [recentKeyword]);

  return (
    <>
      {isInputFocus && searchInput.length === 0 ? (
        <SearchContainer>
          <SearchInputWrapper>
            <Input
              onKeyPress={onCheckEnter}
              onChange={onChangeInput}
              onFocus={handleFocus}
              onBlur={handleFocus}
              placeholder="영화 제목을 입력해주세요"
              type="text"
            />
            <Button _onClick={handleSearch} />
          </SearchInputWrapper>
          <SearchRecentList recentKeyword={recentKeyword} />
        </SearchContainer>
      ) : (
        <SearchContainer>
          <SearchInputWrapper>
            <Input
              onKeyPress={onCheckEnter}
              onChange={onChangeInput}
              onFocus={handleFocus}
              onBlur={handleFocus}
              placeholder="영화 제목을 입력해주세요"
              type="text"
            />
            <Button _onClick={handleSearch} />
          </SearchInputWrapper>
        </SearchContainer>
      )}
    </>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.color.white};
  width: 80%;
  border-radius: 20px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  border-radius: 20px;
`;

export default SearchInput;
