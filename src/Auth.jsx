import React, { useState } from 'react';
import { Mail, ShieldCheck } from 'lucide-react';

export default function Auth({ onLogin }) {
  const [step, setStep] = useState('email'); // 'email' or 'otp'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if(email) setStep('otp');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if(otp === '1234') {
        onLogin();
    } else {
        alert("Use 1234 for demo OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 h-[80vh] animate-fade-in">
      <div className="w-full max-w-sm glass-panel p-8 text-center">
        <div className="w-16 h-16 bg-[var(--primary-light)] text-[var(--primary-dark)] rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={32} />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Secure Travel Wallet</h1>
        <p className="text-muted text-sm mb-8">Access your funds and bookings securely while in India.</p>

        {step === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 text-left">
                <div>
                    <label className="text-sm font-medium mb-1 block">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-muted" size={18} />
                        <input 
                            type="email" 
                            required 
                            className="w-full border rounded-lg p-2 pl-10 outline-none focus:border-[var(--primary)]" 
                            placeholder="alex@example.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center mt-2">
                    Send OTP
                </button>
            </form>
        ) : (
            <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4 text-left animate-slide-up">
                <div>
                    <label className="text-sm font-medium mb-1 block">Enter OTP Code</label>
                    <p className="text-xs text-muted mb-3">Sent to {email}</p>
                    <input 
                        type="text" 
                        required 
                        maxLength={4}
                        className="w-full border rounded-lg p-2 text-center text-xl tracking-widest outline-none focus:border-[var(--primary)]" 
                        placeholder="••••"
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                    />
                     <p className="text-xs text-muted mt-2 text-center">Demo: enter 1234</p>
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center mt-2">
                    Verify & Login
                </button>
                <button type="button" onClick={() => setStep('email')} className="btn btn-secondary w-full justify-center mt-2">
                    Back
                </button>
            </form>
        )}
      </div>
    </div>
  );
}
