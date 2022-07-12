import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { debounce } from 'lodash';
import { AiOutlineSearch } from 'react-icons/ai';

import { Input, Button } from '../elements';
import SearchList from './SearchList';

interface SearchInputProps {
  movies?: any;
}

interface ISearchData {
  id: string;
  title: string;
  year: number;
  type: string;
  poster: string;
  like: boolean;
}

const SearchInput = ({ movies }: SearchInputProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState<ISearchData[] | []>([]);
  const [filterMovie, setFilterMovie] = useState<Array<object>>([]);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [recentKeyword, setRecentKeyword] = useState(
    JSON.parse(localStorage.getItem('recentkeyword') || '[]')
  );

  const sendQuery = async (query: string) => {
    console.log(query);
    const { data } = await axios.get('http://localhost:3000/data/movies.json');
    if (!data.movies.length) return setSearchData([]);
    setSearchData([...data.movies]);
    searchRecommend();
  };

  const callDebounceQuery = debounce((value) => {
    sendQuery(value);
  }, 300);

  const handleDebounce = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    if (checkIsEmpty(value)) {
      setSearchData([]);
      setSearchInput('');
    }

    callDebounceQuery(value);
    setSearchInput(value.trim());
  };

  const searchRecommend = () => {
    const filterData = searchData.filter((movie: { title: string }) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterMovie(filterData);
  };

  const handleSearch = () => {
    if (searchInput.length === 0) return;
    // const filterData = movies.filter((movie: { title: string }) =>
    //   movie.title.toLowerCase().includes(searchInput.toLowerCase())
    // );

    if (recentKeyword.length >= 10) {
      setRecentKeyword([searchInput, ...recentKeyword.slice(0, 9)]);
    } else {
      setRecentKeyword([searchInput, ...recentKeyword]);
    }
  };

  const onCheckEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const checkIsEmpty = (value: string): boolean => value.trim() === '';

  const handleCheckIsFocus = () => setIsInputFocus((prev: boolean) => !prev);

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
              onChange={handleDebounce}
              onFocus={handleCheckIsFocus}
              onBlur={handleCheckIsFocus}
              placeholder="영화 제목을 입력해주세요"
              type="text"
            />
            <Button onClick={handleSearch}>
              <AiOutlineSearch size={30} style={{ color: 'white' }} />
            </Button>
          </SearchInputWrapper>
          <SearchList recentKeyword={recentKeyword} />
        </SearchContainer>
      ) : isInputFocus ? (
        <SearchContainer>
          <SearchInputWrapper>
            <Input
              onKeyPress={onCheckEnter}
              onChange={handleDebounce}
              onFocus={handleCheckIsFocus}
              onBlur={handleCheckIsFocus}
              placeholder="영화 제목을 입력해주세요"
              type="text"
            />
            <Button onClick={handleSearch}>
              <AiOutlineSearch size={30} style={{ color: 'white' }} />
            </Button>
          </SearchInputWrapper>
          <SearchList filterMovie={filterMovie} />
        </SearchContainer>
      ) : (
        <SearchContainer>
          <SearchInputWrapper>
            <Input
              onKeyPress={onCheckEnter}
              onChange={handleDebounce}
              onFocus={handleCheckIsFocus}
              onBlur={handleCheckIsFocus}
              placeholder="영화 제목을 입력해주세요"
              type="text"
            />
            <Button onClick={handleSearch}>
              <AiOutlineSearch size={30} style={{ color: 'white' }} />
            </Button>
          </SearchInputWrapper>
        </SearchContainer>
      )}
    </>
  );
};

export default SearchInput;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.color.white};
  width: 80%;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.gray_01};
  overflow: hidden;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  border-radius: 20px;
`;
