interface IRoutesProps {
  LAYOUT: string;
  HOME: string;
  PHONES: string;
  PHONE: string;
  TABLETS: string;
  ACCESSORIES: string;
  ERROR: string;
  FAVORITES: string;
  CART: string;
  AUTHORIZATION: string;
}

export const ROUTES: IRoutesProps = {
  LAYOUT: '/',
  HOME: '/',
  PHONES: 'phones',
  PHONE: ':productId',
  TABLETS: 'tablets',
  ACCESSORIES: 'accessories',
  FAVORITES: 'favorites',
  CART: 'cart',
  AUTHORIZATION: 'authorization',
  ERROR: '*',
};
