import { FC, useEffect } from 'react';
import styled from 'styled-components';
import cl from './notFound.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Apple } from '@mui/icons-material';

const StyledErrorPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding-top: 150px;
  color: #313237;
  font-size: 32px;
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
        <Apple id={cl.rotateIcon} style={{ fontSize: '50px' }} />
        Page is not Defined {errorStatusCode}
        {error?.statusText ?? error?.message}
      </StyledErrorPage>
      <NavLink id={cl.error__link} to='/'>
        Click To Home
      </NavLink>
    </NotFoundContainer>
  );
};
