import { FC, useEffect } from 'react';
import styles from './notFound.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Apple } from '@mui/icons-material';
import { NotFoundContainer, StyledErrorPage } from './styled/notFoundStyled';
import { ROUTES } from '../../common/routes/routes';

interface NotFoundProps {
  statusText: string;
  message: string;
}

export const NotFoundPage: FC<NotFoundProps> = () => {
  const location = useLocation();
  const error = location.state?.error;
  const errorStatusCode: string = '404';

  useEffect(() => {
    document.title = `iMarketplace | Not Found ${errorStatusCode}`;
  }, []);

  return (
    <NotFoundContainer>
      <StyledErrorPage>
        <Apple id={styles.rotateIcon} style={{ fontSize: '50px' }} />
        Page is not Defined {errorStatusCode}
        {error?.statusText ?? error?.message}
      </StyledErrorPage>
      <NavLink id={styles.error__link} to={ROUTES.HOME}>
        Click To Home
      </NavLink>
    </NotFoundContainer>
  );
};
