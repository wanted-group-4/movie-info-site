import React, { useState } from 'react';
import styled from 'styled-components';

import { SearchInput } from 'src/components/search';
import PostList from 'src/components/PostList';

const Search = () => {
  const [searchMovie, setSearchMovie] = useState<any>([]);

  const handleSearchMovie = (result: any) => {
    setSearchMovie(result);
  };
  return (
    <SearchContainer>
      <SearchInput handleSearchMovie={handleSearchMovie} />
      <PostList movieList={searchMovie} />
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
