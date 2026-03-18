import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, ChevronLeft, Building2, Ticket, Check, MapPin, CalendarClock } from 'lucide-react';

export default function Checkout() {
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const handlePayment = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setSuccess(true);
        }, 2000);
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-[#111827] flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
                
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] text-center max-w-sm w-full z-10 shadow-2xl animate-slide-up">
                    <div className="w-24 h-24 bg-gradient-to-tr from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(52,211,153,0.5)]">
                        <Check size={48} className="text-white" strokeWidth={3} />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Booking Confirmed</h2>
                    <p className="text-emerald-100 font-medium mb-8 opacity-90">Your digital ticket has been issued.</p>
                    
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 backdrop-blur-sm text-left">
                        <div className="flex justify-between items-center text-sm mb-2 text-gray-300">
                            <span>Amount Deducted</span>
                            <span className="font-bold text-white">$45.00</span>
                        </div>
                        <div className="flex justify-between items-center text-sm mb-2 text-gray-300">
                            <span>Booking ID</span>
                            <span className="font-mono text-white tracking-widest">IND-8842-X</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-300">
                            <span>Wallet Balance</span>
                            <span className="font-bold text-emerald-400">$405.00</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => navigate('/explore')}
                        className="w-full bg-white text-indigo-900 py-4 rounded-full font-black text-lg shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
            <div className="bg-indigo-900 p-6 md:p-8 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <button onClick={() => navigate('/search')} className="text-indigo-200 mb-6 hover:text-white transition flex items-center gap-2 text-sm font-medium">
                        <ChevronLeft size={16} /> Back to Search
                    </button>
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Secure Checkout</h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-4 md:p-8 mt-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Order Summary */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Ticket className="text-indigo-500" /> Booking Details
                        </h2>
                        
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            <div className="w-full md:w-32 h-32 bg-indigo-50 rounded-2xl overflow-hidden flex items-center justify-center shrink-0">
                                <Plane size={48} className="text-indigo-300" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider w-max mb-3">IndiGo Air</span>
                                <h3 className="text-2xl font-black text-gray-900 leading-tight">New Delhi to Agra</h3>
                                <div className="flex items-center gap-4 mt-3 text-sm font-medium text-gray-500">
                                    <span className="flex items-center gap-1.5"><CalendarClock size={16}/> Today, 08:30 AM</span>
                                    <span className="flex items-center gap-1.5"><MapPin size={16}/> Non-Stop</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 border-t border-gray-100 pt-6">
                            <div className="flex justify-between items-center text-gray-600 font-medium">
                                <span>Base Fare</span>
                                <span>$40.00</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600 font-medium">
                                <span>Taxes & Airport Fees</span>
                                <span>$5.00</span>
                            </div>
                            <div className="flex justify-between items-center text-indigo-600 font-medium">
                                <span>Travelos Convenience Fee</span>
                                <span>$0.00 <span className="text-xs ml-1 px-2 py-0.5 bg-indigo-100 rounded-full">WAIVED</span></span>
                            </div>
                            
                            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Total to Pay</span>
                                <span className="text-3xl font-black text-gray-900">$45.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Engine */}
                    <div className="bg-gray-900 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-white relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-[80px] opacity-40"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                                <ShieldCheck className="text-emerald-400" size={28} /> Unified Payment Engine
                            </h2>
                            
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Avoid dealing with OTP drops from foreign gateway processors. Your funds are instantly deducted from your pre-loaded Unified Wallet.
                            </p>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-inner">
                                        <CreditCard size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-300 font-medium mb-1">Available Wallet Balance</p>
                                        <p className="text-2xl font-black font-mono tracking-tight">$450.00</p>
                                    </div>
                                </div>
                                <div className="hidden sm:block text-right">
                                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Status</p>
                                    <p className="text-sm font-medium">Sufficient Funds</p>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handlePayment}
                            disabled={processing}
                            className={`relative z-10 w-full py-5 rounded-2xl font-black text-lg transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)] ${
                                processing ? 'bg-indigo-800 text-indigo-300 cursor-not-allowed scale-95' : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-[0_15px_40px_rgba(79,70,229,0.5)] hover:-translate-y-1 active:scale-95'
                            }`}
                        >
                            {processing ? (
                                <span className="flex items-center justify-center gap-3">
                                    <svg className="animate-spin h-5 w-5 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing Payment Engine...
                                </span>
                            ) : (
                                "Pay $45.00 Now"
                            )}
                        </button>
                        
                        <p className="text-center text-xs text-gray-500 mt-6 relative z-10 flex items-center justify-center gap-1.5">
                            <ShieldCheck size={14} /> Bank-grade encryption • 256-bit AES
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
