import React, { useState } from 'react';
import { Search, Info, TrendingUp, TrendingDown } from 'lucide-react';

export default function FairPrice() {
  const [query, setQuery] = useState('');
  
  // Simulated prices database
  const dummyPrices = [
      { id: 1, name: "Auto Rickshaw (Delhi Airport to CP)", inr: "400 - 550", usd: "4.80 - 6.60", trend: 'up' },
      { id: 2, name: "1L Bottled Water (Local Brand)", inr: "20", usd: "0.24", trend: 'stable' },
      { id: 3, name: "Street Food (Samosa)", inr: "15 - 20", usd: "0.18 - 0.24", trend: 'stable' },
      { id: 4, name: "Taj Mahal Entry (Foreign Tourist)", inr: "1100", usd: "13.20", trend: 'stable' },
      { id: 5, name: "Local Bus Fare (Short Distance)", inr: "10 - 15", usd: "0.12 - 0.18", trend: 'stable' }
  ];

  const results = dummyPrices.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="pb-10 animate-fade-in">
        <div className="p-6 text-white" style={{ background: 'var(--success)' }}>
            <h1 className="text-2xl font-bold mb-2">Fair Price Guide</h1>
            <p className="text-sm opacity-90 mb-6">Avoid tourist traps. Know the standard local prices.</p>

            <div className="relative mb-2">
                <Search className="absolute left-3 top-3 text-muted" size={18} />
                <input 
                    type="text" 
                    placeholder="Search an item or service..." 
                    className="w-full rounded-xl py-3 pl-10 outline-none text-primary"
                    style={{ color: 'var(--text-primary)' }}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
        </div>

        <div className="p-6 space-y-4">
            {query && results.length === 0 ? (
                <p className="text-muted text-center mt-8">No specific data found. Try asking a local guard or official.</p>
            ) : null}

            {results.map(item => (
                <div key={item.id} className="glass-panel p-4 flex justify-between items-start">
                    <div className="flex-1 pr-4">
                        <p className="font-bold text-sm mb-1">{item.name}</p>
                        <div className="flex items-center gap-1 text-xs text-muted">
                            {item.trend === 'up' ? <TrendingUp size={12} className="text-danger" /> : 
                             item.trend === 'down' ? <TrendingDown size={12} className="text-success" /> : 
                            <Info size={12} />}
                            <span>Standard Rate</span>
                        </div>
                    </div>
                    <div className="text-right border-l pl-4 border-gray-200">
                        <p className="font-bold text-success">₹{item.inr}</p>
                        <p className="text-xs text-muted">≈ ${item.usd}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
