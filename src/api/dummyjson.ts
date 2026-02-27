import { Product, Category, DummyProductRaw } from '../types';

export const FOOD_CATEGORIES: Category[] = [
  {
    id: 'Smartphones',
    name: 'Smartphone',
    image: require('../../assets/categories/smartphones.png'),
  },
  {
    id: 'Laptops',
    name: 'Laptops',
    image: require('../../assets/categories/laptops.png'),
  },
  {
    id: 'Fragrances',
    name: 'Fragrances',
    image: require('../../assets/categories/fragrances.png'),
  },
  {
    id: 'Beauty',
    name: 'Beauty',
    image: require('../../assets/categories/skincare.png'),
  },
  {
    id: 'Groceries',
    name: 'Groceries',
    image: require('../../assets/categories/groceries.png'),
  },
  {
    id: 'Furniture',
    name: 'Furniture',
    image: require('../../assets/categories/furniture.png'),
  },
  {
    id: 'Vehicle',
    name: 'Vehicle',
    image: require('../../assets/categories/automotive.png'),
  },
  {
    id: 'home-decoration',
    name: 'Home Decoration',
    image: require('../../assets/categories/lighting.png'),
  },
];

export const searchMap: Record<string, string[]> = {
  smartphones: ['phone', 'mobile', 'iphone', 'android, samsung, nokia'],
  laptops: ['laptop', 'notebook', 'macbook'],
  fragrances: ['perfume', 'cologne', 'deo'],
  skincare: ['cream', 'serum', 'face wash'],
  groceries: ['milk', 'rice', 'vegetables'],
  furniture: ['sofa', 'bed', 'chair'],
  lighting: ['lamp', 'bulb', 'chandelier'],
  automotive: ['car', 'bike', 'helmet'],
};

const BASE_URL = 'https://dummyjson.com';

async function fetchJson(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  return response.json();
}

export async function getProductsByCategory(
  category: string,
  page = 1,
  pageSize = 20,
): Promise<Product[]> {
  const skip = (page - 1) * pageSize;

  const url = `${BASE_URL}/products/category/${category}?limit=${pageSize}&skip=${skip}`;

  const data = await fetchJson(url);

  const cleaned: Product[] = data.products.map((item: DummyProductRaw) => ({
    id: item.id.toString(),
    name: item.title,
    brand: item.brand,
    image: item.thumbnail,
    price: item.price,
    rating: item.rating,
    description: item.description,
    reviews: item.reviews?.length || 0,
  }));

  return cleaned;
}
