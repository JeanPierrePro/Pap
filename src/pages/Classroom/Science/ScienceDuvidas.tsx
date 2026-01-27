import { Sidebar } from "../../../components/Sidebar";
import { HelpCircle, ChevronLeft, Send, FlaskConical } from 'lucide-react';
import { Link } from "react-router-dom";

export function ScienceDuvidas() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-emerald-100 text-emerald-600">
          <Link to="/home" className="text-slate-300"><ChevronLeft /></Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter flex items-center gap-2">
            <HelpCircle /> Aprender Ciências
          </h1>
          <FlaskConical size={24} />
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-emerald-50 rounded-[45px] p-10 flex flex-col items-center justify-center border border-emerald-100 text-center">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                <FlaskConical size={40} />
             </div>
             <h2 className="text-2xl font-black text-emerald-900 mb-4 italic uppercase">Bio: Laboratório e Reações</h2>
             <p className="text-emerald-700/60 max-w-sm font-medium italic">Dúvidas sobre o corpo humano, plantas ou física? Vamos pesquisar juntos.</p>
          </section>

          <section className="lg:col-span-5 bg-[#111] rounded-[45px] flex flex-col overflow-hidden shadow-2xl">
             <div className="flex-1 p-6 overflow-y-auto">
                <div className="bg-white/5 p-4 rounded-2xl text-white/60 text-xs italic mb-4">
                  Olá! Sou o Bio. Qual mistério da ciência vamos resolver hoje?
                </div>
             </div>
             <div className="p-6 bg-white/5 flex gap-2 border-t border-white/10">
                <input className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-emerald-500 transition-all font-medium" placeholder="Ex: Como funciona a fotossíntese?" />
                <button className="bg-emerald-600 p-4 rounded-xl text-white hover:bg-emerald-500 transition-colors"><Send size={18}/></button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}