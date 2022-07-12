import React, { useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'


import serverApi from 'src/api'
import { getMovieById } from 'src/api/movieApi'
import PostList from 'src/components/PostList'
import PostDetail from 'src/components/PostDetail'


const Detail = () => {
  const { id } = useParams<{ id: string }>()
  const { data } = getMovieById(id)
  const [similarMovie, setSimilarMovie] = useState<any>([])

  const getSimilarList = async (genre: string) => {
    const response = await serverApi.get(`/?genres_like=${genre}`)
    setSimilarMovie(response)
  }

  return (
    <>
      {data !== null && (
        <>
          <PostDetail data={data} getSimilarList={getSimilarList}/>
          <SimilarMovieWrap>
            <SimilarMovieTitle>비슷한 영화</SimilarMovieTitle>
            {similarMovie !== null && <PostList movieList={similarMovie.slice(0,10)}/>}
          </SimilarMovieWrap>
        </>
      )}
    </>
  )
}

export default Detail

const SimilarMovieTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;

`
const SimilarMovieWrap = styled.div`
  width: 90vw;
  margin: 0 auto;
  & div {
    margin-top: 30px;
  }
  border-top: 1px solid #d9d9d9;
  padding-top: 50px;
`