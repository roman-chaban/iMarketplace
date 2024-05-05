export interface IMenuLinks {
  linkId: number;
  title: string;
  to: string;
}

export type TypeMenuLinks = IMenuLinks[];

export const MENU_LINKS: TypeMenuLinks = [
  {
    linkId: 1,
    title: 'HOME',
    to: '/',
  },
  {
    linkId: 2,
    title: 'PHONES',
    to: 'phones',
  },
  {
    linkId: 3,
    title: 'TABLETS',
    to: 'tablets',
  },
  {
    linkId: 4,
    title: 'ACCESSORIES',
    to: 'accessories',
  },
  {
    linkId: 5,
    title: 'FAVORITES',
    to: 'favorites',
  },
  {
    linkId: 6,
    title: 'CART',
    to: 'cart',
  },
];
