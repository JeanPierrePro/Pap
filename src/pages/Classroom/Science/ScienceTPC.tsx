import { Sidebar } from "../../../components/Sidebar";
import { AlertCircle, ChevronLeft, Send, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";

export function ScienceTPC() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-blue-100">
          <Link to="/home" className="text-slate-300"><ChevronLeft /></Link>
          <h1 className="text-lg font-black text-slate-800 uppercase italic tracking-tighter flex items-center gap-2">
            <AlertCircle className="text-blue-600" /> Apoio a TPC / Pesquisa
          </h1>
          <div className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">IA Assistente</div>
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-white rounded-[45px] border border-slate-100 p-8 flex flex-col">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Área de Pesquisa / Enunciado</h2>
            <textarea className="flex-1 bg-slate-50 rounded-[30px] p-6 outline-none resize-none text-slate-600 border-none" placeholder="Cole aqui o seu trabalho de casa para resolvermos juntos..." />
          </section>

          <section className="lg:col-span-5 bg-blue-600 rounded-[45px] flex flex-col shadow-xl">
             <div className="p-6 text-white/90 text-sm leading-relaxed flex-1">
                <Sparkles size={24} className="mb-4 opacity-50" />
                "Vou te ajudar a estruturar esse trabalho de Ciências. O que você já tem de informação?"
             </div>
             <div className="p-6 bg-white/10 flex gap-2">
                <input className="flex-1 bg-white/20 border-none p-4 rounded-2xl text-white placeholder:text-white/50 outline-none" placeholder="Perguntar ao Bio..." />
                <button className="bg-white text-blue-600 p-4 rounded-xl"><Send size={18}/></button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}