import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./AccessoriesCatalogStyles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Slider/Slider.scss";
import { Accessories } from "../../interfaces/accessories";
import { AccessoriesProduct } from "../AccessoriesProducts/AccessoriesProduct/AccessoriesProduct";

interface AccessoriesCatalogProps {
  accessories: Accessories[];
}

export const AccessoriesCatalog: FC<AccessoriesCatalogProps> = ({
  accessories,
}: AccessoriesCatalogProps) => {
  return (
    <div className={styles.accessories__catalog}>
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
        style={{ height: "auto" }}
      >
        {accessories.map((accessor) => (
          <SwiperSlide
            key={accessor.id}
            className={`${styles.slide} swiper-slide`}
          >
            <AccessoriesProduct product={accessor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
