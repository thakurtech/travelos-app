import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Namaste! I am your AI Travel Guide. Need help with translations, local customs, or booking a train?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        
        const newMsg = { role: 'user', text: input };
        setMessages([...messages, newMsg]);
        setInput('');

        // Mock bot response
        setTimeout(() => {
            const botReply = { role: 'bot', text: `Here is some information about "${newMsg.text}". Let me know if you want me to book that for you!` };
            setMessages(prev => [...prev, botReply]);
        }, 1000);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(236,72,153,0.5)] hover:scale-110 transition-transform z-50 animate-bounce"
                >
                    <MessageSquare size={28} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 sm:right-6 w-[90%] sm:w-96 bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden z-50 flex flex-col animate-slide-up" style={{ height: '500px', maxHeight: '70vh' }}>
                    
                    {/* Header */}
                    <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <Bot size={24} />
                            <div>
                                <h3 className="font-bold text-sm">Travelos AI</h3>
                                <p className="text-xs opacity-80">Online & ready to help</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full text-white transition">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Message Area */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-br-none' 
                                    : 'bg-white shadow-sm border border-gray-100 text-gray-800 rounded-bl-none'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                        <input 
                            type="text" 
                            className="flex-1 bg-gray-100/50 border-none rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Ask me anything..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white hover:opacity-90 transition shadow-md shrink-0">
                            <Send size={18} style={{ marginLeft: '2px' }} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
