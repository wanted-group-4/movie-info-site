import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SearchInput from 'src/components/SearchInput';

const Search = () => {
  const [movies, setMovies] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://localhost:3000/data/movies.json');
      setMovies(data.data);
    };
    fetchData();
  }, []);

  return <SearchInput movies={movies} />;
};

export default Search;
