import { FC, memo, useEffect, useState } from "react";
import { Accessories } from "../../interfaces/accessories";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import styles from "./AccessorProductStyles.module.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import accessories from "../../common/products/accessories.json";
import { PhonesAbout } from "../ProductsUI/PhonesAbout/PhonesAbout";
import homeIcon from "../../images/icons/Home.svg";
import rightArrowIcon from "../../images/icons/Chevron (Arrow Right).svg";
import leftArrowIcon from "../../images/icons/Chevron (Arrow Left).svg";
import { AccessoriesCharacteristics } from "../AccessorCharacteristics/AccessorCharacteristics";

interface AccessoriesProductProps {
  accessor: Accessories;
}

export const AccessorProduct: FC<AccessoriesProductProps> = memo(() => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const colorParams = new URLSearchParams(search);
  const initialColor = colorParams.get("color") || "gray";
  const [selectColor, setSelectColor] = useState<string>(initialColor);

  const productTitle = id ? id : undefined;
  const accessor = accessories.find((product) => product.id === productTitle);

  const initialMemory = accessor?.ram || "Unknown";
  const [selectMemory, setSelectMemory] = useState<string>(initialMemory);

  const goToHomePage = () => {
    navigate("/", { replace: true });
  };

  const backToPhonesPage = () => {
    navigate(-1);
  };

  const handleColorChange = (color: string) => {
    setSelectColor(color);
    const newTitle = replaceColorInTitle(productTitle!, color);
    navigate(`/accessories/accessor/${newTitle}`, { replace: true });
  };

  const replaceColorInTitle = (title: string, color: string) => {
    const parts = title.split("-");
    if (parts.length > 1) {
      parts[parts.length - 1] = color;
    }
    return parts.join("-");
  };

  const getTitle = (selectedMemory: string) => {
    if (accessor) {
      return `${accessor.name} ${selectedMemory}`;
    }
    return "";
  };

  useEffect(() => {
    if (accessor) {
      setMainImage(accessor.images[0]);
    }
  }, [accessor, productTitle]);

  const [mainImage, setMainImage] = useState<string>(
    accessor ? accessor.images[0] : ""
  );

  if (!accessor) {
    return <NotFoundPage statusText="404" message="This page is not defined" />;
  }

  return (
    <>
      <div className={styles.phone__navigationItem}>
        <img
          onClick={goToHomePage}
          src={homeIcon}
          alt="Home Icon"
          style={{ cursor: "pointer" }}
        />
        <img
          src={rightArrowIcon}
          alt="arrowRight Icon"
          className={styles.arrowRight__icon}
        />
        <h4 className={styles.phone__phonesTitle}>Accessor</h4>
        <img
          src={rightArrowIcon}
          alt="arrowRight Icon"
          className={styles.arrowRight__icon}
        />
        <p className={styles.phoneModel__capture}>{getTitle(selectMemory)}</p>
      </div>
      <div className={styles.backButton__item}>
        <img src={leftArrowIcon} alt="arrowLeft Icon" />
        <button onClick={backToPhonesPage} className={styles.phoneBack__button}>
          Back to Accessories
        </button>
      </div>
      <h2 className={styles.phoneModel__title}>{getTitle(selectMemory)}</h2>
      <>
        <div className={styles.product__gallery}>
          <div className={styles.phonesAbout__block}>
            <div className={styles.phone__images}>
              <div className={styles.images__wrapper}>
                {accessor.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Apple Watch ${accessor.name}`}
                    className={`${styles.phoneSmall__image} ${
                      mainImage === image ? styles.active : ""
                    }`}
                    onClick={() => setMainImage(image)}
                  />
                ))}
              </div>
              <img
                src={mainImage}
                alt="product"
                className={styles.phone__img}
              />
            </div>
            <div className={styles.product__block}>
              <AccessoriesCharacteristics
                selectMemory={accessor.ram}
                setSelectMemory={setSelectMemory}
                selectColor={selectColor}
                handleColorChange={handleColorChange}
                availableColors={accessor.colorsAvailable}
              />
            </div>
          </div>
          <PhonesAbout />
        </div>
      </>
    </>
  );
});
