import React from 'react';
import { Github, Twitter, Linkedin, Send } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
                <a href="#" className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 inline-block uppercase">
                V.<span className="text-acid">YULBARSOV</span>
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    Robototexnika, AI va elektronika olamiga sayohat. Muhandislik yechimlari va innovatsiyalarni birga o'rganamiz.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-acid hover:text-black dark:hover:bg-acid dark:hover:text-black transition-all">
                        <Github size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-acid hover:text-black dark:hover:bg-acid dark:hover:text-black transition-all">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-acid hover:text-black dark:hover:bg-acid dark:hover:text-black transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-acid hover:text-black dark:hover:bg-acid dark:hover:text-black transition-all">
                        <Send size={20} />
                    </a>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6">Sahifalar</h4>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    {NAV_LINKS.map(link => (
                        <li key={link.label}>
                            <a href={link.href} className="hover:text-acid transition-colors">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6">Kategoriyalar</h4>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="#" className="hover:text-acid transition-colors">Robototexnika</a></li>
                    <li><a href="#" className="hover:text-acid transition-colors">Elektronika</a></li>
                    <li><a href="#" className="hover:text-acid transition-colors">Dronlar</a></li>
                    <li><a href="#" className="hover:text-acid transition-colors">Computer Vision</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6">Aloqa</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Savollaringiz bormi? Men bilan bog'laning.</p>
                <a href="mailto:contact@yulbarsov.uz" className="text-acid font-medium hover:underline">contact@yulbarsov.uz</a>
            </div>
        </div>

        <div className="border-t border-gray-100 dark:border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-left">
                © 2026. Valijon Yulbarsov. Barcha huquqlar himoyalangan.
            </p>
            <p className="text-gray-400 dark:text-gray-600 text-xs flex items-center gap-1">
                Made with <span className="text-red-500">♥</span> in Uzbekistan
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;