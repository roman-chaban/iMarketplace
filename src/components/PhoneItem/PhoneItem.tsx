import { NavLink } from 'react-router-dom';
import cl from '../../pages/PhonesPage/phones.module.scss';
import homeIcon from '../../images/icons/Home.svg';
import arrowRightIcon from '../../images/icons/Chevron (Arrow Right).svg';
import { PhoneItemProps } from '../../interfaces/phone';
import { FC } from 'react';

const PhoneItem: FC<PhoneItemProps> = ({
  smallTitle,
  mainTitle,
  phoneTitle,
  back,
}: PhoneItemProps) => {
  return (
    <div className={cl.phone__item}>
      <div className={cl.phones__navigation}>
        <NavLink
          to='/'
          style={{ color: '#313237' }}
          className={cl.phones__toHome}
        >
          <img src={homeIcon} alt='home icon' />
        </NavLink>
        <img src={arrowRightIcon} alt='arrow-right-icon' />
        <h5 className={cl.phones__title}>{smallTitle}</h5>
        <img src={arrowRightIcon} alt='arrow-right-icon' />
        <h5 className={cl.phones__title}>{phoneTitle}</h5>
      </div>
      <NavLink
        to='/phones'
        style={{ color: '#313237' }}
        className={cl.phones__toPhones}
      >
        <img
          className={cl.rotateIcon}
          src={arrowRightIcon}
          alt='arrow-right-icon'
        />
        <h5 className={cl.phones__title}>{back}</h5>
      </NavLink>
      <div className={cl.phones__titles}>
        <h3 className={cl.phone__mainTitle}>{mainTitle}</h3>
      </div>
    </div>
  );
};

export { PhoneItem };
