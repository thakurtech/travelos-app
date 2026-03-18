import React from 'react';
import { Phone, ShieldAlert, HeartPulse, Building2 } from 'lucide-react';

const EmergencyCard = ({ title, number, icon: Icon, color }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm border text-center transition active:scale-95" style={{ borderColor: `${color}30` }}>
        <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3" style={{ background: `${color}15`, color: color }}>
            <Icon size={24} />
        </div>
        <p className="font-bold text-sm text-gray-800">{title}</p>
        <a href={`tel:${number}`} className="text-lg font-mono font-bold mt-1 block" style={{ color: color }}>
            {number}
        </a>
    </div>
);

export default function SOS() {
  return (
    <div className="p-6 pb-20 animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <ShieldAlert size={20} />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Emergency & SOS</h1>
                <p className="text-sm text-muted">Help is always available.</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
            <EmergencyCard title="Police" number="100" icon={ShieldAlert} color="var(--danger)" />
            <EmergencyCard title="Ambulance" number="102" icon={HeartPulse} color="var(--primary)" />
            <EmergencyCard title="Tourist Helpline" number="1363" icon={Phone} color="var(--success)" />
            <EmergencyCard title="Women Helpline" number="1091" icon={Phone} color="#db2777" />
        </div>

        <div className="glass-panel p-4">
            <h3 className="font-bold flex items-center gap-2 mb-4">
                <Building2 size={18} className="text-muted" />
                Embassy Information
            </h3>
            
            <p className="text-sm text-muted mb-4">
                If you have lost your passport or need official assistance from your home country, please locate your nearest embassy in New Delhi.
            </p>

            <button className="btn btn-secondary w-full text-sm">
                Find My Embassy
            </button>
        </div>
        
        <div className="mt-8 p-4 rounded-xl bg-gray-900 text-white flex justify-between items-center shadow-lg">
             <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Your Location (Mock)</p>
                <p className="font-bold">Connaught Place, New Delhi</p>
             </div>
             <button className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-bold shadow-sm">
                 Share
             </button>
        </div>
    </div>
  );
}
