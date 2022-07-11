import React from 'react';
import styled from 'styled-components';

import { SearchInput, SearchMovieList } from 'src/components/search';

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchMovieList />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div``;
