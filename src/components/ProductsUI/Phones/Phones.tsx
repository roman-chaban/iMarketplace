import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../pages/PhonesPage/PhonesPageStyles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.scss";
import { PhoneItem } from "../../CatalogItem/PhoneItem";
import { PhonesProps } from "../../../interfaces/phones";

export const Phones: FC<PhonesProps> = ({ products }: PhonesProps) => {
  return (
    <div className={styles.phones__catalog}>
      <Swiper
        className="swiper"
        wrapperClass={`${styles.swiper__wrapper} swiper-wrapper`}
        pagination={{ dynamicBullets: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{ draggable: true, hide: true }}
        spaceBetween={35}
        slidesPerView={4}
        style={{ height: "700px" }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.phoneId}
            className={`${styles.slide} swiper-slide`}
          >
            <PhoneItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
