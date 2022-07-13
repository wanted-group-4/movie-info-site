import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import styled from 'styled-components';
import { TbArrowBigLeft, TbArrowBigRight } from 'react-icons/tb';

import { IMovie } from '../../types/Movie';
import PostCard from './PostCard';
import useWindowDimensions from '../../utils/useWindowDimensions';

interface PostRowProps {
  movies?: [] | IMovie[];
}

const PostRow: React.FC<PostRowProps> = memo(({ movies }) => {
  const LEN = movies ? movies?.length : 0;
  const rowRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState<number>(-1);
  const [setting, setSetting] = useState({
    size: 132,
    step: 1,
    default: 2,
  });

  const handlePrev = useCallback(() => {
    setSelected((prev) => {
      if (prev - 1 < 0) return prev;
      else if (prev - setting.step < 2) return prev - 1;
      return prev - setting.step;
    });
  }, [selected, setting, LEN]);
  const handleNext = useCallback(() => {
    setSelected((prev) => {
      if (prev === -1) return Math.min(LEN - 1, setting.default + setting.step);
      if (prev + 1 >= LEN) return prev;
      else if (prev + setting.step > LEN) return prev + 1;
      return prev + setting.step;
    });
  }, [selected, setting, LEN]);

  useEffect(() => {
    if (!rowRef.current) return;
    if (selected < 2 || selected > LEN) return;
    rowRef.current.style.marginLeft = `-${
      setting.size * (selected - setting.default)
    }px`;
  }, [selected, setting]);

  useEffect(() => {
    if (width > 770) {
      setSetting((setting) => ({
        ...setting,
        size: 200 + 60,
        step: Math.floor(width / (200 + 60)),
        default: Math.floor(width / (200 + 60) / 2),
      }));
    } else {
      setSetting((setting) => ({
        ...setting,
        size: 120 + 60,
        step: Math.floor(width / (120 + 60)),
        default: Math.floor(width / (120 + 60) / 2),
      }));
    }
  }, [width]);

  return (
    <PostRowContainer>
      {selected > setting.step && (
        <IconWrapper onClick={handlePrev} className="left">
          <TbArrowBigLeft />
        </IconWrapper>
      )}
      <div className="innerRow" ref={rowRef}>
        {movies?.map((movie, index) => (
          <div key={movie.id} className="item">
            <PostCard data={movie} selectedIdx={selected} cardIdx={index} />
            <p className="bottom">{movie.title}</p>
          </div>
        ))}
      </div>
      {selected < LEN - setting.step && (
        <IconWrapper onClick={handleNext} className="right">
          <TbArrowBigRight />
        </IconWrapper>
      )}
    </PostRowContainer>
  );
});

PostRow.displayName = 'PostRow';

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
      margin-right: 60px;
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
        margin-right: 60px;
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
  height: 84%;
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
