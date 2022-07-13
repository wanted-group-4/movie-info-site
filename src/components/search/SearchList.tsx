import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { IMovie } from '../../types/Movie';

interface SearchListProps {
  recentKeyword: string[];
  filterMovie: IMovie[] | [];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchList = ({ recentKeyword, filterMovie }: SearchListProps) => {
  if (recentKeyword && recentKeyword.length === 0 && filterMovie.length === 0) {
    return (
      <RecentListContainer>최근 검색된 기록이 없습니다.</RecentListContainer>
    );
  }

  return (
    <>
      {filterMovie.length > 0
        ? filterMovie.map((movie: IMovie, index: number) => (
            <RecommentListContainer key={index}>
              <AiOutlineSearch size={20} style={{ marginRight: '10px' }} />
              {movie.title}
            </RecommentListContainer>
          ))
        : recentKeyword.map((keyword: string, index: number) => (
            <RecentListContainer key={index}>
              <BiTime size={20} style={{ marginRight: '10px' }} />
              {keyword}
            </RecentListContainer>
          ))}
    </>
  );
};

const RecentListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 20px;

  &:hover {
    background: ${({ theme }) => theme.color.gray_02};
    cursor: pointer;
  }
`;

const RecommentListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 20px;

  &:hover {
    background: ${({ theme }) => theme.color.gray_02};
    cursor: pointer;
  }
`;

export default SearchList;
