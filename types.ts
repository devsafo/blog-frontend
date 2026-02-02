export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}
