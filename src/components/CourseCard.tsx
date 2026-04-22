import React from 'react';
import { motion } from 'motion/react';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { formatRupiah, cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all h-full flex flex-col"
    >
      <Link to={`/course/${course.id}`} className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
            course.type === 'free' ? "bg-emerald-500 text-white" : "bg-brand-600 text-white"
          )}>
            {course.type === 'free' ? 'Gratis' : 'Premium'}
          </span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-brand-600 uppercase">{course.category}</span>
          <div className="flex items-center space-x-1 text-slate-500">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-xs font-medium">{course.rating}</span>
          </div>
        </div>
        
        <Link to={`/course/${course.id}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-brand-600 transition-colors">{course.title}</h3>
        </Link>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">{course.description}</p>
        
        <div className="mt-auto pt-4 border-t border-slate-50 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium">{course.instructor}</span>
              <span className="text-lg font-bold text-brand-700">
                {course.price === 0 ? 'Gratis' : formatRupiah(course.price)}
              </span>
            </div>
            <Link 
              to={`/course/${course.id}`}
              className="p-2 bg-slate-50 rounded-full text-brand-600 hover:bg-brand-600 hover:text-white transition-colors group"
            >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <Link 
            to={course.type === 'paid' ? `/payment/${course.id}` : `/course/${course.id}`}
            className="w-full bg-slate-50 text-slate-700 py-3 rounded-xl font-bold text-sm hover:bg-brand-600 hover:text-white transition-all text-center block"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
