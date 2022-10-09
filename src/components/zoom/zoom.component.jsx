import { useState,useContext,useEffect } from "react";
import Swipper from "../swiper/swiper.component";
import { img1,img2,img3,img4,
    imgThumb1, imgThumb2, imgThumb3, imgThumb4
} from "../image/images";
import { CartContext } from "../context/CartContext";
import {ReactComponent as Close} from '../../assets/images/icon-close.svg';
import {ReactComponent as Next} from '../../assets/images/icon-next.svg';
import {ReactComponent as Prev} from '../../assets/images/icon-previous.svg';
import Images from "../images/Images.component";

const Zoom = () => {
  const {setZoom}=useContext(CartContext);
  const images = [img1,img2,img3,img4];
  const [i,setI] = useState(0);
  const [current, setCurrent] = useState(images[i]);
  const [thumb] = useState([imgThumb1, imgThumb2, imgThumb3, imgThumb4]);
    const nextImage = () => {
        if(i<images.length-1){
            setI(i+1);
            setCurrent(images[i+1]);
        }
        else{
            setI(0);
            setCurrent(images[0]);
        }
    }

    const prevImage = () => {
        if(i>0){
            setI(i-1);
            setCurrent(images[i-1]);
        }
        else{
            setI(images.length-1);
            setCurrent(images[images.length-1]);
        }
    }

    useEffect(()=>{
      window.addEventListener('keydown', (e)=>{
          if(e.key==='Escape'){
            setZoom(false);
          }
    
        },[])
      return () => {
        window.removeEventListener('keydown', ()=>{})
      }
    },[]);



      return (
      <div className={`fixed top-0 bg-black
       hidden z-50 left-0 bg-black-50 bg-opacity-80 w-full h-full md:flex flex-col items-center justify-center`}>
          <Close onClick={()=>{setZoom(false)}} className='absolute top-10 fill-slate-700 hover:fill-primary right-10 cursor-pointer' />
          <div className='relative'>
            <div className='flex md:hidden relative'><Swipper /></div>
          <div className="relative">
            <div onClick={()=>prevImage()} className="absolute z-10 px-5 py-4 bg-white-50 top-[45%] -left-6 rounded-full cursor-pointer ">
          <Prev className='' />
            </div>
          <img src={current} alt="sneaker" className={`transition-all
          duration-500 ease-in w-full hidden md:flex h-[20rem] ex-sm:h-[22rem] md:w-[21rem] md:h-[22rem] mb-10 md:rounded-md       
          md:object-cover`} />
         <div  onClick={
            ()=>nextImage()
          } className="absolute z-10 px-5 py-4 bg-white-50 top-[45%] -right-6 rounded-full cursor-pointer ">
          <Next className='' />
            </div>
          </div>
          </div>
          <div className={'hidden md:flex gap-x-[1.1rem]'}>
            <Images i={i} thumb={thumb} onClickMove={setCurrent} images={images} />
          </div>
     
      </div>
    )
  }
  
  export default Zoom;