import { BlogPost, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Bosh sahifa', href: '#home' },
  { label: 'Maqolalar', href: '#blog' },
  { label: 'Loyiha', href: '#projects' },
  { label: 'Aloqa', href: '#contact' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Boston Dynamics va Atlas: Gumanoidlarning kelajagi",
    excerpt: "Gidravlikadan to'liq elektr tizimiga o'tish: Atlas roboti qanday qilib chaqqonroq va aqlliroq bo'ldi?",
    date: "14 Mart, 2026",
    category: "Gumanoidlar",
    readTime: "6 daqiqa",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Arduino vs Raspberry Pi: Robot uchun miya tanlaymiz",
    excerpt: "Mikrokontroller yoki mikrokompyuter? Loyihangiz uchun eng mos boshqaruv tizimini tanlash bo'yicha qo'llanma.",
    date: "10 Mart, 2026",
    category: "Elektronika",
    readTime: "8 daqiqa",
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "ROS 2 (Robot Operating System) ga kirish",
    excerpt: "Zamonaviy robotlarning dasturiy ta'minoti. Node, Topic va Service tushunchalarini o'rganamiz.",
    date: "5 Mart, 2026",
    category: "ROS",
    readTime: "12 daqiqa",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Dronlar qishloq xo'jaligida: Innovatsion yechimlar",
    excerpt: "Multispektral kameralar va avtonom parvozlar orqali hosildorlikni qanday oshirish mumkin?",
    date: "28 Fevral, 2026",
    category: "Dronlar",
    readTime: "5 daqiqa",
    imageUrl: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Computer Vision: Robotlar qanday ko'radi?",
    excerpt: "OpenCV va YOLO algoritmlari yordamida obyektlarni aniqlash va masofani o'lchash texnologiyalari.",
    date: "20 Fevral, 2026",
    category: "AI & Vision",
    readTime: "9 daqiqa",
    imageUrl: "https://images.unsplash.com/photo-1535378437327-b7102b656335?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Sanoat robotlari va avtomatlashtirish",
    excerpt: "Kuka, Fanuc va ABB robotlarining ishlab chiqarishdagi o'rni va kelajakdagi o'zgarishlar.",
    date: "15 Fevral, 2026",
    category: "Sanoat",
    readTime: "7 daqiqa",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];