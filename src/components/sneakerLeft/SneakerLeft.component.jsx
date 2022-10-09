import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swipper from "../swiper/swiper.component";
import Zoom from "../zoom/zoom.component";
import {
  img1,
  img2,
  img3,
  img4,
  imgThumb1,
  imgThumb2,
  imgThumb3,
  imgThumb4,
} from "../image/images";
import Images from "../images/Images.component";

const SneakerLeft = () => {
  const [current, setCurrent] = useState(img1);
  const { zoom, setZoom } = useContext(CartContext);
  const images = [img1, img2, img3, img4];
  const thumb = [imgThumb1, imgThumb2, imgThumb3, imgThumb4];
  return (
    <div className="flex-1 mt-2">
      <div className="relative">
        <div className="flex md:hidden overflow-hidden relative">
          <Swipper />
        </div>
        <img
          src={current}
          onClick={() => {
            setZoom(true);
          }}
          alt="sneaker"
          className={`transition-all
        duration-500 ease-in w-full hidden md:flex h-[16rem] ex-sm:h-[20rem] md:w-[20rem] md:h-[22rem] mb-10 md:rounded-md       
        md:object-contain`}
        />
        {zoom && <Zoom />}
      </div>
      <div className="hidden md:flex ml-[0.3rem] justify-start gap-x-[1.1rem]">
        <Images
          thumb={thumb}
          onClickMove={setCurrent}
          images={images}
          className="w-16 h-16 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SneakerLeft;
