import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Compass, Wallet, Tag, ShieldAlert } from 'lucide-react';
import './index.css';

// Import Components
import Home from './Home.jsx';
import WalletView from './WalletView.jsx';
import FairPrice from './FairPrice.jsx';
import SOS from './SOS.jsx';
import SearchResults from './SearchResults.jsx';
import Checkout from './Checkout.jsx';
import Landing from './Landing.jsx';
import Chatbot from './Chatbot.jsx';
import Translate from './Translate.jsx';

function App() {
  return (
    <Router>
      <div className="container" style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
        
        {/* Main Content Area */}
        <main style={{ paddingBottom: '80px' }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/explore" element={<Home />} />
            <Route path="/wallet" element={<WalletView />} />
            <Route path="/price" element={<FairPrice />} />
            <Route path="/sos" element={<SOS />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/translate" element={<Translate />} />
          </Routes>
        </main>

        {/* Global Navigation (Responsive Desktop Top / Mobile Bottom) */}
        <nav 
            className="fixed bottom-0 w-full bg-[var(--surface)] border-t border-[var(--surface-alt)] flex justify-center gap-8 py-3 z-50 transition-transform shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        >
          <Link to="/" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>
            <Compass size={24} />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link to="/explore" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform" style={{ textDecoration: 'none', color: 'var(--primary)' }}>
            <Compass size={24} />
            <span className="text-sm font-medium">Book</span>
          </Link>
          <Link to="/wallet" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>
            <Wallet size={24} />
            <span className="text-sm font-medium">Wallet</span>
          </Link>
          <Link to="/price" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>
            <Tag size={24} />
            <span className="text-sm font-medium">Prices</span>
          </Link>
          <Link to="/sos" className="flex flex-col items-center gap-1 hover:scale-110 transition-transform" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>
            <ShieldAlert size={24} />
            <span className="text-xs font-medium">SOS</span>
          </Link>
        </nav>

        {/* Global Chatbot */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
