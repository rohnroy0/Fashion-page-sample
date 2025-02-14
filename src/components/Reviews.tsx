import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';
import { translations } from '../translations';

interface ReviewsProps {
  product: Product;
  currentLanguage: string;
}

export default function Reviews({ product, currentLanguage }: ReviewsProps) {
  const t = translations[currentLanguage as keyof typeof translations].product;

  const ratingDistribution = Array.from({ length: 5 }, (_, i) => {
    const rating = 5 - i;
    const count = product.reviews.filter((review) => Math.floor(review.rating) === rating).length;
    const percentage = (count / product.reviews.length) * 100;
    return { rating, count, percentage };
  });

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">
        {t.reviews} ({product.reviewCount})
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold">{product.rating}</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center space-x-2">
                <div className="w-12 text-sm text-gray-600">
                  {rating} {t.rating}
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-12 text-sm text-gray-600">{count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {review.author} • {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}