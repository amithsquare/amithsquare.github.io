import { Project, Service, Testimonial, BlogPost } from './types';
import akash_apartment from '../src/assets/Akash_apartment.jpg'
import EXL from '../src/assets/EXL.jpg'
import Anaisha_Girls_hostel from '../src/assets/Anaisha_Girls_hostel.png'

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Akash Appartment',
    location: 'DLF Phase 3, Gurugram',
    type: 'Residential',
    image: akash_apartment,
    description: 'A luxurious 5-bedroom villa that blends modern minimalism with traditional Indian elements. The design focuses on open spaces and natural light.',
    areaSize: '4,500 sq. ft.',
    year: '2022',
    materials: ['Italian Marble', 'Teak Wood', 'Brass Accents', 'Glass'],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '2',
    name: 'IT Comapany',
    location: 'Noida, Delhi NCR',
    type: 'Corporate Interior',
    image: EXL,
    description: 'A state-of-the-art office space designed for a tech giant. The project emphasizes ergonomic design and collaborative work environments.',
    areaSize: '12,000 sq. ft.',
    year: '2025',
    materials: ['Exposed Concrete', 'Steel', 'Acoustic Panels', 'LED Lighting'],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '3',
    name: 'Minimalist Loft',
    location: 'Greater Kailash, New Delhi',
    type: 'Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    description: 'An interior design project for a young couple. The loft features a monochrome palette with gold accents to create a premium feel.',
    areaSize: '1,800 sq. ft.',
    year: '2024',
    materials: ['Polished Concrete', 'Black Metal', 'Velvet', 'Gold Leaf'],
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '4',
    name: 'Anaisha Girls Hostel',
    location: 'Gwalior',
    type: 'Renovation',
    image: Anaisha_Girls_hostel,
    description: 'Restoration of a colonial-era bungalow. We preserved the original architecture while integrating modern amenities and structural reinforcements.',
    areaSize: '1,500 sq. ft.',
    year: '2021',
    materials: ['Lime Plaster', 'Reclaimed Wood', 'Terracotta', 'Wrought Iron'],
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Architectural Design',
    description: 'Innovative planning and execution for residential and commercial spaces that blend form and function.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Interior Design',
    description: 'Bespoke interior solutions that reflect your personality and optimize every inch of your space.',
    icon: 'Layout',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Turnkey Projects',
    description: 'End-to-end design and build solutions, taking the stress out of your construction journey.',
    icon: 'Key',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: '3D Visualization',
    description: 'Realistic 3D renderings and walkthroughs to help you visualize your dream space before it is built.',
    icon: 'Box',
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Renovation & Remodeling',
    description: 'Modern transformation of existing spaces, giving them a new lease on life with premium finishes.',
    icon: 'RefreshCw',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Khanna',
    role: 'Homeowner',
    content: 'A Square Studio transformed our vision into a reality. Their attention to detail and commitment to quality is unmatched in New Delhi.'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'CEO, TechNova',
    content: 'The workspace designed by A Square Studio has significantly improved our team productivity. It is modern, functional, and beautiful.'
  },
  {
    id: '3',
    name: 'Amitabh Singh',
    role: 'Real Estate Developer',
    content: 'Working with them on our luxury apartment project was a breeze. They understand the premium market perfectly.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Modern Architecture Trends 2024',
    excerpt: 'Discover the latest trends in sustainable and minimalist architectural design for the coming year.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Small Space Design Ideas',
    excerpt: 'How to make the most of your urban apartment with clever interior design and space optimization.',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Luxury Interior Tips',
    excerpt: 'Simple ways to add a touch of luxury to your home without a complete renovation.',
    date: 'January 10, 2024',
    image: 'https://images.unsplash.com/photo-1616486341351-79b52722e780?auto=format&fit=crop&q=80&w=800'
  }
];

export const FAQS = [
  {
    question: 'What is your design process?',
    answer: 'Our process involves four main stages: Discovery & Consultation, Conceptual Design, Detailed Planning & Documentation, and Execution & Handover.'
  },
  {
    question: 'How long does a typical residential project take?',
    answer: 'A standard residential interior project takes 3-5 months, while full architectural design and construction can take 12-18 months depending on the scale.'
  },
  {
    question: 'Do you provide turnkey services?',
    answer: 'Yes, we offer end-to-end turnkey solutions where we manage everything from design to procurement and construction.'
  }
];
