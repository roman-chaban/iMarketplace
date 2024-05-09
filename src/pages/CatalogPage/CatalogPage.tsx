import styles from './catalog.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import homeIcon from '../../images/icons/Home.svg';
import arrowRightIcon from '../../images/icons/Chevron (Arrow Right).svg';
import { MainTitle } from '../../components/UI Components/MainTitle/MainTitle';
import { FC } from 'react';
import { CatalogPageProps } from '../../interfaces/catalog-page';
import { translations } from '../../components/LanguageSwitcher/translation';
import { useLanguage } from '../../hooks/useLanguage';
import { PhonesContainer } from './styled/phonesContainer';

export const CatalogPage: FC<CatalogPageProps> = ({
  smallTitle,
  mainTitle,
  models,
}: CatalogPageProps): JSX.Element => {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const goBack = () => navigate('/', { replace: true });
  return (
    <>
      <PhonesContainer className='Phones'>
        <div className={styles.phones__navigation}>
          <NavLink
            to='/'
            style={{ color: '#313237' }}
            className={styles.phones__toHome}
          >
            <img onClick={goBack} src={homeIcon} alt='home icon' />
          </NavLink>
          <NavLink
            style={{ color: '#313237' }}
            className={styles.phones__title}
            to='/'
            onClick={goBack}
          >
            {translations[currentLanguage].backButtonLabel}
          </NavLink>
          <img src={arrowRightIcon} alt='arrow right icon' />
          <h5 className={styles.phones__title}>{smallTitle}</h5>
        </div>
        <div className={styles.phones__titles}>
          <MainTitle>{mainTitle}</MainTitle>
        </div>
        <div className={styles.models__title}>{models}</div>
      </PhonesContainer>
    </>
  );
};
