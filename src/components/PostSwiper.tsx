import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieCard } from '../types/Movie';

import PostCard from './PostCard';

interface propsType {
  data?: MovieCard[];
}

const PostSwiper = (props: propsType) => {
  const { data } = props;
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<JSX.Element>): void => {
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
      {data?.map((item) => (
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
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    text-align: center;
    line-height: 2;
  }
`;
