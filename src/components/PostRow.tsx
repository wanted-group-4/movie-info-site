import React from 'react';
import styled from 'styled-components';
import { Card } from '../types/Movie';

import PostCard from './PostCard';

interface propsType {
  data?: Card[];
}

const PostRow = (props: propsType) => {
  const { data } = props;

  return (
    <PostRowContainer>
      {data?.map((item) => (
        <div key={item.id} className="item">
          <PostCard data={item} />
          <p className="bottom">{item.title}</p>
        </div>
      ))}
    </PostRowContainer>
  );
};

export default PostRow;

const PostRowContainer = styled.div`
  display: flex;
  padding: 48px 0 0 48px;
  height: 420px;
  overflow-x: scroll;
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
`;
