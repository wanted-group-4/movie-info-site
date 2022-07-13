/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchInput } from 'src/components/search';
import PostList from 'src/components/PostList';
import { IMovie } from '../types/Movie';
import { getMovieByPage, getMovieByRating } from 'src/api/movieApi';

const Search = () => {
  const [searchMovie, setSearchMovie] = useState<IMovie[] | []>([]);
  const [ratingMovie, setRatingMovie] = useState<IMovie[] | []>([]);
  const [latestMovie, setLatestMovie] = useState<IMovie[] | []>([]);
  const [page, setPage] = useState<number>(1);
  const [load, setReload] = useState<any>(false)
  console.log(page,'page')
  //탭 변환
  const [ratingTab, setRatingTab] = useState<boolean>(false);
  const [latestTab, setLatestTab] = useState<boolean>(false);

    

   useEffect(() => {
     try{
      console.log('hi')
      if(!ratingTab && !latestTab) {
        console.log('디폴트')
        return;
    }
      if(ratingTab && !latestTab) {
        console.log('유즈이펙트 등급순')
        handlePage()
        goToRatingTab()
    }
      if(!ratingTab && latestTab) {
        console.log('유즈이펙트 최신순');
        handlePage();
        goToLatestTab()
      }
  }catch(error) {
    console.log(error)
  }
    //goToLatestTab()
   },[load])

  
  // 데이터 가져오는 함수
  const ratingMovieData = getMovieByRating(page);
  const latestMovieData = getMovieByPage(page);

  const handleSearchMovie = (result: IMovie[] | []) => {
    setSearchMovie(result);
  };

  // 정확도/평점순/최신순 탭
  const goToAccuracy = () => {
    setRatingTab(false);
    setLatestTab(false);
  };
  const goToRatingTab = () => {
    console.log('평점순')
    setRatingTab(true);
    setLatestTab(false);
    const { data } = ratingMovieData;
    if (!data) return setRatingMovie([...ratingMovie]);
    setRatingMovie([...ratingMovie, ...data]);
    
  };
  const goToLatestTab = () => {
    console.log('최신순')
    setRatingTab(false);
    console.log('-')
    setLatestTab(true);
    const { data }:any = latestMovieData;
    if (!data) return setLatestMovie([...latestMovie]);
    setLatestMovie([...latestMovie, ...data]);
  };

    const handlePage = () => {
      console.log('핸들페이지 동작')
     setPage(page+ 1);
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
            <PostList
              movieList={ratingMovie}
              handlePage={handlePage}
              setReload={setReload}
            />
          </>
        ) : latestTab ? (
          <>
            <PostList
              movieList={latestMovie}
              handlePage={handlePage}
              setReload={setReload}
            />
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
  left: -35%;
`;
