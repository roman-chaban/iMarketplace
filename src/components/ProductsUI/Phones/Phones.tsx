import { PhoneItem } from '../../CatalogItem/PhoneItem';
import styles from '../../../pages/PhonesPage/phones.module.scss';
import { PhonesProps } from '../../../interfaces/phones';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Scrollbar } from 'swiper/modules';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../LanguageSwitcher/translation';

export const Phones: FC<PhonesProps> = ({ products }: PhonesProps) => {
  const { currentLanguage } = useLanguage();
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
        breakpoints={{
          1440: {
            slidesPerView: 4,
          },
          1050: {
            slidesPerView: 3,
          },
          930: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.phoneId}
            className={styles.slide}
          >
            <PhoneItem
              displaySize={product.displaySize}
              imgUrl={product.imgUrl}
              title={product.title}
              phoneId={product.phoneId}
              capacity={`${product.capacity} ${translations[currentLanguage].memoryLabel}`}
              memory={`${product.memory} ${translations[currentLanguage].memoryLabel}`}
              discount={`${product.discount}$`}
              price={`${product.price}$`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
