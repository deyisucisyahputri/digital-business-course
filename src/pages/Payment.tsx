import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CreditCard, Shield, Lock, ChevronRight, Check } from 'lucide-react';
import { courses } from '../data/courses';
import { formatRupiah, cn } from '../lib/utils';

export const Payment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = React.useState('transfer');
  const [isProcessing, setIsProcessing] = React.useState(false);
  
  const course = courses.find(c => c.id === courseId);

  if (!course || course.type === 'free') {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Pesanan tidak valid</h2>
        <button onClick={() => navigate('/courses')} className="mt-4 text-brand-600 font-bold hover:underline">Kembali ke Katalog</button>
      </div>
    );
  }

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert(`Terima kasih! Pembayaran untuk ${course.title} sedang diproses. Silakan cek email Anda untuk detail akses.`);
      navigate('/');
    }, 2000);
  };

  const paymentMethods = [
    { id: 'transfer', name: 'Transfer Bank (Manual)', desc: 'BCA, Mandiri, BNI' },
    { id: 'ewallet', name: 'E-Wallet', desc: 'GoPay, OVO, Dana' },
    { id: 'qris', name: 'QRIS', desc: 'Auto Konfirmasi' }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-display font-black text-slate-900 mb-2">Selesaikan Pembayaran</h1>
          <p className="text-slate-500">Satu langkah lagi untuk memulai masa depan digital Anda.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Payment Options */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Pilih Metode Pembayaran</h3>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={cn(
                      "w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group",
                      selectedMethod === method.id ? "border-brand-600 bg-brand-50/50" : "border-slate-100 hover:border-slate-200"
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                        selectedMethod === method.id ? "border-brand-600 bg-brand-600" : "border-slate-300"
                      )}>
                        {selectedMethod === method.id && <Check size={12} className="text-white" />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 leading-none mb-1">{method.name}</p>
                        <p className="text-xs text-slate-500 font-medium">{method.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-brand-900 text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield size={20} className="text-brand-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Secure Payment Gateway</span>
                </div>
                <h4 className="text-lg font-bold mb-2">Keamanan Terjamin</h4>
                <p className="text-sm text-brand-200 leading-relaxed">Seluruh transaksi Anda dienkripsi dengan standar keamanan tingkat tinggi. Kami tidak menyimpan informasi kartu kredit/debit Anda.</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 sticky top-32">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Ringkasan Pesanan</h3>
              
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img src={course.image} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1">{course.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{course.category}</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100 mb-8">
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Harga Kursus</span>
                  <span>{formatRupiah(course.price)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Biaya Admin</span>
                  <span>{formatRupiah(2500)}</span>
                </div>
                <div className="flex justify-between text-lg font-black text-slate-900 pt-4 border-t border-slate-100">
                  <span>Total Bayar</span>
                  <span className="text-brand-600">{formatRupiah(course.price + 2500)}</span>
                </div>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-wait"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Lock size={18} />
                    <span>Bayar Sekarang</span>
                  </>
                )}
              </button>

              <div className="mt-6 flex items-center justify-center space-x-2 text-slate-400">
                <Shield size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">100% Aman & Terpercaya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
