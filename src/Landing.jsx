import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Tag, ArrowRight, Smartphone, Sparkles, Navigation } from 'lucide-react';
import './Landing.css';

const BentoCard = ({ icon: Icon, title, desc, color, size = "small", delay }) => (
    <div className={`bento-card ${size} slide-up ${delay}`}>
        <div className="bento-icon-wrapper" style={{ background: color }}>
            <Icon size={24} color="#fff" strokeWidth={2.5} />
        </div>
        <h3 className="bento-title">{title}</h3>
        <p className="bento-desc">{desc}</p>
    </div>
);

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <div className="landing-glow"></div>
            <div className="landing-glow-2"></div>

            <div className="landing-content">
                <div className="hero-pill fade-in">
                    <Sparkles size={16} color="#818cf8" />
                    <span>Travelos Premium</span>
                </div>
                
                <h1 className="hero-title slide-up">
                    The Unified Travel OS for <span className="text-gradient">India</span>.
                </h1>
                
                <p className="hero-subtitle slide-up delay-1">
                    India doesn't have a single app for this. We built it. Pay seamlessly with Visa/Mastercard, book everything, and avoid tourist traps.
                </p>

                <div className="bento-grid">
                    <BentoCard 
                        size="large"
                        icon={Smartphone}
                        title="Seamless UPI Wallet"
                        desc="Load funds securely via Visa/Mastercard. Scan any local UPI QR code to pay street vendors instantly. No Indian bank account required. Fully abstracted payment bridge."
                        color="linear-gradient(135deg, #FF6B6B, #FF8E53)"
                        delay="delay-2"
                    />
                    
                    <BentoCard 
                        size="small"
                        icon={Navigation}
                        title="Book Everything"
                        desc="Search flights, IRCTC trains, luxury hotels & cab aggregators."
                        color="linear-gradient(135deg, #4ECDC4, #556270)"
                        delay="delay-3"
                    />

                    <BentoCard 
                        size="small"
                        icon={Tag}
                        title="Scam Protection"
                        desc="Our Fair Price Guide ensures you never get ripped off again."
                        color="linear-gradient(135deg, #F9D423, #FF4E50)"
                        delay="delay-4"
                    />

                    <BentoCard 
                        size="small"
                        icon={ShieldAlert}
                        title="24/7 SOS & Safety"
                        desc="Instantly dial police, embassy, or women's safety helplines."
                        color="linear-gradient(135deg, #FF416C, #FF4B2B)"
                        delay="delay-5"
                    />
                </div>
            </div>

            <div className="bottom-cta transition-all">
                <button 
                    onClick={() => navigate('/explore')}
                    className="gradient-btn slide-up delay-4"
                >
                    Launch Super App <ArrowRight size={24} strokeWidth={3} />
                </button>
            </div>
        </div>
    );
}
