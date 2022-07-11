import React from 'react';
import styled from 'styled-components';
import { getMovieByRating, getMovieByGenre } from 'src/api/movieApi';

import PostSwiper from 'src/components/PostSwiper';

const Home = () => {
  const genres = [
    'Action',
    'Adventure',
    'Comedy',
    'Reality-TV',
    'Talk-Show',
    'Crime',
    'Drama',
    'Biography',
    'Documentary',
  ].sort();

  return (
    <HomeContainer>
      {genres.map((genre, index) => (
        <div className="row" key={index}>
          <h1>{genre}</h1>
          <PostSwiper data={getMovieByGenre(genre).data} />
        </div>
      ))}
      <div className="row">
        <h1>평점 9.0 이상</h1>
        <PostSwiper data={getMovieByRating(9).data} />
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.ul`
  padding: 36px;
  h1 {
    margin: 16px 0;
    font-size: 28px;
    font-weight: 600;
  }
  .row {
    margin-bottom: 72px;
  }
`;
