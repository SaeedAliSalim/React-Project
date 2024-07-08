import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, Navigation } from 'swiper/modules';
import '../OurStyle.css';




export default function Carousel() {

    return (

        <>
            
            <div className="container py-4 px-4 justify-content-center rounded-5 swiper-contianer">
                <h1 className='text-dark text-center'>Skills</h1>
                <p className='my-3 fs-1 text-center text-dark'>You Can See My Skills Here</p>
                <Swiper
                    modules={[Pagination, Navigation]}
                    grabCursor={true}
                    className="mySwiper"
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    // pagination={{
                    //     clickable: false,
                    // }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },

                    }}

                >

                    <SwiperSlide  className="align-content-center" >
                        <div className='d-flex justify-content-center  align-items-center '>
                            <div className="arc"></div>
                            <span className='swiper-span'>50%</span>
                        </div>
                        <h4 className='t mt-2'>few more common shapes for </h4>
                    </SwiperSlide>
                    <SwiperSlide className="align-content-center">
                        <div className='d-flex justify-content-center align-content-center '>
                            <div className="arc"></div>
                            <span className='swiper-span'>50%</span>
                        </div>
                        <h4 className='t mt-2'>few more common shapes for </h4>
                    </SwiperSlide>
                    <SwiperSlide className="align-content-center">
                        <div className='d-flex justify-content-center align-content-center '>
                            <div className="arc"></div>
                            <span className='swiper-span'>50%</span>
                        </div>
                        <h4 className='t mt-2'>few more common shapes for </h4>
                    </SwiperSlide>
                    <SwiperSlide className="align-content-center">
                        <div className='d-flex justify-content-center align-content-center '>
                            <div className="arc"></div>
                            <span className='swiper-span'>50%</span>
                        </div>
                        <h4 className='t mt-2'>few more common shapes for </h4>
                    </SwiperSlide>
                    <SwiperSlide className="align-content-center">
                        <div className='d-flex justify-content-center align-content-center '>
                            <div className="arc"></div>
                            <span className='swiper-span'>50%</span>
                        </div>
                        <h4 className='t mt-2'>few more common shapes for </h4>
                    </SwiperSlide>
                   
                </Swiper>

            </div>

        </>
    )
}