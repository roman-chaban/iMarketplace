import { Phone } from '../../interfaces/phones';

export enum Sort {
  alphabet = 'Alphabetically',
  newest = 'Newest',
  cheapest = 'Cheapest',
}
export function getSortedProducts(products: Phone[], sortBy: Sort) {
  const preparedProducts = [...products];

  switch (sortBy) {
    case Sort.alphabet:
      preparedProducts.sort((a, b) =>
        a.title && b.title ? a.title.localeCompare(b.title) : 0
      );
      break;

    case Sort.newest:
      preparedProducts.sort((a, b) => {
        const aDiscount =
          typeof a.discount === 'string' ? parseInt(a.discount || '0') : 0;
        const bDiscount =
          typeof b.discount === 'string' ? parseInt(b.discount || '0') : 0;
        return bDiscount - aDiscount;
      });
      break;

    case Sort.cheapest:
      preparedProducts.sort((a, b) => {
        const aPrice = typeof a.price === 'number' ? a.price : 0;
        const bPrice = typeof b.price === 'number' ? b.price : 0;
        return aPrice - bPrice;
      });
      break;
    default:
      break;
  }

  return preparedProducts;
}
