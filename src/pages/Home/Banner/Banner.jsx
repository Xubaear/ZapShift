import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import van from '../../../assets/delivery-van.png'
import service from '../../../assets/service.png'

const Banner = () => {
    return (
        <>
        <Carousel autoPlay={true}
                  infiniteLoop={true}
                  interval={2000}
        >
                <div>
                 <img src={banner1} />
                </div>
                <div>
                    <img src={banner2}/>
                    
                </div>
                <div>
                    <img src={banner3}/>
                    
                </div>
            </Carousel>


<div className='flex gap-3'>
    
            <div className="card bg-gray-200 w-70 shadow-sm">
  <figure className="px-10 pt-3">
    <img
      src={van}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Booking Pick & Drop</h2>
    <p>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
    
  </div>
</div>


            <div className="card bg-gray-200 w-70 shadow-sm">
  <figure className="px-10 pt-3">
    <img
      src={van}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cash On Delivery</h2>
    <p>From personal packages to <br />business shipments — we deliver <br /> on time, every time.</p>
    
  </div>
</div>


            <div className="card bg-gray-200 w-70 shadow-sm">
  <figure className="px-10 pt-3">
    <img
      src={van}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Delivery Hub</h2>
    <p>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
    
  </div>
</div>


            <div className="card bg-gray-200 w-70 shadow-sm">
  <figure className="px-10 pt-3">
    <img
      src={van}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Booking SME & Corporate</h2>
    <p>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
    
  </div>
</div>
</div>





<div className='bg-[#03373D] rounded-xl my-10 py-16 px-10'>

    <h1 className='flex justify-center pt-7 text-4xl font-bold text-white'>Our Services</h1>
    <p className='flex justify-center mt-3 text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to</p>
    <p className='flex justify-center  text-white'>business shipments — we deliver on time, every time.</p>

    <div className='flex justify-center gap-3 mt-7'>
            <div className="card bg-gray-200 w-90 shadow-sm">
  <figure className="px-10 pt-5">
    <img
      src={service}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Express  & Standard Delivery</h2>
    <p>We deliver parcels within 24–72 hours in Dhaka, <br />Chittagong, Sylhet, Khulna, and Rajshahi. <br /> Express delivery available in Dhaka within 4–6 <br />hours from pick-up to drop-off.</p>
    
  </div>
</div>

    <div className="card bg-gray-200 w-90 shadow-sm">
  <figure className="px-10 pt-5">
    <img
      src={service}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Nationwide Delivery</h2>
    <p>We deliver parcels nationwide with home delivery <br /> in every district, ensuring your products reach <br /> customers within 48–72 hours.</p>
    
  </div>
</div>

    <div className="card bg-gray-200 w-90 shadow-sm">
  <figure className="px-10 pt-5">
    <img
      src={service}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Fulfillment Solution</h2>
    <p>We also offer customized service with inventory <br /> management support, online order processing, <br /> packaging, and after sales support.</p>
    
  </div>
</div>


    </div>
    <div className='flex justify-center gap-3 mt-7'>
            <div className="card bg-gray-200 w-90 shadow-sm">
  <figure className="px-10 pt-5">
    <img
      src={service}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cash on Home Delivery</h2>
    <p>100% cash on delivery anywhere in Bangladesh <br /> with guaranteed safety of your product.</p>
    
  </div>
</div>

    <div className="card bg-gray-200 w-90 shadow-sm">
  <figure className="px-10 pt-5">
    <img
      src={service}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Corporate Service / <br /> Contract In Logistics</h2>
    <p>Customized corporate services which includes <br /> warehouse and inventory management support.</p>
    
  </div>
</div>

    <div className="card bg-gray-200 w-90 shadow-sm">
  <figure className="px-10 pt-5">
    <img
      src={service}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Parcel Return</h2>
    <p>Through our reverse logistics facility we allow end <br /> customers to return or exchange their products <br /> with online business merchants.</p>
    
  </div>
</div>


    </div>
</div>


        </>


        
    );
};

export default Banner;
