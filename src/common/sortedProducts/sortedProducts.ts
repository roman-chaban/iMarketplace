import { Products } from "../../redux/interfaces/products";

export enum Sort {
  ALPHABET = "Alphabetically",
  DISCOUNT = "Discount",
  CHEAPEST = "Cheapest",
}

export const getSortedProducts = (products: Products[], sortBy: Sort) => {
  const preparedProducts = [...products];

  switch (sortBy) {
    case Sort.ALPHABET:
      preparedProducts.sort((a, b) =>
        a.title && b.title ? a.title.localeCompare(b.title) : 0
      );
      break;
    case Sort.CHEAPEST:
      preparedProducts.sort((a, b) => {
        const aPrice = typeof a.price === "number" ? a.price : 0;
        const bPrice = typeof b.price === "number" ? b.price : 0;
        return aPrice - bPrice;
      });
      break;
    case Sort.DISCOUNT:
      preparedProducts.sort((a, b) => {
        const aDiscount = typeof a.discount === "number" ? a.discount : 0;
        const bDiscount = typeof b.discount === "number" ? b.discount : 0;
        return bDiscount - aDiscount;
      });
      break;
    default:
      break;
  }
  return preparedProducts;
};
