import { FC, memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import homeIcon from '../../images/icons/Home.svg';
import rightArrowIcon from '../../images/icons/Chevron (Arrow Right).svg';
import leftArrowIcon from '../../images/icons/Chevron (Arrow Left).svg';
import cl from '../../pages/PhonePage/phonePage.module.scss';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { PhoneCharacteristics } from '../../components/PhoneCharacteristics/PhoneCharacteristics';
import { PhonesAbout } from '../../components/PhonesAbout/PhonesAbout';
import { Tablet } from '../../interfaces/tablets';

interface ProductItemProps {
  tablet: Tablet;
}

export const ProductItem: FC<ProductItemProps> = memo(({ tablet }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState<string>(
    tablet ? tablet.images[0] : ''
  );
  const [selectMemory, setSelectMemory] = useState<string>('64 GB');

  useEffect(() => {
    if (tablet) {
      setMainImage(tablet.images[0]);
    }
  }, [tablet]);

  const goToHomePage = () => {
    navigate('/', { replace: true });
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
        <h4 className={cl.phone__phonesTitle}>Tablets</h4>
        <img
          src={rightArrowIcon}
          alt='arrowRight Icon'
          className={cl.arrowRight__icon}
        />
        <p className={cl.phoneModel__capture}>{getTitle(selectMemory)}</p>
      </div>
      <div className={cl.backButton__item}>
        <img src={leftArrowIcon} alt='arrowLeft Icon' />
        <button onClick={backToTabletsPage} className={cl.phoneBack__button}>
          Back to Tablets
        </button>
      </div>
      <h2 className={cl.phoneModel__title}>{getTitle(selectMemory)}</h2>
      <div className={cl.product__gallery}>
        <div className={cl.phonesAbout__block}>
          <div className={cl.phone__images}>
            <div className={cl.images__wrapper}>
              {tablet.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt='tablet'
                  className={`${cl.phoneSmall__image} ${
                    mainImage === image ? cl.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(image)}
                />
              ))}
            </div>
            <img src={mainImage} alt='product' className={cl.phone__img} />
          </div>
          <PhonesAbout />
        </div>
        <PhoneCharacteristics setSelectMemory={setSelectMemory} />
      </div>
    </>
  );
});
