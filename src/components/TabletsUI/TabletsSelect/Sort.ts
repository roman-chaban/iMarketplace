import { Tablet } from '../../../interfaces/tablets';

export enum Sort {
  alphabet = 'Alphabetically',
  newest = 'Newest',
  cheapest = 'Cheapest',
}
export function getSortedProducts(products: Tablet[], sortBy: Sort) {
  const preparedProducts = [...products];

  switch (sortBy) {
    case Sort.alphabet:
      preparedProducts.sort((a, b) =>
        a.name && b.name ? a.name.localeCompare(b.name) : 0
      );
      break;

    case Sort.newest:
      preparedProducts.sort((a, b) => {
        const aDiscount =
          typeof a.priceDiscount === 'string'
            ? parseInt(a.priceDiscount || '0')
            : 0;
        const bDiscount =
          typeof b.priceDiscount === 'string'
            ? parseInt(b.priceDiscount || '0')
            : 0;
        return bDiscount - aDiscount;
      });
      break;

    case Sort.cheapest:
      preparedProducts.sort((a, b) => {
        const aPrice = typeof a.priceRegular === 'number' ? a.priceRegular : 0;
        const bPrice = typeof b.priceRegular === 'number' ? b.priceRegular : 0;
        return bPrice - aPrice;
      });
      break;
    default:
      break;
  }

  return preparedProducts;
}
