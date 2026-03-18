import React, { useState } from 'react';
import { CreditCard, QrCode, PlusCircle, ArrowRightLeft, History } from 'lucide-react';

export default function WalletView() {
  const [balance, setBalance] = useState(450.00);

  const handleAddFunds = () => {
      alert("Mock Payment Gateway: Adding $100 via Visa/Mastercard...");
      setBalance(b => b + 100);
  };

  const handleScanPay = () => {
      alert("Mock Camera: Simulating scanning a local vendor's UPI QR code...\nDeducting ₹500 INR (~$6.00 USD)");
      setBalance(b => b - 6.00);
  };

  return (
    <div className="pb-10">
      <div 
        className="p-6 text-white" 
        style={{ 
          background: 'var(--text-primary)',
          borderBottomLeftRadius: '2rem',
          borderBottomRightRadius: '2rem'
        }}
      >
        <h1 className="text-2xl font-bold mb-6">Your Wallet</h1>
        
        <div className="text-center mb-6">
            <p className="text-sm opacity-80 uppercase tracking-widest mb-1">Available Balance</p>
            <h2 className="text-5xl font-mono font-bold">${balance.toFixed(2)}</h2>
            <p className="text-success mt-2 font-medium">≈ ₹{(balance * 83.33).toLocaleString('en-IN', {maximumFractionDigits: 0})} INR</p>
        </div>

        <div className="flex gap-4 mb-4">
            <button 
                onClick={handleAddFunds}
                className="btn btn-primary flex-1 flex-col items-center gap-2" 
                style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
                <PlusCircle size={24} />
                <span className="text-sm">Load Funds</span>
            </button>
            <button 
                onClick={handleScanPay}
                className="btn btn-primary flex-1 flex-col items-center gap-2" 
                style={{ padding: '1rem', background: 'var(--primary)', border: '1px solid var(--primary-light)' }}
            >
                <QrCode size={24} />
                <span className="text-sm">Scan UPI QR</span>
            </button>
        </div>
      </div>

      <div className="p-6">
          <h3 className="font-bold text-lg mb-4">Linked Cards</h3>
          <div className="glass-panel p-4 flex items-center gap-4 mb-6">
              <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center text-white text-xs font-bold font-italic">
                  VISA
              </div>
              <div className="flex-1">
                  <p className="font-medium">Chase Sapphire</p>
                  <p className="text-xs text-muted">•••• •••• •••• 4242</p>
              </div>
              <button className="text-primary text-sm font-medium">Change</button>
          </div>

          <h3 className="font-bold text-lg mb-4 flex justify-between items-center">
              <span>Recent Transactions</span>
              <History size={18} className="text-muted" />
          </h3>
          
          <div className="space-y-4">
              <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                          <ArrowRightLeft size={18} />
                      </div>
                      <div>
                          <p className="font-medium text-sm">Chai Vendor (UPI)</p>
                          <p className="text-xs text-muted">Today, 10:45 AM</p>
                      </div>
                  </div>
                  <div className="text-right">
                      <p className="font-bold text-sm">-$0.50</p>
                      <p className="text-xs text-muted">₹40.00</p>
                  </div>
              </div>

              <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <PlusCircle size={18} />
                      </div>
                      <div>
                          <p className="font-medium text-sm">Loaded via Visa</p>
                          <p className="text-xs text-muted">Yesterday</p>
                      </div>
                  </div>
                  <div className="text-right">
                      <p className="font-bold text-sm text-success">+$100.00</p>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}
