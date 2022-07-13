import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import PostCard from './PostCard';

interface PostListProps {
  movieList: any[]; // movieList 연결 필요
}

const PostList: React.FC<PostListProps> = ({ movieList }) => {
  const navigate = useNavigate();

  const handleClick = (id: string): void => navigate(`/detail/${id}`);

  return (
    <PostListContainer>
      {/* {movieList.length > 0 ? (
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
      )} */}
    </PostListContainer>
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
