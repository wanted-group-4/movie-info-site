import React, { useState } from 'react';
import PostList from 'src/components/PostList';



const Search = () => {
  const [data, setData] = useState<boolean>(true)
  
 

  return (
    <>
    <div>Search</div>
    <PostList />
    </>
    );
}

export default Search;
