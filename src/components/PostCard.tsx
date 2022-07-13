import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
// import { MdLocalMovies, MdFavorite, MdFavoriteBorder } from 'react-icons/md';

<<<<<<< HEAD
interface propTypes {
  data: {
    title: string;
    summary: string;
    medium_cover_image: string;
    like: boolean;
    id: number;
  };
  onClick?: (event: React.MouseEvent) => void;
}
=======
import { CardProps } from 'src/types/Movie';
>>>>>>> 3cb6b06 (feat: PostCard 이미지 onLoad, onError 콜백함수 추가)

const PostCard = (props: CardProps) => {
  const [loading, setLoading] = useState(true);
  const { data, selectedIdx, cardIdx } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`detail/${data.id}`);
  };
  const handleLoad = () => {
    setLoading(() => false);
  };
  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = '/images/noimage.png';
  };
  const setSelect = () => {
    cardIdx === selectedIdx
      ? props.handleSelect(-1)
      : props.handleSelect(cardIdx);
  };
  const handleClick = () => {
    setSelect();
    handleNavigate();
  };

  return (
    <PostCardContainer
      // onClick={setSelect}
      // onDoubleClick={handleNavigate}
      onClick={handleClick}
      style={{ display: loading ? 'none' : 'block' }}
      className={cardIdx === selectedIdx ? 'selected' : ''}
    >
      <div className="imgBox">
        <img
          src={data.medium_cover_image}
          alt={data.title}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
      <div className="text">
        <div className="title">{data.title}</div>
        {data.summary && (
          <div className="desc">
            <span className="summary">Summary</span>
            {data.summary}
          </div>
        )}
      </div>
    </PostCardContainer>
  );
};

export default PostCard;

const PostCardContainer = styled.li`
  width: 100%;
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;
  user-select: none;
  /* &.selected { */
  &:hover {
    z-index: 9999;
    transform: scale(1.3);
    .text {
      z-index: 999;
      opacity: 0.9;
      overflow: scroll;
    }
  }
<<<<<<< HEAD
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
=======
  .imgBox {
    width: 200px;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
>>>>>>> 3cb6b06 (feat: PostCard 이미지 onLoad, onError 콜백함수 추가)
  }
  .text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    line-height: 1.5;
    text-overflow: ellipsis;
    word-wrap: break-word;
    transition: all 600ms ease;
    border: 16px solid transparent;
    background-color: #212225;
    opacity: 0;
    overflow: hidden;
    .icon {
      text-align: right;
      transition: all 300ms ease;
      * {
        &:hover {
          color: ${({ theme }) => theme.color.secondary_01};
          transform: scale(1.1);
        }
        margin: 0 4px;
      }
    }
    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 라인수 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-align: center;
      font-size: 20px;
      font-weight: 800;
      border-bottom: 12px solid #212225;
    }
    .desc {
      font-size: 12px;
      word-wrap: break-word;
      word-break: break-all;
      line-height: 1.7;
      .summary {
        font-size: 14px;
        margin-right: 12px;
        padding: 2px 4px;
        font-weight: 800;
        color: #000;
        background-color: #fff;
        opacity: 1;
      }
    }
    &:hover {
      z-index: 999;
      opacity: 0.9;
    }
    .details {
      color: white;
      background-color: black;
    }
  }
  @media screen and (max-width: 770px) {
    .imgBox,
    .text {
      width: 120px;
      height: 180px;
    }
    .text {
      border: 12px solid transparent;
      .title {
        font-size: 12px;
      }
      .desc {
        font-size: 10px;
        .summary {
          margin-right: 4px;
          padding: 1px 2px;
          font-size: 8px;
        }
      }
    }
  }
`;
