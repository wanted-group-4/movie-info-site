import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IMovie } from '../types/Movie';
import PostCard from './PostCard';
import { TbArrowBigLeft, TbArrowBigRight } from 'react-icons/tb';

interface PostRowProps {
  movies?: [] | IMovie[];
}

const PostRow: React.FC<PostRowProps> = ({ movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number>(-1);

  const LEN = movies ? movies?.length : 0;
  const STEP = 5;
  const DEFAULT = 2;

  const handlePrev = () => {
    setSelected((prev) => {
      if (prev - 1 < 0) return prev;
      else if (prev - STEP < 2) return prev - 1;
      return prev - STEP;
    });
  };
  const handleNext = () => {
    setSelected((prev) => {
      if (prev === -1) return Math.min(LEN - 1, DEFAULT);
      if (prev + 1 >= LEN) return prev;
      else if (prev + STEP > LEN) return prev + 1;
      return prev + STEP;
    });
  };
  const handleSelect = (index: number): void => {
    setSelected(() => index);
  };

  useEffect(() => {
    if (!rowRef.current) return;
    if (selected < 2 || selected > LEN) return;
    rowRef.current.style.marginLeft = `-${132 * (selected - DEFAULT)}px`;
    // rowRef.current.style.marginLeft = `-${232 * (selected - DEFAULT)}px`;
  }, [selected]);

  return (
    <PostRowContainer>
      {selected > 0 && (
        <IconWrapper onClick={handlePrev} className="left">
          <TbArrowBigLeft />
        </IconWrapper>
      )}
      <div className="innerRow" ref={rowRef}>
        {movies?.map((movie, index) => (
          <div key={movie.id} className="item">
            <PostCard
              data={movie}
              selectedIdx={selected}
              cardIdx={index}
              handleSelect={handleSelect}
            />
            <p className="bottom">{movie.title}</p>
          </div>
        ))}
      </div>
      {selected < LEN - 1 && (
        <IconWrapper onClick={handleNext} className="right">
          <TbArrowBigRight />
        </IconWrapper>
      )}
    </PostRowContainer>
  );
};

export default PostRow;

const PostRowContainer = styled.div`
  position: relative;
  .innerRow {
    display: flex;
    padding: 48px 0 0 48px;
    height: 420px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    transition: all 300ms ease;
    user-select: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      margin-right: 32px;
      .bottom {
        padding: 4px 12px;
        width: 200px;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        line-height: 2;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        color: ${({ theme }) => theme.color.gray_03};
      }
    }
    @media screen and (max-width: 770px) {
      padding: 32px 0 0 32px;
      height: 248px;
      .item {
        margin-right: 12px;
        .bottom {
          padding: 4px 0;
          width: 120px;
        }
      }
    }
  }
`;

const IconWrapper = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  color: #fff;
  background-color: #0000004d;
  transform: translateY(-50%);
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`;
