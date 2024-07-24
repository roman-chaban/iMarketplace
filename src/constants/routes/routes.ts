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
  PHONEPRODUCT: string;
  TABLETPRODUCT: string;
  ACCESSORPRODUCT: string;
}

export const ROUTES: IRoutesProps = {
  LAYOUT: "/",
  HOME: "/",
  PHONES: "phones",
  PHONE: ":productId",
  TABLETS: "tablets",
  ACCESSORIES: "accessories",
  FAVORITES: "favorites",
  CART: "cart",
  AUTHORIZATION: "authorization",
  PHONEPRODUCT: "/phones/phone/:title",
  TABLETPRODUCT: "/tablets/tablet/:id",
  ACCESSORPRODUCT: "/accessories/accessor/:id",
  ERROR: "*",
};
