import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';




const PostList = (props: any) => {
  const {data, page, setPage} = props
 // console.log(data,'data')
 
  const target = useRef<HTMLDivElement>(null);
  // 무한스크롤




  const options:any = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };
  const callback = (entries:any) => {
  // console.log(entries[0].isIntersecting);
    if (entries[0].isIntersecting === true) {
      setTimeout(() => setPage(page+1), 500);
    }  
  };
  const observer:any = new IntersectionObserver(callback, options);

  if (target.current) {
    observer.observe(target.current);
  } 

  return (
    <>
      <div>PostList</div>
      <PosterContainer>
        {data === [] ? (
          <div>불러오는 중</div>
        ) : (
          data.map((el: any, idx: number) => <PostCard data={el} key={idx} />)
        )}
      </PosterContainer>
      <Div ref={target}></Div>
    </>
  );
};

export default PostList;

const PosterContainer = styled.div`
  //width: 100%;
  //height: 100vh;
  //display: flex;
`;
const Div = styled.div`
 // background-color: red;
  width:500px;
  height:300px;
`

