import styles from "../../../pages/PhonesPage/PhonesPageStyles.module.scss";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { TabletItem } from "../TabletItem/TabletItem";
import { Tablet } from "../../../interfaces/tablets";
import { Scrollbar } from "swiper/modules";
import "./TabletsSwiper.scss";

SwiperCore.use([Scrollbar]);

const Tablets: FC<{ products: Tablet[] }> = ({ products }) => {
  return (
    <div className={styles.phones__catalog}>
      <Swiper
        wrapperClass={styles.swiper__wrapper}
        pagination={{ dynamicBullets: true }}
        spaceBetween={105}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{ hide: true }}
        slidesPerView={4}
        style={{
          width: "1200px",
          margin: "0 auto",
          cursor: "grab",
          height: "700px",
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className={styles.slide}
            style={{ width: "240px", marginLeft: 0 }}
          >
            <TabletItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tablets;
