import { FC, memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import homeIcon from '../../images/icons/Home.svg';
import rightArrowIcon from '../../images/icons/Chevron (Arrow Right).svg';
import leftArrowIcon from '../../images/icons/Chevron (Arrow Left).svg';
import styles from '../../pages/PhonePage/phonePage.module.scss';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { PhoneCharacteristics } from '../../components/PhoneCharacteristics/PhoneCharacteristics';
import { ProductItemProps } from '../../interfaces/tablets';
import { TabletsAbout } from '../../components/TabletsAbout/TabletsAbout';
import { TabletsTechSpecs } from '../../components/TabletsTechSpecs/TabletsTechSpecs';
import { ROUTES } from '../../common/routes/routes';

export const ProductItem: FC<ProductItemProps> = memo(({ tablet }) => {
  const navigate = useNavigate();
  useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState<string>('');
  const [selectMemory, setSelectMemory] = useState<string>('64 GB');

  useEffect(() => {
    if (tablet && tablet.images && tablet.images.length > 0) {
      setMainImage(tablet.images[0]);
    }
  }, [tablet]);

  const goToHomePage = () => {
    navigate(ROUTES.HOME, { replace: true });
  };

  const backToTabletsPage = () => {
    navigate('/tablets');
  };

  if (!tablet) {
    return <NotFoundPage statusText='404' message='This page is not defined' />;
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const getTitle = (selectedMemory: string) => {
    switch (selectedMemory) {
      case '64 GB':
        return `${tablet.name} 64GB`;
      case '128 GB':
        return `${tablet.name} 128GB`;
      case '256 GB':
        return `${tablet.name} 256GB`;
      default:
        return tablet.name;
    }
  };

  return (
    <>
      <div className={styles.phone__navigationItem}>
        <img
          onClick={goToHomePage}
          src={homeIcon}
          alt='Home Icon'
          style={{ cursor: 'pointer' }}
        />
        <img
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={styles.arrowRight__icon}
        />
        <h4 className={styles.phone__phonesTitle}>Tablets</h4>
        <img
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={styles.arrowRight__icon}
        />
        <p className={styles.phoneModel__capture}>{getTitle(selectMemory)}</p>
      </div>
      <div className={styles.backButton__item}>
        <img src={leftArrowIcon} alt='arrowLeft Icon' />
        <button
          onClick={backToTabletsPage}
          className={styles.phoneBack__button}
        >
          Back to Tablets
        </button>
      </div>
      <h2 className={styles.phoneModel__title}>{getTitle(selectMemory)}</h2>
      <div className={styles.product__gallery}>
        <div className={styles.phonesAbout__block}>
          <div className={styles.phone__images}>
            <div className={styles.images__wrapper}>
              {tablet.images &&
                tablet.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt='tablet'
                    className={`${styles.phoneSmall__image} ${
                      mainImage === image ? styles.active : ''
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
            </div>
            <img src={mainImage} alt='product' className={styles.phone__img} />
          </div>
          <div className={styles.product__block}>
            <PhoneCharacteristics setSelectMemory={setSelectMemory} />
            <TabletsTechSpecs product={tablet} />
          </div>
        </div>
        <TabletsAbout />
      </div>
    </>
  );
});
