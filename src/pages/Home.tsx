import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // temp

import PostSwiper from 'src/components/PostSwiper';

const Home = () => {
  const [ratingData, setRatingData] = useState([]);
  // const genres = [
  //   'Action',
  //   'Adventure',
  //   'Comedy',
  //   'Reality-TV',
  //   'Talk-Show',
  //   'Crime',
  //   'Drama',
  //   'Biography',
  //   'Documentary',
  // ];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/movies?rating_gte=9'
        );
        setRatingData(() => response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <HomeContainer>
      <>
        <h1>평점 9.0 이상</h1>
        <PostSwiper data={ratingData} />
      </>
      <>
        <h1>평점 9.0 이상</h1>
        <PostSwiper data={ratingData} />
      </>
      <>
        <h1>평점 9.0 이상</h1>
        <PostSwiper data={ratingData} />
      </>
      <>
        <h1>평점 9.0 이상</h1>
        <PostSwiper data={ratingData} />
      </>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.ul`
  h1 {
    margin: 16px 0;
    font-size: 28px;
    font-weight: 600;
  }
`;
