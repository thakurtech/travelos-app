import React, { useState } from 'react';
import { CreditCard, CheckCircle2, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('review'); // review -> processing -> success

    const handlePay = () => {
        setStatus('processing');
        setTimeout(() => setStatus('success'), 2000);
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-success p-6 text-white text-center animate-fade-in">
                <CheckCircle2 size={64} className="mb-4" />
                <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
                <p className="opacity-90 mb-8">₹1,200 ($14.40) tapped from your secure wallet.</p>
                <div className="glass-panel p-4 w-full mb-8 text-left bg-white text-gray-900 border-none">
                     <p className="text-sm font-bold">Vande Bharat Express (20172)</p>
                     <p className="text-xs text-muted">NDLS (06:00) → AGC (07:50)</p>
                     <p className="text-xs font-mono font-bold mt-2">PNR: 8123764921</p>
                </div>
                <button onClick={() => navigate('/')} className="px-6 py-3 bg-white text-success font-bold rounded-full w-full">
                    Return to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="pb-20 animate-fade-in bg-white min-h-screen relative">
            <div className="p-6 border-b flex items-center gap-3">
                <button onClick={() => navigate('/search')}><ChevronLeft size={24} className="text-primary"/></button>
                <h1 className="text-xl font-bold">Review & Pay</h1>
            </div>

            <div className="p-6">
                <div className="bg-gray-50 rounded-xl p-4 border mb-6">
                    <h2 className="font-bold text-gray-900">Vande Bharat Express</h2>
                    <p className="text-sm text-muted">New Delhi → Agra Cantt</p>
                    <div className="flex justify-between mt-4 text-sm font-medium">
                        <span>Total Fare (2 Adults)</span>
                        <span className="font-bold">₹1,200 <span className="text-xs text-muted font-normal">($14.40)</span></span>
                    </div>
                </div>

                <h3 className="font-bold text-lg mb-4">Payment Method</h3>
                
                <div className="border border-primary rounded-xl p-4 shadow-sm mb-4 bg-indigo-50 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                        <CreditCard size={18} />
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-sm text-primary">Travel Wallet Balance</p>
                        <p className="text-xs text-primary font-mono">$450.00 <span className="opacity-70">(≈ ₹37,500)</span></p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-4 border-primary bg-white"></div>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 mb-8 flex items-center gap-3 opacity-50">
                    <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
                        <CreditCard size={18} />
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-sm text-gray-600">Add New Int. Card</p>
                        <p className="text-xs text-gray-500">2% markup fee</p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                </div>
            </div>

            <div className="fixed bottom-0 w-full max-w-[480px] bg-white border-t p-4 z-50">
                <button 
                   onClick={handlePay}
                   disabled={status === 'processing'}
                   className={`btn btn-primary w-full py-3 text-lg transition-all ${status==='processing'?'opacity-70':''}`}
                >
                    {status === 'processing' ? 'Processing UPI Request...' : 'Pay $14.40 Securely'}
                </button>
            </div>
        </div>
    );
}
