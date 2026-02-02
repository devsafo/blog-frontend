import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-dark-bg/80 border-b border-gray-200 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-gray-900 dark:text-white uppercase">
              V.<span className="text-acid">YULBARSOV</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-acid dark:text-gray-300 dark:hover:text-acid font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            
            {/* Search Bar Desktop */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400 group-focus-within:text-acid transition-colors" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Qidirish..."
                className="block w-40 focus:w-60 bg-gray-100 dark:bg-dark-surface border border-transparent focus:border-acid text-gray-900 dark:text-white rounded-full py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-acid/20 transition-all duration-300 placeholder-gray-500"
              />
            </div>

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors focus:outline-none focus:ring-2 focus:ring-acid"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} className="text-acid" /> : <Moon size={20} className="text-gray-600" />}
            </button>
            
            <a href="#blog" className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-acid hover:text-black dark:hover:bg-acid dark:hover:text-black transition-all duration-300 transform hover:scale-105">
              Obuna bo'lish
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors"
            >
              {darkMode ? <Sun size={20} className="text-acid" /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-200 hover:text-acid focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
             {/* Search Bar Mobile */}
             <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Maqolalarni qidirish..."
                className="block w-full bg-gray-100 dark:bg-dark-surface border border-transparent focus:border-acid text-gray-900 dark:text-white rounded-lg py-3 pl-10 pr-3 text-base focus:outline-none focus:ring-2 focus:ring-acid/20 transition-all placeholder-gray-500"
              />
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-surface hover:text-acid dark:hover:text-acid"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
               <a href="#blog" className="block w-full text-center bg-acid text-black px-5 py-3 rounded-md font-bold hover:brightness-90 transition-all">
                Obuna bo'lish
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;