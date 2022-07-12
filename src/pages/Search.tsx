import React, { useState } from 'react';
import styled from 'styled-components';

import { SearchInput } from 'src/components/search';
import PostList from 'src/components/PostList';

const Search = () => {
  const [filterMovie, setFilterMovie] = useState([]);

  const handleFilterMovie = (result: any) => {
    setFilterMovie(result);
  };

  return (
    <SearchContainer>
      <SearchInput handleFilterMovie={handleFilterMovie} />
      <PostList movieList={filterMovie} />
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
