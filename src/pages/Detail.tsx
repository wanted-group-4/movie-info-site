import React, { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import serverApi from 'src/api';
import { getMovieById } from 'src/api/movieApi';
import randomIndex from 'src/utils/randomIndex';
import Slider from 'src/components/slider/Slider';
import { IMovie } from 'src/types/Movie';
import PostDetail from 'src/components/post/PostDetail';

const Detail = () => {
  const { id } = useParams() as unknown as { id: number };
  const { data } = getMovieById(id) as { data: IMovie };
  const [similarMovie, setSimilarMovie] = useState<any>([]);

  const getSimilarList = async (genre: string) => {
    const response: any = await serverApi.get(`/?genres_like=${genre}`);
    const array = randomIndex(response.length, 30).map((x) => response[x]);
    setSimilarMovie(array);
  };
  return (
    <>
      {data !== undefined && (
        <Backgound background_image={data.background_image}>
          <PostDetail movie={data} getSimilarList={getSimilarList} />
          <Line/>
          {similarMovie !== [] && (<SimilarMovieWrap>
            <SimilarMovieTitle>비슷한 영화</SimilarMovieTitle>
            {similarMovie !== null && <Slider movieList={similarMovie} />}
          </SimilarMovieWrap>)}
        </Backgound>
      )}
    </>
  );
};

export default Detail;

const Backgound = styled.div<{ background_image: string }>`
  position: relative;
  width: 100%;
  height: 600px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #212225 100%),
    url(${(props) => props.background_image}) no-repeat center;
  background-size: cover;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    background: none;
  }
`;

const Line = styled.div`
  width: 96%;
  border-top: 1px solid #d9d9d9;
  margin:0 auto;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
  width: 90%;
  }
`

const SimilarMovieTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  padding-left: 20px;
`;
const SimilarMovieWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 350px;
  padding-top: 50px;
  & div {
    margin-top: 20px;
  }
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    margin: 0 auto;
  }
`;
