import cl from '../../pages/PhonesPage/phones.module.scss';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { TabletItem } from '../TabletItem/TabletItem';
import { Tablet } from '../../interfaces/tablets';
import { Scrollbar } from 'swiper/modules';

SwiperCore.use([Scrollbar]);

const Tablets: FC<{ products: Tablet[] }> = ({ products }) => {
  return (
    <div className={cl.phones__catalog}>
      <Swiper
        wrapperClass={cl.swiper__wrapper}
        pagination={{ dynamicBullets: true }}
        spaceBetween={35}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        scrollbar={{ hide: true }}
        slidesPerView={4}
        style={{ width: '1100px', margin: '0 auto', cursor: 'grab' }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className={cl.slide}
            style={{ width: '240px', marginLeft: 0 }}
          >
            <TabletItem
              images={product.images}
              name={product.name}
              priceRegular={`${product.priceRegular} $`}
              priceDiscount={`${product.priceDiscount} $`}
              id={product.id}
              screen={product.screen}
              capacity={product.capacity}
              ram={product.ram}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tablets;
