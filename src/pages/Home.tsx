import React from 'react';
import { Hero } from '../components/Hero';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/courses';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="bg-white">
      <Hero />

      {/* Features */}
      <section className="py-24 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-black text-slate-900 mb-4">Mengapa Belajar di Cuans Academy?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Kami menyediakan ekosistem belajar paling lengkap di Indonesia untuk mempersiapkan karir digital Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Kurikulum Terupdate", desc: "Materi selalu diperbarui setiap 3 bulan mengikuti tren industri terkini." },
              { icon: Target, title: "Fokus Praktik", desc: "80% dari materi kami adalah praktik langsung mengerjakan proyek riil." },
              { icon: Award, title: "Sertifikasi Industri", desc: "Dapatkan sertifikat yang diakui oleh mitra korporasi terpercaya kami." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-black text-slate-900 mb-4">Kursus Terpopuler</h2>
              <p className="text-slate-600">Pilih dari berbagai pilihan kursus unggulan kami.</p>
            </div>
            <Link to="/courses" className="flex items-center space-x-2 text-brand-600 font-bold group">
              <span>Lihat Semua Kursus</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-brand-600 rounded-[48px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-display font-black mb-6">Mulai Transformasi Karir Anda Hari Ini</h2>
          <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">Jangan tunda lagi. Ekonomi digital tidak pernah menunggu. Jadilah bagian dari 12.000+ lulusan sukses kami.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-brand-600 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all">Daftar Sekarang</button>
            <button className="bg-brand-700/50 text-white border border-brand-400 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all">Konsultasi Karir Gratis</button>
          </div>
        </div>
      </section>
    </div>
  );
};
