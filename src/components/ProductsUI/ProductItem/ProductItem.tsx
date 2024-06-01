import { FC, memo, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import homeIcon from '../../../images/icons/Home.svg';
import rightArrowIcon from '../../../images/icons/Chevron (Arrow Right).svg';
import leftArrowIcon from '../../../images/icons/Chevron (Arrow Left).svg';
import styles from '../../../pages/PhonePage/PhonePage.module.scss';
import { ProductProps } from '../../../interfaces/product-item';
import products from '../../../common/products/products.json';
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage';
import { PhoneCharacteristics } from '../PhoneCharacteristics/PhoneCharacteristics';
import { PhonesAbout } from '../PhonesAbout/PhonesAbout';
import { PhonesTechSpecs } from '../PhonesTechSpecs/PhonesTechSpecs';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../LanguageSwitcher/translation';

export const ProductItem: FC<ProductProps> = memo(() => {
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();
  const { search } = useLocation();
  const colorParams = new URLSearchParams(search);
  const initialColor = colorParams.get('color') || 'Gold';
  const [selectColor, setSelectColor] = useState<string>(initialColor);
  const [selectMemory, setSelectMemory] = useState<string>('64 GB');

  const productTitle = title ? title : undefined;
  const phone = products.find((product) => product.title === productTitle);
  const { currentLanguage } = useLanguage();

  const goToHomePage = () => {
    navigate('/', { replace: true });
  };

  const backToPhonesPage = () => {
    navigate(-1);
  };

  const handleColorChange = (color: string) => {
    setSelectColor(color);
    const newTitle = replaceColorInTitle(productTitle!, color);
    navigate(`/phones/phone/${newTitle}`, { replace: true });
  };

  const replaceColorInTitle = (title: string, color: string) => {
    const parts = title.split('-');
    if (parts.length > 1) {
      parts[parts.length - 1] = color;
    }
    return parts.join('-');
  };
  const getTitle = (selectedMemory: string) => {
    if (phone) {
      switch (selectedMemory) {
        case '64 GB':
          return `${phone.name} 64GB`;
        case '128 GB':
          return `${phone.name} 128GB`;
        case '256 GB':
          return `${phone.name} 256GB`;
        default:
          return phone.name;
      }
    }
    return '';
  };

  useEffect(() => {
    if (phone) {
      setMainImage(phone.imgUrl);
    }
  }, [phone, productTitle]);

  const [mainImage, setMainImage] = useState<string>(phone ? phone.imgUrl : '');

  if (!phone) {
    return <NotFoundPage statusText='404' message='This page is not defined' />;
  }

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
        <h4 className={styles.phone__phonesTitle}>
          {translations[currentLanguage].pagesTitle.mobilePhones}
        </h4>
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
          {translations[currentLanguage].backTitle}
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
                  onClick={() => setMainImage(phone.firstImage)}
                />
                <img
                  src={phone.secondImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.secondImage ? styles.active : ''
                  }`}
                  onClick={() => setMainImage(phone.secondImage)}
                />
                <img
                  src={phone.thirdImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.thirdImage ? styles.active : ''
                  }`}
                  onClick={() => setMainImage(phone.thirdImage)}
                />
                <img
                  src={phone.fourImage}
                  alt='iphone'
                  className={`${styles.phoneSmall__image} ${
                    mainImage === phone.fourImage ? styles.active : ''
                  }`}
                  onClick={() => setMainImage(phone.fourImage)}
                />
              </div>
              <img
                src={mainImage}
                alt='product'
                className={styles.phone__img}
              />
            </div>
            <div className={styles.product__block}>
              <PhoneCharacteristics
                selectColor={selectColor}
                handleColorChange={handleColorChange}
                setSelectMemory={setSelectMemory}
              />
              <PhonesTechSpecs product={phone} selectMemory={selectMemory} />
            </div>
          </div>
          <PhonesAbout />
        </div>
      </>
    </>
  );
});
