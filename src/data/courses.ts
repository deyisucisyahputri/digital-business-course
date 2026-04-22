import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Digital Marketing Mastery',
    category: 'Digital Marketing',
    price: 499000,
    type: 'paid',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Kuasai strategi SEO, SEM, dan Social Media Ads untuk melejitkan bisnis Anda.',
    instructor: 'Budi Santoso',
    rating: 4.8,
    students: 1200
  },
  {
    id: '2',
    title: 'Menjadi Influencer Profesional',
    category: 'Influencer',
    price: 0,
    type: 'free',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800',
    description: 'Pelajari dasar-dasar personal branding dan cara membangun audiens setia.',
    instructor: 'Sari Wijaya',
    rating: 4.6,
    students: 5400
  },
  {
    id: '3',
    title: 'Panduan Lengkap Menjadi Streamer',
    category: 'Streamer',
    price: 299000,
    type: 'paid',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=800',
    description: 'Setup alat streaming, manajemen komunitas, dan monetisasi konten.',
    instructor: 'Rizki Gamer',
    rating: 4.9,
    students: 850
  },
  {
    id: '4',
    title: 'Dasar Business Analyst',
    category: 'Business Analyst',
    price: 750000,
    type: 'paid',
    image: 'https://images.unsplash.com/photo-1454165833772-d996d49513d7?auto=format&fit=crop&q=80&w=800',
    description: 'Analisis data bisnis untuk pengambilan keputusan yang tepat.',
    instructor: 'Diana Putri',
    rating: 4.7,
    students: 420
  },
  {
    id: '5',
    title: 'Intro to Data Science',
    category: 'Data Scientist',
    price: 0,
    type: 'free',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800',
    description: 'Mengenal dunia data science, Python, dan statistik dasar.',
    instructor: 'Prof. Agus',
    rating: 4.5,
    students: 8900
  },
  {
    id: '6',
    title: 'Strategi Membangun Start-up dari Nol',
    category: 'Start-up',
    price: 1200000,
    type: 'paid',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    description: 'Validasi ide, funding, hingga scale-up startup Anda.',
    instructor: 'Eka Pratama',
    rating: 4.9,
    students: 310
  },
  {
    id: '7',
    title: 'Kerja Remote: Efektivitas & Karir Global',
    category: 'Remote Work',
    price: 150000,
    type: 'paid',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    description: 'Cara mendapatkan klien luar negeri dan mengatur waktu kerja di rumah.',
    instructor: 'Linda Ross',
    rating: 4.6,
    students: 2100
  }
];
