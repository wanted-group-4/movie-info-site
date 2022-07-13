import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchInput } from 'src/components/search';
import PostList from 'src/components/PostList';
import {
  getMovieByPage,
  getMovieByRating,
} from 'src/api/movieApi';

const Search = () => {
  
  const [searchMovie, setSearchMovie] = useState<any>([]);
  const [ratingMovie, setRatingMovie] = useState<string[]>([]);
  const [latestMovie, setLatestMovie] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1)

  //탭 변환
  const [ratingTab, setRatingTab] = useState<boolean>(false);
  const [latestTab, setLatestTab] = useState<boolean>(false);

   console.log(page,'page')
   useEffect(() => {
     if(ratingTab === true) {
       goToRatingTab()
     }
     if(latestTab === true) {
       goToLatestTab()
     }
   },[page])
  
  // 데이터 가져오는 함수
  const ratingMovieData = getMovieByRating(page)
  const latestMovieData = getMovieByPage(page)

  const handleSearchMovie = (result: any) => {
    setSearchMovie(result);
  };

  // 정확도/평점순/최신순 탭
    const goToAccuracy = () => {
      setRatingTab(false)
      setLatestTab(false)
    }
    const goToRatingTab = () => {
      setRatingTab(true)
      setLatestTab(false)
      const { data } = ratingMovieData;
      setRatingMovie([...ratingMovie, ...data]); 
    };
    const goToLatestTab = () => {
      setRatingTab(false);
      setLatestTab(true);
      const { data } = latestMovieData;
      setLatestMovie([...latestMovie, ...data]); 
    };

    function handlePage () {
      setPage((prev) => prev + 1);
    }


  return (
    <>
      <SearchContainer>
        <SearchInput handleSearchMovie={handleSearchMovie} />
          <ButtonContainer>
            <Button onClick={goToAccuracy}>정확도순</Button>
            <Button onClick={goToRatingTab}>평점순</Button>
            <Button onClick={goToLatestTab}>최신순</Button>
          </ButtonContainer>
        {ratingTab ? (
          <>
            <PostList movieList={ratingMovie} handlePage={handlePage} />
          </>
        ) : latestTab ? (
          <>
            <PostList movieList={latestMovie} handlePage={handlePage} />
          </>
        ) : (
          <>
            <PostList movieList={searchMovie} />
          </>
        )}
      </SearchContainer>
    </>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  width: 4.5rem;
  height: 2.5rem;
  margin-left: 10px;
  border-radius: 8%;
  border: solid 1px;
  color: white;
  background-color: #000000;
  :hover {
    cursor: pointer;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 1rem; 
  position: relative;
  left: -35%
`
