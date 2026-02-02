import React from 'react';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowUpRight, ArrowRight, SearchX } from 'lucide-react';

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-[#151515] min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">So'nggi Maqolalar</h2>
                <div className="h-1 w-20 bg-acid rounded-full"></div>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-acid dark:hover:text-acid font-medium transition-colors mt-4 md:mt-0">
                Barchasini ko'rish <ArrowUpRight size={18} />
            </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                  key={post.id} 
                  className="group bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-acid/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-acid text-xs font-bold uppercase tracking-wider rounded-md">
                          {post.category}
                      </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                          <Calendar size={14} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                          <Clock size={14} /> {post.readTime}
                      </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-acid transition-colors line-clamp-2">
                    <a href="#">{post.title}</a>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                      <a href="#" className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white hover:text-acid dark:hover:text-acid transition-colors">
                          O'qishni davom ettirish
                          <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-100 dark:bg-dark-surface p-6 rounded-full mb-4">
              <SearchX size={48} className="text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Hech narsa topilmadi
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              Afsuski, so'rovingiz bo'yicha hech qanday maqola topilmadi. Kalit so'zlarni o'zgartirib ko'ring.
            </p>
          </div>
        )}

        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors">
                Barcha maqolalar
            </a>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;