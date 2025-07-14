import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function HeadSlider() {
    const slides = [
        "https://serviceapi.spicezgold.com/download/1751685200593_1721277298204_banner.jpg",
        "https://serviceapi.spicezgold.com/download/1751685183248_NewProject(6).jpg",
        "https://serviceapi.spicezgold.com/download/1751685164864_NewProject(10).jpg",
        "https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg",
        "https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg",
        "https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg",
        "https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg",
    ];

    return (
        <div className="container2">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="sliderHome"
            >
            {slides.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="item rounded-[10px] overflow-hidden">
                            <img src={src} alt={`Banner slide ${index + 1}`} className="w-full h-auto object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    );
}

export default HeadSlider;
