import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, MapPin, Target, Users, Award, Shield } from 'lucide-react';

export const AboutUs = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-600 font-bold tracking-widest uppercase mb-4 block">Tentang Cuans Academy</span>
            <h1 className="text-4xl lg:text-6xl font-display font-black text-slate-900 mb-8 tracking-tight">Misi Kami Mencerdaskan Bangsa Melalui <span className="text-brand-600">Literasi Digital</span></h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Cuans Academy lahir dari keresahan akan tingginya permintaan tenaga kerja digital namun kurangnya akses edukasi yang praktis dan terjangkau di Indonesia. Kami percaya bahwa setiap orang berhak memiliki kesempatan yang sama untuk sukses di dunia bisnis digital.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-brand-600">2021</p>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-xs mt-1">Tahun Berdiri</p>
              </div>
              <div>
                <p className="text-4xl font-black text-brand-600">12k+</p>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-xs mt-1">Lulusan Sukses</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Tim Cuans Academy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-600 rounded-[32px] flex flex-col items-center justify-center text-white p-6 shadow-xl hidden md:flex">
              <Shield size={40} className="mb-4" />
              <p className="text-center font-bold text-sm">Terakreditasi Oleh Kominfo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Area */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-display font-black text-slate-900 mb-4">Nilai Dasar Kami</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Empat pilar utama yang menjadi pondasi setiap materi yang kami sampaikan di Cuans Academy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Aplikatif", text: "Teori secukupnya, praktik sebanyak-banyaknya." },
              { icon: Users, title: "Kolaboratif", text: "Membangun jejaring antar siswa dan mentor." },
              { icon: Award, title: "Inovatif", text: "Mengikuti standar industri global terbaru." },
              { icon: BookOpen, title: "Terjangkau", text: "Edukasi premium untuk semua kalangan." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all h-full">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Office Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-black text-slate-900 mb-4">Markas Kami</h2>
          <div className="flex items-center justify-center space-x-2 text-brand-600 font-semibold mb-8">
            <MapPin size={20} />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-square md:col-span-2 rounded-[32px] overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="aspect-square md:aspect-auto rounded-[32px] overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square md:aspect-auto rounded-[32px] overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
