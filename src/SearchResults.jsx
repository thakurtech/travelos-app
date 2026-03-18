import React from 'react';
import { Plane, Train, CarTaxiFront, BedDouble, Filter, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchResultCard = ({ type, provider, route, time, inr, usd, isFastest, isCheapest }) => {
    return (
        <div className="glass-panel p-4 mb-4 relative overflow-hidden">
            {isFastest && <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">Fastest</div>}
            {isCheapest && <div className="absolute top-0 right-0 bg-success text-white text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">Cheapest</div>}
            
            <div className="flex justify-between items-start mb-3">
                <div>
                   <p className="font-bold text-sm">{provider}</p>
                   <p className="text-xs text-muted flex items-center gap-1 mt-1"><Clock size={12}/> {time}</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-primary">₹{inr}</p>
                    <p className="text-xs text-muted">≈ ${usd}</p>
                </div>
            </div>
            
            <div className="flex items-center gap-3 bg-[var(--surface-alt)] p-2 rounded-lg">
                <div className="text-muted">
                    {type === 'flight' && <Plane size={18} />}
                    {type === 'train' && <Train size={18} />}
                    {type === 'cab' && <CarTaxiFront size={18} />}
                    {type === 'hotel' && <BedDouble size={18} />}
                </div>
                <div className="flex-1 text-sm font-medium">{route}</div>
            </div>

            <button onClick={() => navigate('/checkout')} className="btn btn-primary w-full mt-3 py-2 text-sm">
                Select & Pay
            </button>
        </div>
    );
};

export default function SearchResults() {
  const navigate = useNavigate();

  return (
    <div className="pb-20 animate-fade-in">
        <div className="p-6 bg-white border-b sticky top-0 z-20 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <button onClick={() => navigate('/')} className="text-muted">← Back</button>
                <div className="flex-1">
                    <p className="text-xs text-muted uppercase tracking-wider font-bold">New Delhi → Agra</p>
                    <p className="text-sm font-medium">Tomorrow • 2 Travelers</p>
                </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                <button className="px-4 py-2 rounded-full border border-[var(--primary)] text-[var(--primary)] text-sm font-bold bg-indigo-50 flex items-center gap-2 whitespace-nowrap">
                    <Train size={16}/> Trains (12)
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-200 text-muted text-sm font-medium flex items-center gap-2 whitespace-nowrap">
                    <CarTaxiFront size={16}/> Cabs (5)
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-200 text-muted text-sm font-medium flex items-center gap-2 whitespace-nowrap">
                    <Filter size={16}/> Filter
                </button>
            </div>
        </div>

        <div className="p-6">
            <p className="text-sm font-medium text-muted mb-4">Showing aggregator results via IRCTC & Makemytrip</p>
            
            <SearchResultCard 
                type="train"
                provider="Vande Bharat Express (20172)"
                route="NDLS (06:00) → AGC (07:50)"
                time="1h 50m • Direct"
                inr="1,200"
                usd="14.40"
                isFastest={true}
            />

            <SearchResultCard 
                type="train"
                provider="Gatimaan Express (12050)"
                route="NZM (08:10) → AGC (09:50)"
                time="1h 40m • Direct"
                inr="900"
                usd="10.80"
                isCheapest={true}
            />

            <SearchResultCard 
                type="cab"
                provider="Uber Intercity (Sedan)"
                route="Your Hotel → Agra Center"
                time="3h 30m • Direct"
                inr="3,500"
                usd="42.00"
            />
        </div>
    </div>
  );
}
