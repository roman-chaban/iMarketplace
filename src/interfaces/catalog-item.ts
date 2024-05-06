import { Products } from '../redux/interfaces/products';

export interface IHotPricesProps {
  pricesTitle?: string;
}

export interface ICatalogItemProps extends IHotPricesProps {
  phoneId?: number;
  imgUrl?: string;
  title?: string;
  price?: string;
  displaySize?: string;
  name?: string;
  discount?: string;
  memory?: string;
  capacity?: string;
  products?: Products;
  onDeleteFromFavorites?: () => void;
  onAddToFavorites?: () => void;
  tabletId?: string;
  onAddToCart?: () => void;
  onDeleteFromCart?: () => void;
}
