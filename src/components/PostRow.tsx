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
          <div className="bottom">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </PostRowContainer>
  );
};

export default PostRow;

const PostRowContainer = styled.div`
  display: flex;
  width: 100%;
  .item {
    width: 30%;
    /* width: 100% !important; */
    /* margin-right: 32px; */
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
