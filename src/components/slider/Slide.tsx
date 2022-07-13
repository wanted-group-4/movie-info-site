import React from 'react';
import { IMovie } from 'src/types/Movie';
import styled from 'styled-components';
import PostCard from '../post/PostCard';

interface SlideProps {
  data: any;
  currentIndex: number;
  viewWidth: number;
}

const Slide = ({ data, currentIndex, viewWidth }: SlideProps) => {
  return (
    <SlideWrap currentIndex={currentIndex} viewWidth={viewWidth}>
      {data &&
        data.map(
          (movie: IMovie, index: number) =>
            movie && (
              <PostCard
                key={index}
                data={{
                  id: movie.id,
                  title: movie.title,
                  summary: movie.summary,
                  medium_cover_image: movie.medium_cover_image,
                  like: movie.like,
                }}
              />
            )
        )}
    </SlideWrap>
  );
};

export default Slide;

const SlideWrap = styled.ul<{ currentIndex: number; viewWidth: number }>`
  display: flex;
  position: absolute;
  padding: 0 20px;
  padding-bottom: 120px;
  width: 450vw;
  left: ${({ currentIndex, viewWidth }) =>
    `-${currentIndex * Math.floor(viewWidth / 7.5)}px`};
  transition: 0.3s;
  li {
    margin-right: 15px;
  }
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    left: ${({ currentIndex, viewWidth }) =>
      `-${currentIndex * Math.floor(viewWidth / 4.7)}px`};
    li {
      margin-right: 10px;
    }
  }

  @media (max-width: 500px) {
    left: ${({ currentIndex, viewWidth }) =>
      `-${currentIndex * Math.floor(viewWidth / 3)}px`};
  }
`;
