import { FC, Fragment } from 'react';
import styles from './footer.module.scss';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';
import { ROUTES } from '../../constants/routes/routes';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FooterContainer, FooterStyledWrapper } from './styled/footer';
import { Apple } from 'grommet-icons';

export const Footer: FC = () => {
  const toUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Fragment>
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
        </FooterStyledWrapper>
      </FooterContainer>
      {/* <div className={styles.author__copyrightBlock}>
        Developed by Roman Chaban &copy;
      </div> */}
    </Fragment>
  );
};
