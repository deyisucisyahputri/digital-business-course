import React from 'react';
import { courses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { motion } from 'motion/react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { CourseType } from '../types';

export const Courses = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedType, setSelectedType] = React.useState<CourseType | 'All'>('All');

  const categories = ['All', ...Array.from(new Set(courses.map(c => c.category)))];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesType = selectedType === 'All' || course.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">Katalog Kursus</h1>
          <p className="text-slate-600 max-w-xl mx-auto">Tingkatkan skill Anda dengan pilihan kursus terbaik dari insturktur berpengalaman.</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-12 flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Search */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari kursus idaman Anda..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-600 transition-all outline-none text-slate-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="flex items-center space-x-3">
              <Filter size={18} className="text-brand-600" />
              <select 
                className="bg-slate-50 border-none rounded-xl py-2 pl-4 pr-10 focus:ring-2 focus:ring-brand-600 outline-none text-sm font-semibold text-slate-700"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'Semua Kategori' : cat}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center space-x-3">
              <SlidersHorizontal size={18} className="text-brand-600" />
              <select 
                className="bg-slate-50 border-none rounded-xl py-2 pl-4 pr-10 focus:ring-2 focus:ring-brand-600 outline-none text-sm font-semibold text-slate-700"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as CourseType | 'All')}
              >
                <option value="All">Semua Tipe</option>
                <option value="free">Gratis</option>
                <option value="paid">Premium</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[40px] shadow-sm border border-slate-100">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Tidak ditemukan kursus</h3>
            <p className="text-slate-500">Coba kata kunci lain atau reset filter Anda.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All'); setSelectedType('All');}}
              className="mt-6 text-brand-600 font-bold hover:underline"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
