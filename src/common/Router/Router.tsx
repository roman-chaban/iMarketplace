import { createHashRouter } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { LayoutPage } from '../../pages/LayoutPage/LayoutPage';
import { HomePage } from '../../pages/HomePage/HomePage';
import { PhonesPage } from '../../pages/PhonesPage/PhonesPage';
import { TabletsPage } from '../../pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from '../../pages/AccessoriesPage/AccessoriesPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { FavoritesPage } from '../../pages/FavoritesPage/FavoritesPage';
import { CartPage } from '../../pages/CartPage/CartPage';
import { PhonePage } from '../../pages/PhonePage/PhonePage';
import { AuthorizationPage } from '../../pages/AuthorizationPage/AuthorizationPage';
import { RequireAuth } from '../../common/hoc/RequireAuth';

export const Router = createHashRouter([
  {
    path: ROUTES.HOME,
    element: <LayoutPage />,
    errorElement: <NotFoundPage statusText={'Not Found'} message={'404'} />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTES.PHONES,
        element: <PhonesPage />,
      },
      {
        path: '/products/:phoneId',
        element: <PhonePage />,
      },
      {
        path: ROUTES.TABLETS,
        element: <TabletsPage />,
      },
      {
        path: ROUTES.ACCESSORIES,
        element: <AccessoriesPage />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <FavoritesPage />,
      },
      {
        path: ROUTES.CART,
        element: <CartPage />,
      },
      {
        path: ROUTES.AUTHORIZATION,
        element: (
          <RequireAuth>
            <AuthorizationPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);
