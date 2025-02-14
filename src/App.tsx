import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import Reviews from './components/Reviews';
import SimilarProducts from './components/SimilarProducts';
import { product, languages, similarProducts } from './data';
import { Color } from './types';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        currentLanguage={currentLanguage}
        languages={languages}
        onLanguageChange={setCurrentLanguage}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={selectedColor.images} />
          <ProductInfo 
            product={product} 
            currentLanguage={currentLanguage} 
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />
        </div>

        <div className="mt-16">
          <Reviews product={product} currentLanguage={currentLanguage} />
        </div>

        <SimilarProducts products={similarProducts} currentLanguage={currentLanguage} />
      </main>
    </div>
  );
}

export default App;