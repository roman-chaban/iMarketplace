import { CatalogItem } from '../CatalogItem/CatalogItem';
import cl from '../../pages/PhonesPage/phones.module.scss';
import { PhonesProps } from '../../interfaces/phones';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Scrollbar } from 'swiper/modules';

export const Phones: FC<PhonesProps> = ({ products }: PhonesProps) => {
  return (
    <div className={cl.phones__catalog}>
      <Swiper
        wrapperClass={cl.swiper__wrapper}
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={35}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        slidesPerView={4}
        style={{ width: '1100px', margin: '0 auto' }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.phoneId}
            className={cl.slide}
            style={{ width: '240px', marginLeft: 0 }}
          >
            <CatalogItem
              displaySize={product.displaySize}
              imgUrl={product.imgUrl}
              title={product.title}
              phoneId={product.phoneId}
              capacity={`${product.capacity} GB`}
              memory={`${product.memory} GB`}
              discount={`${product.discount}$`}
              price={`${product.price}$`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
