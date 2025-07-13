import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // use /react here
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import HeadSlider_1 from "../../assets/HeadSlider_1.png";
import HeadSlider_2 from "../../assets/HeadSlider_2.jpg";
import HeadSlider_3 from "../../assets/HeadSlider_3.jpg";
import HeadSlider_4 from "../../assets/HeadSlider_4.jpg";

function HeadSlider() {
    return (
        <div className="container !my-[30px]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={HeadSlider_1} alt="HeadSlider1" className="w-full !h-[50%]" /></SwiperSlide>
                <SwiperSlide><img src={HeadSlider_2} alt="HeadSlider2" className="w-full !h-[50%]" /></SwiperSlide>
                <SwiperSlide><img src={HeadSlider_3} alt="HeadSlider3" className="w-full !h-[50%]" /></SwiperSlide>
                <SwiperSlide><img src={HeadSlider_4} alt="HeadSlider4" className="w-full !h-[50%]" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeadSlider;
