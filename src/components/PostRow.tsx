import React from 'react';
import styled from 'styled-components';
import { IMovie } from '../types/Movie';
import PostCard from './PostCard';

interface PostRowProps {
  movies?: [] | IMovie[];
}

const PostRow: React.FC<PostRowProps> = ({ movies }) => {
  return (
    <PostRowContainer>
      {movies?.map((movie: IMovie) => (
        <div key={movie.id} className="item">
          <PostCard data={movie} />
          <div className="bottom">
            <p>{movie.title}</p>
          </div>
        </div>
      ))}
    </PostRowContainer>
  );
};

export default PostRow;

const PostRowContainer = styled.div`
  display: flex;
  .item {
    width: 100% !important;
    margin-right: 0;
  }
  .bottom {
    width: 200px;
    padding: 4px 0;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    text-align: center;
    line-height: 2;
  }
`;
