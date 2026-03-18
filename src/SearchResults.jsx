import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Train, CarTaxiFront, Filter, MapPin, ArrowRight, Clock, Star, Map } from 'lucide-react';

const SkeletonCard = () => (
    <div className="bg-white/80 border border-gray-100 p-5 rounded-3xl animate-pulse flex flex-col gap-4 shadow-sm mb-4">
        <div className="flex justify-between items-center">
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            <div className="h-4 w-16 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center mt-2">
            <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
            <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-4"></div>
            <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex justify-between items-end mt-4">
            <div className="h-6 w-32 bg-gray-200 rounded-full"></div>
            <div className="h-10 w-28 bg-gray-300 rounded-full"></div>
        </div>
    </div>
);

const TransportTicket = ({ type, airline, from, to, dept, arr, duration, price, onSelect }) => {
    const Icon = type === 'flight' ? Plane : type === 'train' ? Train : CarTaxiFront;
    const color = type === 'flight' ? 'text-indigo-500' : type === 'train' ? 'text-fuchsia-500' : 'text-amber-500';
    const bgBadge = type === 'flight' ? 'bg-indigo-50 text-indigo-700' : type === 'train' ? 'bg-fuchsia-50 text-fuchsia-700' : 'bg-amber-50 text-amber-700';

    return (
        <div className="relative overflow-hidden bg-white/95 backdrop-blur-md rounded-[2rem] p-6 mb-5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            {/* Cutout punch holes for ticket look */}
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#F8FAFC] rounded-full -translate-y-1/2 z-10 shadow-inner"></div>
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#F8FAFC] rounded-full -translate-y-1/2 z-10 shadow-inner"></div>

            <div className="flex justify-between items-center mb-6">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${bgBadge}`}>
                    <Icon size={14} /> {airline}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-gray-400">
                    <Clock size={14} /> {duration}
                </div>
            </div>

            <div className="flex items-center justify-between relative px-2">
                <div className="text-center z-10">
                    <p className="text-3xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">{dept}</p>
                    <p className="text-sm font-semibold text-gray-500 mt-1">{from}</p>
                </div>
                
                <div className="flex-1 mx-6 relative flex items-center justify-center">
                    <div className="absolute w-full border-t-[3px] border-dashed border-gray-200"></div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center z-10 shadow-md text-gray-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-500">
                        <Icon size={20} className={color} />
                    </div>
                </div>

                <div className="text-center z-10">
                    <p className="text-3xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">{arr}</p>
                    <p className="text-sm font-semibold text-gray-500 mt-1">{to}</p>
                </div>
            </div>

            <div className="mt-8 pt-5 border-t border-dashed border-gray-200 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Total Fare</p>
                    <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">{price}</p>
                </div>
                <button 
                    onClick={onSelect}
                    className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-600 transition-colors flex items-center gap-2"
                >
                    Select <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default function SearchResults() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('flights');

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const handleSelect = () => {
        navigate('/checkout');
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
            {/* Header section */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 p-6 md:p-8 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="max-w-4xl mx-auto mt-4">
                    <button onClick={() => navigate('/explore')} className="text-indigo-200 mb-4 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                        &larr; Back to Dashboard
                    </button>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="flex items-center gap-2 text-white/70 mb-2">
                                <MapPin size={16} /> <span className="text-sm font-semibold uppercase tracking-wider">New Delhi &rarr; Agra</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-white">Aggregator Results</h1>
                            <p className="text-indigo-200 mt-2 text-sm">We scoured 42 local sources to find you the best and safest rates.</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 mt-8 bg-white/10 p-1.5 rounded-full backdrop-blur-md border border-white/20 w-max overflow-x-auto">
                        <button onClick={() => setActiveTab('flights')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'flights' ? 'bg-white text-indigo-900 shadow-md' : 'text-white hover:bg-white/10'}`}>
                            <Plane size={16} /> Flights
                        </button>
                        <button onClick={() => setActiveTab('trains')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'trains' ? 'bg-white text-indigo-900 shadow-md' : 'text-white hover:bg-white/10'}`}>
                            <Train size={16} /> IRCTC Trains
                        </button>
                        <button onClick={() => setActiveTab('cabs')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'cabs' ? 'bg-white text-indigo-900 shadow-md' : 'text-white hover:bg-white/10'}`}>
                            <CarTaxiFront size={16} /> Cabs (Uber/Ola)
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4 md:p-8 mt-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main Results Column */}
                <div className="lg:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Showing {activeTab} <span className="text-gray-400 text-sm ml-2 font-normal">Prices in USD</span></h2>
                        <button className="flex items-center gap-2 text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full hover:bg-indigo-100 transition">
                            <Filter size={16} /> Filter
                        </button>
                    </div>

                    {loading ? (
                        <>
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </>
                    ) : (
                        <div className="animate-slide-up">
                            {activeTab === 'flights' && (
                                <>
                                    <TransportTicket type="flight" airline="IndiGo Air" from="DEL" to="AGR" dept="08:30" arr="09:45" duration="1h 15m" price="$45.00" onSelect={handleSelect} />
                                    <TransportTicket type="flight" airline="Air India" from="DEL" to="AGR" dept="11:00" arr="12:20" duration="1h 20m" price="$52.00" onSelect={handleSelect} />
                                    <TransportTicket type="flight" airline="SpiceJet" from="DEL" to="AGR" dept="16:45" arr="18:00" duration="1h 15m" price="$39.00" onSelect={handleSelect} />
                                </>
                            )}
                            {activeTab === 'trains' && (
                                <>
                                    <TransportTicket type="train" airline="Vande Bharat Express (Premium)" from="NDLS" to="AGC" dept="06:00" arr="07:50" duration="1h 50m" price="$18.50" onSelect={handleSelect} />
                                    <TransportTicket type="train" airline="Gatimaan Express (Fastest)" from="NZM" to="AGC" dept="08:10" arr="09:50" duration="1h 40m" price="$15.00" onSelect={handleSelect} />
                                    <TransportTicket type="train" airline="Shatabdi Express" from="NDLS" to="AGC" dept="15:00" arr="17:10" duration="2h 10m" price="$12.00" onSelect={handleSelect} />
                                </>
                            )}
                            {activeTab === 'cabs' && (
                                <>
                                    <TransportTicket type="cab" airline="Uber Intercity (Sedan)" from="Hotel (Delhi)" to="Taj Mahal (Agra)" dept="Anytime" arr="+3h 30m" duration="3h 30m" price="$65.00" onSelect={handleSelect} />
                                    <TransportTicket type="cab" airline="Ola Outstation (SUV)" from="Hotel (Delhi)" to="Taj Mahal (Agra)" dept="Anytime" arr="+3h 45m" duration="3h 45m" price="$85.00" onSelect={handleSelect} />
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">
                    {/* Insights Widget */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-[2rem] border border-orange-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 text-orange-600">
                            <Star size={24} className="fill-orange-500" />
                            <h3 className="font-bold text-lg">AI Local Insights</h3>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed font-medium">
                            The <span className="font-bold">Vande Bharat Express</span> is highly recommended for this route! It provides a world-class, premium AC train experience that is actually faster than driving.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li className="flex gap-2"><Map size={16} className="text-orange-400 shrink-0 mt-0.5" /> Book 2 days in advance.</li>
                            <li className="flex gap-2"><Map size={16} className="text-orange-400 shrink-0 mt-0.5" /> Departs directly from city center.</li>
                        </ul>
                    </div>

                    {/* Scam Protection Alert */}
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] text-center relative overflow-hidden group">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                            <ShieldAlert size={28} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Foreigner Scam Alert</h3>
                        <p className="text-sm text-gray-500 mb-4">Never pay touts outside the station. Always book through this Unified App.</p>
                        <button onClick={() => navigate('/price')} className="text-blue-600 font-bold text-sm hover:underline">View Fair Price Guide</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
