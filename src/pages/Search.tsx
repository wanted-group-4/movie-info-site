import React from 'react';
import styled from 'styled-components';

import { SearchInput } from 'src/components/search';

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
