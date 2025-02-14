import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface SimilarProductsProps {
  currentLanguage: string;
  products: Product[];
}

export default function SimilarProducts({ currentLanguage, products }: SimilarProductsProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">
        {currentLanguage === 'en' ? 'Similar Products' : 'സമാനമായ ഉൽപ്പന്നങ്ങൾ'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative w-full pb-[125%] overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.images[0]}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                <Heart size={20} />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-lg font-bold">${product.price}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-sm text-green-600">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}