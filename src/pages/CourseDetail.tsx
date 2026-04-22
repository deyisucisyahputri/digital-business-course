import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Users, Clock, Shield, CheckCircle, BookOpen, ChevronRight } from 'lucide-react';
import { courses } from '../data/courses';
import { formatRupiah } from '../lib/utils';

export const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Kursus tidak ditemukan</h2>
        <button onClick={() => navigate('/courses')} className="mt-4 text-brand-600 font-bold hover:underline">Kembali ke Katalog</button>
      </div>
    );
  }

  const handleEnroll = () => {
    if (course.type === 'paid') {
      navigate(`/payment/${course.id}`);
    } else {
      // In a real app, logic for free enrollment here
      alert(`Selamat! Anda telah terdaftar di kursus: ${course.title}`);
      navigate('/');
    }
  };

  const curriculum = [
    "Pendahuluan & Orientasi",
    "Konsep Dasar & Terminologi",
    "Studi Kasus 1: Implementasi Awal",
    "Optimasi & Strategi Menengah",
    "Proyek Akhir: Portfolio Ready",
    "Persiapan Karir & Sertifikasi"
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider">
                  {course.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 leading-tight">
                {course.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-medium text-slate-600">
                <div className="flex items-center space-x-2">
                  <Star size={18} className="text-amber-400 fill-amber-400" />
                  <span>{course.rating} (Rating Pengguna)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={18} className="text-brand-600" />
                  <span>{course.students.toLocaleString()} Siswa Terdaftar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} className="text-brand-600" />
                  <span>Total Durasi 24 Jam</span>
                </div>
              </div>

              <div className="aspect-video rounded-[32px] overflow-hidden mb-12 shadow-2xl">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Tentang Kursus Ini</h2>
                  <p className="text-slate-600 leading-relaxed text-lg italic">
                    "{course.description}"
                  </p>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Kursus ini dirancang khusus untuk Anda yang ingin memulai atau memperdalam keahlian di bidang {course.category}. Anda akan dipandu langkah demi langkah mulai dari level pemula hingga siap untuk terjun ke industri secara profesional. Materi yang disampaikan sangat aplikatif dan berdasarkan pengalaman riil instruktur kami.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Kurikulum Pembelajaran</h2>
                  <div className="space-y-4">
                    {curriculum.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl group hover:bg-brand-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-brand-600">
                            {i + 1}
                          </div>
                          <span className="font-semibold text-slate-800">{item}</span>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-brand-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / CTA card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 bg-white border border-slate-100 rounded-[40px] shadow-2xl shadow-slate-200/50">
              <div className="mb-6 text-center">
                <p className="text-slate-500 font-medium mb-1">Harga Kursus</p>
                <h3 className="text-4xl font-display font-black text-brand-700">
                  {course.price === 0 ? 'Gratis' : formatRupiah(course.price)}
                </h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: BookOpen, text: "6 Modul Pembelajaran" },
                  { icon: Shield, text: "Akses Selamanya" },
                  { icon: CheckCircle, text: "Sertifikat Penyelesaian" },
                  { icon: Users, text: "Grup Diskusi Esklusif" }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-600 font-medium">
                    <benefit.icon size={18} className="text-brand-600" />
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleEnroll}
                className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center justify-center space-x-2"
              >
                <span>Daftar Sekarang</span>
              </button>
              
              <p className="mt-6 text-center text-xs text-slate-400 font-medium leading-relaxed">
                Jaminan kepuasan belajar. Bergabunglah dengan ribuan siswa lainnya hari ini.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
