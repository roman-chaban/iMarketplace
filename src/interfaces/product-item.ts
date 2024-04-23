
export interface ProductItemProps {
  phoneId?: number;
  imgUrl?: string;
  title?: string;
  price?: string;
  discount?: string;
  memory?: string;
  capacity?: number | string;
  displaySize?: string;
  firstImage?: string;
  secondImage?: string;
  thirdImage?: string;
  fourImage?: string;
}

export interface ProductProps {
  product: ProductItemProps;
}
