import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h3 className='text-4xl text-center font-bold my-8 '>Reviews</h3>
                <p className='mb-24'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis maiores distinctio impedit molestiae velit repudiandae dolore exercitationem necessitatibus, doloribus quibusdam quod unde officia facere placeat temporibus delectus, omnis cum? Veritatis!</p>
            </div>

             
      <Swiper
      loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
       {
        reviews.map(review=> <SwiperSlide key={review.id}>
         <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
       }
       
      </Swiper>
   
        </div>
    );
};

export default Reviews;