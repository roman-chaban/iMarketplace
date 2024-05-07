export interface Tablet {
  id?: string;
  name?: string;
  category?: string;
  namespaceId?: string;
  priceRegular?: string | number;
  priceDiscount?: string | number;
  capacity?: string;
  memory?: number | string;
  screen?: string;
  ram?: string;
  colorsAvailable?: string[];
  capacityAvailable?: string[];
  description?: { title: string; text: string[] }[];
  images?: string[];
  cell?: string[];
  onAddToFavorites?: () => void;
  onDeleteFromFavorites?: () => void;
}

export interface ProductItemProps {
  tablet: Tablet;
}

export type Tablets = Partial<Tablet>;
