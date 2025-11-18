import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import amazonVector from '../../../assets/brands/amazon_vector.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';


const brandsLogo= [amazon, amazonVector, casio, moonstar, randstad, star , starPeople]

const Brands = () => {
    return (
        <Swiper
         slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        >
{
    brandsLogo.map((logo , index)=><SwiperSlide className='my-10' key={index}><img src={logo} alt="" /></SwiperSlide>)
}
            
        </Swiper>
    );
};

export default Brands;