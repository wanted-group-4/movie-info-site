import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from 'src/components/Card';
import PostCard from 'src/components/PostCard';

export interface movieInfo {
  id: string;
  title: string;
  medium_cover_image: string,
  summary?: string,
  like: boolean
}

const Search = () => {
  const [data, setData] = useState<boolean>(true)
  const [movieInfo, setMovieInfo] = useState<movieInfo[]>([]);
  const [reload, setReload] = useState(false);
  
  //영화 불러오기
  useEffect(() => {
    try {
    axios.get('/data/movies.json')
    .then(response => {
      const { movies } = response.data
      selectMovieInfo(movies)
    })
    } catch(error) {
      console.log(error)
    }
  },[])
  
  //필요한 정보 뽑아오는 함수
  const selectMovieInfo = (data: Array<movieInfo>) => {
    const store: Array<movieInfo> = [];
    for (let i = 0; i < data.length; i++) {
      const { id, title, medium_cover_image, like } = data[i];
      store.push({ id, title, medium_cover_image, like });
    }
    setMovieInfo([...movieInfo, ...store]);
  }; 
  

  
  console.log(movieInfo)

  return (
    <>
    <div>Search</div>
    {!data ? (<div>검색 결과가 없습니다.</div>
    ) 
    : 
    (
    <div>
      {movieInfo.map(cardInfo => <Card {...cardInfo} key={cardInfo.id}/>)}
    </div>
    )}
    </>
    );
}

export default Search;
