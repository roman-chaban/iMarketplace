export interface IHotPricesProps {
  pricesTitle?: string;
}

export interface ICatalogItemProps extends IHotPricesProps {
  phoneId?: number | string;
  imgUrl?: string;
  title?: string;
  price?: string;
  displaySize?: string;
  discount?: string;
  memory?: string;
  capacity?: string;
}
