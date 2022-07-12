import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PostCard from './PostCard';

interface dataTypes {
  id: number;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  genres: Array<string>;
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  map_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  like: boolean;
}
interface propsType {
  data: Array<dataTypes>;
}

const PostSwiper = (props: propsType) => {
  const { data } = props;
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent): void => {
    console.log('clicked');
    const target = event.target as typeof event.target & {
      dataset: {
        id: number;
      };
    };
    const id = target.dataset.id;
    navigate(`/detail/${id}`);
  };

  return (
    <SwiperContainer
      slidesPerView={5}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="slideItem">
          <PostCard data={item} data-id={item.id} onClick={handleClick} />
          <div className="bottom">
            <p>{item.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
};

export default PostSwiper;

const SwiperContainer = styled(Swiper)`
  .swiper-wrapper {
    display: flex;
  }
  .slideItem {
    width: 100% !important;
    margin-right: 0;
  }
  .bottom {
    width: 200px;
    padding: 4px 0;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; /* 라인수 */
    text-overflow: ellipsis;
    text-align: center;
    line-height: 2;
  }
`;
