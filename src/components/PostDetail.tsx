import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineDown, AiOutlinePlusCircle } from 'react-icons/ai'
import { MovieDetail } from 'src/types/movie'
import { patchMovieFavorite } from 'src/api/movieApi'


const PostDetail: React.FC<{data:any}>= ({data}) => {
  const [open, setOpen] = useState(false)
  
 const {
    id,title, year, runtime, genres, like, background_image, medium_cover_image, description_full }: MovieDetail = data
  
  return (
    <PostDetailContainer background_image={background_image}>
      <BackButton>
         <AiOutlineArrowLeft />
      </BackButton>
      <MobilePoster url={medium_cover_image}/>
      <Container>
        <Title>{title}</Title>
        <Wrap>
          <StyledBoxWrap>
            <StyledBox>{year}</StyledBox>
            <StyledBox>{`${runtime}분`}</StyledBox>
            <StyledBox>{genres[0]}</StyledBox>
          </StyledBoxWrap>
          <LikeButtonWrap>
            <LikeButton onClick={()=>patchMovieFavorite(id, like)}>
              {like ?  <AiOutlineCheckCircle/> : <AiOutlinePlusCircle/>}
            </LikeButton>
            <LikeButtonText>찜한 콘텐츠</LikeButtonText>
          </LikeButtonWrap>
        </Wrap>
        <DescriptionWrap>
          <Description >
            <DescriptionText open={open}>{description_full}</DescriptionText>
            <AddButtonWrap>
              <AddButton onClick={()=>setOpen(!open)}>{open ? '닫기' : '더보기'}</AddButton>
              <AddIcon open={open}><AiOutlineDown/></AddIcon>
            </AddButtonWrap>
          </Description>
        </DescriptionWrap>
      </Container>
      <Poster src={medium_cover_image} />
    </PostDetailContainer>
  )
}

export default PostDetail

const BackButton = styled.div`
  display: none;
  position: absolute;
  left: 2%;
  top: 9%;
  svg{
    width:30px;
    height: 30px;
  }
 @media ${({ theme }) => theme.deviceSize.max.mobile} {
  display: block;
 }
`
const PostDetailContainer = styled.div<{ background_image: string }>`
  display: flex;
  justify-content: space-between;
  width:100vw;
  height:650px;
  padding:5% 9%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #212225 100%),
  url(${props=> props.background_image}) no-repeat center;
  background-size: cover;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    height: 400px;
    padding:0;
    background: none;
    display: block;
  }
`

const Container = styled.div`
  width:55%;
  max-width: 850px;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    padding:20px;
    width:100vw;
  }
`

const MobilePoster = styled.div<{url:string}>`
  display: none;
  width:100vw;
  height: 450px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(26, 27, 29, 0.9) 80%, #212225 100%),
  url(${props => props.url}) no-repeat;
  background-size: 100%;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    display: block;
  }
`

const Title = styled.h1`
  width:430px;
  font-size: 45px;
  font-weight: bold;
  color:#d9d9d9;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    font-size: 24px;
    margin-top: 60px;
  }
`

const Wrap = styled.div`
  width: 75%;
  min-width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px 0;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    margin:15px 0 20px;
    width: 100%;
  }
`

const StyledBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledBox = styled.div`
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
  padding:6px 13px;
  margin-right: 12px;
  color: #d9d9d9;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    height: 20px;
    font-size: 13px;
    padding: 1px 10px;
    white-space: nowrap;
  }
`

const LikeButtonWrap = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {

  }
`

const LikeButton = styled.div`
  margin-bottom: 5px;
  svg{
    width:40px;
    height:40px;
    path{
      color: #d9d9d9;
    }
  }
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    svg{
      width:35px;
      height:35px;
    }
  }
`

const LikeButtonText = styled.span`
  font-size: 14px;
  color: #d9d9d9;
`

const DescriptionWrap = styled.div`
  position: relative;
`

const Description = styled.div`
  position:absolute;
`

const DescriptionText = styled.p<{open: boolean}>`
  font-size: 16px;
  line-height: 1.7;
  color: #d9d9d9;
  ${props => !props.open && css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  `}
`

const AddButtonWrap = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;

`

const AddIcon = styled.div<{open:boolean}>`
  width:15px;
  height:15px;
  transform: ${(props) => props.open && 'rotate(180deg)'};
`

const AddButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 0;
  margin-right: 7px;
  color: #d9d9d9;
  background: none;
  cursor: pointer;
`

const Poster = styled.img`
  width:330px;
  height:490px;
  margin-right:5%;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    display: none;
  }
`