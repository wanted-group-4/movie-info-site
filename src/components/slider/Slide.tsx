import React from 'react';
import { useNavigate } from 'react-router';
import { IMovie } from 'src/types/Movie';
import styled from 'styled-components';
import PostCard from '../PostCard';

interface SlideProps {
  data: any;
  currentIndex: number;
  viewWidth: number;
}

const Slide = ({ data, currentIndex, viewWidth }: SlideProps) => {
  const navigate = useNavigate();
  const handleClick = (id: number): void => navigate(`/detail/${id}`);

  return (
    <SlideWrap currentIndex={currentIndex} viewWidth={viewWidth}>
      {data &&
        data.map(
          (movie: IMovie, index: number) =>
            movie && (
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
  width: 450vw;
  left: ${({ currentIndex, viewWidth }) =>
    `-${currentIndex * Math.floor(viewWidth / 7.5)}px`};
  transition: 0.3s;
  li {
    margin-right: 15px;
  }
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    left: ${({ currentIndex, viewWidth }) =>
      `-${currentIndex * Math.floor(viewWidth / 4.4)}px`};
    li {
      margin-right: 10px;
    }
  }

  @media (max-width: 500px) {
    left: ${({ currentIndex, viewWidth }) =>
      `-${currentIndex * Math.floor(viewWidth / 2.3)}px`};
  }
`;
