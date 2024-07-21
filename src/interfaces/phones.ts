export interface Phone {
  memory: string; 
  phoneId: number;
  firstImage: string;
  secondImage: string;
  thirdImage: string;
  fourImage: string;
  imgUrl: string;
  title: string;
  name: string;
  color: string;
  price: string;
  discount: string;
  capacity: number; 
  displaySize: string;
  category: string;
}

export interface PhonesProps {
  products: Phone[];
  loading?: boolean;
}
