import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">Cuans<span className="text-brand-600">Academy</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Platform edukasi bisnis digital terdepan di Indonesia. Kami berdedikasi untuk menciptakan tenaga kerja digital yang siap bersaing secara global.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Program Kursus</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/courses" className="hover:text-brand-500 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/courses" className="hover:text-brand-500 transition-colors">Data Science</Link></li>
              <li><Link to="/courses" className="hover:text-brand-500 transition-colors">Start-up Business</Link></li>
              <li><Link to="/courses" className="hover:text-brand-500 transition-colors">Remote Work Skill</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-brand-500 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition-colors">Karir</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition-colors">Kontak Kami</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500 transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-600 shrink-0" />
                <span>Jl. Digital No. 123, SCBD, Jakarta Selatan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-600 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-600 shrink-0" />
                <span>halo@cuans.academy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© 2026 Cuans Academy. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </div>
    </footer>
  );
};
