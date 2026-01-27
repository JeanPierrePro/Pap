import { Sidebar } from "../../../components/Sidebar";
import { HelpCircle, ChevronLeft, Send, Book } from 'lucide-react';
import { Link } from "react-router-dom";

export function PortDuvidas() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-blue-100 text-blue-600">
          <Link to="/home" className="text-slate-300"><ChevronLeft /></Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter flex items-center gap-2">
            <HelpCircle /> Aprender Português
          </h1>
          <Book size={24} />
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-blue-50 rounded-[45px] p-10 flex flex-col items-center justify-center border border-blue-100 text-center">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-sm">
                <Book size={40} />
             </div>
             <h2 className="text-2xl font-black text-blue-900 mb-4 italic uppercase">Lumina: Letras e Textos</h2>
             <p className="text-blue-700/60 max-w-sm font-medium italic">Tire dúvidas sobre gramática, interpretação ou redação com nossa IA especializada.</p>
          </section>

          <section className="lg:col-span-5 bg-[#111] rounded-[45px] flex flex-col overflow-hidden shadow-2xl">
             <div className="flex-1 p-6 overflow-y-auto">
                <div className="bg-white/5 p-4 rounded-2xl text-white/60 text-xs italic mb-4">
                  Olá! Sou a Lumina. Qual a sua dúvida sobre a língua portuguesa hoje?
                </div>
             </div>
             <div className="p-6 bg-white/5 flex gap-2 border-t border-white/10">
                <input className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-blue-500 transition-all font-medium" placeholder="Ex: O que é adjunto adnominal?" />
                <button className="bg-blue-600 p-4 rounded-xl text-white hover:bg-blue-500 transition-colors"><Send size={18}/></button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}