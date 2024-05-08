import { NavLink } from 'react-router-dom';
import styles from '../../pages/PhonesPage/phones.module.scss';
import homeIcon from '../../images/icons/Home.svg';
import arrowRightIcon from '../../images/icons/Chevron (Arrow Right).svg';
import { PhoneItemProps } from '../../../interfaces/phone';
import { FC } from 'react';
import { ROUTES } from '../../../constants/routes/routes';

const PhoneItem: FC<PhoneItemProps> = ({
  smallTitle,
  mainTitle,
  phoneTitle,
  back,
}: PhoneItemProps) => {
  return (
    <div className={styles.phone__item}>
      <div className={styles.phones__navigation}>
        <NavLink
          to={ROUTES.HOME}
          style={{ color: '#313237' }}
          className={styles.phones__toHome}
        >
          <img src={homeIcon} alt='home icon' />
        </NavLink>
        <img src={arrowRightIcon} alt='arrow-right-icon' />
        <h5 className={styles.phones__title}>{smallTitle}</h5>
        <img src={arrowRightIcon} alt='arrow-right-icon' />
        <h5 className={styles.phones__title}>{phoneTitle}</h5>
      </div>
      <NavLink
        to={ROUTES.PHONES}
        style={{ color: '#313237' }}
        className={styles.phones__toPhones}
      >
        <img
          className={styles.rotateIcon}
          src={arrowRightIcon}
          alt='arrow-right-icon'
        />
        <h5 className={styles.phones__title}>{back}</h5>
      </NavLink>
      <div className={styles.phones__titles}>
        <h3 className={styles.phone__mainTitle}>{mainTitle}</h3>
      </div>
    </div>
  );
};

export { PhoneItem };
