export type CourseType = 'free' | 'paid';

export interface Course {
  id: string;
  title: string;
  category: string;
  price: number;
  type: CourseType;
  image: string;
  description: string;
  instructor: string;
  rating: number;
  students: number;
}
