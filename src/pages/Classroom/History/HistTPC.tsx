import { Sidebar } from "../../../components/Sidebar";
import { AlertCircle, ChevronLeft, Send, ScrollText, Search } from 'lucide-react';
import { Link } from "react-router-dom";

export function HistTPC() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-orange-100 shadow-sm">
          <Link to="/home" className="text-slate-300 hover:text-orange-600 transition-colors"><ChevronLeft /></Link>
          <h1 className="text-lg font-black text-slate-800 uppercase italic tracking-tighter flex items-center gap-2">
            <AlertCircle className="text-orange-600" /> História: Apoio e Pesquisa
          </h1>
          <div className="bg-orange-50 text-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase">Assistente Chronos</div>
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-white rounded-[45px] border border-slate-100 p-8 flex flex-col">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">Fonte de Pesquisa / Rascunho</h2>
            <textarea 
              className="flex-1 bg-orange-50/30 rounded-[30px] p-8 outline-none border-none text-slate-700 font-serif text-lg resize-none leading-relaxed" 
              placeholder="Cole o tema do seu trabalho ou a pergunta da pesquisa aqui..." 
            />
          </section>

          <section className="lg:col-span-5 bg-orange-600 rounded-[45px] flex flex-col shadow-2xl overflow-hidden border border-white/10">
            <div className="p-8 flex-1 text-white/90 space-y-4">
              <Search className="text-orange-200" size={32} />
              <h3 className="text-2xl font-black italic uppercase">Chronos: Modo Pesquisa</h3>
              <p className="text-sm font-medium opacity-80 italic">"Diga-me o evento ou período. Vou te ajudar a reunir os fatos e estruturar seu trabalho de casa agora."</p>
            </div>
            <div className="p-6 bg-white/10 flex gap-2 backdrop-blur-md">
              <input className="flex-1 bg-white/20 border-none p-4 rounded-2xl text-white placeholder:text-white/40 outline-none" placeholder="O que vamos pesquisar?" />
              <button className="bg-white text-orange-600 p-4 rounded-xl hover:scale-105 transition-all"><Send size={18}/></button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}