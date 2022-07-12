import React, { useState, useEffect } from 'react';
import PostList from 'src/components/PostList';
import { getMovieByPage } from 'src/api/movieApi';
import styled from 'styled-components';




const Search = () => {
  const [load, setReload] = useState<boolean>(false);
  const [movies, setMovies] = useState<any>([])
  const [page, setPage] = useState(1);
  const [accuracyTab, setAccuracyTab] = useState<boolean>(false);
  const [ratingTab, setRatingTab] = useState<boolean>(false); 
  const [latestTab, setLatestTab] = useState<boolean>(false); 
  
  console.log(page,'페이지 계속 바뀌나???')
  
    const movieInfo = getMovieByPage(page);
  
    useEffect(() => {
     const {data} = movieInfo
      if(data === null) {
       //setPage(page+1) 
       return;
      }else {
       setMovies([...movies, ...data]) 
      }
   },[page])
   

  const accuracy = () => {
    console.log('정확도순');
    setAccuracyTab(true);
    setRatingTab(false);
    setLatestTab(false);
  };
  const ratingRanking = () => {
    console.log('평점순')
    setAccuracyTab(false);
    setRatingTab(true)
    setLatestTab(false);
   
  }
  const latest = () => {
    console.log('최신순')
    setRatingTab(false);
    setLatestTab(false);
    setLatestTab(true)

  }

  
  return (
    <>
      <div>Search</div>
      <Button onClick={accuracy}>정확도순</Button>
      <Button onClick={ratingRanking}>평점순</Button>
      <Button onClick={latest}>최신순</Button>
  
      {!accuracyTab && !ratingTab && !latestTab ? (
        <>
          <PostList
            data={movies}
            page={page}
            setPage={setPage}
          />
        </>
      ) : accuracyTab ? (
        <>
          <div> 정확도순</div>

          {/*  <PostList /> */}
        </>
      ) : ratingTab ? (
        <>
          <div>평점순</div>
          {/*  <PostList /> */}
        </>
      ) : latestTab ? (
        <>
          <div>최신순</div>
          {/*  <PostList /> */}
        </>
      ) : null}
    </>
  );
}

export default Search;

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  margin-left: 10px;
  border-radius: 8%;
  border: solid 1px;
  color: white;
  background-color: #000000;
  :hover{
    cursor: pointer;
  }
`;
