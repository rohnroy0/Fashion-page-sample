import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { Product, Color } from '../types';
import { translations } from '../translations';

interface ProductInfoProps {
  product: Product;
  currentLanguage: string;
  selectedColor: Color;
  onColorChange: (color: Color) => void;
}

export default function ProductInfo({ 
  product, 
  currentLanguage,
  selectedColor,
  onColorChange 
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const t = translations[currentLanguage as keyof typeof translations].product;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-500">{product.brand}</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {product.rating} ({product.reviewCount} {t.reviews})
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="text-lg text-gray-500 line-through">
            ${product.originalPrice}
          </span>
          <span className="text-sm text-green-600">
            {product.discount}% OFF
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{t.color}</h3>
          <div className="mt-2 flex space-x-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => onColorChange(color)}
                className={`h-8 w-8 rounded-full border-2 ${
                  selectedColor.name === color.name
                    ? 'border-black'
                    : 'border-gray-200'
                }`}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900">{t.size}</h3>
          <div className="mt-2 grid grid-cols-6 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.name}
                onClick={() => setSelectedSize(size)}
                disabled={!size.available}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  !size.available
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : selectedSize.name === size.name
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50'
                }`}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button className="w-full bg-black text-white py-3 px-8 rounded-md hover:bg-gray-900">
          {t.addToCart}
        </button>
        <button className="w-full border border-gray-300 py-3 px-8 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-50">
          <Heart size={20} />
          <span>{t.addToWishlist}</span>
        </button>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900">{t.description}</h3>
        <div className="mt-2 text-sm text-gray-600">
          <p>
            {showFullDescription
              ? product.description
              : `${product.description.slice(0, 150)}...`}
          </p>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="mt-2 text-black font-medium hover:underline"
          >
            {showFullDescription ? t.showLess : t.showMore}
          </button>
        </div>
      </div>
    </div>
  );
}