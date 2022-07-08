import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import { AiOutlineCheckCircle, AiOutlineDown, AiOutlinePlusCircle } from 'react-icons/ai'

interface DetailProps {
  title?: string;
  year?: number;
  runtime?: number;
  genres?: string[]
  like?: boolean;
  background_image?: string;
  medium_cover_image?: string;
  src?: string;
  open?: boolean
}

const PostDetail = () => {
  const [open, setOpen] = useState(false)
  const [title, year, runtime, genres, like, description_full, background_image, medium_cover_image] =[
    'Suicide',
    2016,
    123,
    ['Action','Adventure','Fantasy','Sci-Fi'],
    false,
    "It feels good to be bad...Assemble a team of the world's most dangerous, incarcerated Super Villains, provide them with the most powerful arsenal at the government's disposal, and send them off on a mission to defeat an enigmatic, insuperable entity. U.S. intelligence officer Amanda Waller has determined only a secretly convened group of disparate, despicable individuals with next to nothing to lose will do. However, once they realize they weren't picked to succeed but chosen for their patent culpability when they inevitably fail, will the Suicide Squad resolve to die trying, or decide it's every man for himself?",
    'https://yts.mx/assets/images/movies/suicide_squad_2016/background.jpg',
    'https://yts.mx/assets/images/movies/suicide_squad_2016/medium-cover.jpg'
  ] 

  return (
    <PostDetailContainer background_image={background_image}>
      {/* <AiOutlineArrowLeft /> */}
      <Container>
        <Title>{title}</Title>
        <Wrap>
          <StyledBoxWrap>
            <StyledBox>{year}</StyledBox>
            <StyledBox>{runtime}</StyledBox>
            <StyledBox>{genres[0]}</StyledBox>
          </StyledBoxWrap>
          <LikeButtonWrap>
            <LikeButton>
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

const PostDetailContainer = styled.div<DetailProps>`
  display: flex;
  justify-content: space-between;
  width:100vw;
  height:650px;
  padding:5% 9%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #212225 100%),
  url(${props => props.background_image}) no-repeat center;
  background-size: cover;
`

const Container = styled.div`
  width:55%;
  max-width: 850px;
  background: none;
`

const Title = styled.h1`
  width:430px;
  font-size: 45px;
  font-weight: bold;
  background: none;
  color:#d9d9d9;
`

const Wrap = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: none;
  margin: 40px 0;
`

const StyledBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background: none;
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
  background: none;
`

const LikeButtonWrap = styled.div`
  background: none;
  text-align: center;
`

const LikeButton = styled.div`
  background: none;
  margin-bottom: 5px;
  svg{
    width:40px;
    height:40px;
    background: none;
    path{
      color: #d9d9d9;
    }
  }
`

const LikeButtonText = styled.span`
  background: none;
  font-size: 14px;
  color: #d9d9d9;
`

const DescriptionWrap = styled.div`
  position: relative;
`

const Description = styled.div`
  position:absolute;
  background: none;
`

const DescriptionText = styled.p<DetailProps>`
  font-size: 16px;
  line-height: 1.7;
  color: #d9d9d9;
  ${(props) => !props.open && css`
    height:110px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  `}
  background: none;
`

const AddButtonWrap = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  background: none;
`

const AddIcon = styled.div<DetailProps>`
  width:15px;
  height:15px;
  transform: ${(props) => props.open && 'rotate(180deg)'};
`

const AddButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 0;
  margin-right: 7px;
  background: none;
  color: #d9d9d9;
  cursor: pointer;
`

const Poster = styled.img`
  width:330px;
  height:490px;
  margin-right:5%;
  background: none;
`