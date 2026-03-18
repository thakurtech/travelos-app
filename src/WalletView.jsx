import React, { useState } from 'react';
import { CreditCard, QrCode, PlusCircle, ArrowRightLeft, History, ShieldCheck, SmartphoneNfc } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WalletView() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(450.00);

  const handleAddFunds = () => {
      setBalance(b => b + 100);
  };

  const handleScanPay = () => {
      setBalance(b => b - 6.00);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans relative overflow-x-hidden">
      
      {/* Dynamic Header Background */}
      <div className="absolute top-0 left-0 w-full h-[450px] bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] rounded-b-[3rem] shadow-2xl z-0 overflow-hidden">
         <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
         <div className="absolute bottom-[-50px] left-[-100px] w-80 h-80 bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>
         {/* Hexagon Pattern Overlay */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.477-27.14 47.006L1.18 0l.83-.477 26.308 45.566L54.627 0zM27.487 59.523l-26.294-45.54.83-.478 27.126 46.974 27.125-46.974.83.478-26.294 45.54L28.317 60h-1.66l-.83-1.477z\\' fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>
      </div>

      <div className="relative z-10 pt-8 px-6">
        <h1 className="text-3xl font-black text-white mb-8 tracking-tight flex justify-between items-center">
            Unified Wallet
            <SmartphoneNfc size={28} className="text-indigo-400" />
        </h1>
        
        {/* The 3D Glassmorphic Travelos Pass */}
        <div className="relative w-full aspect-[1.6/1] max-w-sm mx-auto mb-10 group perspective-1000">
            {/* Glow under the card */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-fuchsia-500 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative w-full h-full rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-2 translate-z-0"
                 style={{
                     background: 'rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(24px)',
                     WebkitBackdropFilter: 'blur(24px)',
                     border: '1px solid rgba(255, 255, 255, 0.2)',
                     boxShadow: 'inset 0 0 20px rgba(255,255,255,0.05)'
                 }}>
                
                {/* Simulated Glass Reflection Sweep */}
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-[shine_4s_infinite]"></div>

                <div className="flex justify-between items-start z-10">
                    <span className="text-white/80 font-medium tracking-widest text-xs uppercase">Travelos Pass</span>
                    <ShieldCheck size={24} className="text-emerald-400" />
                </div>

                <div className="z-10 mt-auto">
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Available Balance</p>
                    <div className="flex items-end gap-3">
                        <h2 className="text-4xl sm:text-5xl font-mono font-black text-white tracking-tighter">${balance.toFixed(2)}</h2>
                        <span className="text-emerald-300 font-bold text-sm mb-1.5 opacity-90">≈ ₹{(balance * 83.33).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                    </div>
                </div>

                {/* Decorative Virtual Chip */}
                <div className="absolute top-6 right-6 w-10 h-8 rounded bg-gradient-to-br from-yellow-200/40 to-yellow-500/40 border border-yellow-200/30 flex items-center justify-center overflow-hidden z-10">
                    <div className="w-full h-[1px] bg-yellow-200/20 absolute top-1/2"></div>
                    <div className="w-[1px] h-full bg-yellow-200/20 absolute left-1/3"></div>
                    <div className="w-[1px] h-full bg-yellow-200/20 absolute right-1/3"></div>
                </div>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 max-w-sm mx-auto mb-12">
            <button onClick={handleAddFunds} className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-2 text-white transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(0,0,0,0.1)] group">
                <div className="w-12 h-12 rounded-full bg-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlusCircle size={24} className="text-indigo-200" />
                </div>
                <span className="text-sm font-bold tracking-wide">Top Up</span>
            </button>
            <button onClick={handleScanPay} className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 rounded-2xl p-4 flex flex-col items-center gap-2 text-white transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(99,102,241,0.4)] group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    <QrCode size={24} className="text-white" />
                </div>
                <span className="text-sm font-bold tracking-wide">Scan UPI</span>
            </button>
        </div>

      </div>

      {/* Linked Cards & History */}
      <div className="relative z-10 px-6 max-w-lg mx-auto -mt-4">
        
        <div className="bg-white rounded-[2rem] p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 mb-8">
            <h3 className="font-bold text-gray-900 text-lg mb-5 flex items-center gap-2">
                <CreditCard className="text-indigo-500" /> Linked Source
            </h3>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-14 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-md flex items-center justify-center text-white text-[10px] font-black italic tracking-widest shadow-inner">
                    VISA
                </div>
                <div className="flex-1">
                    <p className="font-bold text-gray-900">Chase Sapphire</p>
                    <p className="text-xs font-mono text-gray-500 tracking-widest mt-0.5">•••• •••• •••• 4242</p>
                </div>
                <span className="text-indigo-600 font-bold text-sm hover:underline">Edit</span>
            </div>
        </div>

        <h3 className="font-bold text-gray-900 text-lg mb-4 flex justify-between items-center px-2">
            <span>Recent Activity</span>
            <History size={18} className="text-gray-400" />
        </h3>
        
        <div className="space-y-4">
            <div className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
                        <ArrowRightLeft size={18} />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800">Chai Vendor (UPI)</p>
                        <p className="text-xs font-medium text-gray-400 mt-0.5">Today, 10:45 AM</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-black text-gray-900">-$6.00</p>
                    <p className="text-xs font-bold text-rose-400">₹500.00</p>
                </div>
            </div>

            <div className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                        <PlusCircle size={18} />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800">Wallet Top-Up</p>
                        <p className="text-xs font-medium text-gray-400 mt-0.5">Yesterday</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-black text-emerald-500">+$100.00</p>
                </div>
            </div>
        </div>

      </div>

      <style jsx="true">{`
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
      `}</style>
    </div>
  );
}
