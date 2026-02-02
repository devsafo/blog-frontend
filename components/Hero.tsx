import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-acid/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-surface text-sm font-medium text-gray-600 dark:text-gray-300">
                 Salom, men Robototexnika Muhandisiman
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white leading-tight">
                Robotlar. <br/>
                Tizimlar. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-green-400">Kelajak.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Avtonom robotlar, dronlar texnologiyasi va sun'iy intellekt integratsiyasi bo'yicha shaxsiy tajribalar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                    href="#blog"
                    className="w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
                >
                    Maqolalarni o'qish
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                    href="https://t.me/yourchannel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-acid text-black rounded-xl font-bold text-lg hover:bg-acid-hover transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,230,58,0.3)] hover:shadow-[0_0_30px_rgba(212,230,58,0.5)]"
                >
                    <Send className="w-5 h-5 -ml-1 transform -rotate-12" />
                    Telegram kanalim
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;