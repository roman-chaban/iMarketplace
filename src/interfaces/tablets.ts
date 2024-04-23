export interface Tablet {
  id?: string;
  name?: string;
  category?: string;
  namespaceId?: string;
  priceRegular?: string | number;
  priceDiscount: string;
  capacity?: string;
  memory?: number;
  screen: string;
  ram?: string;
  colorsAvailable?: string[];
  capacityAvailable?: string[];
  description?: { title: string; text: string }[];
  images: string[];
  cell?: string[];
}

export type Tablets = Partial<Tablet>;
