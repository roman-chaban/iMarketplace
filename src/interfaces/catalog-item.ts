import { Products } from "../redux/interfaces/products";

export interface IHotPricesProps {
  pricesTitle?: string;
}

export interface ICatalogItemProps extends IHotPricesProps {
  onDeleteFromFavorites?: () => void;
  onAddToFavorites?: () => void;
  tabletId?: string;
  onAddToCart?: () => void;
  onDeleteFromCart?: () => void;
  product: Products;
}
