import { ImageSourcePropType } from 'react-native';
export type Product = {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  reviews: number;
};

export type Props = {
  product: Product;
};

export type CartProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: any;
};

export type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export type DummyProductRaw = {
  id: number;
  title: string;
  brand: string;
  price: number;
  thumbnail: string;
  images?: string[];
  rating: number;
  description: string;
  reviews: number;
};

export type OrderItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
};

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
  Orders: undefined;
  ProductDetails: undefined;
  Address: undefined;
  Payment: undefined;
  OrderSuccess: {
    orderId: string;
    orderDate: string;
    items: OrderItem[];
    totalAmount: number;
    paymentMethod: string;
  };
};
