import { FC } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import styles from './footer.module.scss';
import styled from 'styled-components';
import { Apple } from '@mui/icons-material';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';
import { ROUTES } from '../../common/routes/routes';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background: #d2d3d2;
`;

const FooterStyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Footer: FC = () => {
  const toUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <FooterContainer>
      <FooterStyledWrapper>
        <>
          <button className={styles.logo__buttonUp} onClick={toUppPage}>
            <CustomLink to={ROUTES.HOME}>
              <h3 className={styles.logo__capture}>
                <Apple
                  style={{ fontSize: '30' }}
                  className={styles.footer__appleLogo}
                />
                iMarketplace
              </h3>
            </CustomLink>
          </button>
        </>
        <>
          <ul className={styles.footer__menu}>
            <li className={styles.list__item}>
              <a
                href='https://github.com/Chaban29'
                target='_blank'
                rel='noreferrer'
                className={styles.list__link}
              >
                <GitHubIcon />
                Github
              </a>
            </li>
            <li className={styles.list__item}>
              <a
                href='https://t.me/romanchaban'
                target='_blank'
                className={styles.list__link}
              >
                <TelegramIcon />
                Telegram
              </a>
            </li>
            <li className={styles.list__item}>
              <a
                href='https://www.linkedin.com/in/romanchaban1001/'
                target='_blank'
                rel='noreferrer'
                className={styles.list__link}
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
          </ul>
        </>
        <div className={styles.footer__buttons}>
          <button className={styles.footer__button} onClick={toUppPage}>
            Back to top
          </button>
          <button className={styles.arrow__top} onClick={toUppPage}>
            <NavigationIcon className={styles.arrow__circle} />
          </button>
        </div>
      </FooterStyledWrapper>
    </FooterContainer>
  );
};

export { Footer };
