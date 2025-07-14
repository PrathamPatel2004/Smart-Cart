import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import member2 from '../assets/member2.jpg'
import icon from '../assets/icon.jpg'

function CategorySlide() {
    const slides = [
        {member2},
        {member2},
        {member2},
        {member2},{member2},{member2},{member2},{member2},{member2},
    ];

    return (
        <div className="container2">
            <Swiper
                slidesPerView={8}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                navigation={true}
            >
            {slides.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="item rounded-[10px] bg-[#787878] overflow-hidden">
                            <img src={member2} alt={`Banner slide ${index + 1}`} className="w-full rounded-full h-auto object-cover p-2" />
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}

export default CategorySlide;