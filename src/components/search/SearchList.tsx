import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { IMovie } from '../../types/Movie';

interface SearchListProps {
  recentKeyword: string[];
  filterMovie: IMovie[] | [];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInnterText: any;
  searchInput: string;
}

const SearchList = ({
  recentKeyword,
  filterMovie,
  handleInnterText,
  searchInput,
}: SearchListProps) => {
  const handleClickedElement = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.textContent) {
      handleInnterText(event.currentTarget.textContent);
    }
  };
  console.log(recentKeyword, filterMovie);
  if (recentKeyword && recentKeyword.length === 0 && filterMovie.length === 0) {
    return (
      <RecentListContainer>최근 검색된 기록이 없습니다.</RecentListContainer>
    );
  }
  console.log(recentKeyword, filterMovie);
  if (searchInput.length > 0 && filterMovie.length === 0) {
    return <RecentListContainer>검색 결과가 없습니다.</RecentListContainer>;
  }

  return (
    <>
      {filterMovie.length > 0
        ? filterMovie.map((movie: IMovie, index: number) => (
            <RecommentListContainer key={index} onClick={handleClickedElement}>
              <AiOutlineSearch size={20} style={{ marginRight: '10px' }} />
              {movie.title}
            </RecommentListContainer>
          ))
        : recentKeyword.map((keyword: string, index: number) => (
            <RecentListContainer key={index} onClick={handleClickedElement}>
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
