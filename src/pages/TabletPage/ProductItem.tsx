import { FC, memo, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import homeIcon from "../../images/icons/Home.svg";
import rightArrowIcon from "../../images/icons/Chevron (Arrow Right).svg";
import leftArrowIcon from "../../images/icons/Chevron (Arrow Left).svg";
import styles from "../../pages/PhonePage/PhonePageStyles.module.scss";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { ProductItemProps } from "../../interfaces/tablets";
import { ROUTES } from "../../constants/routes/routes";
import { TabletsAbout } from "../../components/TabletsUI/TabletsAbout/TabletsAbout";
import { TabletCharacteristics } from "../../components/TabletsUI/TabletCharacteristics/TabletCharacteristics";
import tabletsData from "../../common/products/tablets.json";

type MainImage = string;
type SelectMemory = string;

export const ProductItem: FC<ProductItemProps> = memo(({ tablet }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState<MainImage>("");
  const [selectMemory, setSelectMemory] = useState<SelectMemory>("64 GB");
  const { search } = useLocation();
  const colorParams = new URLSearchParams(search);
  const initialColor = colorParams.get("color") || "space-gray";
  const [selectColor, setSelectColor] = useState<string>(initialColor);

  const productTitle = id ? id : undefined;
  const tablets = tabletsData.find((product) => product.id === productTitle);

  useEffect(() => {
    if (tablet && tablet.images && tablet.images.length > 0) {
      setMainImage(tablet.images[0]);
    }
  }, [tablet]);

  const goToHomePage = () => {
    navigate(ROUTES.HOME, { replace: true });
  };

  const backToTabletsPage = () => {
    navigate(`/${ROUTES.TABLETS}`);
  };

  if (!tablets) {
    return <NotFoundPage statusText="404" message="This page is not defined" />;
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const getTitle = (selectedMemory: string) => {
    switch (selectedMemory) {
      case "64 GB":
        return `${tablet.name} 64GB`;
      case "128 GB":
        return `${tablet.name} 128GB`;
      case "256 GB":
        return `${tablet.name} 256GB`;
      default:
        return tablet.name;
    }
  };

  const replaceColorInTitle = (title: string, color: string) => {
    const parts = title.split("-");
    if (parts.length > 1) {
      parts[parts.length - 1] = color;
    }
    return parts.join("-");
  };

  const handleColorChange = (color: string) => {
    setSelectColor(color);
    const newTitle = replaceColorInTitle(productTitle!, color);
    navigate(`/tablets/tablet/${newTitle}?color=${color}`, { replace: true });
  };

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
        <h4 className={styles.phone__phonesTitle}>Tablets</h4>
        <img
          src={rightArrowIcon}
          alt="arrowRight Icon"
          className={styles.arrowRight__icon}
        />
        <p className={styles.phoneModel__capture}>{getTitle(selectMemory)}</p>
      </div>
      <div className={styles.backButton__item}>
        <img src={leftArrowIcon} alt="arrowLeft Icon" />
        <button
          onClick={backToTabletsPage}
          className={styles.phoneBack__button}
        >
          Back to Tablets
        </button>
      </div>
      <h2 className={styles.phoneModel__title}>{getTitle(selectMemory)}</h2>
      <div className={styles.product__gallery}>
        <div className={`${styles.phonesAbout__block} ${styles.tabletsAbout} `}>
          <div className={styles.aboutFlex}>
            <div className={styles.phone__images}>
              <div className={styles.images__wrapper}>
                {tablet.images &&
                  tablet.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="tablet"
                      className={`${styles.phoneSmall__image} ${
                        mainImage === image ? styles.active : ""
                      }`}
                      onClick={() => handleThumbnailClick(image)}
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
              <TabletCharacteristics
                tablet={tablet}
                selectMemory={tablet.ram}
                setSelectMemory={setSelectMemory}
                selectColor={selectColor}
                handleColorChange={handleColorChange}
                availableColors={tablet.colorsAvailable}
              />
            </div>
          </div>
          <TabletsAbout tablet={tablet} selectMemory={selectMemory} />
        </div>
      </div>
    </>
  );
});
