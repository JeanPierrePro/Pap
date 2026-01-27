import { useState } from "react";
import { Sidebar } from "../../../components/Sidebar";
import { Calculator, Send, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function MathDuvidas() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { role: 'ai', text: 'Olá Jean! Estou pronto para resolver equações ou explicar conceitos de lógica. O que vamos estudar?' }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setChat([...chat, { role: 'user', text: message }]);
    setMessage("");
  };

  return (
    <div className="flex min-h-screen bg-[#FBFDFF] text-slate-700">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen">
        
        <header className="p-8 border-b border-slate-50 bg-white flex items-center gap-4">
          <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 shadow-inner">
            <Calculator size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black italic uppercase tracking-tighter">Logos: Sala de Matemática</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Resolução Assistida por IA</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {chat.map((msg, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              key={index} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[80%] p-6 rounded-[30px] flex gap-4 ${
                msg.role === 'ai' ? 'bg-white border border-slate-100 shadow-sm' : 'bg-slate-900 text-white shadow-xl shadow-slate-200'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'ai' ? 'bg-red-50 text-red-500' : 'bg-white/10 text-white'
                }`}>
                  {msg.role === 'ai' ? <Sparkles size={16} /> : <User size={16} />}
                </div>
                <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="p-8 bg-white border-t border-slate-50">
          <div className="max-w-4xl mx-auto relative">
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida ou cole uma equação aqui..."
              className="w-full bg-slate-50 border border-slate-100 p-6 rounded-[30px] pr-20 focus:outline-none focus:border-red-200 focus:bg-white transition-all text-sm font-medium shadow-inner"
            />
            <button 
              onClick={handleSend}
              className="absolute right-3 top-3 bottom-3 px-6 bg-slate-900 text-white rounded-2xl hover:bg-black transition-all flex items-center gap-2 font-black text-[10px] uppercase tracking-widest"
            >
              <Send size={14} /> Enviar
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}