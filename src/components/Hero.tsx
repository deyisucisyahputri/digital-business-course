import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
              <span>Sudah dibuka Batch 2026</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-black text-slate-900 leading-[1.1] mb-6">
              Kuasai Bisnis <span className="text-brand-600">Digital</span>, Raih Masa Depan!
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Belajar langsung dari praktisi industri. Kurikulum berbasis proyek yang dirancang untuk membantu Anda membangun karir impian di ekonomi digital.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Link to="/courses" className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center justify-center space-x-2">
                <span>Eksplor Kursus</span>
                <ArrowRight size={20} />
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg text-slate-700 hover:bg-slate-100 transition-all">
                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-brand-600">
                  <Play size={18} className="fill-brand-600" />
                </div>
                <span>Lihat Demo</span>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-slate-600 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-brand-600" />
                <span>Akses Selamanya</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-brand-600" />
                <span>Sertifikat Resmi</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800" 
                alt="Belajar Bisnis Digital" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-900/10" />
            </div>
            
            {/* Float items */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium tracking-wide">PENGGUNA AKTIF</p>
                <p className="text-lg font-bold text-slate-900 leading-none">12,400+</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-900">Mentor Ahli</div>
              </div>
              <p className="text-sm text-slate-600">Diskusi intensif langsung dengan para ahli di bidangnya.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
