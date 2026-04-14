export interface Project {
  id: string;
  name: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Interior' | 'Renovation';
  image: string;
  description: string;
  areaSize: string;
  year: string;
  materials: string[];
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
