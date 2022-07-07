import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft, AiOutlinePlusCircle } from 'react-icons/ai'

interface Props {
  url: string;
}

const DetailContainer = styled.div`
  max-width:1000px;
  margin : 10px auto;
`

const PosterWrap = styled.div`
  position:relative;
  width: 100%;
  height: 500px;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    width: 100vw;
    height: 400px;
  }
`
const Poster = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(26, 27, 29, 0.9) 81.77%, #212225 100%),
  url(${props => props.url}) no-repeat center;
  background-size: 100%;
`

const BackIcon = styled.div`
  display: none;
  position:absolute;
  top:10px;
  left:10px;
  svg{
    width:20px;
    height:20px;
  }
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    display: block;
  }
`

const AddBookMarkIcon = styled.div`
  position:absolute;
  right:10px;
  bottom:10px;
  text-align: center;
  svg{
    width:45px;
    height:45px;
  }
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    svg{
      width: 30px;
      height: 30px;
    }
  }
`
const AddBookMarkText = styled.p`
  margin:5px;
  font-size: 14px;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    font-size: 12px;
  }
`

const TitleWrap = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin-top: 40px;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    font-size: 20px;
  }
`

const Year = styled.span`
  display: inline-block;
  font-size: 28px;
  margin-top:33px;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    font-size: 16px;
  }
`

const Detail = () => {
  
  const [title, year, poster] = ['You Are the Apple of My Eye', '2011', 'https://m.media-amazon.com/images/M/MV5BMWU2OTAyMTktMTU5MC00MTNhLTg1NzAtOTZjNWFjMDRiZGUxXkEyXkFqcGdeQXVyNDY3MzUxOTI@._V1_SX300.jpg']

  return (
    <DetailContainer>
      <PosterWrap>
        <BackIcon>
          <AiOutlineArrowLeft/>
        </BackIcon>
        <Poster url={poster}/>
        <AddBookMarkIcon>
          <AiOutlinePlusCircle />
          <AddBookMarkText>찜한 콘텐츠</AddBookMarkText>
        </AddBookMarkIcon>
      </PosterWrap>
      <TitleWrap>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </TitleWrap>
    </DetailContainer>
  )
}

export default Detail