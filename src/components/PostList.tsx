import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { getMovieByPage } from 'src/api/movieApi';
import styled from 'styled-components';
import PostCard from './PostCard';

export interface movieInfo {
  id: string;
  title: string;
  medium_cover_image: string;
  summary?: string;
  like: boolean;
}

const PostList = () => {
  const target = useRef(null);
  const [page, setPage] = useState(1)
  const [movieList, setMovieList] = useState([]);
  const [reload, setReload] = useState(false);
  
  const movieInfo = getMovieByPage(page)
 // console.log(movieInfo, 'movieInfo')
  const {data} = movieInfo

  //  let options = {
  //    root: null,
  //    rootMargin: '0px',
  //    threshold: 0.5,
  //  };
  //  let callback = (entries) => {
  //    console.log(entries);
  //    setReload(entries[0].isIntersecting);
  //  };
  //  let observer = new IntersectionObserver(callback, options);
  //  //console.log(observer, 'observer');

  //  if (target.current) {
  //    observer.observe(target.current);
  //  }

  return (
    <>
      <div>PostList</div>
      <PosterContainer>
        {data === null ? (
          <div>불러오는 중</div>
        ) : (
          data.map((el: any, idx: number) => <PostCard data={el} key={idx} />)
        )}
      </PosterContainer>
      <div ref={target}></div>
    </>
  );
};

export default PostList;

const PosterContainer = styled.div`
  //width: 100%;
  //height: 100vh;
  display: flex;
  
`;