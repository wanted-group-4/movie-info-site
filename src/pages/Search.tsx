import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Input from 'src/components/elements/Input';
import Button from 'src/components/elements/Button';
import SearchRecommendList from 'src/components/SearchRecommentList';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [searchData, setSearchData] = useState([{
    title: '',
    year: '',
    id: '',
    type: '',
    poster: '',
    like: false,
  }]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://localhost:3000/data/movies.json');
      console.log(data.data.movies);
    }
    fetchData();
  }, [])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInputText = event.target.value;
    if(searchInputText.length === 0) {
      return setSearchData([]);
    }
    setSearchInput(searchInputText);
  };

  const onCheckEnter = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      searchMovieCallback();
    }
  };

  const searchMovieCallback = () => {
    console.log('검색하고 있습니다~')
  };

  const focusHandler = () => {
    setIsInputFocus(true);
    console.log('포커스되었습니다.')
    console.log(isInputFocus);
  };

  const blurHandler = () => {
    setIsInputFocus(false);
    console.log('blur 되었습니다');
    console.log(isInputFocus);
  };

  return (
    <SearchContainer>
      <SearchInputWrapper>
        <Input
          _onKeyPress={onCheckEnter}
          _onChange={onChangeInput}
          _onFocus={focusHandler}
          _onBlur={blurHandler}
          placeholder='영화 제목을 입력해주세요'
          type='text'
        />
        <Button
          _onClick={searchMovieCallback}
        />
      </SearchInputWrapper>
      {isInputFocus &&
        <SearchRecommendList searchInput={searchInput} />}
  </SearchContainer>
)};

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border: 2px solid ${({theme}) => theme.color.white};
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

export default Search;
