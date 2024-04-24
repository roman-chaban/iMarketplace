import { FC, memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import homeIcon from '../../images/icons/Home.svg';
import rightArrowIcon from '../../images/icons/Chevron (Arrow Right).svg';
import leftArrowIcon from '../../images/icons/Chevron (Arrow Left).svg';
import cl from '../../pages/PhonePage/phonePage.module.scss';
import { ProductProps } from '../../interfaces/product-item';
import products from '../../common/products/products.json';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { PhoneCharacteristics } from '../PhoneCharacteristics/PhoneCharacteristics';
import { PhonesAbout } from '../PhonesAbout/PhonesAbout';
import { PhonesTechSpecs } from '../PhonesTechSpecs/PhonesTechSpecs';

const ProductItem: FC<ProductProps> = memo(() => {
  const navigate = useNavigate();
  const { phoneId } = useParams<{ phoneId: string }>();
  const parsedPhoneId = phoneId ? parseInt(phoneId) : undefined;
  const phone = products.find((product) => product.phoneId === parsedPhoneId);
  const [mainImage, setMainImage] = useState<string>(phone ? phone.imgUrl : '');
  const [selectMemory, setSelectMemory] = useState<string>('64 GB');

  useEffect(() => {
    const phone = products.find((product) => product.phoneId === parsedPhoneId);
    if (phone) {
      setMainImage(phone.imgUrl);
    }
  }, [parsedPhoneId]);

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
        return `${phone.title} 64GB`;
      case '128 GB':
        return `${phone.title} 128GB`;
      case '256 GB':
        return `${phone.title} 256GB`;
      default:
        return phone.title;
    }
  };

  return (
    <>
      <div className={cl.phone__navigationItem}>
        <img
          onClick={goToHomePage}
          src={homeIcon}
          alt='Home Icon'
          style={{ cursor: 'pointer' }}
        />
        <img
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={cl.arrowRight__icon}
        />
        <h4 className={cl.phone__phonesTitle}>Phones</h4>
        <img
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={cl.arrowRight__icon}
        />
        <p className={cl.phoneModel__capture}>{getTitle(selectMemory)}</p>
      </div>
      <div className={cl.backButton__item}>
        <img src={leftArrowIcon} alt='arrowLeft Icon' />
        <button onClick={backToPhonesPage} className={cl.phoneBack__button}>
          Back to Phones
        </button>
      </div>
      <h2 className={cl.phoneModel__title}>{getTitle(selectMemory)}</h2>
      <>
        <div className={cl.product__gallery}>
          <div className={cl.phonesAbout__block}>
            <div className={cl.phone__images}>
              <div className={cl.images__wrapper}>
                <img
                  src={phone.firstImage}
                  alt='iphone'
                  className={`${cl.phoneSmall__image} ${
                    mainImage === phone.firstImage ? cl.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.firstImage)}
                />
                <img
                  src={phone.secondImage}
                  alt='iphone'
                  className={`${cl.phoneSmall__image} ${
                    mainImage === phone.secondImage ? cl.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.secondImage)}
                />
                <img
                  src={phone.thirdImage}
                  alt='iphone'
                  className={`${cl.phoneSmall__image} ${
                    mainImage === phone.thirdImage ? cl.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.thirdImage)}
                />
                <img
                  src={phone.fourImage}
                  alt='iphone'
                  className={`${cl.phoneSmall__image} ${
                    mainImage === phone.fourImage ? cl.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(phone.fourImage)}
                />
              </div>
              <img src={mainImage} alt='product' className={cl.phone__img} />
            </div>
            <div className={cl.product__block}>
              <PhoneCharacteristics setSelectMemory={setSelectMemory} />
              <PhonesTechSpecs product={phone} />
            </div>
          </div>
          <PhonesAbout />
        </div>
      </>
    </>
  );
});

export { ProductItem };
