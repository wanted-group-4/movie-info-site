import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

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
  const { data } = props;
  const navigate = useNavigate();
  const handleClick = () => {
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

  return (
    <PostCardContainer
      onClick={handleClick}
      style={{ display: loading ? 'none' : 'block' }}
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
  &:hover {
    z-index: 9999;
    transform: scale(1.2);
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
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    transition: all 600ms ease;
    background-color: #212225;
    border: 16px solid #212225;
    opacity: 0;
    .title {
      border: 12px solid #212225;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 라인수 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-align: center;
      font-size: 20px;
      font-weight: 800;
    }
    .desc {
      font-size: 12px;
      word-wrap: break-word;
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
  }
  @media screen and (max-width: 770px) {
    .imgBox,
    .text {
      width: 160px;
      height: 240px;
    }
  }
`;
