import React from 'react';
import styled from 'styled-components';
import { getMovieByRating, getMovieByGenre } from 'src/api/movieApi';

import PostRow from 'src/components/PostRow';

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
  const handleStep = (event: InputEvent) => {
    const target = event.target as HTMLSelectElement;
  };

  return (
    <HomeContainer>
      {genres.map((genre, index) => (
        <div className="row" key={index}>
          <h1>{genre}</h1>
          <PostRow movies={getMovieByGenre(genre).data} />
        </div>
      ))}
      <div className="row">
        <h1>평점 9.0 이상</h1>
        <PostRow movies={getMovieByRating(9).data} />
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.ul`
  position: relative;
  .selectWrapper {
    position: sticky;
    right: 0;
  }
  .row {
    h1 {
      position: absolute;
      padding-left: 48px;
      font-size: 28px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 770px) {
    .row {
      margin: 12px 0 24px 0;
      h1 {
        padding-left: 32px;
        font-size: 20px;
      }
    }
  }
`;
