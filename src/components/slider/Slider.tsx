import { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import useWindowDimensions from 'src/utils/useWindowDimensions';
import React from 'react';
import Slide from './Slide';
import { IMovie } from 'src/types/Movie';

interface SliderProps {
  movieList: IMovie[];
}

const Slider = ({movieList}:SliderProps) => {
  const {width}= useWindowDimensions()
  const [currentIndex, setCurrentIndex] = useState<number>(0)


  const handleSlide = (currentIndex: number) => {
    if (currentIndex > movieList.length) {
      currentIndex = 0
    } else if (currentIndex < 0) {
      currentIndex = movieList.length - 1
    }
    setCurrentIndex(currentIndex)
  }

  const handleSwipe = (direction: number) => {
    if (width >= 770) {
       handleSlide(currentIndex + direction * 6.6);
    } else if (width >= 500 && width <770) {
      handleSlide(currentIndex + direction * 5);
    } else {
       handleSlide(currentIndex + direction * 3);
    } 
  }


  return (
    <SliderWrap className="slider-wrap" id="slider-wrap" length={movieList?.length} >
      <ButtonWrap currentIndex={currentIndex}>
        <Button className="previous" onClick={() => handleSwipe(-1)} ><AiOutlineLeft /></Button>
        <Button className="next" onClick={() => handleSwipe(1)}><AiOutlineRight/></Button>
      </ButtonWrap>
      <Slide data={movieList} currentIndex={currentIndex} viewWidth={width}/>
    </SliderWrap>
  )
}

export default Slider

const SliderWrap = styled.div<{length:number}>`
  position: relative;
  padding: 15px;
  width: 98vw;
  height: 25vw;
  min-height: 270px;
  overflow: hidden;
`
const ButtonWrap = styled.div<{currentIndex:number}>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 96vw;
  height: 20vw;
  top:0;
  cursor: pointer;
  .previous{
    left:0;
  }
  .next {
    right: 0;
  }
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    height: 55vw;
    max-height: 250px;
  }
`
const Button = styled.div`
  position: absolute;
  bottom:0;
  top:0;
  width: 40px;
  height: 100%;
  z-index: 10000;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, .5));
  &:hover{
    width: 60px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
  }
  svg{
    width: 100%;
    height: 100%;
  }
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
     width: 30px;
    &:hover{
      width: 40px;
    }
  }
`
