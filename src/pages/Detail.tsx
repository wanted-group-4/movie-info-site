import React from 'react';
import { useParams } from 'react-router';
import { getMovieById } from 'src/api/movieApi';
import PostDetail from '../components/PostDetail';

const Detail = () => {
  const { id } = useParams() as unknown as { id: number };
  const { data, loading } = getMovieById(id);

  return loading ? (
    <div>Loading...</div>
  ) : (
    data !== null && <PostDetail data={data} />
  );
};

export default Detail;
