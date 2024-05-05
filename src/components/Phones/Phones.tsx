import { PhoneItem } from '../CatalogItem/PhoneItem';
import styles from '../../pages/PhonesPage/phones.module.scss';
import { PhonesProps } from '../../interfaces/phones';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Scrollbar } from 'swiper/modules';

export const Phones: FC<PhonesProps> = ({ products }: PhonesProps) => {
  return (
    <div className={styles.phones__catalog}>
      <Swiper
        wrapperClass={styles.swiper__wrapper}
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
      >
        {products.map((product) => (
          <SwiperSlide key={product.phoneId} className={styles.slide}>
            <PhoneItem
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
