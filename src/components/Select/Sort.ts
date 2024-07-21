import { Phone } from "../../interfaces/phones";

export enum Sort {
  ALPHABET = "Alphabetically",
  CHEAPEST = "Cheapest",
  DISCOUNT = "DISCOUNT",
}
export function getSortedProducts(products: Phone[], sortBy: Sort) {
  const preparedProducts = [...products];

  switch (sortBy) {
    case Sort.ALPHABET:
      preparedProducts.sort((a, b) =>
        a.title && b.title ? a.title.localeCompare(b.title) : 0
      );
      break;

    case Sort.DISCOUNT:
      preparedProducts.sort((a, b) => {
        const aDiscount =
          typeof a.discount === "string" ? parseInt(a.discount || "0") : 0;
        const bDiscount =
          typeof b.discount === "string" ? parseInt(b.discount || "0") : 0;
        return bDiscount - aDiscount;
      });
      break;

    case Sort.CHEAPEST:
      preparedProducts.sort((a, b) => {
        const aPrice = typeof a.price === "number" ? a.price : 0;
        const bPrice = typeof b.price === "number" ? b.price : 0;
        return bPrice - aPrice;
      });
      break;
    default:
      break;
  }

  return preparedProducts;
}
