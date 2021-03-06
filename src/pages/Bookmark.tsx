import React from 'react';
import { getMovieInBookmark } from 'src/api/movieApi';
import PostList from '../components/post/PostList';

const Bookmark = () => {
  const bookmark = getMovieInBookmark();
  const { data } = bookmark;

  return (
    <>
      {data === null ? (
        <div>즐겨찾기 내용이 없습니다.</div>
      ) : (
        <PostList movieList={data} />
      )}
    </>
  );
};

export default Bookmark;
