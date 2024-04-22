import { FC, ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { ROUTES } from '../../common/routes/routes';
import { useAuth } from '../../hooks/useAuth';

interface RequireAuth {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RequireAuth: FC<RequireAuth> = ({ children }: RequireAuth) => {
  const location = useLocation();
  const { user } = useAuth();

  if (user) {
    return <Navigate to={ROUTES.HOME} state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
};
