import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { img1, img2, img3, img4 } from "../image/images";
import "./swiper.css";
export default function Swipper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <img src={img1} alt="" className="h-[82%] w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="h-[82%] w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="h-[82%] w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="h-[82%] w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
