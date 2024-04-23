export interface Phone {
  phoneId: number;
  imgUrl: string;
  title: string;
  price: string;
  discount: string;
  memory: number;
  capacity: number;
  displaySize: string;
}

export interface PhoneItemProps {
  smallTitle?: string;
  mainTitle?: string;
  models?: string;
  phoneTitle: string;
  back?: string;
}
