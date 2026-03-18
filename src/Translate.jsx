import React, { useState, useEffect } from 'react';
import { Camera, RefreshCw, X, Type, ArrowLeftRight, ChevronLeft, ScanLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Translate() {
    const navigate = useNavigate();
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState(null);

    const handleScan = () => {
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            setResult("नमस्ते जी, ऑटो कहाँ मिलेगा? (Hello sir, where can I find an auto-rickshaw?)");
        }, 2500);
    };

    return (
        <div className="min-h-screen bg-[#050505] font-sans pb-24 flex flex-col">
            {/* Header */}
            <div className="p-6 text-white flex justify-between items-center z-10 relative">
                <button onClick={() => navigate('/explore')} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                    <ChevronLeft size={24} />
                </button>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <span className="font-bold text-sm">HINDI</span>
                    <ArrowLeftRight size={14} className="opacity-50" />
                    <span className="font-bold text-sm text-indigo-400">ENGLISH</span>
                </div>
                <button className="hover:bg-white/10 p-2 rounded-full transition-colors">
                    <Type size={20} />
                </button>
            </div>

            {/* Viewfinder Area */}
            <div className="flex-1 relative overflow-hidden flex flex-col justify-end px-6 pb-8">
                {/* Simulated Camera Feed (Dark Blur Background) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-black z-0"></div>
                
                {/* Floating Blobs for Sci-Fi Effect */}
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>

                {/* The Scanner Bracket */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-sm aspect-[3/4] border-2 border-white/20 rounded-[2.5rem] flex items-center justify-center p-4">
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-indigo-500 rounded-tl-[2.2rem]"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-indigo-500 rounded-tr-[2.2rem]"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-indigo-500 rounded-bl-[2.2rem]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-indigo-500 rounded-br-[2.2rem]"></div>

                    {scanning && (
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-500 shadow-[0_0_20px_#6366f1,0_0_40px_#6366f1] animate-[scan_2s_ease-in-out_infinite]"></div>
                    )}

                    {/* Fake text to "scan" */}
                    <div className={`transition-all duration-1000 ${scanning ? 'blur-sm scale-105 opacity-80' : 'opacity-30'}`}>
                        <div className="w-3/4 h-4 bg-white/20 rounded mb-4 mx-auto"></div>
                        <div className="w-full h-4 bg-white/20 rounded mb-4 mx-auto"></div>
                        <div className="w-5/6 h-4 bg-white/20 rounded mx-auto"></div>
                    </div>
                </div>

                {/* Result Modal */}
                {result && !scanning && (
                    <div className="relative z-20 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-slide-up mx-auto max-w-sm w-full mb-8">
                        <div className="flex justify-between items-start mb-4">
                            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider">Translation Found</span>
                            <button onClick={() => setResult(null)} className="opacity-50 hover:opacity-100"><X size={18} /></button>
                        </div>
                        <p className="text-xl font-medium leading-relaxed mb-2 text-white/90">
                            Hello sir, where can I find an auto-rickshaw?
                        </p>
                        <p className="text-sm font-semibold text-indigo-400 mt-4 border-t border-white/10 pt-4 flex items-center gap-2">
                            <RefreshCw size={14} /> Tap text to hear audio
                        </p>
                    </div>
                )}

                {/* Controls */}
                <div className="relative z-20 flex justify-center mt-auto">
                    <button 
                        onClick={handleScan}
                        disabled={scanning}
                        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                            scanning 
                            ? 'bg-indigo-600 scale-90 border-4 border-indigo-800' 
                            : 'bg-white hover:bg-gray-100 border-4 border-gray-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                        }`}
                    >
                        {scanning ? <ScanLine size={32} className="text-white animate-pulse" /> : <Camera size={32} className="text-gray-900" />}
                    </button>
                </div>
                <p className="text-center text-white/50 text-xs font-medium mt-6 relative z-20 uppercase tracking-widest">
                    {scanning ? 'Analyzing text...' : 'Point at signs or menus'}
                </p>

            </div>
            
            {/* CSS Animation defined locally for convenience */}
            <style jsx="true">{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
}
