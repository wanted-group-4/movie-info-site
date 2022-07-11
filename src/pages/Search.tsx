import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { debounce } from 'lodash';

import Input from 'src/components/elements/Input';
import Button from 'src/components/elements/Button';

interface ISearchData {
  id: string;
  title: string;
  year: number;
  type: string;
  poster: string;
  like: boolean;
}

import SearchInput from 'src/components/SearchInput';

const Search = () => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [searchData, setSearchData] = useState<ISearchData[] | []>([]);

  const sendQuery = async (query: string) => {
    console.log(query);
    const { data } = await axios.get('http://localhost:3000/data/movies.json');
    if (!data.length) return setSearchData([]);
    setSearchData([...data]);
  };

  const callDebounceQuery = debounce((value) => {
    sendQuery(value);
  }, 300);

  const handleDebounce = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    if (checkIsEmpty(value)) return setSearchData([]);

    callDebounceQuery(value);
  };

  const checkIsEmpty = (value: string): boolean => value.trim() === '';

  const onCheckEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchMovieCallback();
    }
  };

  const searchMovieCallback = () => {
    console.log('검색하고 있습니다~');
  };

  const focusHandler = () => {
    setIsInputFocus(true);
    console.log('포커스되었습니다.');
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
          onKeyPress={onCheckEnter}
          onChange={handleDebounce}
          onFocus={focusHandler}
          onBlur={blurHandler}
          placeholder="영화 제목을 입력해주세요"
          type="text"
        />
        <Button onClick={searchMovieCallback} />
      </SearchInputWrapper>
      {isInputFocus && <SearchRecommendList></SearchRecommendList>}
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border: 2px solid black;
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

const SearchRecommendList = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.gray_03};
  height: 100px;
  border-radius: 20px;
`;

export default Search;
