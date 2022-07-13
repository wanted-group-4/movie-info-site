import React from 'react';
import { getMovieInBookmark } from 'src/api/movieApi';
import PostList from 'src/components/PostList';

const Bookmark = () => {
  const bookmark = getMovieInBookmark()
  const {data} = bookmark
  

  return (
  <>
  {data === null ?  
    <div>즐겨찾기 내용이 없습니다.</div>
  : null
    //<PostList movieList={data}/>
  }  
  </>
  );
};

export default Bookmark;
