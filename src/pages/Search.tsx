import React, { useState } from 'react';
import styled from 'styled-components';

import { SearchInput } from 'src/components/search';
import PostList from 'src/components/PostList';
import { IMovie } from '../types/Movie';

const Search = () => {
  const [searchMovie, setSearchMovie] = useState<IMovie[] | []>([]);

  const handleSearchMovie = (result: IMovie[] | []) => {
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
