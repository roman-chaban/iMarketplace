import { FC, memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import homeIcon from '../../images/icons/Home.svg';
import rightArrowIcon from '../../images/icons/Chevron (Arrow Right).svg';
import leftArrowIcon from '../../images/icons/Chevron (Arrow Left).svg';
import styles from '../../pages/PhonePage/phonePage.module.scss';
import { ProductProps } from '../../interfaces/product-item';
import products from '../../common/products/products.json';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { PhoneCharacteristics } from '../PhoneCharacteristics/PhoneCharacteristics';
import { PhonesAbout } from '../PhonesAbout/PhonesAbout';
import { PhonesTechSpecs } from '../PhonesTechSpecs/PhonesTechSpecs';

const ProductItem: FC<ProductProps> = memo(() => {
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();
  const productTitle = title ? title : undefined;
  const phone = products.find((product) => product.title === productTitle);
  const [mainImage, setMainImage] = useState<string>(phone ? phone.imgUrl : '');
  const [selectMemory, setSelectMemory] = useState<string>('64 GB');

  useEffect(() => {
    const phone = products.find((product) => product.title === productTitle);
    if (phone) {
      setMainImage(phone.imgUrl);
    }
  }, [productTitle]);

  const goToHomePage = () => {
    navigate('/', { replace: true });
  };

  const backToPhonesPage = () => {
    navigate(-1);
  };

  if (!phone) {
    return <NotFoundPage statusText='404' message='This page is not defined' />;
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const getTitle = (selectedMemory: string) => {
    switch (selectedMemory) {
      case '64 GB':
        return `${phone.title?.replaceAll('-', ' ')} 64GB`;
      case '128 GB':
        return `${phone.title?.replaceAll('-', ' ')} 128GB`;
      case '256 GB':
        return `${phone.title?.replaceAll('-', ' ')} 256GB`;
      default:
        return phone.title?.replaceAll('-', ' ');
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
        <h4 className={styles.phone__phonesTitle}>Phones</h4>
        <img
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={styles.arrowRight__icon}
        />
        <p className={styles.phoneModel__capture}>{getTitle(selectMemory)}</p>
      </div>
      <div className={styles.backButton__item}>
        <img src={leftArrowIcon} alt='arrowLeft Icon' />
        <button onClick={backToPhonesPage} className={styles.phoneBack__button}>
          Back to Phones
        </button>
      </div>
      <h2 className={styles.phoneModel__title}>{getTitle(selectMemory)}</h2>
      <>
        <div className={styles.product__gallery}>
          <div className={styles.phonesAbout__block}>
            <div className={styles.phone__images}>
              <div className={styles.images__wrapper}>
                <img
                  src={phone.firstImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.firstImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.firstImage)}
                />
                <img
                  src={phone.secondImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.secondImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.secondImage)}
                />
                <img
                  src={phone.thirdImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.thirdImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.thirdImage)}
                />
                <img
                  src={phone.fourImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.fourImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.fourImage)}
                />
              </div>
              <img
                src={mainImage}
                alt='product'
                className={styles.phone__img}
              />
            </div>
            <div className={styles.product__block}>
              <PhoneCharacteristics setSelectMemory={setSelectMemory} />
              <PhonesTechSpecs product={phone} selectMemory={selectMemory} />
            </div>
          </div>
          <PhonesAbout />
        </div>
      </>
    </>
  );
});

export { ProductItem };
