<<<<<<< HEAD
import React, { useRef, useState, useEffect } from 'react';
=======
import React, { useRef } from 'react';
>>>>>>> e4792efa31a5f30d6dacc502e9aace0430636eae
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import PostCard from './PostCard';
import { IMovie } from '../types/Movie';

interface PostListProps {
  movieList?: IMovie[] | [];
  page?: number | undefined;
  setPage?: any;
}

interface IOptions {
  root: null;
  rootMargin: string;
  threshold: number;
}

const PostList: React.FC<PostListProps> = ({ movieList, page, setPage }) => {
  const navigate = useNavigate();
  const target = useRef<HTMLDivElement>(null);

  const handleClick = (id: number): void => navigate(`/detail/${id}`);

  if (page !== undefined) {
    const options: IOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const callback = (entries: any) => {
      if (entries[0].isIntersecting === true) {
        setTimeout(() => setPage(page + 1), 300);
      }
    };
    const observer: any = new IntersectionObserver(callback, options);

    if (target.current) {
      observer.observe(target.current);
    }
  }

  return (
    <>
      <PostListContainer>
        {movieList && movieList.length > 0 ? (
          <Grid>
            {movieList.map((movie, index) => (
              <PostCard
                key={index}
                onClick={() => handleClick(movie.id)}
                data={{
                  id: movie.id,
                  title: movie.title,
                  summary: movie.summary,
                  medium_cover_image: movie.medium_cover_image,
                  like: movie.like,
                }}
              />
            ))}
          </Grid>
        ) : (
          <NoMovieList>검색 결과가 없습니다.</NoMovieList>
        )}
      </PostListContainer>
      <Div ref={target}></Div>
    </>
  );
};

export default PostList;

const PostListContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Grid = styled.ul`
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    grid-template-columns: repeat(3, 1fr);
  }
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
  gap: 20px 10px;
`;

const NoMovieList = styled.div``;

const Div = styled.div`
  width: 100px;
  height: 200px;
`;
