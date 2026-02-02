import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';
import { BLOG_POSTS } from './constants';

const App: React.FC = () => {
  // Theme state initialization
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark mode for developer vibe
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return BLOG_POSTS;

    return BLOG_POSTS.filter((post) => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    // Apply theme class to html element
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 flex flex-col">
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main className="flex-grow">
        <Hero />
        <BlogGrid posts={filteredPosts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;