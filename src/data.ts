import { Product, Language } from './types';

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'ml',
    name: 'മലയാളം',
    flag: '🇮🇳'
  }
];

export const product: Product = {
  id: '1',
  name: 'Premium Cotton Oversized T-Shirt',
  brand: 'ESSENCE',
  description: 'Experience ultimate comfort with our Premium Cotton Oversized T-Shirt. Crafted from 100% organic cotton, this versatile piece features a relaxed fit and superior breathability. Perfect for everyday wear, it combines style with sustainability.',
  price: 49.99,
  originalPrice: 79.99,
  discount: 38,
  rating: 4.5,
  reviewCount: 128,
  images: [
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1600',
    'https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1600',
    'https://images.unsplash.com/photo-1618354691229-88d47f285158?q=80&w=1600',
    'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=1600'
  ],
  colors: [
    {
      name: 'Cloud White',
      value: '#FFFFFF',
      images: [
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1600',
        'https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1600',
        'https://images.unsplash.com/photo-1618354691229-88d47f285158?q=80&w=1600',
        'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=1600'
      ]
    },
    {
      name: 'Midnight Black',
      value: '#000000',
      images: [
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1600',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1600',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1600',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1600'
      ]
    },
    {
      name: 'Desert Sand',
      value: '#DEB887',
      images: [
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1600',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1600',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1600',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1600'
      ]
    }
  ],
  sizes: [
    { name: 'XS', available: true },
    { name: 'S', available: true },
    { name: 'M', available: true },
    { name: 'L', available: false },
    { name: 'XL', available: true },
    { name: 'XXL', available: true }
  ],
  reviews: [
    {
      id: '1',
      author: 'Sarah M.',
      rating: 5,
      date: '2024-02-15',
      comment: 'Perfect fit and amazing quality! The fabric is so soft and comfortable.'
    },
    {
      id: '2',
      author: 'John D.',
      rating: 4,
      date: '2024-02-10',
      comment: 'Great t-shirt, but runs slightly large. Consider sizing down.'
    },
    {
      id: '3',
      author: 'Emma W.',
      rating: 5,
      date: '2024-02-05',
      comment: 'Love the oversized fit! Will definitely buy more colors.'
    }
  ]
};

export const similarProducts: Product[] = [
  {
    id: '2',
    name: 'Classic Crew Neck T-Shirt',
    brand: 'ESSENCE',
    description: 'A timeless crew neck t-shirt made from premium cotton.',
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.3,
    reviewCount: 95,
    images: [
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1600',
    ],
    colors: [],
    sizes: [],
    reviews: []
  },
  {
    id: '3',
    name: 'Relaxed Fit Cotton Tee',
    brand: 'ESSENCE',
    description: 'Comfortable and casual relaxed fit t-shirt.',
    price: 44.99,
    originalPrice: 64.99,
    discount: 31,
    rating: 4.6,
    reviewCount: 112,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1600',
    ],
    colors: [],
    sizes: [],
    reviews: []
  },
  {
    id: '4',
    name: 'Premium V-Neck T-Shirt',
    brand: 'ESSENCE',
    description: 'Elegant v-neck t-shirt with a modern cut.',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    rating: 4.4,
    reviewCount: 78,
    images: [
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1600',
    ],
    colors: [],
    sizes: [],
    reviews: []
  },
  {
    id: '5',
    name: 'Organic Cotton Basic Tee',
    brand: 'ESSENCE',
    description: 'Sustainable and eco-friendly basic t-shirt.',
    price: 54.99,
    originalPrice: 74.99,
    discount: 27,
    rating: 4.7,
    reviewCount: 143,
    images: [
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1600',
    ],
    colors: [],
    sizes: [],
    reviews: []
  }
];