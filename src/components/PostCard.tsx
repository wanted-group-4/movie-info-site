import React from 'react';
import styled from 'styled-components';

interface propTypes {
  data: {
    title: string;
    summary: string;
    medium_cover_image: string;
    like: boolean;
  };
}

const PostCard = (props: propTypes) => {
  const { data } = props;

  return (
    <PostCardContainer>
      <img src={data.medium_cover_image} alt={data.title} />
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
  cursor: pointer;
  position: relative;
  transition: all 300ms ease;
  &:hover {
    z-index: 9999;
    transform: scale(1.2);
  }
  img {
    width: 200px;
    height: 100%;
    border-radius: 4px;
  }
  .text {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 300px;
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
    img,
    .text {
      width: 160px;
      height: 100%;
    }
  }
`;
