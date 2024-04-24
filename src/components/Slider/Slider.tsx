import { FC } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import firstSlide from '../../images/category-images/Iphone15-Banner.jpg';
import secondSlide from '../../images/category-images/aalp-magsafe-header-202309.png';
import thirdSlice from '../../images/banner/iphones.png';
import cl from './slider.module.scss';

interface Slide {
  image: string;
  title: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: FC<SliderProps> = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      grabCursor={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      scrollbar={{ draggable: true }}
    >
      <div className='swiper-button-next' style={{ color: '#313131' }}></div>
      <div className='swiper-button-prev' style={{ color: '#313131' }}></div>
      <SwiperSlide>
        <img
          src={secondSlide}
          alt='Slider Product'
          className={cl.img__slider}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src={firstSlide} alt='Slider Product' className={cl.img__slider} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thirdSlice} alt='Slider Product' className={cl.img__slider} />
      </SwiperSlide>
    </Swiper>
  );
};

export { Slider };
