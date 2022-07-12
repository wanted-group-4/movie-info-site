import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { AiOutlineSearch } from 'react-icons/ai';

import { Input, Button } from '../elements';
import SearchList from './SearchList';
import { getMovies } from '../../api/movieApi';

interface SearchInputProps {
  movies?: any;
  handleFilterMovie?: any;
}

interface ISearchData {
  id: string;
  title: string;
  year: number;
  type: string;
  poster: string;
  like: boolean;
}

const SearchInput = ({ handleFilterMovie }: SearchInputProps) => {
  const { data, loading, error } = getMovies();

  const [recommendedMovie, setRecommendedMovie] = useState<any>([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState<ISearchData[] | []>([]);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [recentKeyword, setRecentKeyword] = useState(
    JSON.parse(localStorage.getItem('recentkeyword') || '[]')
  );

  const sendQuery = async (query: string) => {
    console.log(query);
    const { movie } = await data;
    if (!movie) return setSearchData([]);
    setSearchData([...movie]);
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
    handleFilterMovie(filterData);
    setRecommendedMovie(filterData);
  };

  const handleSearch = () => {
    if (searchInput.length === 0) return;
    const filterData = data.filter((movie: { title: string }) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    handleFilterMovie(filterData);
    setRecentKeyword([searchInput, ...recentKeyword]);
  };

  const onCheckEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const checkIsEmpty = (value: string): boolean => value.trim() === '';

  const handleCheckIsFocus = () => setIsInputFocus((prev: boolean) => !prev);

  const checkMaximumRecentSearch = (): boolean => {
    const MAXIMUM_SIZE = 10;
    return recentKeyword.length > MAXIMUM_SIZE;
  };

  useEffect(() => {
    const newRecentKeyword = checkMaximumRecentSearch()
      ? [...recentKeyword.slice(0, -1)]
      : recentKeyword;

    localStorage.setItem('recentKeyword', JSON.stringify(newRecentKeyword));
    setRecentKeyword(newRecentKeyword);
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
          <SearchList filterMovie={recommendedMovie} />
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
