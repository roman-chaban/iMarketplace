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

const enum StatusCodes {
  NOT__FOUND = '404',
}

export const NotFoundPage: FC<NotFoundProps> = () => {
  const location = useLocation();
  const error = location.state?.error;
  const errorStatusCode = StatusCodes.NOT__FOUND;

  useEffect(() => {
    document.title = `iMarketplace | Not Found ${errorStatusCode}`;
  }, [errorStatusCode]);

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
