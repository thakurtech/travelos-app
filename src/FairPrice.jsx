import React, { useState } from 'react';
import { Search, Info, TrendingUp, TrendingDown, ShieldAlert, BadgeCent } from 'lucide-react';

export default function FairPrice() {
  const [query, setQuery] = useState('');
  
  const dummyPrices = [
      { id: 1, name: "Auto Rickshaw (Airport to CP)", inr: "400 - 500", usd: "4.80 - 6.00", trend: 'up', category: 'Transport' },
      { id: 2, name: "1L Bottled Water (Local Brand)", inr: "20", usd: "0.24", trend: 'stable', category: 'Daily' },
      { id: 3, name: "Street Food (Samosa/Chai)", inr: "15 - 25", usd: "0.18 - 0.30", trend: 'stable', category: 'Food' },
      { id: 4, name: "Taj Mahal Entry (Foreigner)", inr: "1100", usd: "13.20", trend: 'stable', category: 'Tourism' },
      { id: 5, name: "Local Bus Fare (Short Distance)", inr: "10 - 20", usd: "0.12 - 0.24", trend: 'stable', category: 'Transport' },
      { id: 6, name: "Prepaid Local SIM (1 Month)", inr: "300 - 450", usd: "3.60 - 5.40", trend: 'down', category: 'Utility' }
  ];

  const results = dummyPrices.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
      
      {/* Header section */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-900 p-6 md:p-10 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-yellow-400 rounded-full mix-blend-overlay filter blur-[80px] opacity-40 animate-pulse"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 pt-4">
              <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                      <BadgeCent size={20} />
                  </div>
                  <span className="text-emerald-100 font-bold tracking-widest text-xs uppercase">Anti-Scam Protection</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">Fair Price Guide</h1>
              <p className="text-emerald-100 font-medium mb-8 max-w-sm leading-relaxed">Know the true local cost of items before you pay. Powered by real-time community data.</p>

              {/* Advanced Search Bar */}
              <div className="relative group max-w-lg">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg group-hover:bg-white/30 transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center p-2 shadow-inner">
                      <Search className="text-emerald-200 ml-3 shrink-0" size={24} />
                      <input 
                          type="text" 
                          placeholder="Search 'auto' or 'water'..." 
                          className="w-full bg-transparent border-none outline-none text-white placeholder-emerald-200/70 py-3 px-4 font-medium text-lg"
                          value={query}
                          onChange={e => setQuery(e.target.value)}
                      />
                      {query && (
                          <button onClick={() => setQuery('')} className="p-2 text-white/50 hover:text-white transition-colors">
                              <ShieldAlert size={20} />
                          </button>
                      )}
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-8 mt-2">
          
          <div className="flex justify-between items-center mb-6 px-2">
              <h2 className="text-xl font-bold text-gray-800 tracking-tight">Standard Rates</h2>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-200 px-3 py-1 rounded-full">LIVE DATA</span>
          </div>

          <div className="space-y-5 relative">
              
              {query && results.length === 0 ? (
                  <div className="bg-white rounded-[2rem] p-10 text-center border border-gray-100 shadow-sm animate-fade-in">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                          <Search size={32} />
                      </div>
                      <p className="text-gray-900 font-bold text-lg mb-2">No standard price found.</p>
                      <p className="text-gray-500 text-sm max-w-xs mx-auto">Try asking a local authority figure or official tourist center for guidance to avoid overpaying.</p>
                  </div>
              ) : null}

              {results.map((item, index) => (
                  <div 
                      key={item.id} 
                      className="bg-white rounded-[1.5rem] p-5 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 animate-slide-up group"
                      style={{ animationDelay: `${index * 50}ms` }}
                  >
                      <div className="flex items-center gap-4 flex-1 pr-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border 
                              ${item.category === 'Food' ? 'bg-orange-50 border-orange-100 text-orange-500' : 
                                item.category === 'Transport' ? 'bg-blue-50 border-blue-100 text-blue-500' : 
                                item.category === 'Utility' ? 'bg-purple-50 border-purple-100 text-purple-500' : 
                                'bg-emerald-50 border-emerald-100 text-emerald-500'}`}
                          >
                              {item.category.charAt(0)}
                          </div>
                          <div>
                              <p className="font-bold text-gray-900 leading-tight mb-1 group-hover:text-emerald-600 transition-colors">{item.name}</p>
                              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                  {item.trend === 'up' ? <TrendingUp size={14} className="text-rose-500 shrink-0" /> : 
                                   item.trend === 'down' ? <TrendingDown size={14} className="text-emerald-500 shrink-0" /> : 
                                  <Info size={14} className="text-blue-500 shrink-0" />}
                                  <span>{item.category}</span>
                              </div>
                          </div>
                      </div>
                      
                      <div className="text-right border-l-2 border-dashed border-gray-100 pl-5">
                          <p className="font-black text-xl text-emerald-600 mb-0.5">₹{item.inr}</p>
                          <p className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full inline-block">≈ ${item.usd}</p>
                      </div>
                  </div>
              ))}
          </div>
          
      </div>
      
    </div>
  );
}
