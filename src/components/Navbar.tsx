import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  currentLanguage: string;
  languages: Language[];
  onLanguageChange: (code: string) => void;
}

export default function Navbar({ currentLanguage, languages, onLanguageChange }: NavbarProps) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold">ESSENCE</h1>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              >
                <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                <ChevronDown size={16} />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          onLanguageChange(language.code);
                          setIsLanguageMenuOpen(false);
                        }}
                      >
                        {language.flag} {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>

            <button className="text-gray-700 hover:text-gray-900">
              <Heart size={20} />
            </button>

            <button className="text-gray-700 hover:text-gray-900">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}