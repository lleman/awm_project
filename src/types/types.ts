export interface ActivityProps {
  title: string;
  photo: any;
  date: string;
  new: boolean;
  business: boolean;
  duration: string;
  rating: string;
  review: number;
  price: string;
  places: any;
  isFavorite: boolean;
}

export interface TextProps {
  description?: string;
  font?: string;
  size?: number;
  color?: any;
  style?: object;
}

export interface DetailsProps {
  fullName: string;
  rating: string;
  reviews: number;
  followers: number;
  following: number;
  bio: string;
  mail: string;
}
