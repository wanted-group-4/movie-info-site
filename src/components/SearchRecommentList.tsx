import React from 'react';
import styled from 'styled-components';

const SearchRecommendList = () => {
  return <SearchRecommend>SearchRecommend</SearchRecommend>;
};

const SearchRecommend = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.gray_03};
  height: 100px;
  border-radius: 20px;
`;

export default SearchRecommendList;
