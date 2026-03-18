import React, { useState } from 'react';
import { Plane, Train, CarTaxiFront, BedDouble, Search, BadgeAlert, ArrowRight, Sun, RefreshCw, Sparkles, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickAction = ({ icon: Icon, label, color, gradient }) => (
  <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-3xl transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white" style={{ background: gradient }}>
    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md shadow-inner text-white">
        <Icon size={28} />
    </div>
    <span className="text-sm font-bold text-white tracking-wide">{label}</span>
  </button>
);

const DealCard = ({ title, desc, price, imgColor }) => (
  <div className="p-0 overflow-hidden bg-white rounded-3xl transition-transform hover:-translate-y-2 border border-gray-100" style={{ minWidth: '280px', flex: '0 0 auto', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.08)' }}>
    <div className="h-40 relative flex items-center justify-center" style={{ background: imgColor }}>
        {/* Decorative elements for image placeholder */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
        <MapPin className="text-white/50" size={48} />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-black text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{desc}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">{price}</span>
        <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all">Book</button>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div className="pb-24 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* Header Area */}
      <div className="relative p-6 md:p-12 text-white overflow-hidden rounded-b-[3rem] shadow-[0_20px_50px_rgba(79,70,229,0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 -z-20"></div>
        {/* Animated Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse -z-10" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-10">
            <div>
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1 shadow-sm">Unified Travel OS</p>
                <h1 className="text-4xl md:text-5xl font-black drop-shadow-lg">India Awaits.</h1>
            </div>
            
            <div className="flex items-center gap-3">
                <button className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold hover:bg-white/30 transition border border-white/30 shadow-lg">
                    EN / USD
                </button>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl border-2 border-white/50 cursor-pointer hover:scale-105 transition">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4" alt="avatar" className="w-10 h-10 rounded-full" />
                </div>
            </div>
            </div>

            {/* Huge Search Omnibox */}
            <div className="relative mt-4 shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-full bg-white/95 backdrop-blur-xl p-3 flex items-center gap-3 max-w-2xl border border-white/50 group hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-shadow">
                <Search size={24} className="text-indigo-500 ml-3" />
                <input 
                  type="text" 
                  placeholder="Where to? Try 'Taj Mahal trains' or 'Delhi hotels'" 
                  className="flex-1 border-none outline-none py-3 text-gray-800 text-lg bg-transparent font-medium placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/search')}
                />
                <button onClick={() => navigate('/search')} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg">
                    Go
                </button>
            </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 md:p-8 -mt-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Currency Widget */}
            <div className="bg-white p-5 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Live Rate</p>
                    <p className="text-2xl font-black text-gray-900">1 USD <span className="text-sm font-medium text-gray-400 mx-1">=</span> <span className="text-emerald-500">₹83.42</span></p>
                </div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
                    <RefreshCw size={24} />
                </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-5 rounded-3xl shadow-[0_15px_35px_rgba(249,115,22,0.3)] text-white flex items-center justify-between hover:scale-[1.02] transition-transform cursor-pointer">
                <div>
                    <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">New Delhi</p>
                    <p className="text-3xl font-black">32°C</p>
                    <p className="text-sm font-medium opacity-90">Sunny & clear</p>
                </div>
                <Sun size={48} className="opacity-80" strokeWidth={1.5} />
            </div>

            {/* Wallet Quick Access */}
            <div onClick={() => navigate('/wallet')} className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.2)] text-white flex flex-col justify-center cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 bg-white/5 w-24 h-24 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Travel Wallet</p>
                <p className="text-3xl font-black font-mono tracking-tight">$450<span className="text-lg">.00</span></p>
                <div className="flex items-center gap-1 mt-2 text-emerald-400 text-sm font-bold">
                    <Sparkles size={14} /> Ready to spend
                </div>
            </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
            <h2 className="text-2xl font-black text-gray-900">Book Instantly</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <QuickAction icon={Plane} label="Flights" gradient="linear-gradient(135deg, #3B82F6, #2DD4BF)" />
            <QuickAction icon={Train} label="IRCTC Trains" gradient="linear-gradient(135deg, #8B5CF6, #D946EF)" />
            <QuickAction icon={CarTaxiFront} label="City Cabs" gradient="linear-gradient(135deg, #F59E0B, #EF4444)" />
            <QuickAction icon={BedDouble} label="Hotels" gradient="linear-gradient(135deg, #10B981, #059669)" />
        </div>

        {/* Popular Destinations */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2 mt-4">
            <h2 className="text-2xl font-black text-gray-900">Trending Packages</h2>
            <button className="text-indigo-600 font-bold text-sm hover:underline">See All</button>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2" style={{ margin: '0 -1.5rem', padding: '0 1.5rem', scrollbarWidth: 'none' }}>
            <DealCard 
               title="Taj Mahal Day Tour" 
               desc="Includes Vande Bharat Express round trip + Cab"
               price="$85"
               imgColor="linear-gradient(135deg, #FED7AA, #FB923C)"
            />
            <DealCard 
               title="Goa Beach Resort" 
               desc="3 nights stay including domestic flight"
               price="$320"
               imgColor="linear-gradient(135deg, #BAE6FD, #38BDF8)"
            />
            <DealCard 
               title="Jaipur Heritage" 
               desc="Palace hotel stay & private city cab tour"
               price="$150"
               imgColor="linear-gradient(135deg, #FBCFE8, #F472B6)"
            />
        </div>

      </div>
    </div>
  );
}
